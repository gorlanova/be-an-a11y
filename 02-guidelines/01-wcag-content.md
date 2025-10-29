# WCAG Content

<script setup>
  import Details from '../components/details.vue';
  import { Container, Title, Tag, Text, Button, Label, Link, Icon, Feedback, Code, Input } from '@owlabio/minuit';
  import { guidelines } from '../guidelines';
  import { computed, ref } from 'vue';

  const tagColors = {
    A: 'emerald',
    AA: 'teal',
    AAA: 'cyan',
    easy: 'lime',
    normal: 'amber',
    hard: 'red',
    design: 'fuchsia',
    content: 'violet',
    code: 'blue',
  }

  const filter = ref({
    search: '',
    levels: [],
    difficulties: [],
    teams: [],
  });

  const currentHighlight = computed(() => {
    const hash = window.location.hash;
    return hash ? hash.split('#')[1] : null;
  });
  
  const filteredGuidelines = computed(() => {
    return guidelines.map(principle => ({
      ...principle,
      children: principle.children.map(guideline => ({
        ...guideline,
        children: guideline.children.filter(criterion => {
          const matchesSearch = filter.value.search ?
            criterion.label.toLowerCase().includes(filter.value.search.toLowerCase()) ||
            criterion.content.goal.toLowerCase().includes(filter.value.search.toLowerCase()) ||
            criterion.content.description.toLowerCase().includes(filter.value.search.toLowerCase()) ||
            criterion.content.descriptionList.some(item => item.toLowerCase().includes(filter.value.search.toLowerCase())) ||
            criterion.content.examples.some(example => example.toLowerCase().includes(filter.value.search.toLowerCase())) ||
            criterion.content.methods.some(method => method.toLowerCase().includes(filter.value.search.toLowerCase())) ||
            criterion.content.resources.some(resource => resource.label.toLowerCase().includes(filter.value.search.toLowerCase())) :
            true;
          
          const hasLevel = !filter.value.levels.length || filter.value.levels.includes(criterion.level);
          const hasDifficulty = !filter.value.difficulties.length || filter.value.difficulties.includes(criterion.difficulty);
          const hasTeam = !filter.value.teams.length || filter.value.teams.some(team => criterion.teams.includes(team));
          return matchesSearch && hasLevel && hasDifficulty && hasTeam;
        }),
      })).filter(guideline => guideline.children.length > 0),
    })).filter(principle => principle.children.length > 0);
  });

  const numberOfDisplayedCriteria = computed(() => {
    return filteredGuidelines.value.reduce((acc, principle) => {
      return acc + principle.children.reduce((acc, guideline) => {
        return acc + guideline.children.length;
      }, 0);
    }, 0);
  });

  function updateFilter(type, value) {
    if (filter.value[type].includes(value)) {
      filter.value[type] = filter.value[type].filter(item => item !== value);
    } else {
      filter.value[type].push(value);
    }
  }

  function resetFilter() {
    filter.value = {
      search: '',
      levels: [],
      difficulties: [],
      teams: [],
    };
  }
</script>

## Filters

<div class="vp-raw">
  <Container class="filters-header" flow="row-between">
    <Text muted>Number of criteria displayed with the current filters: {{ numberOfDisplayedCriteria }}/87</Text>
    <Button label="Reset" @click="resetFilter" variant="border" :disabled="!filter.search && !filter.levels.length && !filter.difficulties.length && !filter.teams.length" />
  </Container>
  <Container class="filters" flow="row" gap="var(--size-4)">
    <!-- Search -->
    <Input class="filters-search" label="search" type="search" v-model="filter.search" />
    <!-- Teams -->
    <Container flow="row" gap="var(--size-3-5)">
      <Title tag="h3" class="filters-label">Teams</Title>
      <Container flow="row" gap="var(--size-2-5)">
        <Button label="design" @click="updateFilter('teams', 'design')" :aria-pressed="filter.teams.includes('design')">
          <Tag class="tag-team" label="design" :color="tagColors['design']" />
        </Button>
        <Button label="content" @click="updateFilter('teams', 'content')" :aria-pressed="filter.teams.includes('content')">
          <Tag class="tag-team" label="content" :color="tagColors['content']" />
        </Button>
        <Button label="code" @click="updateFilter('teams', 'code')" :aria-pressed="filter.teams.includes('code')">
          <Tag class="tag-team" label="code" :color="tagColors['code']" />
        </Button>
      </Container>
    </Container>
    <!-- Difficulty -->
    <Container flow="row" gap="var(--size-3-5)">
      <Title tag="h3" class="filters-label">Difficulty</Title>
      <Container flow="row" gap="var(--size-2-5)">
        <Button label="easy" @click="updateFilter('difficulties', 'easy')" :aria-pressed="filter.difficulties.includes('easy')">
          <Tag class="tag-difficulty" label="easy" :color="tagColors['easy']" />
        </Button>
        <Button label="normal" @click="updateFilter('difficulties', 'normal')" :aria-pressed="filter.difficulties.includes('normal')">
          <Tag class="tag-difficulty" label="normal" :color="tagColors['normal']" />
        </Button>
        <Button label="hard" @click="updateFilter('difficulties', 'hard')" :aria-pressed="filter.difficulties.includes('hard')">
          <Tag class="tag-difficulty" label="hard" :color="tagColors['hard']" />
        </Button>
      </Container>
    </Container>
    <!-- Levels -->
    <Container flow="row" gap="var(--size-3-5)">
      <Title tag="h3" class="filters-label">Level</Title>
      <Container flow="row" gap="var(--size-2-5)">
        <Button label="A" @click="updateFilter('levels', 'A')" :aria-pressed="filter.levels.includes('A')">
          <Tag class="tag-level" label="A" :color="tagColors['A']" />
        </Button>
        <Button label="AA" @click="updateFilter('levels', 'AA')" :aria-pressed="filter.levels.includes('AA')">
          <Tag class="tag-level" label="AA" :color="tagColors['AA']" />
        </Button>
        <Button label="AAA" @click="updateFilter('levels', 'AAA')" :aria-pressed="filter.levels.includes('AAA')">
          <Tag class="tag-level" label="AAA" :color="tagColors['AAA']" />
        </Button>
      </Container>
    </Container>
  </Container>
