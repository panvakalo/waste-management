<template>
  <a :href="googleLink" class="h-full" target="_blank">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      :fill="fillColor"
      viewBox="0 0 16 16"
    >
      <path
        d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
      />
    </svg>
  </a>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
@Component
export default class LocationIcon extends Vue {
  @Prop({ default: '#fff' }) readonly fillColor!: string
  @Prop({ default: '' }) readonly lat!: number
  @Prop({ default: '' }) readonly lon!: number

  get googleLink(): string {
    return `https://maps.google.com/?q=${this.lat},${this.lon}`
  }
}
</script>
