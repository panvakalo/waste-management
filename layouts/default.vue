<template>
  <div class="bg--seenons min-h-screen py-3">
    <div class="container">
      <Header />
      <Nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Header from '~/components/navigation/Header.vue'

@Component({
  components: {
    Header,
  },
})
export default class DefaultLayout extends Vue {}
</script>
