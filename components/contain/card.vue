<template>
	<div class="change">
		<h3>
			<p>
				<a href="#/tab/mine"><img src="../../public/img/return.jpg" /></a><span v-text="title"></span>
			</p>
			<em>消息通知</em>
		</h3>
		<div>
			<h4 class="bett">
				<span>
					<img src="../../public/img/me_more-my-album.png"/>
					<em>卡</em>
				</span>
				<b>查看全部</b>
			</h4>
			<h4>
				<span>
					<img src="../../public/img/me_more-my-album.png"/>
					<em>朋友的优惠券</em>
				</span>
			</h4>
			<h4>
				<span>
					<img src="../../public/img/me_more-my-album.png"/>
					<em>我的票券</em>
				</span>
			</h4>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				title:"卡包"
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
	h3 p{
		display: flex;align-items: center;
	}
	h3 p a{
		display: inline-block;
		width: 4rem;height:2.95rem;
		padding-right: 1.5rem;
	}
	h3 p a img{
		width: 4rem;height:2.95rem;
	}
	h3 em{
		display: block;
		height: 4.5rem;
		font-size: 1.6rem;
		color: #fff;
		font-style: normal;
	}
	/*卡*/
	.bett{
		margin: 0.75rem 0;
	}
	/*朋友的优惠券*/
	h4{
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 5rem;
		border-bottom: 1px solid #E4E3E8;
		background-color: #fff;
		padding: 0 1.2rem;
		color: #666;
	}
	h4 img{
		display: inline-block;
		width: 2.5rem;height: 2.5rem;
	}
	h4 em{
		display: inline-block;
		color: #666;
		height: 3rem;line-height: 3rem;
		font-size: 1.5rem;
		padding-left: 0.75rem;
		font-style: normal;
	}
	h4 span{
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
	h4 b{
		color: #666;
		font-size: 1.5rem;
		font-weight: 500;
	}
</style>