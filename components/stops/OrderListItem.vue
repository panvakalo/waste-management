<template>
  <div
    class="
      p-4
      border border-1
      flex-col
      sm:flex-row
      flex
      justify-between
      rounded
    "
    :class="{ 'border-green-400': order.status === 4 }"
  >
    <div class="flex mb-3 sm:mb-0">
      <div class="flex flex-col mr-3">
        <span class="font-bold">Stream:</span>
        <span class="font-bold">Type:</span>
        <span class="font-bold">Size:</span>
        <span class="font-bold">Quantity:</span>
        <span class="font-bold">Status:</span>
      </div>
      <div class="flex flex-col">
        <span>{{ order.stream_type }}</span>
        <span class="flex items-center">
          <OutboundIcon v-if="order.type" />
          <InboundIcon v-else />
          <span class="ml-2">{{ orderTypeMap[order.type] }}</span>
        </span>
        <span>{{ order.size }}</span>
        <span>{{ order.quantity }}</span>
        <span :class="statusColor">{{ statusMap[order.status] }}</span>
      </div>
    </div>
    <div class="flex">
      <EditIcon
        size="25"
        class="fill-current text-yellow-500 cursor-pointer"
        :class="{ 'mr-5': !isCompleted }"
        @click.native="showModal()"
      />
      <CheckIcon
        v-if="!isCompleted"
        size="25"
        class="fill-current text-green-400 cursor-pointer"
        @click.native="completeOrder(order.order_id)"
      />
    </div>
    <t-modal
      v-model="isModalVisible"
      :header="streamName"
      :classes="modalClasses"
    >
      <IssueReporter
        :order-type="order.type"
        :order-quantity="order.quantity"
      />
      <template #footer>
        <div class="flex justify-between">
          <button class="btn text-red-400" @click="closeModal()">Cancel</button>
          <button class="btn text-green-400">Submit</button>
        </div>
      </template>
    </t-modal>
  </div>
</template>

<script lang="ts">
import {
  Vue,
  Component,
  Prop,
  Inject,
  namespace,
} from 'nuxt-property-decorator'
import { TModal } from 'vue-tailwind/dist/components'
import { Order, OrderStatusPayload } from '~/lib/interfaces/Order'
import { StatusMap } from '~/lib/maps/StatusMap'
import { OrderTypeMap } from '~/lib/maps/OrderMaps'
import { CodeType } from '~/lib/interfaces/CodeType'
import EditIcon from '~/components/svg/EditIcon.vue'
import CheckIcon from '~/components/svg/CheckIcon.vue'
import InboundIcon from '~/components/svg/InboundIcon.vue'
import OutboundIcon from '~/components/svg/OutboundIcon.vue'
import IssueReporter from '~/components/stops/IssueReporter.vue'
import { ModalClasses } from '~/lib/componentClasses/modal.classes'

const stopStore = namespace('stopStore')

@Component({
  components: {
    EditIcon,
    CheckIcon,
    InboundIcon,
    OutboundIcon,
    TModal,
    IssueReporter,
  },
})
export default class OrderListItem extends Vue {
  @Prop() readonly order!: Order
  @Inject() readonly streamName!: string
  @Inject() readonly stopId!: number

  @stopStore.Mutation
  public setOrderStatus!: (orderStatusPayload: OrderStatusPayload) => void

  private statusMap: CodeType = StatusMap
  private orderTypeMap: CodeType = OrderTypeMap
  private isModalVisible: boolean = false
  private modalClasses = {
    ...ModalClasses,
    header: 'border-b p-3 rounded-t bg-green-400 text-white',
  }

  get statusColor(): string {
    switch (this.order.status) {
      case 4:
        return 'text-green-400'
      case 1:
      case 2:
        return 'text-yellow-500'
      default:
        return 'text-seenons-black'
    }
  }

  get isCompleted(): boolean {
    return this.order.status === 4
  }

  showModal() {
    this.isModalVisible = true
  }

  closeModal() {
    this.isModalVisible = false
  }

  completeOrder(id: string) {
    this.setOrderStatus({ stopId: this.stopId, orderId: id, status: 4 })
  }
}
</script>
