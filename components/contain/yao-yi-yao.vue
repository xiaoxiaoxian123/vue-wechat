<template>
	<div class="_full_router component-yao-yi-yao cover-transition">
		<div class="_full_inner">
			<div class="_cover-top">
				<a href="#/tab/discovery">
					<div class="top-back">
						<div class="_ellipsis iconfont icon-return-arrow v-link-active">返回</div>
					</div>
				</a>
				<div class="top-other">
					<div class="_align-right"> <span class="iconfont"></span> </div>
				</div>
				<div class="top-title _effect">
					<p v-for="arr in name"> <span v-text="arr.title" v-show="arr.id==id">摇一摇</span> </p>
				</div>
			</div>
			<div class="_cover-content _effect">
				<div class="yao-yi-yao-panel">
					<div class="mobile-hand"></div>
				</div>
				<ul class="yao-yi-yao-footer">
					<li @click="show(arr)" v-for="arr in name" class="people" style="touch-action: manipulation; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
						<div><img :src="arr.id==id?arr.afImg:arr.beImg" /></div>
						<p v-text="arr.footer" :style="{'color':arr.id==id?'#09bb07':''}"></p>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				name:[
					{
						id:1,
						title:"摇一摇",
						footer:"人",
						beImg:require("../../public/img/yao-yi-yao/shake_icon_people.png"),
						afImg:require("../../public/img/yao-yi-yao/shake_icon_people-hl.png")
					},
					{
						id:2,
						title:"摇歌曲",
						footer:"歌曲",
						beImg:require("../../public/img/yao-yi-yao/shake_icon_music.png"),
						afImg:require("../../public/img/yao-yi-yao/shake_icon_music-hl.png")
					},
					{
						id:3,
						title:"摇电视",
						footer:"电视",
						beImg:require("../../public/img/yao-yi-yao/shake_icon_tv.png"),
						afImg:require("../../public/img/yao-yi-yao/shake_icon_tv-hl.png")
					}
				],
				id:1
				
			}
		},
		methods:{
			show(obj){
				this.id=obj.id;
				console.log(this.id)
			}
		}
	}
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
		transition: all .22s ease
	}
	
	._cover-top .top-title {
		transition: all .2s ease
	}
	
	._cover-content {
		position: relative;
		width: 100%;
		height: 100%;
		overflow: hidden;
		z-index: 1;
		transition: all .2s ease-in-out;
		opacity: 1;
		transform: translateZ(0);
		height: calc(100% - 45px);
		background-color: #efeff4;
		box-shadow: 0 0 41px rgba(0, 0, 0, .1);
		background: #000;
	}
	
	.cover-enter ._cover-top,
	.cover-leave ._cover-top {
		opacity: 0
	}
	
	.cover-enter ._cover-top .top-title,
	.cover-leave ._cover-top .top-title {
		opacity: 0;
		transform: translate3d(50%, 0, 0)
	}
	
	.cover-enter ._cover-content {
		transform: translate3d(80%, 0, 0)
	}
	
	.cover-leave ._cover-content {
		transition: all .25s ease;
		transform: translate3d(100%, 0, 0)
	}
	
	._full_inner {
		position: relative;
		height: 100%;
		z-index: 5
	}
	
	._full_router {
		position: absolute;
		z-index: 10;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%
	}
	
	._effect {
		opacity: 1;
		transition: all .3s ease
	}
	
	._effect--30 {
		transform: translate3d(-30%, 0, 0)
	}
	
	._effect--50 {
		opacity: 0;
		transform: translate3d(-50%, 0, 0)
	}
	
	._cover-top .top-back {
		max-width: 85px;
		float: left
	}
	
	._cover-top .top-back:active {
		color: #bbb
	}
	
	._cover-top .top-back .icon-return-arrow {
		display: flex;
		justify-content: center;
		align-items: center
	}
	
	._cover-top .top-back .iconfont:before {
		font-size: 20px;
		vertical-align: middle
	}
	
	._cover-top .top-title {
		padding: 0 8px;
		overflow: hidden;
		font-size: 18px;
		justify-content: center;
		text-align: center
	}
	
	._cover-top .top-title>p {
		display: flex;
		justify-content: center;
		align-items: center
	}
	
	._cover-top .top-title>p .top-title__text {
		text-align: right;
		overflow: hidden
	}
	
	._cover-top .top-title>p .top-title__num {
		flex-shrink: 0
	}
	
	._cover-top .top-title>p .icon-mute {
		flex-basis: 18px
	}
	
	._cover-top .top-title .icon-mute {
		font-size: 12px;
		color: #878689;
		vertical-align: bottom
	}
	
	._cover-top .top-other {
		height: 100%;
		max-width: 75px;
		min-width: 50px;
		width: auto;
		float: right
	}
	
	._cover-top .top-other .iconfont {
		font-size: 24px
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
		width: 100%;
		padding-top: 0;
		overflow: hidden;
		
	}
	
	.drag-wrap {
		width: 100%;
		height: 100%;
		position: relative;
		overflow: auto;
		background-color: #2e3132;
	}
	
	.drag-inner {
		width: 100%;
		box-shadow: 0px 4px 16px rgba(0, 0, 0, .15);
		background-color: #ffffff;
	}
	
	@font-face {
		font-family: iconfont;
		src: url("//at.alicdn.com/t/font_1474796923_6082804.eot");
		src: url("//at.alicdn.com/t/font_1474796923_6082804.eot?#iefix") format("embedded-opentype"), url("//at.alicdn.com/t/font_1474796923_6082804.woff") format("woff"), url("//at.alicdn.com/t/font_1474796923_6082804.ttf") format("truetype"), url("//at.alicdn.com/t/font_1474796923_6082804.svg#iconfont") format("svg")
	}
	._cover-content {
		color: #979797;
		background-color: #2d3031;
	}
	
	._cover-top>a {
		color: #fff;
	}
	
	.yao-yi-yao-panel {
		height: calc(100% - 90px);
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
	}
	
	.yao-yi-yao-panel .mobile-hand {
		margin-top: -20%;
		width: 50%;
		padding-top: 50%;
		background-image: url(../../public/img/yao-yi-yao/mobile-hand.png);
		background-repeat: no-repeat;
		background-position: center center;
		background-size: contain;
	}
	
	.yao-yi-yao-footer {
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		bottom: 20px;
		width: 100%;
		left: 0;
	}
	
	.yao-yi-yao-footer li {
		text-align: center;
		padding: 0 20px;
	}
	
	.yao-yi-yao-footer li div {
		width: 40px;
		height: 40px;
		margin-bottom: 5px;
		background-size: contain;
		background-repeat: no-repeat;
	}
	.yao-yi-yao-footer li div img{
		width: 40px;
		height: 40px;
	}
</style>