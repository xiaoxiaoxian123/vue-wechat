<template>
	<div>
		<xheader />
		<div class="_full_inner _effect component-find" >
			<div class="_full component-find-content" >
				<div class="weui_cells weui_cells_access" >
					<a href="#/friend-circle">
						<div class="weui_cell" href="javascript:;"  >
						<div class="weui_cell_hd" ><img :src="friendImg" ></div>
						<div class="weui_cell_bd weui_cell_primary" >
							<p >朋友圈</p>
						</div>
						<div class="weui_cell_ft" >
							<div class="find-circle-cell" > </div>
						</div>
					</div>
					</a>
				</div>
				<div class="weui_cells weui_cells_access" >
					<a href="#/sao-yi-sao">
						<div class="weui_cell" href="javascript:;" >
							<div class="weui_cell_hd" ><img :src="saoImg" ></div>
							<div class="weui_cell_bd weui_cell_primary" >
								<p >扫一扫</p>
							</div>
							<div class="weui_cell_ft" >
								<div class="find-circle-cell" > </div>
							</div>
						</div>
					</a>
					<a href="#/yao-yi-yao">
						<div class="weui_cell" href="javascript:;" >
						<div class="weui_cell_hd" ><img :src="yaoImg" ></div>
						<div class="weui_cell_bd weui_cell_primary" >
							<p >摇一摇</p>
						</div>
						<div class="weui_cell_ft" >
							<div class="find-circle-cell" > </div>
						</div>
					</div>
					</a>
				</div>
				<div class="weui_cells weui_cells_access" >
					<a href="#/piao-liu-ping">
						<div class="weui_cell" href="javascript:;" >
						<div class="weui_cell_hd" ><img :src="piaoImg" ></div>
						<div class="weui_cell_bd weui_cell_primary" >
							<p >漂流瓶</p>
						</div>
						<div class="weui_cell_ft" >
							<div class="find-circle-cell" > </div>
						</div>
					</div>
					</a>
				</div>
				<div class="weui_cells weui_cells_access" >
					<a href="https://www.JD.com">
						<div class="weui_cell" href="javascript:;"  style="touch-action: manipulation; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
							<div class="weui_cell_hd" ><img :src="shopImg" ></div>
							<div class="weui_cell_bd weui_cell_primary" >
								<p >购物</p>
							</div>
							<div class="weui_cell_ft" >
								<div class="find-circle-cell" > </div>
							</div>
						</div>
					</a>
					<a href="http://4399.com">
						<div class="weui_cell" href="javascript:;" >
							<div class="weui_cell_hd" ><img :src="gameImg" ></div>
							<div class="weui_cell_bd weui_cell_primary" >
								<p >游戏</p>
							</div>
							<div class="weui_cell_ft" >
								<div class="find-circle-cell" > </div>
							</div>
						</div>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import xheader from "../xheader.vue";
	export default {
		//注册
		components: {
			xheader

		},
		data() {
			return {
				friendImg: require('../../public/img/find_icon-circle.png'),
				saoImg:require('../../public/img/find_icon-qrcode.png'),
				yaoImg:require('../../public/img/find_icon-shake.png'),
				piaoImg:require('../../public/img/find_icon-bottle.png'),
				shopImg:require('../../public/img/find_icon-shopping.png'),
				gameImg:require('../../public/img/find_icon-moregame.png')
			}
		}
	}
</script>
<style scoped="scoped">
	.component-find-content .weui_cells .weui_cell_hd img {
		width: 20px;
		margin-right: 10px;
		display: block;
	}
	.weui_cells a{
		color: #000;
	}
</style>