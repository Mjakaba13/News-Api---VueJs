<template>
    <h6>Articles</h6>
    <div class="wrap">
        <div v-for="con in carder" :key="con" class="orange">
            <a :href="con.url" target="_blank">
                <div class="mango">

                    <img :src="con.urlToImage" alt="">
                </div>
                <div class="egg">
                    <p id="title">{{ con.title }}</p>
                    <p id="time">{{ longDate(con.publishedAt) }}. <span> 7 mins read.</span> </p>
                    <p class="author">Author: {{ con.author }}</p>
                </div>
            </a>

        </div>
    </div>

</template>

<script>
export default {
    name: 'Cards',
    props: ['carder'],
    computed: {
        longDate() {
            return (newDate) => {
                let date = new Date(newDate);
                const month = date.toLocaleString('default', { month: 'long' });
                const day = date.toLocaleString('default', { weekday: 'long' });
                // (date.getMonth()+1)
                return month + ' ' + date.getDate() + ', ' + date.getFullYear();
            }
        }
    }
}
</script>

<style scoped>
.egg {
    padding-top: 16px;

}

.wrap {
    display: flex;
    flex-wrap: wrap;
    margin: 0 200px 0 200px;
    column-gap: 75px;
    padding-bottom: 254px;
}

a {
    text-decoration: none;
}

.orange {
    width: 264px;
    /* height: 296px; */
    padding-bottom: 35px;
}

#time {
    display: block;
    margin: 0 auto 0 auto;
}

.mango img {
    width: 264px;
    height: 168px;
    border-radius: 8px;
    /* background-color: #000000; */
    object-fit: fill;
}

#time {
    width: 197px;
    height: 21px;
    font-family: 'Public Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    margin-bottom: 11px;
    color: #000000;

}

.author {
    width: 264px;
    height: 18px;
    font-family: 'Public Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 130%;
    letter-spacing: -0.02em;
    color: #000000;
}

#title {
    width: 264px;
    height: 64px;
    font-family: 'Public Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 130%;
    letter-spacing: -0.02em;
    color: #000000;
    margin-top: 16px;
    margin-bottom: 16px;
}

h6 {
    width: 56px;
    height: 12px;
    padding-left: 200px;
    padding-bottom: 32px;
    font-family: 'Public Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
    display: flex;
    align-items: center;
    letter-spacing: 0.1em;
    color: #000000;
}
</style>