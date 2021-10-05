import { Module, VuexModule, Mutation } from 'vuex-module-decorators'
import { Stop } from '~/lib/interfaces/Stop'
import { OrderStatusPayload } from '~/lib/interfaces/Order'

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

  @Mutation
  setOrderStatus(payload: OrderStatusPayload) {
    const tempStopsArray = [...this.stops]
    const stopIndex = tempStopsArray.findIndex(
      (stop) => stop.stop_id === payload.stopId
    )
    const orderIndex = tempStopsArray[stopIndex].orders.findIndex(
      (order) => order.order_id === payload.orderId
    )
    tempStopsArray[stopIndex].orders[orderIndex].status = payload.status
    this.stops = tempStopsArray
  }
}
