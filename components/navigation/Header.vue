<template>
  <div class="flex justify-between items-center mb-3">
    <LogoIcon />
    <MenuIcon class="fill-current text-white" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import LogoIcon from '~/components/svg/LogoIcon.vue'
import MenuIcon from '~/components/svg/MenuIcon.vue'
@Component({
  components: {
    LogoIcon,
    MenuIcon,
  },
})
export default class Header extends Vue {}
</script>
