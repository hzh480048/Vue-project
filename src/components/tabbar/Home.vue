<template>
	<div>
		<swiper :lunbotuList='lunbotuList' :isfull='true'></swiper>
		
		<div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newlist">
		                    <img src="../../img/menu1.png" alt="出现错误">
		                    <div class="mui-media-body">新闻资讯</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/phtolist">
		                  	<img src="../../img/menu2.png" alt="出现错误">
		                    <div class="mui-media-body">图片分享</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/shopping">
		                    <img src="../../img/menu3.png" alt="出现错误">
		                    <div class="mui-media-body">商品购买</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../img/menu4.png" alt="出现错误">
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../img/menu5.png" alt="出现错误">
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                  	<img src="../../img/menu6.png" alt="出现错误">
		                    <div class="mui-media-body">联系我们</div></a></li>
		        </ul> 
		</div>
	</div>
</template>

<script>
import {Toast} from 'mint-ui'
import swiper from '../sbucomponents/swiper.vue'
	
export default{
	data(){
		return{
			lunbotuList:[]
		}
	},
	created(){
		this.getlunbutu();
	},
	methods:{
		getlunbutu(){
			this.$http.get('api/getlunbo').then(result =>{
				if(result.body.status === 0){
					this.lunbotuList =result.body.message;
				}else{
					Toast('图片获取失败');
				}
			})
		}
	},
	components:{
		swiper
	}
}
</script>

<style>

.mui-content img{
	width: 60px;
	height: 60px;
}
.mui-content .mui-grid-view.mui-grid-9{
	border:0;
	background-color: white;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
	border-right:0px solid #eee;
	border-bottom:0px solid #eee;
}


</style>