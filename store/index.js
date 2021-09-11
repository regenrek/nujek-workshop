const actions = {
  async nuxtServerInit ({ dispatch }, ctx) {
    const headerData = await this.$storyapi.getStory('header', {
      resolve_links: 'url'
    })

    if (headerData) {
      dispatch('nav/setSettings', headerData.data.story.content)
      console.log('nuxtserverinit nav fetch', headerData.data.story.content)
    } else {
      console.log("sorry man we couldn't find any nav")
    }
  }
}

export {
  actions
}
