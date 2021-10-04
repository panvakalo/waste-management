<template>
  <div>
    <template v-if="stops.length">
      <StopListItem
        v-for="stop in stops"
        :key="stop.stop_id"
        :stop="stop"
        :stream-name="stop.name"
      />
    </template>
    <Alert v-else message="No stops were found for today" />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import { Stop } from '~/lib/interfaces/Stop'
import StopListItem from '~/components/stops/StopListItem.vue'
import Alert from '~/components/generic/Alert.vue'
@Component({
  components: {
    StopListItem,
    Alert,
  },
})
export default class StopList extends Vue {
  @Prop({ default: () => [] }) readonly stops!: Stop[]
}
</script>
