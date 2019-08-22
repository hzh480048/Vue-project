<template>
	<div>
		<mt-swipe :auto="4000">
		  <mt-swipe-item v-for="item in lunbotuList" :key='item.id'>
		  	<img :src="item.img" :class="{full:isfull}"/>
		  </mt-swipe-item>
		</mt-swipe>	
	</div>
</template>

<script>
	export default{
		props:['lunbotuList','isfull']
	}
</script>

<style>
.mint-swipe{
	height: 13em !important;
		text-align: center;
}
.mint-swipe-item img{
/*	width: 100%;*/
	height: 100%;

}
.full{
	width: 100%;
}
</style>