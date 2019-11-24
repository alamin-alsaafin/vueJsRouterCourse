<template>
	<div>
		<h1>Users</h1>
		<ul>
			<li>
				<router-link to="/users/UsersHomePage">User1</router-link>
			</li>
		</ul>
		<router-view></router-view>
		<p>
			Query Parameters : <br>
			q : {{$route.query.q}}
			<br>
			name : {{$route.query.name}}
		</p>
	</div>
</template>
<script type="text/javascript">
	export default {

	}
</script>