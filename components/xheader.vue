<template>
	<div class="container">
		<div class="header">
			<a href=""></a>
			微信
			<i @click="changeShow"><img src="../public/img/jia.png"/></i>
		</div>
		
		<ul class="tips-open" v-show="isShow">
			<li> <span class="iconfont icon-tips-xiaoxi"></span>
				<div>发起群聊</div>
			</li>
			<a href="#/con/add_friend">
				<li > <span class="iconfont icon-tips-add-friend"></span>
					<div>添加朋友</div>
				</li>
			</a>
			<li > <span class="iconfont icon-tips-saoyisao"></span>
				<div @click="sao">扫一扫</div>
			</li>
			<li> <span class="iconfont icon-tips-fukuan"></span>
				<div>收付款</div>
			</li>
		</ul>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				isShow:false
			}
		},
		methods:{
			changeShow(){
				this.isShow = !this.isShow;
			},
			sao(){
				location.href="#/sao-yi-sao";
			}
		}
	}
</script>
<style scoped>
	.container{
		position: relative;
	}
	ul{
		position: absolute;
	    z-index: 4;
	    width: 120px;
	    font-size: 16px;
	    right: 5px;
	    top: 54px;
	    text-align: left;
	    border-radius: 2px;
	    background-color: #49484b;
	    padding: 0 15px;
	    -webkit-transform-origin: 90% 0;
	    transform-origin: 90% 0;
	}
	.tips-open:before{
		width: 0;
	    height: 0;
	    position: absolute;
	    top: -8px;
	    right: 15px;
	    content: "";
	    border-width: 0 6px 8px;
	    border-color: transparent transparent #49484b;
	    border-style: solid;
	}
	li{
		list-style: none;
		color:#fff;
    	height: 40px;
    	line-height: 40px;
    	font-size: 14px;
    	display: flex;
	}
	li div{
		margin-left: 10px;
	}
	.header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		line-height: 45px;
		background: #343339;
		font-size: 18px;
		color: #fff;
		padding: 0 15px 0 10px;
	}
	
	i {
		font-style: normal;
	}
</style>