<template>
    <headed :heading="healthN"></headed>

    <cards :carder="healthNewsSlice"></cards>

</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import headed from '@/components/Headline.vue'
import cards from '@/components/Cards.vue'

import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'HealthView',
    components: { headed, cards },

    // components: {
    //   HelloWorld
    // }
    async mounted() {
        await this.getAllCategoryNews('health')
    },
    computed: {
        ...mapGetters({
            categoryNews: "getCategoryNews"
        }),
        healthNewsSlice() {
            return this.categoryNews.slice(1, 13)
        },
        healthN() {
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
<style scoped>
img {
    width: 400px;
}
</style>
