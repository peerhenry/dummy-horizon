<template>
  <div id="app">
    <div id="nav">
      <router-link class="navlink" :to="{ name: 'sun' }">Sun</router-link>
      <span>&nbsp;|&nbsp;</span>
      <router-link class="navlink" :to="{ name: 'phone' }">Phone</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
html,
body {
  margin: 0;
  width: 100%;
  height: 100%;
}

#app {
  font-family: 'Roboto Mono', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #222;
  background-color: rgb(252, 234, 229);
  width: 100%;
  height: 100%;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #222;
    &.router-link-exact-active {
      color: #222;
    }
  }
}

.navlink {
}
</style>
