<template>
	<div>
		<h3>
			<img src="../../public/img/return.jpg" @click="toMine"/></a><span v-text="title"></span>
		</h3>
		<div class="bett margins">
			<h4>
				<span>微信号</span>
				<p>
					<em v-text="wei_num">cpyj</em>
				</p>
			</h4>
		</div>
		<div class="bett">
			<h4>
				<span>手机号</span>
				<p>
					<img src="../../public/img/locked.png"/>
					<em v-text="num">13368037646</em>
				</p>
			</h4>
			
		</div>
		<div class="left margins">
			<span>微信密码</span>
		</div>
		<div class="left">
			<span>声音锁</span>
		</div>
		<div class="left margins">
			<span>应急联系人</span>
		</div>
		<div class="bett">
			<h4>
				<span>账号保护</span>
				<p>
					<img src="../../public/img/locked.png"/>
					<em>已保护</em>
				</p>
			</h4>
		</div>
		<div class="left">
			<span>更多安全设置</span>
		</div>
		<div class="height margins">
			<h4>
				<span>微信安全中心</span>
				<em>如果你遇到微信被盗，无法登录等问题，可以前往安全中心</em>
			</h4>
		</div>
	</div>
</template>

<script>
	import $ from 'jQuery';
	export default{
		data(){
			return{
				title:"账号与安全",
				bool:false,
				sex:"",
				sign:"",
				addr:"",
				wei_num:"",
				num:""
			}
		},
		methods:{
			toMine:function(){
				location.href = "#/own/sets";
			}
		},
		mounted(){
	    	var _this = this;
	    	$.ajax({
				type:"post",
				url:"http://120.78.142.165:5555/getMessAll",
				data:{
					id:Number(_this.$store.state.id)
				},
				success(data){
					data = JSON.parse(data);
					if(data.length!=0){
						//将数据库的微信号提出并显示
						_this.num = data[0].phone
						_this.wei_num = data[0].wei_num;
					}
				},
				error(){
					console.log('error');
				}
			});
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
		margin-right: 1rem;
	}
	/*两端对齐*/
	.bett{
		width: 100%;
		height: 4.3rem;line-height: 4.3rem;
		background-color: #fff;
		color: #333;
	}
	.bett h4{
		display: flex;
		margin: 0 1.2rem;
		border-bottom: 1px solid #e4e3e8;
		justify-content: space-between;
		font-weight: normal;
		font-size: 1.5rem;
	}
	.bett h4 p{
		width: 8rem;height: 4.3rem;
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}
	.bett h4 p img{
		width: 2rem;height: 2rem;
		margin-right: 0.75rem;
	}
	.left{
		width: 100%;
		height: 4.3rem;line-height: 4.3rem;
		background-color: #fff;
		color: #333;
	}
	.left span{
		display: block;
		margin: 0 1.2rem;
		border-bottom: 1px solid #e4e3e8;
		font-size:1.5rem;
	}
	p em{
		color: #CCCCCC;
		font-style: normal;
		font-size: 1rem;
	}
	/*间距*/
	.margins{
		margin-top: 1.7rem;
	}
	.height{
		height: 7.3rem;
		color: #333;
		background-color: #fff;
	}
	.height h4{
		margin: 0 1.2rem;
		display: flex;
		flex-direction: column;
	}
	.height h4 span{
		height: 3.3rem;line-height: 3.3rem;
		font-size: 2rem;
	}
	.height h4 em{
		font-size: 1.5rem;line-height: 2rem;
		color: #ccc;
		font-style: normal;
	}
</style>