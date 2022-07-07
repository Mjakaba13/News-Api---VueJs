<template>
  <nav>
    <img src="@/assets/logo1.svg" alt="">
    <div class="links">

      <router-link to="/">Global</router-link>
      <router-link to="/technews">Technology</router-link>
      <router-link to="/businessnews">Business</router-link>
      <router-link to="/healthnews">Health</router-link>
    </div>
    <button> Menu <img src="@/assets/ri-menu-line.svg" alt=""></button>

  </nav>
  <router-view />
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Public Sans', sans-serif;
}

button {
  display: flex;
  align-items: center;
  background-color: #ffff;
  border: none;
  gap: 16px;
  font-family: 'Public Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;

  color: #000000;
}

.links {
  display: flex;
  gap: 50px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  display: flex;
  align-items: center;
  padding: 30px;
  justify-content: space-between;
  /* background-color: #2c3e50; */
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
