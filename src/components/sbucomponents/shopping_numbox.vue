<template>
	<div class="numbox-container">
				<div class="mui-numbox" data-numbox-min='1' data-numbox-step='1'>
					<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
					<input id="test" class="mui-input-numbox" type="number" value="1"  ref='numbox' @change="getnumbox" />
					<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
				</div>
	</div>
</template>

<script>
	import mui from '../../lib/js/mui.min.js'
	export default{
		mounted(){
			mui('.mui-numbox').numbox();
		},
		data(){
			return{}
		},
		methods:{
			getnumbox(){
				this.$emit('func',parseInt(this.$refs.numbox.value))
			}
		},
		watch:{
			max:function(newval,oldval){
				mui('.mui-numbox').numbox().setOption('max',newval)
			}
		},
		props:['max']
	}
</script>

<style scoped>
	.numbox-container{
		display: inline;
	}
</style>