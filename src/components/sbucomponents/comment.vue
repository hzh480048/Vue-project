<template>
	<div class="cmt-container">
		<h3>发表评论</h3>
		<hr />
		<textarea placeholder="请输入内容" v-model="msg"  maxlength="120"></textarea>
		<mt-button type='primary' size='large' @click='postComment'>发表评论</mt-button>
		<div class="cmt-list">
			<div class="cmt-item" v-for="(item,i) in comments" :key='item.add_time'>
				<div class="cmt-title">
				第{{i+1}}楼&nbsp;&nbsp;用户：{{item.user_name}}&nbsp;&nbsp;发表时间：{{item.add_time |dataFormt}}
				</div>
				<div class='cmt-body'>{{item.content}}</div>
			</div>
			
		</div>
		<mt-button type='danger' size='large' plain @click='getmore'>加载更多</mt-button>
	</div>
</template>

<script>
	import {Toast} from 'mint-ui'
	export default{
		data(){
			return{
				pageIndex:1,
				comments:[],
				msg:''
			}
		},
	created(){
		this.getComments()
	},
	methods:{
		getmore(){
			this.pageIndex++;
			this.getComments()
		},
		getComments(){
			this.$http.get('api/getcomments/'+this.id+'?pageindex='+this.pageIndex).then(result =>{
				if(result.body.status ===0){
//					this.comments = result.body.message;
					this.comments = this.comments.concat( result.body.message)

				}else{
					Toast('获取评论失败！')
				}
			})
		},
		postComment(){
			if(this.msg.trim().length ===0){
			return Toast('评论内容不能为空')
			}
			this.$http.post('api/postcomment/'+this.$route.params.id,{
			content:this.msg.trim()	
			}).then(result =>{
				if(result.body.status ===0){
					var cmt = {user_name:'匿名用户',add_time:Date.now(),content:this.msg.trim()}
				};
				this.comments.unshift(cmt);
				this.msg='';
			})
		}
	},
	props:['id']		
	}

</script>

<style>
	.cmt-container h3{
		font-size: 18px;
	}
	.cmt-container textarea{
		font-size: 14px;
		height: 85px;
		margin: 0;
	}
	.cmt-list{
		margin: 5px 0;
	}
	.cmt-list .cmt-item{
		font-size: 13px;
	}
	.cmt-list .cmt-ite .cmt-title{
		line-height: 30px;
		background: #ccc;
	}
	.cmt-list .cmt-ite .cmt-body{
		line-height: 35px;
		text-indent: 2em;
	}
	
</style>