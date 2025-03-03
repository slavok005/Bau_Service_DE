<template>
  <h1>Bau_Service_DE</h1>
  <nav>
    <router-link to="/">Haus</router-link> |
    <router-link to="/services">Service</router-link> |
    <router-link to="/portfolio">Portfolio</router-link> |
    <router-link to="/contacts">Kontakte</router-link> |
    <router-link to="/about">Über uns</router-link>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: lightblue; /* Голубой фон */
}
h1 {
  font-size: 3rem;
  font-weight: bold;
  text-transform: uppercase;
  background: linear-gradient(90deg, black 33%, red 33%, red 66%, yellow 66%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 3px 3px 10px rgba(0, 0, 0, 0.7);
  display: inline-block;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
