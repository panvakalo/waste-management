<template>
  <div class="flex mb-4 justify-between h-10">
    <ExpandAllButton />
    <DatePicker />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import DatePicker from '~/components/dashboard/DatePicker.vue'
import ExpandAllButton from '~/components/dashboard/ExpandAllButton.vue'
@Component({
  components: {
    DatePicker,
    ExpandAllButton,
  },
})
export default class Dashboard extends Vue {}
</script>
