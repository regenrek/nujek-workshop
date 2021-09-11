<template>
  <div class="bg-blue-200 flex">
    <div>NUJEK</div>
    <ul>
      <li v-for="(item, index) in header" :key="index">
        <nuxt-link :to="getCorrectLink(item.link)">
          {{ item.label }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      header: {}
    }
  },
  async fetch () {
    const headerData = await this.$storyapi.getStory('header', {
      resolve_links: 'url'
    })

    if (headerData) {
      this.header = headerData.data.story.content.navigation.map((item) => {
        return {
          label: item.label,
          link: item.link
        }
      })
    }
  },
  methods: {
    getCorrectLink (link) {
      if (link.linktype === 'story') {
        return link.story.full_slug
      } else if (link.linktype === 'url') {
        return link.url
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
