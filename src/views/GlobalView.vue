<template>
    <input type="text" placeholder="search" v-model="searchWord">
    <headed :heading="filteredHead"></headed>

    <cards :carder="filtered"></cards>
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
    data: () => ({
        searchWord: ""

    }),
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
        },
        filtered() {
            if (this.searchWord) {
                const flip = this.globalNews.filter((con) =>
                    con.description.toLowerCase().includes(this.searchWord.toLowerCase())
                );
                return flip.slice(1, 10)

            } else {
                return this.globalNewsSlice;
            }
        },
        filteredHead() {
            if (this.searchWord) {
                const gala = this.globalNews.filter((head) =>
                    head.description.toLowerCase().includes(this.searchWord.toLowerCase())
                );
                return gala.slice(0, 1)

            } else {
                return this.globalN;
            }
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
input {
    position: absolute;
    width: 300px;
    z-index: 3;
    padding: 10px 5px;
    top: 90px;
    /* margin-bottom: 25px; */
    /* margin-top: 25px; */
    display: flex;
    margin-left: 200px;
    border-radius: 8px;
    border: none;
    box-shadow: 5px 5px 5px 3px rgb(214, 208, 208);
}
</style>
