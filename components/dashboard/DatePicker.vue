<template>
  <div
    class="
      rounded
      border border-white
      shadow-lg
      flex
      align-items-center
      justify-items-center
      px-3
    "
  >
    <input
      v-model="currentDate"
      type="date"
      class="text-white bg-transparent"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
@Component
export default class DatePicker extends Vue {
  private today: Date = new Date()
  private currentDate: string = String(this.today.toISOString().split('T')[0])
}
</script>
