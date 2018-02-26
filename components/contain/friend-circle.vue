<template>
	<div class="_full_router component-albums-friends cover-transition">
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
					<p> <span>朋友圈</span> </p>
				</div>
			</div>
			<div class="_cover-content _effect">
				<div class="drag-reflash" style="top: -40px; transform: rotate(0deg);"></div>
				<div class="drag-wrap" id="drag-wrap">
					<div class="drag-inner" id="drag-inner" style="transform: translate3d(0px, 0px, 0px);">
						<header class="home-pic">
							<div class="home-pic-base">
								<div class="top-pic">
									<div class="top-pic-inner"><img :src="photo" style="width: 100%;"/></div>
								</div>
								<div class="top-name _ellipsis" v-text="name"></div>
							</div>
						</header>
						<section class="home-content">
							<div class="weui-panel__bd">
								<a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg" v-for="item in arr">
									<div class="weui-media-box__hd">
										<img class="weui-media-box__thumb" :src="item.img">
									</div>
									<div class="weui-media-box__bd">
										<h4 class="weui-media-box__title">{{item.contact_name}}</h4>
										<p class="weui-media-box__desc">{{item.trends}}</p>
										<p class="weui-media-box__desc"><img :src="item.img"></p>
										<p class="weui-media-box__desc call">
											<span id="show_time">{{item.time}}</span>
											<transition name="toggle">
												<div class="box_panel">
													<span class="panel" v-show="isShowSideBar" >
														<em class="Zan" @click="dianZan" >
															<img src="../../public/img/xin.png" alt="" />赞
														</em>
														<em class="pinglun">
															<img src="../../public/img/ping.png" alt="" />评论
														</em>
													</span>
												</div>
											</transition>
											<span @click="showSide" class="dianZan">
												<img src="../../public/img/comment.png"  />
											</span>
										</p>
										<p v-show="bool" class="weui-media-box__desc name_info"><img src="../../public/img/star.png" alt="" />{{item.contact_name}}</p>
									</div>
								</a>
							</div>
							<div class="weui-panel__ft">
								<a @click="showMore" href="javascript:void(0);" class="weui-cell weui-cell_access weui-cell_link">
									<div class="weui-cell__bd">查看更多</div>
									<span class="weui-cell__ft"></span>
								</a>
							</div>
						</section>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import $ from 'jQuery';
	export default {
		data() {
			return {
				arr: [],
				num: 0,
				isShowSideBar: false,
				bool: false,
				photo:this.$store.state.img,
				name:this.$store.state.name,
			};
		},
		mounted: function() {
			this.showMore();
		},
		methods: {
			showMore() {
				console.log(this.$store.state)
				var _this = this;
				this.num++;
				$.ajax({
					type: "post",
					url: "http://120.78.142.165:5555/getFriendCircleTrend",
					async: true,
					dataType: "json",
					data: {
						id: _this.num
						
					},
					success: function(data) {
						//console.log(data)
						
						_this.arr = _this.arr.concat(data);
					}
				});
			},
			showSide() {
				this.isShowSideBar = !this.isShowSideBar;
				//console.log(this.isShowSideBar)
			},
			dianZan() {
				this.bool = !this.bool;
				this.isShowSideBar = false;
				
			}
		}
	};
</script>

<style scoped>
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
	
	.home-pic {
		width: 100%;
		margin-top: -90px;
		position: relative;
		height: 370px;
		background: url(../../public/img/maomao.jpg) no-repeat center center;
		background-size: cover;
	}
	
	.home-pic-base {
		position: absolute;
		right: 12px;
		bottom: -22px;
		width: 100%;
		height: 70px;
	}
	
	.home-pic-base .top-pic {
		width: 140px;
		height: 140px;
		padding: 3px;
		transform: scale(.5);
		transform-origin: 100% 0%;
		background-color: #ffffff;
		border: 1px solid #cccccc;
		float: right;
	}
	
	.home-pic-base .top-name {
		position: absolute;
		left: 20px;
		right: 105px;
		top: 10px;
		font-size: 20px;
		text-align: right;
		color: #ffffff;
		overflow: hidden;
	}
	
	.top-pic-inner {
		width: 100%;
		height: 100%;
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center center;
		
	}
	
	.home-content {
		padding-top: 45px;
		min-height: 500px;
	}
	
	._cover-top>a {
		color: #fff;
	}
	
	.weui-media-box_appmsg .weui-media-box__hd {
		width: 40px;
		height: 40px;
		line-height: 40px;
		margin-right: 0.4rem;
	}
	
	.weui-media-box_appmsg .weui-media-box__hd img {
		border-radius: 5px;
	}
	
	.weui-media-box__title {
		color: cornflowerblue;
		font-size: 12px;
		font-weight: bold;
	}
	
	.weui-media-box__desc {
		color: #000;
		font-size: 12px;
		margin-top: 10px;
	}
	
	.weui-media-box_appmsg {
		align-items: flex-start;
	}
	
	.call {
		overflow: hidden;
		line-height: 35px;
		height: 35px;
		position: relative;
		border-radius: 3px;
	}
	
	.call .dianZan {
		width: 30px;
		height: 30px;
		position: absolute;
		left: 274px;
	}
	
	.call .dianZan img {
		width: 30px;
		height: 30px;
		margin-top: 4px;
	}
	.call .box_panel {
		position: absolute;
		left: 112px;
		top: 0;
		display: inline-block;
		width: 160px;
		height: 35px;
		/*background: #333333;*/
		line-height: 35px;
	}
	.call .box_panel .panel {
		position: absolute;
		left: 0px;
		top: 0;
		display: inline-block;
		width: 160px;
		height: 35px;
		background: #333333;
		line-height: 35px;
	}
	
	.call .panel .Zan {
		font-style: normal;
		display: inline-block;
		width: 60px;
		height: 35px;
		color: #fff;
		line-height: 35px;
		margin: 0 18px;
	}
	
	.call .panel .pinglun {
		font-style: normal;
		display: inline-block;
		width: 60px;
		height: 35px;
		color: #fff;
		line-height: 35px;
	}
	
	.call .panel .Zan img {
		height: 18px;
		width: 18px;
		vertical-align: middle;
		margin-right: 3px;
	}
	
	.call .panel .pinglun img {
		height: 20px;
		width: 20px;
		vertical-align: middle;
		margin-right: 3px;
	}
	
	.name_info {
		height: 25px;
		line-height: 25px;
		background: #EDEDED;
		color: #86C4E5;
		border-radius: 3px;
		margin-top: 2px;
	}
	
	.name_info img {
		height: 15px;
		width: 16px;
		vertical-align: middle;
		margin-right: 2px;
		margin-left: 5px;
	}
	
	/*.toggle-enter-active {
		animation: move 3s;
	}
	
	.toggle-leave-active {
		animation: move 3s;
	}
	
	@keyframes move {
		from {
			left: 200px
		}
		to {
			left: 114px
		}
	}*/
</style>