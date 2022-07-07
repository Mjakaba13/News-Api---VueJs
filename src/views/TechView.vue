<template>
  <headed :heading="techN"></headed>
  <cards :carder="techNewsSlice"></cards>

</template>

<script>
import headed from '@/components/Headline.vue'
import cards from '@/components/Cards.vue'

import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'TechView',
  components: { headed, cards },


  async mounted() {
    await this.getAllCategoryNews('technology')
  },
  computed: {
    ...mapGetters({
      categoryNews: "getCategoryNews"
    }),
    techNewsSlice() {
      return this.categoryNews.slice(1, 13)
    },
    techN() {
      return this.categoryNews.slice(0, 1)
    }
  },
  methods: {
    ...mapActions({
      getAllCategoryNews: "getAllCategoryNews"
    })
  }
}
</script>

<style>
</style>