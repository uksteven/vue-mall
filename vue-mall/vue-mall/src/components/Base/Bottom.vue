<template>
	<div class="nav-bottom">
		<router-link to="/index">
			<i class="icon iconfont">&#xe80f;</i>
			<label>首页</label>
		</router-link>
		<router-link to="/list">
			<i class="icon iconfont">&#xe639;</i>
			<label>列表</label>
		</router-link>
		<router-link to="cart">
			<i class="icon iconfont">&#xe728;</i>
			<label>购物车</label>
		</router-link>
		<router-link to="user">
			<i class="icon iconfont">&#xe80f;</i>
			<label>我的</label>
		</router-link>
	</div>
</template>
<script>
	
</script>
<style>
@import '../../assets/css/iconfont.css';

.nav-bottom {
    height: 38px;
    position: fixed;
    bottom: 0;
    background: #fff;
    border-top: 1px solid #f4f4f4;
    width: 100%;
    padding-bottom: 0px;
    font-size: .2rem;
    text-align: center;
    padding-top: 3px;
   /* line-height: 50px;*/
   /*margin-top: 10px;m*/
}
.nav-bottom label {
    display: block;
    margin-top: 1px;
}
.nav-bottom  a {
    display: inline-block;
    width: 25%;
    float: left;

}
.active{
	color: red;
}

</style>