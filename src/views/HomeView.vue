<!-- <template>
    <header :heading="bNews"></header>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import header from '@/components/Headline.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'GlobalView',
    components: { header },
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
        bNews() {
            return this.globalNews[0]
        }
    },
    methods: {
        ...mapActions({
            getAllGlobalNews: "getAllGlobalNews"
        })
    }
}
</script> -->
