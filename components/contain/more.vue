<template>
	<div>
		<h3>
			<a href="#/own/cont"><img src="../../public/img/return.jpg" /></a><span v-text="title"></span>
		</h3>
		<ul>
			<li @click="sexChange">
				<span>性别</span>
				<em v-text="sex"></em>
			</li>
			<li>
				<span>地区</span>
				<em v-text="addr">重庆 南岸</em>
			</li>
			<li>
				<span>个性签名</span>
				<em v-text="sign">未填写</em>
			</li>
		</ul>
		<h4 v-show="bool">
			<span>性别</span>
			<p class="border">
				<label for="male">男</label><input type="radio" name="sex" value="男" v-model="sex" id="male" checked="checked"/>
			</p>
			<p>
				<label for="famale">女</label><input type="radio" name="sex" value="女" id="famale" v-model="sex"/>
			</p>
		</h4>
		<strong v-show="bool" @click="sexChange"></strong>
	</div>
</template>

<script>
	import $ from 'jQuery';
	export default{
		data(){
			return{
				title:"更多",
				bool:false,
				sex:"",
				sign:"",
				addr:""
			}
		},
		methods:{
			sexChange:function(){
				console.log(this.sex)
				var _this = this;
		    	$.ajax({
					type:"post",
					url:"http://120.78.142.165:5555/changeSex",
					data:{
						id:Number(_this.$store.state.id),
						sex:_this.sex
					},
					success(data){
						data = JSON.parse(data);
						_this.bool = !_this.bool;
						_this.$store.state.sex = _this.sex;
					},
					error(){
						console.log('error');
					}
				});
			}
		},
		mounted(){
	    	var _this = this;
	    	_this.sex = _this.$store.state.sex;
	    	$.ajax({
				type:"post",
				url:"http://120.78.142.165:5555/getMessAll",
				data:{
					id:Number(_this.$store.state.id)
				},
				success(data){
					data = JSON.parse(data);
					if(data.length!=0){
						console.log(data[0].sex)
						//将数据库的姓名提出显示
//						_this.sex = data[0].sex;
						//将数据库的微信号提出并显示
						_this.sign = data[0].sign
						//将数据库的头像提出并显示
						_this.addr = data[0].area;
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
	div{
		width: 100%;
		display: flex;
		flex-direction: column;
	}
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
	h3 a{
		width: 4rem;height:2.95rem;
		padding-right: 1.5rem;
	}
	h3 img{
		width: 4rem;height:2.95rem;
	}
	/*内容样式*/
	ul{
		background-color: #fff;
		padding: 0 2.2rem;
	}
	li{
		list-style: none;
		height:5rem;
		background-color: #fff;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid #e4e3e8;
	}
	li span{
		color: #353535;
		font-size:1.5rem;
	}
	li em{
		font-style: normal;
		color: #999;
		font-size: 1.2rem;
	}
	/*弹出框样式*/
	h4{
		width: 80%;height: 30%;
		background-color: #fff;
		display: flex;
		flex-direction: column;
		padding: 2rem;
		box-sizing: border-box;
		position: absolute;
		z-index: 2;
		left: 10%;top: 30%;
	}
	h4 p{
		display: flex;
		justify-content: space-between;
		height:5rem;
		padding: 0 1rem;
		align-items: center;
	}
	h4 p label{
		color: #666;
		font-size: 0.9rem;
	}
	h4 span{
		display: block;
		height:2rem;line-height: 2rem;
		font-size: 1.2rem;
	}
	.border{
		border-bottom: 1px solid #e4e3e8;
	}
	strong{
		display: block;
		position: absolute;
		width: 100%;height: 100%;
		background-color: #000;
		opacity: 0.3;
	}
</style>