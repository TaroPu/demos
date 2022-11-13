<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
<!--    内容区-->
    <div>
      <router-view/>
    </div>
  </div>
</template>

<style>
body {
  font-size: 62.5%;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #e2e582;
  width: 100vw;
  min-height: 100vh;

}

nav {
  padding: 30px;
  font-size: 2.4564rem;
  background: linear-gradient(to right,yellow, green, yellow);

}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #e2f345;
}
</style>
