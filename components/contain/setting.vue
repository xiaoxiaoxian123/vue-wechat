<template>
	<div>
		<h3>
			<img src="../../public/img/return.jpg" @click="toMine"/></a><span v-text="title"></span>
		</h3>
		<div class="cont">
			<a href="#/own/safe" class="margins">账号与安全</a>
			<a href="##">新消息提醒</a>
			<a href="##">勿扰模式</a>
			<a href="##">聊天</a>
			<a href="##">隐私</a>
			<a href="##" class="margins">通用</a>
			<a href="##" class="margins">关于微信</a>
			<a>帮助与反馈</a>
			<a href="##">插件</a>
			<a href="##" class="margins" @click="quit">退出</a>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				title:"设置"
			}
		},
		methods:{
			toMine:function(){
				location.href = "#/tab/mine";
			},
			quit(){
				console.log(this.$store.state.id)
				this.$store.state.id = "";
				console.log(this.$store.state.id)
				location.href = "#/login";
			}
		}
	}
</script>

<style scoped="scoped">
	/*头部样式*/
	h3{
		line-height: 4.5rem;
		background: #393a3f;
		font-size: 1.8rem;
		color: #fff;
		font-weight: 500;
		padding:0 1.2rem;
		display: flex;
		align-items: center;
	}
	h3 img{
		width: 4rem;height:2.95rem;
	}
	/*内容区*/
	.cont{
		display: flex;
		flex-direction: column;
	}
	.cont a{
		display: block;
		padding: 0 1.2rem;
		border-bottom: 1px solid #e4e3e8;
		height: 4.3rem;line-height: 4.3rem;
		background-color: #fff;
		font-size: 1.5rem;
		color: #666;
	}
	.margins{
		margin-top: 1.7rem;
		border-bottom: 0;
	}
</style>