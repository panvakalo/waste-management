<template>
  <div>
    <Dashboard />
    <StopList :stops="stops" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { Context } from '@nuxt/types'
import Dashboard from '~/components/dashboard/Dashboard.vue'
import StopList from '~/components/stops/StopList.vue'
@Component({
  layout: 'default',
  components: {
    Dashboard,
    StopList,
  },
})
export default class IndexPage extends Vue {
  async asyncData({ $axios, $config: { API_URL } }: Context) {
    try {
      const response = await $axios.$get(API_URL + '/stops')
      return {
        stops: response,
      }
    } catch (error) {
      console.error(error)
      return {
        stops: [],
      }
    }
  }
}
</script>