</div>

## List

<div class="vp-raw">
  <Text v-if="!filteredGuidelines.length" muted>No criterion could match your filters</Text>

  <Container v-else tag="ol">
    <Container tag="li" v-for="principle in filteredGuidelines" :key="principle.label">
      <!-- Principle -->
      <Title tag="h3" :id="principle.label">{{ principle.label }}</Title>
      <Container tag="ol">
        <Container tag="li" v-for="guideline in principle.children" :key="guideline.label">
          <!-- Guideline -->
          <Container flow="grid-center" columns="1fr auto">
            <Title tag="h4" :id="guideline.label">{{ guideline.label }}</Title>
            <Link :label="`Understanding ${guideline.label}`" icon="far circle-info" labelless variant="border" :path="guideline.documentation" target="_blank" />
          </Container>
          <Text class="guideline-description" muted>{{ guideline.description }}</Text>
          <Container tag="ol">
            <Container tag="li" v-for="criterion in guideline.children" :key="criterion.label">
              <!-- Criterion -->
              <Details side="end">
                <template #summary>
                  <Container class="criterion-summary" flow="grid-center" columns="1fr auto auto auto" gap="var(--size-2-5)">
                    <Title tag="h5" :id="criterion.label.split(' - ')?.[0]" :class="{'-highlight': criterion.label.split(' - ')?.[0] === currentHighlight}">{{ criterion.label }}</Title>
                    <Container flow="row" gap="var(--size-2-5)">
                      <Tag v-for="team in criterion.teams" class="tag-team" :label="team" :color="tagColors[team]" />
                    </Container>
                    <Tag class="tag-difficulty" :label="criterion.difficulty" :color="tagColors[criterion.difficulty]" />
                    <Tag class="tag-level" :label="criterion.level" :color="tagColors[criterion.level]" />
                  </Container>
                </template>
                <template #content>
                  <Feedback v-if="criterion.content.warning" type="warning" :message="criterion.content.warning" wide />
                  <!-- Goal -->
                  <Container flow="grid-center" columns="1fr auto">
                    <Text muted>{{ criterion.content.goal }}</Text>
                    <Link :label="`Understanding ${criterion.label}`" icon="far circle-info" labelless variant="border" :path="criterion.content.documentation" target="_blank" />
                  </Container>
                  <!-- Description -->
                  <Container class="criterion-section" flow="row" gap="var(--size-2-5)">
                    <Icon icon="book" />
                    <Title tag="h6">Description</Title>
                  </Container>
                  <Text v-if="criterion.content.description">{{ criterion.content.description }}</Text>
                  <Container tag="ul" v-if="criterion.content.descriptionList.length" class="criterion-list" gap="var(--size-2-5)">
                    <Container tag="li" v-for="(item, index) in criterion.content.descriptionList" :key="index" flow="grid" columns="auto 1fr" gap="var(--size-2-5)">
                      <Icon icon="arrow-right" />
                      <Text v-html="item" />
                    </Container>
                  </Container>
                  <!-- Examples -->
                  <Container v-if="criterion.content.examples.length" class="criterion-section" flow="row" gap="var(--size-2-5)">
                    <Icon icon="eyes" />
                    <Title tag="h6">Examples</Title>
                  </Container>
                  <Container tag="ul" v-if="criterion.content.examples.length" class="criterion-list" gap="var(--size-2-5)">
                    <Container tag="li" v-for="(item, index) in criterion.content.examples" :key="index" flow="grid" columns="auto 1fr" gap="var(--size-2-5)">
                      <Icon icon="arrow-right" />
                      <Text v-html="item" />
                    </Container>
                  </Container>
                  <!-- How to implement -->
                  <Container v-if="criterion.content.methods.length" class="criterion-section" flow="row" gap="var(--size-2-5)">
                    <Icon icon="wand-magic-sparkles" />
                    <Title tag="h6">How to implement</Title>
                  </Container>
                  <Container tag="ul" v-if="criterion.content.methods.length" class="criterion-list" gap="var(--size-2-5)">
                    <Container tag="li" v-for="(item, index) in criterion.content.methods" :key="index" flow="grid" columns="auto 1fr" gap="var(--size-2-5)">
                      <Icon icon="arrow-right" />
                      <Text v-html="item" />
                    </Container>
                  </Container>
                  <!-- Resources -->
                  <Container v-if="criterion.content.resources.length" class="criterion-section" flow="row" gap="var(--size-2-5)">
                    <Icon icon="glasses" />
                    <Title tag="h6">Resources</Title>
                  </Container>
                  <Container tag="ul" v-if="criterion.content.resources.length" class="criterion-list" gap="var(--size-2-5)">
                    <Container tag="li" v-for="(item, index) in criterion.content.resources" :key="index" flow="grid" columns="auto 1fr" gap="var(--size-2-5)">
                      <Icon icon="arrow-right" />
                      <Link :label="item.label" :path="item.path" color="neutral" inline target="_blank" />
                    </Container>
                  </Container>
                </template>
              </Details>
            </Container>
          </Container>
        </Container>
      </Container>
    </Container>
  </Container>
</div>
