<template>
  <Bloks :bloks="story.content.bloks" />
</template>

<script>

export default {
  async asyncData ({ $storyblok }) {
    const data = await $storyblok.getCurrentStory()

    if (data) {
      return {
        story: data.story
      }
    } else {
      console.error('data seems to be empty')
    }
  }
}

</script>

<style lang="postcss" scoped>

</style>
