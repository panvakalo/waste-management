<template>
  <div>
    <div v-for="order in orders" :key="order.order_id" class="mb-3 last:mb-0">
      <OrderListItem :order="order" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import { Order } from '~/lib/interfaces/Order'
import OrderListItem from '~/components/stops/OrderListItem.vue'

@Component({
  components: {
    OrderListItem,
  },
})
export default class OrderList extends Vue {
  @Prop() readonly orders!: Order[]
}
</script>
