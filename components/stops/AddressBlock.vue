<template>
  <div>
    <div class="flex mb-2">
      <HouseIcon fill-color="#4B5352" class="mr-3" />
      <div class="flex flex-col">
        <span> {{ address.street }} {{ address.house_number }}</span>
        <span
          >{{ address.town }} {{ address.postal_code }}
          {{ address.country }}
        </span>
      </div>
    </div>
    <div v-if="phoneNumber" class="flex">
      <TelephoneIcon fill-color="#4B5352" size="23" class="mr-3" />
      <span>{{ phoneNumber }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import { Address } from '~/lib/interfaces/Address'
import HouseIcon from '~/components/svg/HouseIcon.vue'
import TelephoneIcon from '~/components/svg/TelephoneIcon.vue'

@Component({
  components: {
    HouseIcon,
    TelephoneIcon,
  },
})
export default class AddressBlock extends Vue {
  @Prop({ default: () => {} }) readonly address!: Address
  @Prop({ default: null }) readonly phoneNumber!: number
}
</script>
