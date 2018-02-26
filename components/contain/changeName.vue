<template>
	<div class="change">
		<h3>
			<p>
				<a href="#/own"><img src="../../public/img/return.jpg" /></a><span v-text="title"></span>
			</p>
			<button @click="change">保存</button>
		</h3>
		<p>
			<input type="text" v-model="name"/>
		</p>
		<h5>好的名字可以让你的朋友记住你</h5>
	</div>
</template>

<script>
	import $ from 'jQuery';
	export default{
		data(){
			return{
				name:"",
				title:"更改名字"
			}
		},
		mounted(){
	    	this.name = this.$store.state.name
	   	},
	   	methods:{
	   		change:function(){
	   			this.$store.state.name = this.name
	   			var _this = this;
		    	$.ajax({
					type:"post",
					url:"http://120.78.142.165:5555/changeName",
					data:{
						id:Number(_this.$store.state.id),
						name:_this.name
					},
					success(data){
						data = JSON.parse(data);					
						location.href = "#/own/cont";
					},
					error(){
						console.log('error');
					}
				});
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
		justify-content: space-between;
	}
	h3 a{
		width: 4rem;height:2.95rem;
		padding-right: 1.5rem;
	}
	h3 img{
		width: 4rem;height:2.95rem;
	}
	button{
		border: 0;
		width: 5rem;height: 2.95rem;
		background-color: green;
		font-size: 1.6rem;
		color: #fff;
		outline: none;
		opacity: 0.4;
	}
	.change{
		width: 100%;
		height: 100%;
		background-color: #fff;
		/*margin-top: 1.7rem;*/
	}
	.change p{
		padding:2rem 1.2rem 0;
	}
	.change h3 p{
		height:4.5rem;
		padding: 0;
		display: flex;
		align-items: center;
	}
	.change p input{
		width: 100%;height: 2rem;
		margin: 0;padding: 0;
		border: 0;
		border-bottom: 1px solid green;
		font-size: 2rem;
		line-height: 2rem;
		outline: none;
	}
	.change h5{
		padding:0 1.2rem;
		height: 3rem;
		line-height: 3rem;
		color: #ccc;
	}
</style>