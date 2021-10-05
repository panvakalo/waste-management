import { Module, VuexModule, Mutation } from 'vuex-module-decorators'
import { Stop } from '~/lib/interfaces/Stop'

@Module({
  namespaced: true,
  name: 'stopStore',
  stateFactory: true,
})
export default class stopStore extends VuexModule {
  stops: Stop[] = []

  @Mutation
  setStops(stops: Stop[]) {
    this.stops = stops
  }
}
