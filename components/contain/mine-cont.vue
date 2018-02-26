<template>
	<div class="mine-cont">
		<!--<a class="margins">
			<div class="left">
				<img src="../../public../../public/img/me_more-my-bank-card.png"/>
				<em>钱包</em>
			</div>
			<img src="../../public../../public/img/right.jpg"/>
		</a>-->
		<a class="margins"  href="#/own/my_photo">
			<div class="left">
				<img src="../../public../../public/img/me_more-my-album.png"/>
				<em>相册</em>
			</div>
			<img src="../../public../../public/img/right.jpg"/>
		</a>
		<a href="#/own/coll">
			<div class="left" >
				<img src="../../public../../public/img/me_more-my-favorites.png"/>
				<em>收藏</em>
			</div>
			<img src="../../public../../public/img/right.jpg"/>
		</a>
		<a href="#/own/card">
			<div class="left">
				<img src="../../public../../public/img/me_my-card-package-icon.png"/>
				<em>卡包</em>
			</div>
			<img src="../../public../../public/img/right.jpg"/>
		</a>
		<a class="margins" href="#/own/expr">
			<div class="left">
				<img src="../../public../../public/img/me_more-expression.png"/>
				<em>表情</em>
			</div>
			<img src="../../public../../public/img/right.jpg"/>
		</a>
		<a class="margins" href="#/own/sets">
			<div class="left">
				<img src="../../public../../public/img/me_more-setting.png"/>
				<em>设置</em>
			</div>
			<img src="../../public../../public/img/right.jpg"/>
		</a>
	</div>
</template>

<script>
</script>

<style scoped="scoped">
	.mine-cont{
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
	}
	.mine-cont a{
		height: 4.3rem;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		background-color: #fff;
		border-bottom: 1px solid #e4e3e8;
		padding: 0 1.2rem;
		align-items: center;
	}
	.mine-cont img{
		width: 0.9rem;height: 1.2rem;
	}
	.left{
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
	.left img{
		width: 2.5rem;height: 2.5rem;
	}
	.left em{
		font-style: normal;
		padding-left: 1.3rem;
		line-height: 2.5rem;
		font-size: 1.5rem;
		color: #000;
	}
	.margins{
		margin-top: 1.7rem;
		border-top: 1px solid #e4e3e8;
	}
</style>