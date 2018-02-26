<template>
	<div>
		<h3>
			<img src="../../public/img/return.jpg" @click="toMine"/></a><span v-text="title"></span>
		</h3>
		<a href="##">
			<p>
				<span>
					<img src="../../public/img/1.jpg"/>
					<em>搜狗</em>
				</span>
				<b>20天前</b>
			</p>
			<img src="../../public/img/drift-bottle/bottle-button-fish.png"/>
		</a>
		<a href="##">
			<p>
				<span>
					<img src="../../public/img/1.jpg"/>
					<em>搜狗</em>
				</span>
				<b>20天前</b>
			</p>
			<img src="../../public/img/drift-bottle/bottle-button-fish.png"/>
		</a>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				title:"我的收藏"
			}
		},
		methods:{
			toMine:function(){
//				router.push({
//					path: "mine",
//                  component: mine
//				})
				location.href = "#/tab/mine";
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
	}
	h3 img{
		width: 4rem;height:2.95rem;
	}
	a{
		padding:1.2rem;
		height: 15rem;
		display: flex;
		flex-direction: column;
		background-color: #fff;
		margin: 0.75rem 0;
		overflow: hidden;
		justify-content: flex-start;
	}
	a img{
		width: 15rem;height: 12rem;
	}
	a p{
		display: flex;height: 2rem;
		justify-content: space-between;
		font-size: 0.9rem;
		line-height: 2rem;
	}
	a p img{
		width: 2rem;height: 2rem;
		border-radius: 1rem;
	}
	a p span{
		height: 2rem;
		display: flex;
		align-items: center;
	}
	a p em{
		font-style: normal;
		padding-left: 1.2rem;
		color: #666;
	}
	a p b{
		height: 2rem;
		color: #999;
		font-style: normal;
		font-weight: 500;
	}
</style>