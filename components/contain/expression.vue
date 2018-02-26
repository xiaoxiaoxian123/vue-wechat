<template>
	<div>
		<h3>
			<img src="../../public/img/return.jpg" @click="toMine"/></a><span v-text="title"></span>
		</h3>
		<p class="margins">
			<em>下载最新表情</em>
			<img src="../../public/img/drift-bottle/bottle-writing.png"/>
		</p>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				title:"表情商店"
			}
		},
		methods:{
			toMine:function(){
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
	/*内容区*/
	p{
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 15rem;
		background-color: #FFFFFF;
		padding: 0 1.2rem;
		line-height: 3rem;
		font-size: 1.5rem;
		color: #666;
	}
	p em{
		display: block;
		width: 100%;height: 3rem;
		text-align: left;
		border-bottom: 1px solid #e4e3e8;
	}
	p img{
		width: 100%;height: 12rem;
	}
	.margins{
		margin-top: 1.7rem;
		border-bottom: 0;
	}
</style>