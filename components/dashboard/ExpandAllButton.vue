<template>
  <button
    class="
      btn
      text-white
      border-white border
      rounded
      justify-center
      align-items-center
      px-3
      shadow-lg
    "
    @click="toggleAllStatus()"
  >
    {{ buttonText }}
  </button>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
@Component
export default class ExpandAllButton extends Vue {
  private allExpanded = false

  get buttonText(): string {
    return this.allExpanded ? 'Collapse All' : 'Expand All'
  }

  toggleAllStatus() {
    const eventToEmit = this.allExpanded ? 'collapse-all' : 'expand-all'
    this.allExpanded = !this.allExpanded
    this.$nuxt.$emit(eventToEmit)
  }
}
</script>
