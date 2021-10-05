<template>
  <Collapse class="mb-4">
    <template #collapse-title>
      <div class="flex justify-between">
        {{ stop.name }}
        <div class="flex">
          <TelephoneIcon
            v-if="stop.telephone"
            fill-color="#1AA290"
            size="25"
            :phone-number="stop.telephone"
          />
          <LocationIcon
            class="ml-5"
            fill-color="#F87171"
            :lon="stop.address.lon"
            :lat="stop.address.lat"
          />
        </div>
      </div>
    </template>
    <template #collapse-content>
      <AddressBlock
        :address="stop.address"
        :phone-number="stop.telephone"
        class="mb-3"
      />
      <OrderList :orders="stop.orders" />
    </template>
  </Collapse>
</template>

<script lang="ts">
import { Vue, Component, Prop, Provide } from 'nuxt-property-decorator'
import { Stop } from '~/lib/interfaces/Stop'
import Collapse from '~/components/generic/Collapse.vue'
import OrderList from '~/components/stops/OrderList.vue'
import LocationIcon from '~/components/svg/LocationIcon.vue'
import TelephoneIcon from '~/components/svg/TelephoneIcon.vue'
import AddressBlock from '~/components/stops/AddressBlock.vue'

@Component({
  components: {
    Collapse,
    OrderList,
    LocationIcon,
    TelephoneIcon,
    AddressBlock,
  },
})
export default class StopListItem extends Vue {
  @Prop() readonly stop!: Stop
  @Provide() streamName = this.stop.name
  @Provide() stopId = this.stop.stop_id
}
</script>
