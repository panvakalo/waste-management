<template>
  <div>
    <Dashboard />
    <StopList :stops="stops" />
  </div>
</template>

<script lang="ts">
import { Vue, Component, namespace } from 'nuxt-property-decorator'
import { Context } from '@nuxt/types'
import Dashboard from '~/components/dashboard/Dashboard.vue'
import StopList from '~/components/stops/StopList.vue'
import { Stop } from '~/lib/interfaces/Stop'

const stopStore = namespace('stopStore')

@Component({
  layout: 'default',
  components: {
    Dashboard,
    StopList,
  },
})
export default class IndexPage extends Vue {
  @stopStore.Mutation
  public setStops!: (stops: Stop[]) => void

  @stopStore.State
  public stops!: Stop[]

  async asyncData({ $axios, $config: { API_URL }, store }: Context) {
    try {
      const response = await $axios.$get(API_URL + '/stops')
      store.commit('stopStore/setStops', response)
    } catch (error) {
      console.error(error)
      store.commit('stopStore/setStops', [])
    }
  }
}
</script>
