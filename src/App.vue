<template>
  <div id="app">
  	<Navbar/>
  	<router-view></router-view>
  </div>
</template>

<script>

import HomePage from "./components/HomePage"
import AboutPage from "./components/AboutPage"
import Navbar from "./components/Navbar"
import UsersPage from "./components/UsersPage"
export default {
  components: {
   HomePage,
   AboutPage,
   Navbar,
   UsersPage
  }
}

</script>

<style>

</style>
