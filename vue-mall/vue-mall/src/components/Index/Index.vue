<template>
	<div>
		<home-header textname="首页"></home-header>
		Index组件
		<Bottom></Bottom>
	</div>
</template>
<script>
	import HomeHeader from './pages/Header.vue';
	import Bottom from '../Base/Bottom.vue';
	export default{
		name:'Index',
		data(){
			return {

			}
		},
		//注册组件
		components:{
			HomeHeader,
			Bottom
		}
	}
</script>
<style>
	
</style>