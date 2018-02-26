<template>
	<div class="weui-mine-titles">
		<a href="#/own">
			<div class="mine-img">
				<img :src="img">
			</div>
			<div class="mine-conts">
				<div class="left">
					<h4 v-text="name"></h4>
					<p>微信号:<span v-text="wei_num"></span></p>
				</div>
				<div class="code">
					<canvas id="canvas"></canvas>
					<i></i>
				</div>
			</div>
		</a>
	</div>
</template>

<script>
	import $ from 'jQuery';
	import Vue from 'vue'
	import QRCode from 'qrcode'
	Vue.use(QRCode)
	export default{
		data(){
			return{
				name:"",
				wei_num:"",
				img:"",
			}
		},
		methods:{
			useqrcode(name){
				var canvas = document.getElementById('canvas');
				var str = name + this.wei_num;
				QRCode.toCanvas(canvas,str, function (error) {
					if (error) console.error(error)
				})
			},
			toUtf8(str) {
				var out, i, len, c;
				out = "";
				len = str.length;
				for(i = 0; i < len; i++) {
					c = str.charCodeAt(i);
					//转换为10进制的Unicode
					console.log(c)
					if((c >= 0x0001) && (c <= 0x007F)) {
						out += str.charAt(i);
						console.log(out);
					} else if(c > 0x07FF) {
						out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
						out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F));
						out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
						console.log(out);
					} else {
						out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F));
						out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
						console.log(out);
					}
				}
				console.log(out)
				return out;
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
						//将数据库的姓名提出显示
						_this.name = data[0].my_name;
						_this.$store.state.name = data[0].my_name;
						//将数据库的微信号提出并显示
						_this.wei_num = data[0].wei_num
						_this.$store.state.wei_num = data[0].wei_num;
						//将数据库的头像提出并显示
						_this.img = data[0].my_photo;
						_this.$store.state.img = data[0].my_photo;
						_this.useqrcode(_this.name);
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
	/*我的个人信息行*/
.weui-mine-titles{
	width: 100%;
	height: 7.4rem;
	border-bottom: 1px solid #e4e3e8;
	border-top: 1px solid #e4e3e8;
	margin-top: 1.2rem;
	background-color: #fff;
}
.weui-mine-titles a{
	display: flex;
	width: 100%;height: 7.5rem;
	padding: 0.9rem;
	box-sizing: border-box;
	justify-content: space-between;
}
.mine-img{
	width: 5.5rem;height: 5.5rem;
	margin-right: 1.7rem;
}
.mine-img img{
	width: 5.5rem;height: 5.5rem;
	border-radius: 0.4rem;
}
.mine-conts{
	width: 100%;height: 5.5rem;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}
.mine-conts h4{
	height: 1.8rem;
	font-size: 1.5rem;
	font-weight: 600;
}
.mine-conts p{
	height: 1.6rem;
	font-size: 1rem;
}
.code{
	width: 4.5rem;height: 3rem;
	margin-top: 1.25rem;
	display: flex;
	justify-content: space-between;
}
.code i{
	height: 3rem;width: 0.9rem;
	background: url(../../public/img/right.jpg) no-repeat center;
	padding-left: 2rem;
}
.left{
	display: flex;
	flex-direction: column;
	justify-content: center;
	color: #000;
}
#canvas{
	width:3rem !important;
	height:3rem !important;
}
</style>
