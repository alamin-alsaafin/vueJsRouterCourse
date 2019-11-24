<template>
	<ul class="nav nav-pills">
	  <li class="nav-item">
	    <router-link class="nav-link" active-class="active" exact :to="{name :'home'}">Home</router-link>
	  </li>
	  <li class="nav-item">
	    <router-link class="nav-link" active-class="active" :to="{name : 'about',query : {q:1,name:'test2'}}">About</router-link>
	  </li>
	  <li class="nav-item">
	    <router-link class="nav-link" active-class="active" to="/users?q=1&name=test">Users</router-link>
	  </li>
	</ul>
</template>

<script type="text/javascript">
	export default{

	}
</script>