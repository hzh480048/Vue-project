<template>
	<div>
		<cmtbox :id='$route.params.id'></cmtbox>
	</div>
</template>

<script>
	import cmtbox from '../sbucomponents/comment.vue'
	export default{
		components:{
			cmtbox
		}
	}
</script>

<style>
</style>