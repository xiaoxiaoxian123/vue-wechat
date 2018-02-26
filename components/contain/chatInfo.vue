<template>
	<div>
		<div class="chatTitle">
			<p>
				<a href="#/chatdetail"><img src="../../public/img/leftsanjiao.png" /></a>返回</p>
			<span>聊天详情</span>
			<b></b>
		</div>
		<div class="chat-dialogue">
			<p class="chatPic">
				<img :src="chatphoto" />
				<span v-text="chatName"></span>
			</p>
			<p class="jiaBox">
				<img src="../../public/img/jia.png" />
			</p>
		</div>
		<section>
			<div class="set">
				<p><em>置顶聊天</em>
					<a href="#" @click="checkOpen"><img :src="isOpen?openImg:closeImg"/></a>
				</p>
				<p><em>消息免打扰</em>
					<a href="#" @click="checkOpen1"><img :src="isOpen1?openImg:closeImg"/></a>
				</p>
			</div>
			<div class="set">
				<p><em>聊天文件</em><span><img src="../../public/img/right.jpg"/></span></p>
			</div>
			<div class="set">
				<p><em>设置当前聊天背景</em><span><a href="#"><img src="../../public/img/right.jpg"/></a></span></p>
				<p><em>查找聊天内容</em><span><a href="#"><img src="../../public/img/right.jpg"/></a></span></p>
			</div>
			<div class="set">
				<p><em>清空聊天记录</em><span></span></p>
			</div>
			<div class="set">
				<p><em>投诉</em><span><a href="#"><img src="../../public/img/right.jpg"/></a></span></p>
			</div>
		</section>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				isOpen:false,
				isOpen1:false,
				openImg:require('../../public/img/kai.png'),
				closeImg:require('../../public/img/kaiguan.jpg'),
				chatName:'',
				chatphoto:''
			}
		},
		methods:{
			checkOpen(){
				this.isOpen = !this.isOpen;
			},
			checkOpen1(){
				this.isOpen1 = !this.isOpen1;
			}
		},
		mounted(){
			this.chatName = this.$store.state.chat_name;
			this.chatphoto = this.$store.state.chat_photo;
		}
	}
</script>

<style scoped>
	em,i{
		font-style: normal;
	}
	.chatTitle {
		display: flex;
		line-height: 45px;
		background: #343339;
		color: #fff;
		flex-direction: row;
		justify-content: space-between;
		padding: 0 10px;
		font-size: 16px;
	}
	
	.chatTitle p img {
		vertical-align: middle;
		margin-right: 5px;
	}
	
	b {
		width: 24px;
		height: 24px;
	}
	
	.pic {
		background: url(../../public/img/2-small.jpg);
	}
	
	.chat-dialogue {
		background: #fff;
		display: flex;
		flex-direction: row;
		border-top: 1px solid #6b6a6e;
		padding: 15px 0 8px 20px;
	}
	
	.chatPic {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		color: #787878;
		font-size: 12px;
		align-items: center;
		margin-right: 25px;
	}
	
	.chatPic img {
		width: 42px;
		height: 42px;
		margin-bottom: 5px;
	}
	
	.jiaBox {
		width: 42px;
		height: 42px;
		border: 1px solid #f6f6f6;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	section {
		display: flex;
		background: #eef1f6;
		flex-direction: column;
	}
	
	.set {
		width: 100%;
		display: flex;
		flex-direction: column;
		border-bottom: 1px solid #f4f4f4;
		font-size: 12px;
		margin-top: 16px;
		color: #343434;
	}
	
	.set p {
		/*width: 100%;*/
		height: 40px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: #fff;
		border-bottom: 1px solid #DDDDDD;
		padding: 10px;
		font-size: 14px;
	}
	
	.set p a {
		color: #3b3b3b;
	}
</style>