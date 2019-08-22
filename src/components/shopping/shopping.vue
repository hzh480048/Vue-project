<template>
	<div class="good-list">
		
		<router-link class="good-item" v-for="item in goodslist" :key='item.id' :to="'/home/shoppinginfo/'+item.id"  tag='div'>
			<img :src="item.img_url" />
			<h1 class="title">{{item.title}}</h1>
			<div class="info">
				<p class="price">
					<span class="now">￥{{item.sell_price}}</span>
					<span class="old">￥{{item.market_price}}</span>
				</p>
				<p class="sell">
					<span>热卖中</span>
					<span>剩{{item.stock_quantity}}件</span>
				</p>
			</div>
			
		</router-link>
		
		<mt-button type='danger' size='large' @click='getMoregoods'>加载更多</mt-button>
	</div>
</template>

<script>
	export default{
		data(){
			//data 是往自己组件内部，挂载一些私有数据的
			return{
				pageindex:1, //分页的页数
				goodslist:[]//存放商品列表的数组
			}
		},
		created(){
			this.getGoodlist();
		},
		methods:{
			getGoodlist(){
				//获取商品列表
				this.$http.get('api/getgoods?pageindex='+this.pageindex).then(result =>{
					if(result.body.status ===0){
						this.goodslist = this.goodslist.concat(result.body.message)
					}
				})
			},
			getMoregoods(){
				this.pageIndex++;
				this.getGoodlist();
			}
		}
	}
</script>

<style scoped>
.good-list{
	display: flex;
	flex-wrap:wrap;
	padding: 7px;
	justify-content: space-between;
}
.good-list .good-item{
	width: 49%;
	border: 1px solid #ccc;
	box-shadow:  0 0 8px #999;
	margin: 3px 0;
	padding: 2px;
	min-height: 293px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
.good-list .good-item img{
	width: 100%;
}
.good-list .good-item .title{
	font-size:14px;
	width: 100%;
}
.info{
	background: #eee;
}
.info p{
	margin: 0;
	padding: 5px;
}
.info .price{}
.info .sell{
	display: flex;
	justify-content: space-between;
	font-size: 12px;
}
.info .price .now{
	color: red;
	font-size: 16px;
	font-weight: bold;
}
.info .price .old{
	text-decoration: line-through;
	font-size: 12px;
	margin-left:10px;
}

</style>