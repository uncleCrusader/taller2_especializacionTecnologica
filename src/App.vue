<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light" style="bg-color: #1d2f3f;">
    <div class="container-fluid">
      <a class="navbar-brand">
        <img src="./assets/vuejs_plain_logo_icon_146302.png" class="d-inline-block align-top" alt="Kitten">
        Vuetify</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link to="/" class="nav-link" aria-current="page">Popular</router-link>
          <router-link to="/toprated" class="nav-link">Top rated</router-link>
        </div>
      </div>
    </div>
  </nav>
  <div class="container" style="background-color:#ffffff;height:auto">
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
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}

.navbar-nav {
  color: rgb(255, 255, 255);
}

.navbar-collapse {
  flex-grow: 0;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
