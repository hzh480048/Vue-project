<template>
	<div>
		<!--顶部滚动条 -->
		<div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a :class="['mui-control-item', item.id==13?'mui-active':'']" v-for="item in cate" :key='item.id' @click="getimglist(item.id)">
							{{item.title}}
						</a>
					</div>
				</div>
		</div>
		  
		<!-- 图片列表-->
		<ul class="photo-list">
			<router-link tag='li' v-for="item in imglist" :key='item.id' :to="'/home/phtoinfo/'+item.id">
				<img v-lazy="item.img_url">
				<div class="info">
					<h1 class="info-title">{{item.title}}</h1>
					<div class="info-body">{{item.zhaiyao}}</div>
				</div>
			</router-link>
		</ul>
	</div>
</template>

<script>
import mui from '../../lib/js/mui.min.js'
import {Toast} from 'mint-ui'
 

export default{
	data(){
		return{
			cate:[],
			imglist:[],
			instance:null

		}
	},
	created(){
		this.getimgcategory()
		this.getimglist(13)
	},
	methods:{
		getimgcategory(){
			this.$http.get('api/getimgcategory').then(result =>{
				if(result.body.status ===0){
					result.body.message.unshift({title:'全部',id:13})
					this.cate =result.body.message
				}
			})
		},
		getimglist(id){
			this.$http.get('api/getimages/'+id).then(result =>{
				if(result.body.status ===0){
					this.imglist = result.body.message
					if(this.imglist.length ===0){
						if(this.instance != null){
							this.instance.close();
						}
						this.instance = Toast('数据为空');
					}
				}
			})
		}
	},
	mounted(){
		mui('.mui-scroll-wrapper').scroll({ //只有等到 DOM元素加载完毕才能获取到mui-scroll-wrapper 所以只能在mouted中而不是created
			deceleration: 0.0005,//flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
		});
	}
}
	
</script>

<style scoped>
/**{
		touch-action: none;
	}*/
.photo-list {
		padding: 0;
		margin: 0;
		list-style: none;
		padding: 10px;
		padding-bottom: 0;
	}
.photo-list li{
		background-color: #ccc;
		text-align: center;
		margin-bottom: 10px;
		vertical-align: middle;
		box-shadow: 0 0 9px #999;
		position: relative;
	}
.photo-list li  img[lazy=loading]{
		 width: 40px;
	  height: 300px;
	  margin: auto;
}
.photo-list li img{
	width: 100%;
}
.info{
	color: white;
	text-align: left;
	bottom: 0;
	position: absolute;
	background-color: rgb(0,0,0,0.4);
	max-height: 84px;
}
.info .info-title{
	font-size: 14px;
}
.info .info-body{
	font-size: 13px;
}
</style>