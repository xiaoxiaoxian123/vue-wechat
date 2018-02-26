<template>
	<div class="_full_router component-sao-yi-sao cover-transition">
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
					<p v-for="arr in name"> <span v-text="arr.title" v-show="arr.id==id"></span> </p>
				</div>
			</div>
			<div class="_cover-content _effect">
				<div class="sao-yi-sao-panel" >
					<div :class="toggle">
						<div class="frame"> <span class="green-line"></span> <span class="left-top"></span> <span class="right-top"></span> <span class="left-bottom"></span> <span class="right-bottom"></span> </div>
						<div class="desc">
							<p v-text="txt"></p>
						</div>
					</div>
				</div>
				<ul class="sao-yi-sao-footer">
					<li class="scan-qr-code current" :style='{"-webkit-tap-highlight-color":aa.id==id?"rgba(0, 0, 0, 0)":""}' @click="show(aa)" v-for="aa in name">
						<div>
							<img :src="aa.id==id?aa.afImg:aa.beImg" />
						</div>
						<p v-text="aa.footer" :style="{'color':aa.id==id?'#09bb07':''}">扫码</p>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				name: [{
						id: 1,
						title: "二维码/条码",
						footer: "扫码",
						beImg: require("../../public/img/sao-yi-sao/scan-qr-code.png"),
						afImg: require("../../public/img/sao-yi-sao/scan-qr-code_hl.png"),
						panel: "scan-qr-code",
						text: '将二维码/条码放入框内,即可自动扫描'
					},
					{
						id: 2,
						title: "封面/电影海报",
						footer: "封面",
						beImg: require("../../public/img/sao-yi-sao/scan-book.png"),
						afImg: require("../../public/img/sao-yi-sao/scan-book_hl.png"),
						panel: "scan-book",
						text: '讲书、CD、电影海报放入框内,即可自动扫描'
					},
					{
						id: 3,
						title: "街景",
						footer: "街景",
						beImg: require("../../public/img/sao-yi-sao/scan-street.png"),
						afImg: require("../../public/img/sao-yi-sao/scan-street_hl.png"),
						panel: "scan-street",
						text: '扫一下周边环境,即可自动扫描'
					},
					{
						id: 4,
						title: "翻译",
						footer: "翻译",
						beImg: require("../../public/img/sao-yi-sao/scan-word.png"),
						afImg: require("../../public/img/sao-yi-sao/scan-word_hl.png"),
						panel: "scan-word",
						text: '将英文单词放入框内'
					}
				],
				id: 1,
				toggle:'scan-qr-code',
				txt:'将二维码/条码放入框内,即可自动扫描'
			}
		},
		methods: {
			show(obj) {
				this.id = obj.id;
				this.toggle = obj.panel;
				this.txt=obj.text;
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
	._cover-top>a {
		color: #fff;
	}
	
	.sao-yi-sao-panel {
		height: calc(100% - 90px);
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
	}
	
	.sao-yi-sao-panel>div {
		width: 100%;
	}
	
	.sao-yi-sao-panel .frame {
		width: 200px;
		height: 200px;
		transform-origin: 50% 50%;
		margin: 0 auto;
		margin-bottom: 15px;
		transition: .5s all ease;
		border: 1px solid #b3b3b3;
		position: relative;
	}
	
	.sao-yi-sao-panel .frame .green-line {
		position: absolute;
		left: 2%;
		top: 2%;
		width: 96%;
		height: 1px;
		background: -webkit-radial-gradient(#72e52d 5%, #54cf21 50%, #0a4a04 80%, #000000 100%);
		box-shadow: 0px 0px 2px rgba(96, 255, 0, .5);
		animation-name: linemove;
		animation-duration: 1500ms;
		animation-delay: 300ms;
		animation-iteration-count: infinite;
		animation-timing-function: linear;
		-webkit-animation-name: linemove;
		-webkit-animation-duration: 1500ms;
		-webkit-animation-delay: 300ms;
		-webkit-animation-iteration-count: infinite;
		-webkit-animation-timing-function: linear;
	}
	
	@-webkit-keyframes linemove {
		0% {
			top: 2%;
		}
		100% {
			top: 95%;
			opacity: 1;
		}
	}
	
	@keyframes linemove {
		0% {
			top: 2%;
		}
		100% {
			top: 95%;
			opacity: 1;
		}
	}
	
	.sao-yi-sao-panel .scan-qr-code  .frame{
		width: 70%;
		padding-top: 70%;
		height: 0;
	}
	
	.sao-yi-sao-panel .scan-book  .frame{
		width: 90%;
		padding-top: 100%;
		height: 0;
	}
	
	.sao-yi-sao-panel .scan-street  .frame{
		width: 90%;
		padding-top: 100%;
		height: 0;
	}
	
	.sao-yi-sao-panel .scan-word  .frame{
		width: 50%;
		height: 50px;
	}
	
	.sao-yi-sao-panel .frame .left-top {
		position: absolute;
		left: -1px;
		top: -1px;
	}
	
	.sao-yi-sao-panel .frame .left-top::before {
		content: "";
		display: block;
		width: 14px;
		height: 2px;
		background-color: #09bb07;
	}
	
	.sao-yi-sao-panel .frame .left-top::after {
		content: "";
		display: block;
		width: 2px;
		height: 14px;
		background-color: #09bb07;
		margin-left: 0px;
		margin-top: -2px;
	}
	
	.sao-yi-sao-panel .frame .right-top {
		position: absolute;
		right: -1px;
		top: -1px;
	}
	
	.sao-yi-sao-panel .frame .right-top::before {
		content: "";
		display: block;
		width: 14px;
		height: 2px;
		background-color: #09bb07;
	}
	
	.sao-yi-sao-panel .frame .right-top::after {
		content: "";
		float: right;
		display: block;
		width: 2px;
		height: 14px;
		background-color: #09bb07;
		margin-left: 0px;
		margin-top: -2px;
	}
	
	.sao-yi-sao-panel .frame .left-bottom {
		position: absolute;
		left: -1px;
		bottom: -1px;
	}
	
	.sao-yi-sao-panel .frame .left-bottom::before {
		content: "";
		display: block;
		width: 2px;
		height: 14px;
		background-color: #09bb07;
		margin-left: 0px;
		margin-top: -2px;
	}
	
	.sao-yi-sao-panel .frame .left-bottom::after {
		content: "";
		display: block;
		width: 14px;
		height: 2px;
		background-color: #09bb07;
	}
	
	.sao-yi-sao-panel .frame .right-bottom {
		position: absolute;
		right: -1px;
		bottom: -1px;
	}
	
	.sao-yi-sao-panel .frame .right-bottom::before {
		content: "";
		display: block;
		width: 2px;
		height: 14px;
		background-color: #09bb07;
		margin-left: 12px;
	}
	
	.sao-yi-sao-panel .frame .right-bottom::after {
		float: left;
		content: "";
		display: block;
		width: 14px;
		height: 2px;
		background-color: #09bb07;
	}
	.sao-yi-sao-panel .desc p{
		color: #fff;
	}
	.sao-yi-sao-footer {
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		bottom: 20px;
		width: 100%;
		left: 0;
	}
	
	.sao-yi-sao-footer li {
		text-align: center;
		padding: 0 10px;
	}
	
	.sao-yi-sao-footer li div {
		width: 40px;
		height: 40px;
		margin-bottom: 5px;
		background-size: contain;
		background-repeat: no-repeat;
	}
	
	.sao-yi-sao-footer li.current p {
		color: #ccc;
	}
	
	.sao-yi-sao-footer li.scan-qr-code div img {
		width: 40px;
		height: 40px;
	}
	
	.sao-yi-sao-footer li.scan-word .frame .green-line {
		display: none;
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
</style>