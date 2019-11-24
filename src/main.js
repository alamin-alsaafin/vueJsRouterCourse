import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import HomePage from "./components/HomePage"
import AboutPage from "./components/AboutPage"
import UsersPage from "./components/UsersPage"
import UsersHomePage from "./components/users/UsersHomePage"
import NotFoundPage from "./components/NotFoundPage"
import routes from "./routes"

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
	mode : "history",
	routes : routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
