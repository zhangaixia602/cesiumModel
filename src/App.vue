<template>
	<nav>
		<router-link v-for="(route,index) in routes" :to="route.path" :key="index">{{route.id}}</router-link>
	</nav>
  <router-view/>
</template>
<script>
export default {
  name: 'App',
  data() {
  	return {
  		routes: [{
  				path: '/',
  				id: 'home',
  				name: '首页'
  			},
  			{
  				path: '/about',
  				id: 'about',
  				name: '关于我们'
  			}
  		]
  	}
  }
}
</script>