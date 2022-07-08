<template>
    <header v-for="head in heading" :key="head">
        <div class="heroImage"><img :src="head.urlToImage" /></div>
        <div class="text">
            <a :href="head.url" target="_blank">
                <h1>{{ head.title }}</h1>
                <p class="date">{{ longDate(head.publishedAt) }} . <span> 7 mins. read</span></p>
                <p class="author">Author: {{ head.author }}</p>
            </a>
        </div>

    </header>
</template>
<script>
export default {
    name: "HeadlineNav",
    props: ["heading"],
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
};
</script>
<style scoped>
.date {
    font-family: "Public Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #ffffff;
    margin-top: 16px;
    margin-bottom: 38px;
}

.author {
    font-family: "Public Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 150%;
    color: #ffffff;
}

.text {
    padding: 148px 0px 53px 200px;
    left: 0px;
    background: #6b0b5b;
    text-align: left;
    margin-top: 369px;
    margin-bottom: 96px;
}

a {
    text-decoration: none;
}

h1 {
    font-family: "Public Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 130%;
    letter-spacing: -0.02em;
    color: #ffffff;
    width: 537px;
}

p {
    font-family: "Public Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #ffffff;
}

.heroImage {
    height: 400px;
    width: 966px;
    position: absolute;
    top: 148px;
    left: 200px;
    border-radius: 8px;

}

.heroImage img {
    width: 966px;
    height: 400px;
    object-fit: fill;
    border-radius: 8px;
}
</style>
