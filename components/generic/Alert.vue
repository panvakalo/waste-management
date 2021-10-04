<template>
  <div class="card">
    {{ message }}
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
@Component
export default class Alert extends Vue {
  @Prop({ default: 'Oeps! Something went wrong!' }) readonly message!: string
}
</script>
