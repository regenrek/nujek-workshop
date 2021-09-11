<template>
  <div class="bg-blue-200 flex">
    <div>NUJEK</div>
    <NjNav>
      <template #burger-menu>
        <NjBurger :open.sync="isOpenBurger" :classes="{ wrapper: 'md:hidden', bar: 'bg-gray-800' }" />
      </template>

      <template #logo>
        <div class="flex flex-shrink-0 w-40 lg:w-48">
          <nuxt-link to="/" class="block">
            <img src="/logo.svg" alt="logo">
          </nuxt-link>
        </div>
      </template>

      <template #nav>
        <div
          class="flex flex-grow justify-end md:justify-between"
        >
          <!-- main nav desktop -->
          <NjNavItems v-slot="{ label, tag, linkTo }" :items="mainNavItems" class="hidden md:flex space-x-6">
            <NjNavItem
              :link-to="linkTo"
              :tag="tag"
              :label="label"
              class="cursor-pointer hover:text-gray-400"
            />
          </NjNavItems>
        </div>
      </template>
    </NjNav>
  </div>
</template>

<script>
import NjNavMixin from '~nujek-ui/mixins/nav-mixin'

export default {
  mixins: [NjNavMixin]
}
</script>

<style lang="scss" scoped>

</style>
