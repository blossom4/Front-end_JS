<template>
  <div id="app">
    <div id="nav" class="fs-3 d-flex justify-content-center">
      <!-- <router-link class="me-2 text-decoration-none" :to="{ name: 'Home' }">Home</router-link> |
      <router-link class="mx-2 text-decoration-none" :to="{ name: 'About' }">About</router-link> | -->
      <router-link class="mx-2 mt-5 text-decoration-none" :to="{ name: 'Diary' }">지윤's List ✔</router-link>
      <!-- <router-link class="ms-2 text-decoration-none" :to="{ name: 'Random' }">Random</router-link> -->
    </div>
    <router-view/>
  </div>
</template>

<style>
@font-face {
    font-family: 'Cafe24SsurroundAir';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/Cafe24SsurroundAir.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

body {
  font-family: 'Cafe24SsurroundAir';
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#violet {
  color: #BA55D3
}

#gray {
  color: #999999;
}

.btn-violet {
  border-color: #BA55D3
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #BA55D3;
}
</style>
