<template>
  <div>
    <h3 class="mb-2 font-bold">Report Issue</h3>
    <t-select placeholder="Select an issue" :options="issueList"></t-select>
    <h3 class="font-bold my-2">
      {{ `Edit quantity that was ${orderTypeText}` }}
    </h3>
    <t-input type="number" :value="orderQuantity" name="order-quantity" />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import { TSelect, TInput } from 'vue-tailwind/dist/components'

interface Issue {
  id: number
  text: string
}

@Component({
  components: {
    TSelect,
    TInput,
  },
})
export default class IssueReporter extends Vue {
  @Prop({ default: 0 }) readonly orderType!: number
  @Prop({ default: 0 }) readonly orderQuantity!: number

  private issueList: Issue[] = [
    {
      id: 1,
      text: 'wrongly quantity ordered',
    },
    {
      id: 2,
      text: 'wrong container type',
    },
    {
      id: 3,
      text: 'container not accessible',
    },
    {
      id: 0,
      text: 'other',
    },
  ]

  get orderTypeText(): string {
    return this.orderType ? 'dropped off' : 'picked up'
  }
}
</script>
