<template>
	<div>
		<home-header textname="首页"></home-header>
		Index组件
	</div>
</template>
<script>
	import HomeHeader from './pages/Header.vue';
	export default{
		name:'Index',
		data(){
			return {

			}
		},
		//注册组件
		components:{
			HomeHeader
		}
	}
</script>
<style>
	
</style>