<template>
	<div class="_full_router component-drift-bottle cover-transition">
		<div class="_full_inner">
			<div class="_cover-top">
				<a href="#/tab/discovery">
					<div class="top-back">
						<div class="_ellipsis iconfont  v-link-active"><img src="../../public/img/leftsanjiao.png" style="width:12px;height:19px;line-height: 45px;vertical-align: middle;margin-right: 5px;"/>返回</div>
					</div>
				</a>
				<div class="top-other">
					<div class="_align-right"> <span class="iconfont"></span> </div>
				</div>
				<div class="top-title _effect">
					<p> <span>漂流瓶</span> </p>
				</div>
			</div>
			<div class="_cover-content _effect">
				<div class="drift-bottle-panel">
					<div class="mobile-hand"></div>
				</div>
				<ul class="drift-bottle-footer">
					<li class="throw current" style="touch-action: manipulation; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
						<div></div>
						<p>扔一个</p>
					</li>
					<li class="pickup" style="touch-action: manipulation; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
						<div></div>
						<p>捡一个</p>
					</li>
					<li class="bottle" style="touch-action: manipulation; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
						<div></div>
						<p>我的瓶子</p>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	ul li {
		list-style: none;
	}
	
	._cover-top {
		position: relative;
		z-index: 2;
		overflow: hidden;
		height: 45px;
		padding: 0 15px 0 10px;
		line-height: 45px;
		background: linear-gradient(180deg, #303036, #3c3b40);
		opacity: 1;
		color: #fff;
		user-select: none;
		-webkit-user-select: none;
		transition: all .22s ease;
	}
	
	._cover-top .top-back {
		max-width: 85px;
		float: left;
	}
	
	._cover-top .top-back .icon-return-arrow {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	._ellipsis,
	._ellipsis-3 {
		overflow: hidden;
		text-overflow: ellipsis;
	}
	
	._ellipsis {
		white-space: nowrap;
	}
	
	.iconfont {
		font-family: iconfont!important;
		font-size: 16px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-webkit-text-stroke-width: .2px;
		-moz-osx-font-smoothing: grayscale;
	}
	
	._cover-top .top-back .iconfont:before {
		font-size: 20px;
		vertical-align: middle;
	}
	
	.icon-return-arrow:before {
		content: "\E60A";
	}
	
	:after,
	 :before {
		box-sizing: inherit;
	}
	
	._cover-top .top-title {
		padding: 0 8px;
		overflow: hidden;
		font-size: 18px;
		justify-content: center;
		text-align: center;
	}
	
	._cover-top .top-title {
		transition: all .2s ease;
	}
	
	._effect {
		opacity: 1;
		transition: all .3s ease;
	}
	
	._cover-top .top-title>p {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	._cover-content {
		color: #979797;
		background-image: url(../../public/img/drift-bottle/bottle-bkg.jpg);
		background-position: center center;
		background-size: cover;
		background-repeat: no-repeat;
		height: 622px;
	}
	
	._cover-top>a {
		color: #fff;
	}
	
	.drift-bottle-panel {
		height: calc(100% - 90px);
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
	}
	
	.drift-bottle-footer {
		display: flex;
		justify-content: space-around;
		align-items: center;
		position: absolute;
		bottom: 0px;
		width: 100%;
		left: 0;
		color: #ffffff;
		background-image: url(../../public/img/drift-bottle/bottle-board.png);
		background-repeat: no-repeat;
		background-size: contain;
		background-position: center bottom;
	}
	
	.drift-bottle-footer li {
		text-align: center;
	}
	
	.drift-bottle-footer li div {
		width: 70px;
		height: 70px;
		margin: 0 auto;
		background-size: cover;
		background-position: center center;
		background-repeat: no-repeat;
	}
	
	.drift-bottle-footer li.throw div {
		background-image: url(../../public/img/drift-bottle/bottle-button-throw.png);
	}
	
	.drift-bottle-footer li.pickup div {
		background-image: url(../../public/img/drift-bottle/bottle-button-fish.png);
	}
	
	.drift-bottle-footer li.bottle div {
		background-image: url(../../public/img/drift-bottle/bottle-button-mine.png);
	}
</style>