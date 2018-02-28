<template>
	<div class="login">
		<h3>
			<span v-text="title"></span>
		</h3>
		<div>
			<p>
				<span>账号：</span><input type="text" id="username" v-model="name" />
			</p>
			<p>
				<span>密码：</span><input type="password" id="password"v-model="password" />
			</p>
			<button @click="login">登录</button>
			<em v-text="prompts" v-show="bool">用户名或密码错误</em>
		</div>
		
	</div>
</template>

<script>
	import $ from 'jQuery';
	export default{
		data(){
			return{
				title:"登录微信",
				name:"",
				password:"",
				prompts:"",
				bool:false
			}
		},
		mounted(){
	    	//this.$store.state.name = this.name
	   	},
	  	methods:{
	   		login:function(){
	   			var _this = this;
	   			if(this.name.length==0||this.password.length==0){
	   				this.bool = true;
	   				this.prompts = "用户名或密码不可为空！"
	   			}else{
//	   				this.bool = false;
	   				$.ajax({
						type:"post",
						url:"http://120.78.142.165:5555/login",
						data:{
							username:_this.name,
							password:_this.password
						},
						success(data){
							data = JSON.parse(data);
							if(data.length!=0){
								_this.$store.state.id = data[0].id;
								_this.$store.state.sex = data[0].sex;
								_this.$store.state.name = data[0].my_name;
								_this.$store.state.img = data[0].my_photo;
								location.href = "#/tab/wechat";
							}
							else{
								_this.bool = true;
	   							_this.prompts = "用户名或密码错误！"
							}
						},
						error(){
							console.log('error');
						}
					});
	   			}
	   			
	   		}
	   	}
	}
</script>

<style scoped="scoped">
/*1rem=10px*/
a img{
  border:0;
}
a{
  text-decoration:none;
  -webkit-tap-highlight-color:rgba(0, 0, 0, 0);
}
.login{
	width: 100%;height: 100%;
	background-color: #fff;
	display: flex;
	flex-direction: column;
}
/*头部样式*/
	h3{
		line-height: 45px;
		background: #393a3f;
		font-size: 16px;
		color: #fff;
		font-weight: 500;
		padding:0 12px;
		display: flex;
		align-items: center;
		margin-bottom: 7.5px;
	}
	h3 a{
		width: 40px;height:30px;
		padding-right: 15px;
	}
	h3 img{
		width: 40px;height:30px;
	}
p{
	height: 40px;line-height: 40px;
	border-bottom: 1px solid #E5E5E5;
	font-size: 14px;
}
p span{
	float: left;
	width: 20%;height: 40px;
	font-size:14px;
}
p input{
	border: 0;width: 80%;
	height: 35px;
	outline: none;
	font-size: 20px;
}
button{
	width: 100%;
	height: 35px;
	background-color: green;
	color: #fff;
	border: 0;
	font-size: 16px;
	margin: 10px 0;
}
.login div{
	padding: 0 20px;
}
.login div em{
	display: block;
	width: 100%;height: 40px;
	text-align: center;
	font-size: 22px;line-height: 40px;
	color: red;
	font-style: normal;
}
</style>