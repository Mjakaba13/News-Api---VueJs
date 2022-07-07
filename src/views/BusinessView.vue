<template>
    <headed :heading="businessN"></headed>

    <cards :carder="businessNewsSlice"></cards>

</template>

<script>
import headed from '@/components/Headline.vue'
import cards from '@/components/Cards.vue'

import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'BusinessView',
    components: { headed, cards },


    async mounted() {
        await this.getAllCategoryNews('business')
    },
    computed: {
        ...mapGetters({
            categoryNews: "getCategoryNews"
        }),
        businessNewsSlice() {
            return this.categoryNews.slice(1, 13)
        },
        businessN() {
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