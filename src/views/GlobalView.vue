<template>
    <headed :heading="globalN"></headed>

    <cards :carder="globalNewsSlice"></cards>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import headed from '@/components/Headline.vue'
import cards from '@/components/Cards.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'GlobalView',
    components: { headed, cards },
    // components: {
    //   HelloWorld
    // }
    async mounted() {
        await this.getAllGlobalNews()
    },
    computed: {
        ...mapGetters({
            globalNews: "getGlobalNews"
        }),
        globalNewsSlice() {
            return this.globalNews.slice(1, 10)
        },
        globalN() {
            return this.globalNews.slice(0, 1)
        }
    },
    methods: {
        ...mapActions({
            getAllGlobalNews: "getAllGlobalNews"
        })
    }
}
</script>
<style scoped>
</style>
