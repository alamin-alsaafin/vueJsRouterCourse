<template>
	<div id="about">
		<h1>Welcome to about page</h1>
		<button @click="goToHome">Go To Home Page after 1 sec</button>
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
		methods : 
		{
			goToHome :function () {
			var mythis = this;
			setTimeout(function(){ 
				mythis.$router.push({ path: '/' })
			 }, 1000);
		}
		}
	}
</script>