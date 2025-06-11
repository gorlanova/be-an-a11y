# Be an a11y Structure

<script setup>
  import Details from '../components/details.vue';
  import { Container, Title, Tag, Text, Button, Link, Icon } from '@owlabio/minuit';

  const tagColors = {
    design: 'fuchsia',
    content: 'violet',
    code: 'blue',
    easy: 'lime',
    normal: 'amber',
    hard: 'red',
    A: 'emerald',
    AA: 'teal',
    AAA: 'cyan',
  }
</script>

This documentation provides an interactive list of the WCAG guidelines, with categories, filters and complementary resources. It is designed to make the guidelines easier to browse and understand. It is not a replacement for the official documentation, but a nice companion.

## How I present the guidelines

The list of guidelines will follow the _Principle > Guideline > Criterion_ structure of the WCAG, and each criterion will display color-coded tags for the team involved, the difficulty to implement and the level of conformance. You will be able to filter the list with these tags. You can expand each criterion to access a detailed description, examples, and methods to implement it.

<!-- @TODO: explain tags -->

<div class="vp-raw">
  <Container gap="var(--size-8)">
    <Container>
      <Title tag="h3" class="filters-label">Teams</Title>
      <Container tag="ul" class="tags-info-list">
        <Container tag="li" flow="grid" columns="auto 1fr">
          <Tag class="tag-team" label="design" :color="tagColors['design']" />
          <Text muted>The criterion affects how the page or its element look and behave</Text>
        </Container>
        <Container tag="li" flow="grid" columns="auto 1fr">
          <Tag class="tag-team" label="content" :color="tagColors['content']" />
          <Text muted>The criterion affects text or media content</Text>
        </Container>
        <Container tag="li" flow="grid" columns="auto 1fr">
          <Tag class="tag-team" label="code" :color="tagColors['code']" />
          <Text muted>The criterion affects how to code the page or its elements</Text>
        </Container>
      </Container>
    </Container>
    <Container>
      <Title tag="h3" class="filters-label">Difficulty</Title>
      <Container tag="ul" class="tags-info-list">
        <Container tag="li" flow="grid" columns="auto 1fr">
          <Tag class="tag-difficulty" label="easy" :color="tagColors['easy']" />
          <Text muted>Implementation does not require technical skills and should not take long</Text>
        </Container>
        <Container tag="li" flow="grid" columns="auto 1fr">
          <Tag class="tag-difficulty" label="normal" :color="tagColors['normal']" />
          <Text muted>Implementation requires some technical skills or some extra time</Text>
        </Container>
        <Container tag="li" flow="grid" columns="auto 1fr">
          <Tag class="tag-difficulty" label="hard" :color="tagColors['hard']" />
          <Text muted>Implementation requires advanced technical skills or a lot of extra time</Text>
        </Container>
      </Container>
    </Container>
    <Container>
    <Title tag="h3" class="filters-label">Level</Title>
      <Container tag="ul" class="tags-info-list">
        <Container tag="li" flow="grid" columns="auto 1fr">
          <Tag class="tag-level" label="A" :color="tagColors['A']" />
          <Text muted>Base level - Must be implemented</Text>
        </Container>
        <Container tag="li" flow="grid" columns="auto 1fr">
          <Tag class="tag-level" label="AA" :color="tagColors['AA']" />
          <Text muted>Target level - Must be implemented</Text>
        </Container>
        <Container tag="li" flow="grid" columns="auto 1fr">
          <Tag class="tag-level" label="AAA" :color="tagColors['AAA']" />
          <Text muted>Extra level - You should try to bag them, but it is not required</Text>
        </Container>
      </Container>
    </Container>
  </Container>
</div>

## Example

<div class="vp-raw">
  <Container tag="ol">
    <Container tag="li">
      <!-- Principle -->
      <Title tag="h3">X - Principle</Title>
      <Container tag="ol">
        <Container tag="li">
          <!-- Guideline -->
          <Container flow="grid-center" columns="1fr auto">
            <Title tag="h4">X.Y - Guideline</Title>
            <Link label="Understanding X.Y - Guideline" icon="far circle-info" labelless variant="border" path="#" />
          </Container>
          <Text class="guideline-description" muted>Guideline description</Text>
          <Container tag="ol">
            <Container tag="li">
              <!-- Criterion -->
              <Details side="end">
                <template #summary>
                  <Container class="criterion-summary" flow="grid-center" columns="1fr auto auto auto" gap="var(--size-2-5)">
                    <Title tag="h5">X.Y.Z - Criterion</Title>
                    <Container flow="row" gap="var(--size-2-5)">
                      <Tag class="tag-team" label="Team" color="fuchsia" />
                    </Container>
                    <Tag class="tag-difficulty" label="Difficulty" color="amber" />
                    <Tag class="tag-level" label="Level" color="emerald" />
                  </Container>
                </template>
                <template #content>
                  <!-- Goal -->
                  <Container flow="grid-center" columns="1fr auto">
                    <Text muted>Goal</Text>
                    <Link label="Understanding X.Y.Z - Criterion" icon="far circle-info" labelless variant="border" path="#" />
                  </Container>
                  <!-- Description -->
                  <Container class="criterion-section" flow="row" gap="var(--size-2-5)">
                    <Icon icon="book" />
                    <Title tag="h6">Description</Title>
                  </Container>
                  <Text>Description</Text>
                  <!-- Examples -->
                  <Container class="criterion-section" flow="row" gap="var(--size-2-5)">
                    <Icon icon="eyes" />
                    <Title tag="h6">Examples</Title>
                  </Container>
                  <Container tag="ul" class="criterion-list" gap="var(--size-2-5)">
                    <Container tag="li" flow="grid" columns="auto 1fr" gap="var(--size-2-5)">
                      <Icon icon="arrow-right" />
                      <Text>Example</Text>
                    </Container>
                  </Container>
                  <!-- How to implement -->
                  <Container class="criterion-section" flow="row" gap="var(--size-2-5)">
                    <Icon icon="wand-magic-sparkles" />
                    <Title tag="h6">How to implement</Title>
                  </Container>
                  <Container tag="ul" class="criterion-list" gap="var(--size-2-5)">
                    <Container tag="li" flow="grid" columns="auto 1fr" gap="var(--size-2-5)">
                      <Icon icon="arrow-right" />
                      <Text>Method</Text>
                    </Container>
                  </Container>
                  <!-- Resources -->
                  <Container class="criterion-section" flow="row" gap="var(--size-2-5)">
                    <Icon icon="glasses" />
                    <Title tag="h6">Resources</Title>
                  </Container>
                  <Container tag="ul" class="criterion-list" gap="var(--size-2-5)">
                    <Container tag="li" flow="grid" columns="auto 1fr" gap="var(--size-2-5)">
                      <Icon icon="arrow-right" />
                      <Link label="Resource Link" path="#" color="neutral" inline  />
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
