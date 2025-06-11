<template>
  <details class="a11y-details" :open="open" @toggle="toggleIcon">
    <!-- ::: SUMMARY -->
    <summary class="a11y-details-summary">
      <Icon v-if="side === 'start'" color="accent" :icon="isOpen ? 'angle-down' : 'angle-right'" mirror />
      <div class="a11y-details-summary-content">
        <slot name="summary"></slot>
      </div>
      <Icon v-if="side === 'end'" color="accent" :icon="isOpen ? 'angle-up' : 'angle-down'" />
    </summary>

    <!-- ::: CONTENT -->
    <div class="a11y-details-content">
      <slot name="content"></slot>
    </div>
  </details>
</template>

<script setup>
import { ref, watch } from "vue";
import { Icon } from "@owlabio/minuit";

defineOptions({ name: "a11y-details" });

const props = defineProps({
  side: {
    type: String,
    default: "start",
    validator: (value) => ["start", "end"].includes(String(value)),
  },
  open: Boolean,
});

const isOpen = ref(props.open);

function toggleIcon() {
  isOpen.value = !isOpen.value;
}

watch(
  () => props.open,
  (newValue) => {
    isOpen.value = newValue;
  },
  { immediate: true }
);
</script>

<style scoped>
:where(.a11y-details) {
  width: 100%;
  border: 1px solid var(--border-neutral-muted);
  border-radius: var(--app-radius, var(--radius-soft));
  box-shadow: var(--box-shadow-2);
}

/* ::: SUMMARY */

:where(.a11y-details-summary) {
  width: 100%;
  display: flex;
  align-items: center;
  gap: var(--size-4);
  padding: var(--size-2) var(--size-4);
  border-radius: calc(var(--app-radius, var(--radius-soft)) - 1px);
  font-weight: 600;
}

:where(.a11y-details-summary:hover) {
  background-color: var(--filter-neutral);
}

:where(.a11y-details-summary)::-webkit-details-marker {
  display: none;
}

:where(.a11y-details[open] .a11y-details-summary) {
  border-end-start-radius: 0;
  border-end-end-radius: 0;
}

:where(.a11y-details-summary-content) {
  flex: 1;
}

/* ::: CONTENT */

:where(.a11y-details-content) {
  width: 100%;
  padding: var(--size-4);
  border-end-start-radius: calc(var(--app-radius, var(--radius-soft)) - 1px);
  border-end-end-radius: calc(var(--app-radius, var(--radius-soft)) - 1px);
  display: grid;
  gap: var(--size-4);
  transition: height 0.3s;
  overflow: clip;
}

:where(.a11y-details:not([open]) .a11y-details-content) {
  height: 0px;
}

:where(.a11y-details[open] .a11y-details-content) {
  height: auto;
}
</style>
