<template>
	<header>
		<nav>
			<router-link v-for="(route,index) in routes" :to="route.path" :key="index">{{route.name}}</router-link>
		</nav>
	</header>
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
  			},
			{
				path:'/model',
				id:'model',
				name:'模型示例'
			}
  		]
  	}
  }
}
</script>
<style scoped>
	header{
		width:100%;
		height:3.5rem;
		position: fixed;
		top:0;
		left:0;
	}
</style>