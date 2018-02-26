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
html{font-size: 62.5%;}/*1rem=10px*/
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
		line-height: 4.5rem;
		background: #393a3f;
		font-size: 2rem;
		color: #fff;
		font-weight: 500;
		padding:0 1.2rem;
		display: flex;
		align-items: center;
		margin-bottom: 0.75rem;
	}
	h3 a{
		width: 4rem;height:2.95rem;
		padding-right: 1.5rem;
	}
	h3 img{
		width: 4rem;height:2.95rem;
	}
p{
	height: 4rem;line-height: 4rem;
	border-bottom: 1px solid #E5E5E5;
	font-size: 1.2rem;
}
p span{
	float: left;
	width: 20%;height: 4rem;
	font-size:1rem;
}
p input{
	border: 0;width: 80%;
	height: 3.5rem;
	outline: none;
	font-size: 2rem;
}
button{
	width: 100%;
	height: 3.5rem;
	background-color: green;
	color: #fff;
	border: 0;
	font-size: 2rem;
	margin: 1rem 0;
}
.login div{
	padding: 0 2rem;
}
.login div em{
	display: block;
	width: 100%;height: 4rem;
	text-align: center;
	font-size: 2.2rem;line-height: 4rem;
	color: red;
	font-style: normal;
}
</style>