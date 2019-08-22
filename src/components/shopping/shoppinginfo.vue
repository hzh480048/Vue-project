<template>
	
	<div class="shopping-info">
		<transition
			@before-enter='beaforeenter'
			@enter='enter'
			@after-enter ='afterenter'
			>		
			<div class="ball" v-show='ballFalg' ref='ball'></div>
		</transition>
		<!-- 商品轮播图区域-->
				<div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<swiper :lunbotuList='lunbotuList' :isfull='false'></swiper>
					</div>
				</div>
				</div>
		
		<!-- 商品购买区域 -->
		<div class="mui-card">
				<div class="mui-card-header">{{goodslist.title}}</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p class="price">
							市场价:<span class="old_prince"><del>￥{{goodslist.market_price}}</del></span>
							销售价:<span class="new_prince">￥{{goodslist.sell_price}}</span>
						</p>
						<p>购买数量：<shoppingnumbox @func='getselectnum' :max='goodslist.stock_quantity'></shoppingnumbox></p>
						<p>
							<mt-button type='primary' size='small' >立即购买</mt-button>
							<mt-button type='danger' size='small' @click='addcart'>加入购物车</mt-button>
							
						</p>
					</div>
				</div>
			</div>
		
		<!-- 商品参数区域 -->
		<div class="mui-card">
				<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>商品货号：{{goodslist.goods_no}}</p>
						<p>储存情况：{{goodslist.stock_quantity}}</p>
						<p>上架时间：{{goodslist.add_time |dataFormt}}</p>
					</div>
				</div>
				<div class="mui-card-footer">
					<mt-button type='primary' size='large' plain @click='getdesc(id)'>图片介绍</mt-button>
					<mt-button type='danger' size='large' plain @click='getcomment(id)'>商品评论</mt-button>
				</div>
		</div>
	</div>
</template>

<script>
	import swiper from '../sbucomponents/swiper.vue'
	import shoppingnumbox from '../sbucomponents/shopping_numbox.vue'
	export default{
		data(){
			return{
				id:this.$route.params.id,
				lunbotuList:[],
				goodslist:{},
				ballFalg:false,
				selectnum:1
			}
		},
		created(){
			this.getlunbotu()
			this.getshopinginfo()
		},
		methods:{
			getlunbotu(){
				this.$http.get('api/getthumimages/'+this.id).then(result =>{
					if (result.body.status ===0) {
						result.body.message.forEach(item =>{
							item.img = item.src
						})
						this.lunbotuList = result.body.message
					}
				})
			},
			getshopinginfo(){
				this.$http.get('api/goods/getinfo/'+this.id).then(result =>{
					if(result.body.status ===0){
						this.goodslist = result.body.message[0]
					}
				})
			},
			getdesc(id){
				this.$router.push({name:'desc',params:{id}})
			},
			getcomment(id){
				this.$router.push({name:'shoppingcomment',params:{id}})
			},
			addcart(){
				this.ballFalg =! this.ballFalg;
			},
			beaforeenter(el){
				el.style.transform = 'translate(0,0)'
			},
			enter(el,done){
				const ballposition = this.$refs.ball.getBoundingClientRect();
				const badgeposition =  document.getElementById('badge').getBoundingClientRect();
				
				const Xdist = badgeposition.left - ballposition.left;
				const Ydist  = badgeposition.top-ballposition.top
				
				el.offsetWidth;
				el.style.transform = `translate(${Xdist}px,${Ydist}px)`;
				el.style.transition='all 0.4s cubic-bezier(.4,-0.4,1,.66)';
				done()
			},
			afterenter(el){
				this.ballFalg =! this.ballFalg;
			},
			getselectnum(num){
				console.log('父组件拿到的值'+num)
			}
		},
		components:{
			swiper,
			shoppingnumbox
		}
	}
</script>

<style scoped>
	.shopping-info{
		margin: 0;
		padding:0;
		background-color:#ccc ;
		overflow: hidden;
	}
	.shopping-info .new_prince{
		color: red;
		font-size:16px;
		font-weight: bold;
	}
	.mui-card .mui-card-foote{
		display: block;
	}
	.mui-card-footer{
		display: block;
	}
	.mui-card-footer button{
		margin: 10px 0;
	}
	.ball{
		width: 15px;
		height: 15px;
		border-radius:50%;
		background-color: red;
		position: absolute;
		left: 148px;
		top: 372px;
		z-index: 99;
	}
</style>