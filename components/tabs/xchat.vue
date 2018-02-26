<template>
	<div class="chatBox">
		<a href="#/chatdetail" class="weui-cell" v-for="(a,index) in chatArr" @click="getChatName(index,a.img)">
	        <div class="weui-cell__hd" style="position: relative;margin-right: 10px;">
	            <img :src="a.img" style="width: 50px;display: block">
	            <!--<span class="weui-badge" style="position: absolute;top: -.4em;right: -.4em;">8</span>-->
	        </div>
	        <div class="weui-cell__bd">
	            <p style="font-size: 16px;" v-text="a.chatname" class="chatName"></p>
	            <p style="font-size: 13px;color: #888888;" v-text="a.content"></p>
	        </div>
	    </a>
	</div>
	
</template>

<script>
	import $ from 'jQuery';
//	import io from '../../template/socket.io.js';
	export default {
		data(){
			return {
				chatArr:[],
			}
		},
		mounted:function(){
			var _this = this;
			$.ajax({
				type:"post",
				url:"http://120.78.142.165:5555/getChatList",
				success(data){
					var obj = JSON.parse(data)
					for(var i in obj){
						_this.chatArr.push(
							{
								id:obj[i].id,
								chatname:obj[i].my_name,
								content:obj[i].sign,
								img:obj[i].my_photo,
							}
						);
					}
				},
				error(){
					console.log('error');
				}
			});
		},
		methods:{
			getChatName(index,photo){
				var _this = this;
				this.$store.state.chat_name = this.chatArr[index].chatname;
//				this.$store.state.my_photo = photo
				_this.$store.state.chat_Id=this.chatArr[index].id;
				_this.$store.state.chat_photo=this.chatArr[index].img;
//				$.ajax({
//					type:"post",
//					url:"http://120.78.142.165:5555/getChatId",
//					dataType:'json',
//					data:{
//						chatName:_this.$store.state.chat_name
//					},
//					success(data){
//						for(var i in data){
//							_this.$store.state.chat_Id=data[i].id,
//							_this.$store.state.chat_photo=data[i].my_photo
//						}
//						console.log('聊天的头像',_this.$store.state.chat_photo);
//					}
//				});
			}
		}
	}
</script>

<style scoped>
	.chatBox{
		background:#fff;
		margin-bottom: 55px;
	}
	.weui-cell{
		border-bottom:1px solid #dedede;
		color:#000;
	}
</style>