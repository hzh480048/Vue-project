<template>
	<div class="newsinfo-container">
		<h3 class="title">{{newinfo.title}}</h3>
		<p class='mui-ellipsis'>
		<span>发表时间：{{newinfo.add_time |dataFormt}}</span>
		<span>点击：{{newinfo.click}}</span>
		</p>
		<hr />
		<div class="content" v-html="newinfo.content"></div>
		<comment-box :id="this.id"></comment-box>
		</div>
</template>

<script>
import { Toast } from 'mint-ui'	

import comment from '../sbucomponents/comment.vue'
	export default{
		data(){
			return{
			id:this.$route.params.id,
			newinfo:[],
			}
		},
		created(){
			this.getNewsInfo();
		},
		methods:{
			getNewsInfo(){
				this.$http.get('api/getnew/'+this.id).then(result =>{
					if(result.body.status ===0){
						this.newinfo = result.body.message[0]
					}else{
						Toast('获取新闻失败！')
					}
				})
			}
		},
		components:{
			'comment-box':comment
		}
	}
	
</script>

<style>
.newsinfo-container{
	padding: 0 4px;		
	}
.newsinfo-container .title{
	font-size: 16px;
	text-align: center;
	margin: 15px 0;
	color: red;
}	
.mui-ellipsis{
	font-size: 13px;
	color: #226aff;
	display: flex;
	justify-content: space-between;
}
</style>