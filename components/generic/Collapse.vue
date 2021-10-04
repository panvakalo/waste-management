<template>
  <div class="collapse">
    <div
      class="collapse__title"
      :class="{ 'rounded-b': !active }"
      @click="toggleActive()"
    >
      <slot name="collapse-title" />
    </div>
    <div v-show="active" class="collapse__content">
      <slot name="collapse-content" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
@Component
export default class Collapse extends Vue {
  private active = false

  toggleActive(): void {
    this.active = !this.active
  }

  created() {
    this.$nuxt.$on('expand-all', () => {
      this.active = true
    })
    this.$nuxt.$on('collapse-all', () => {
      this.active = false
    })
  }

  beforeDestroy() {
    this.$nuxt.$off('expand-all')
    this.$nuxt.$off('collapse-all')
  }
}
</script>
