<template>
	<div class="phto-container">
		
		<h3>{{phtoinfo.title}}</h3>
		<p class="subtitle">
			<span>发表时间：{{phtoinfo.add_time | dataFormt}}</span>
			<span>点击：{{phtoinfo.click}}次</span>
		</p>
		<hr />
		<!--描述：图片缩小图-->
		<vue-preview :slides="list" class="imgPrev"></vue-preview>
		
		<!--描述：图片内容区域-->	
		<div class="content" v-html="phtoinfo.content"></div>
		
		<!--描述：放置现成的评论子组件 -->
		<cmt-box :id='id'></cmt-box>
	</div>
</template>

<script>
import comment from '../sbucomponents/comment.vue'

export default{
	data(){
		return{
			id:this.$route.params.id,
			phtoinfo:{},
			list:[]
		}
	},
	created(){
		this.getPhotoInfo(),
		this.getlist()
	},
	methods:{
		getlist(){
			this.$http.get("api/getthumimages/"+this.id).then(result =>{
				if(result.body.status ===0){
					result.body.message.forEach(item =>{
						item.w = 600;
						item.h = 600;
						item.src = item.src;
						item.msrc = item.src;
					})
					this.list = result.body.message
				}
			})
		},
		getPhotoInfo(){
			this.$http.get('api/getimageInfo/'+this.id).then(result =>{
				if(result.body.status ===0){
					this.phtoinfo = result.body.message[0]
				}
			})
		}
	},
	components:{
		'cmt-box':comment
	}
}
	
</script>

<style scoped>
.phto-container{
	padding:3px
}
.phto-container h3{
	color: #26a2ff;
	font-size: 15px;
	text-align: center;
	margin: 15px 0;
}
.phto-container .subtitle{
	display: flex;
	justify-content: space-between;
	font-size: 13px;
}
.phto-container .content{
	font-size: 13px;
	line-height: 30px;
}
.my-gallery{
	display: flex;
}
.my-gallery figure{
	margin: 5px;
	width: 33%;
}
.my-gallery figure img{
	width: 100%;
	height: 100%;
	box-shadow: 0 0 9px #999;
}
</style>