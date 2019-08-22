<template>
	<div class="goodsdesc_container">
		<h3>{{goodsdesc.title}}</h3>
		<hr />
		<div class="content" v-html="goodsdesc.content"></div>
			
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				id:this.$route.params.id,
				goodsdesc:{}
			}
		},
		created(){
			this.getdesc();
		},
		methods:{
			getdesc(){
				this.$http.get('api/goods/getdesc/'+this.id).then(result =>{
					this.goodsdesc = result.body.message[0]
				})
			}
		}
	}
</script>

<style>
	.goodsdesc_container{
		padding: 4px;
	}
	.goodsdesc_container h3{
		color: #226aff;
		font-size: 16px;
		text-align: center;
		margin: 15px 0;
	}
	.goodsdesc_container .content img{
		width: 100%;
	}
	.goodsdesc_container .content p[align='center']{
		margin-bottom: 0;
	}
</style>