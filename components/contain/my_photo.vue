<template>
	<div>
		<h3 class="header">
			<img src="../../public/img/return.jpg" @click="toMine"/></a><span v-text="title"></span>
		</h3>
		<div class="bg">
			<p>
				<span v-text="name"></span>
				<img :src="img"/>
			</p>
		</div>
		<div class="cont">
			<h3>
				<span>今天</span>
				<p>
					<img src="../../public/img/camera_03.jpg"/>
				</p>
			</h3>
			<h4 v-for="d in arr">
				<span>{{d.day}}<em>{{d.month}}月</em></span>
				<div>
					<p>
						<img :src="d.img" v-show="d.img"/>
						<i>{{d.cont}}</i>
					</p>
				</div>
			</h4>
			<!--<h4>
				<span>04<em>4月</em></span>
				<div>
					<p>
						<img src="../../public/img/2.jpg"/>
						<i>被拐的儿童拯救事件</i>
					</p>
				</div>
			</h4>-->
		</div>
	</div>
</template>

<script>
	import $ from 'jQuery';
	export default{
		data(){
			return{
				title:"我的相册",
				img:"",
				name:"",
				arr:""
			}
		},
		methods:{
			toMine:function(){
				location.href = "#/tab/mine";
			}
		},
		mounted(){
			this.name = this.$store.state.name;
			this.img = this.$store.state.img;
	    	var _this = this;
	    	var arr = [];
	    	$.ajax({
				type:"post",
				url:"http://120.78.142.165:5555/getTrend",
				data:{
					id:Number(_this.$store.state.id)
				},
				success(data){
					data = JSON.parse(data);
					if(data.length!=0){
						for (var i in data) {
							var times = data[i].time;
							var month = times.split('T')[0]
							var mon = month.split('-')[1];
							var day = month.split('-')[2];
							var img = data[i].img;
							var cont = data[i].trends;
							var datas = {};
							datas.month = mon;
							datas.day = day;
							datas.img = img;
							datas.cont = cont;
							arr.push(datas)
						}
						_this.arr = arr;
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
	body{
		background-color: #fff !important;
	}
	/*头部样式*/
	.header{
		line-height: 4.5rem;
		background: #393a3f;
		font-size: 1.8rem;
		color: #fff;
		font-weight: 500;
		padding:0 1.2rem;
		display: flex;
		align-items: center;
	}
	.header img{
		width: 4rem;height:2.95rem;
	}
	/*上方头像背景色*/
	.bg{
		width: 100%;
		height: 10rem;
		background-color: #434343;
		border-bottom: 1px solid #c2c2c2;
		position: relative;
	}
	.bg p{
		padding: 0 1.5rem;
		height: 4rem;
		position: absolute;
		bottom: -1.2rem;right: 1rem;
	}
	.bg p img{
		float: right;
		height: 4rem;width: 5rem;
		padding-left: 1rem;
	}
	.bg p span{
		display: block;
		float: left;
		font-size: 2rem;
		color: #fff;
		text-align: right;
	}
	/*今天*/
	.cont{
		padding: 5rem 0.8rem 0;
		background-color: #fff;
	}
	/*今天样式*/
	.cont h3{
		width: 100%;
		height: 6rem;
		display: flex;
		justify-content: space-between;
	}
	.cont h3 span{
		width: 20%;height: 6rem;
		font-size: 3rem;
	}
	.cont h3 p{
		width: 79%;height: 6rem;
	}
	.cont h3 p img{
		width: 6rem;height: 6rem;
	}
	
	/*其余时间样式*/
	.cont h4{
		width: 100%;
		display: flex;
		justify-content: space-between;
		margin: 0.75rem 0;
	}
	/*左侧时间样式显示*/
	.cont h4 span{
		width: 20%;
		font-size: 2.5rem;
	}
	.cont h4 span em{
		font-size: 1.5rem;
		padding-left: 0.5rem;
		font-style: normal;
	}
	/*右侧详细显示*/
	.cont div{
		width: 79%;
		display: flex;
		flex-direction: column;
	}
	.cont div p{
		width: 100%;height: 4rem;
		margin: 0.5rem 0;
		display: flex;
		background-color: #f0eff5;
	}	
	.cont div p img{
		width: 4rem;height: 4rem;
		margin-right: 1rem;
	}
	.cont div p i{
		font-style: normal;
		font-size: 0.8rem;
		line-height: 2rem;
		overflow: hidden;
	}
</style>