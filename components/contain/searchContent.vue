<template>
	<div>
		<div class="weui-search-bar weui-search-bar_focusing"  id="searchBar">
			<form class="weui-search-bar__form">
				<div class="weui-search-bar__box">
					<i class="weui-icon-search"></i>
					<input type="search" class="weui-search-bar__input" id="searchInput" placeholder="搜索" required="" @blur="searchChat" v-model="inputtxt">
					<a href="javascript:" class="weui-icon-clear" id="searchClear" @click="clearSearch"></a>
				</div>
				<label class="weui-search-bar__label" id="searchText">
                    <i class="weui-icon-search"></i>
                    <span>搜索</span>
                </label>
			</form>
			<a href="#/tab/wechat" class="weui-search-bar__cancel-btn" id="searchCancel">取消</a>
		</div>
		<div class="contentBox">
			<h3>聊天记录</h3>
			<div v-show="searchArr==''" class="result">未查询到相关信息</div>
			<a href="#/chatdetail" class="weui-cell" v-show="searchArr!=''" v-for="a in searchArr">
				<div class="weui-cell__hd" style="position: relative;margin-right: 10px;">
					<img :src="a.img" style="width: 50px;display: block">
					<!--<span class="weui-badge" style="position: absolute;top: -.4em;right: -.4em;">8</span>-->
				</div>
				<div class="weui-cell__bd">
					<p style="font-size: 16px;" v-text="a.name"></p>
					<p style="font-size: 13px;color: #888888;" v-text="a.content"></p>
				</div>
			</a>
		</div>
	</div>
</template>

<script>
	import $ from 'jQuery';
	export default {
		data(){
			return {
				searchArr:[],
				inputtxt:''
			}
		},
		methods:{
			searchChat(){
				this.searchArr = [];
				var _this = this;
				var sea = this.inputtxt;
				$.ajax({
					type:"post",
					url:"http://120.78.142.165:5555/getSearchList",
					data:{
						sea:sea
					},
					async:true,
					success(data){
						var list = JSON.parse(data);
						for(var i in list){
							_this.searchArr.push({
								name:list[i].chatname,
								content:list[i].youcont,
								img:list[i].youphoto
							})
						}
					},
					error(){
						console.log('error')
					}
				});
			},
			clearSearch(){
				$("#searchInput").val('');
			}
		}
	}
</script>

<style scoped>
	.contentBox {
		background: #fff;
	}
	.contentBox h3{
		font-size: 13px;
		color: #333;
		font-weight: 500;
		line-height: 30px;
		padding-left: 15px;
	}
	.weui-cell {
		border-bottom: 1px solid #dedede;
		color: #000;
	}
	.result{
		padding:15px;
		font-size: 14px;
		color: #666;
		text-align: center;
	}
</style>