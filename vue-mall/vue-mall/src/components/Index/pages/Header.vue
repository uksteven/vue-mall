<template>
	<div class="header">
		{{textname}}
	</div>
</template>
<script>
	
	export default{
		name:'Header',
		props:['textname'],
		data(){
			return {

			}
		},
		mounted(){
			console.log(this.textname)
		}
	};
</script>
<style scoped>
	.header{
		width:100%;
		height: .8rem;
		background: #3180E5;
		line-height: .8rem;
		font-size: .4rem;
		text-align: center;
		color:#fff;
	}
</style>