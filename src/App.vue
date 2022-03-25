<template>
  <div  class="h2 mb-0">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/boxOffice">BoxOffice</router-link> | 
      <router-link to="/boxOffice2">BoxOffice2</router-link> | 
      <router-link to="/boxOffice3">BoxOffice3</router-link>
    </nav>
    <router-view/>
  </div>
</template>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px; text-align: right; font-size: 11pt;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

</style>
