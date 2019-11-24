import HomePage from "./components/HomePage"
import AboutPage from "./components/AboutPage"
import UsersPage from "./components/UsersPage"
import UsersHomePage from "./components/users/UsersHomePage"
import NotFoundPage from "./components/NotFoundPage"
const routes = 
[
		{
			path : "/",
			component : HomePage,
			name : "home"
		},
		{
			path : "/about",
			component : AboutPage,
			name : "about"
		},
		{
			path : "/users",
			component : UsersPage,
			children : [
				{
					path: "/users/UsersHomePage",
					component : UsersHomePage
				}
			]
		},
		{
			path : "*",
			/*redirect : "/"*/
			component : NotFoundPage
		}
	
]

export default routes;