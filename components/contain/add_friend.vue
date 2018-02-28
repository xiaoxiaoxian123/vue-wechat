<template>
<div>
  <div class="_cover-top"  >
        <div class="top-back" >
            <a href="#/tab/contact" style="color:white;float: left;font-size: 16px;"><div class="_ellipsis iconfont icon-return-arrow v-link-active" ><img src="../../public/img/leftsanjiao.png" style="width:12px;height:19px;line-height: 45px;vertical-align: middle;margin-right: 5px;"/>通讯录</div></a>
        </div>
        <div class="top-title _effect" style="width: 230px;">
            <p>
                <span style="color:white;">添加朋友</span>
            </p>
        </div>
    </div>
    <div class="search-line">
        <span class="iconfont icon-search" ><img src="../../public/img/search.png" style="width: 20px;vertical-align: middle;"/></span>
        <input type="text" placeholder="微信号/手机号" @input="searchChat" id="searchpeople" v-model="sear"> 
    </div>
    <p class="_align-center" style="padding-top:8px;text-align: center;">
        <span >我的微信号:</span>
        <span >niyaowoa</span>
        <img src="../../public/img/contact_add-friend-my-qr.png" style="width:24px;vertical-align: middle;" class="_align-middle">   
    </p>
    <div class="weui_cells weui_cells_access add-friends-options" :style="{'display':isshow?'block':'none'}" style="margin-top: 10px;">
        <a class="weui_cell" href="javascript:;" >
            <div class="weui_cell_hd" >
                <img src="../../public/img/contact_add-friend-reda.png" >
            </div>
            <div class="weui_cell_bd weui_cell_primary" >
                <p >雷达加朋友</p>
                <p >添加身边的朋友</p>
            </div>
            <div class="weui_cell_ft" ></div>
        </a>
        <a class="weui_cell" href="javascript:;" >
            <div class="weui_cell_hd" >
                <img src="../../public/img/contact_add-friend-addgroup.png" >
            </div>
            <div class="weui_cell_bd weui_cell_primary" >
                <p >面对面建群</p>
                <p >与身边的朋友进入同一个群聊</p>
            </div>
            <div class="weui_cell_ft" ></div>
        </a>
        <a class="weui_cell" href="javascript:;" >
            <div class="weui_cell_hd" >
                <img src="../../public/img/contact_add-friend-scanqr.png" >
            </div>
            <div class="weui_cell_bd weui_cell_primary" >
                <p >扫一扫</p>
                <p >扫描二维码名片</p>
            </div>
            <div class="weui_cell_ft" ></div>
        </a>
        <a class="weui_cell" href="javascript:;" >
            <div class="weui_cell_hd" >
                <img src="../../public/img/contact_add-friend-contacts.png" >
            </div>
            <div class="weui_cell_bd weui_cell_primary" >
                <p >手机联系人</p>
                <p >添加通讯录中的朋友</p>
            </div>
            <div class="weui_cell_ft" ></div>
        </a>
        <a class="weui_cell" href="javascript:;" >
            <div class="weui_cell_hd" >
                <img src="../../public/img/contact_add-friend-offical.png" >
            </div>
            <div class="weui_cell_bd weui_cell_primary" >
                <p >公众号</p>
                <p >获得更多资讯和服务</p>
            </div>
            <div class="weui_cell_ft" ></div>
        </a>
    </div>
    <div class="contentBox" :style="{'display':isshow?'none':'block'}">
			<h3>添加朋友</h3>
			<div v-show="searchArr==''" class="result">未查询到相关信息</div>
			<a href="##" class="weui-cell" v-show="searchArr!=''" v-for="ar in searchArr">
				<div class="weui-cell__hd" style="position: relative;margin-right: 10px;border-radius: 5px;">
					<img :src="ar.photo" style="width: 50px;display: block">
				</div>
				<div class="weui-cell__bd">
					<div style="float: left;">
						<p style="font-size: 16px;" v-text="ar.contact_name"></p>
						<p style="font-size: 13px;color: #888888;" v-text="ar.phone"></p>
					</div>
					<p id="ADD" @click="ADD">添加</p>
				</div>
			</a>
			<div class="weui-dialog"  v-show="bool">
		    <div class="weui-dialog__bd">添加成功</div>
		    <div class="weui-dialog__ft">
		        <a href="#/tab/wechat" class="weui-dialog__btn weui-dialog__btn_primary">确定</a>
		    </div>
    </div>
		</div>
</div>
</template>
<script>
	import $ from "jQuery";
	export default{
		data(){
			return{
				isshow:true,
				searchArr:[],
                bool:false,
                sear:''
			}
		},
		methods:{
			searchChat(){
				this.isshow=false;
				var _this = this;
				var stra= this.sear;
				$.ajax({
					type:"post",
					url:"http://120.78.142.165:5555/getstrager",
					dataType:'json',
					data:{
						strager_num:stra
					},
					success(data){
						_this.searchArr=data;
						
					},
					error(){
						console.log('error')
					}
				});
			},
			ADD(){
				this.bool=true;
				var self=this;
				$.ajax({
					type:"post",
					url:"http://120.78.142.165:5555/addstrager",
					dataType:'json',
					data:{
						arr:JSON.stringify(self.searchArr)
					},
					success(data){
						$.ajax({
							type:"post",
							url:"http://120.78.142.165:5555/deletestrager",
							dataType:'json',
							data:{
								Arr:JSON.stringify(self.searchArr)
							},
							error(){
								console.log('error')
							}
						})
					},
					error(){
						console.log('error')
					}
				});
			}
		}
	}
</script>
<style scoped>
	._cover-top{
	height: 45px;
    padding: 0 15px 0 10px;
    line-height: 45px;
    background: linear-gradient(180deg,#303036,#3c3b40);
    }
    
    ._cover-top .top-title {
    padding: 0 8px;
    overflow: hidden;
    font-size: 18px;
    justify-content: center;
    text-align: center;
    }
    .search-line {
    position: relative;
    height: 40px;
    padding-left: 30px;
    padding-top: 5px;
    padding-bottom: 5px;
    background-color: #fff;
    border-top: 1px solid #d9d9d9;
    border-bottom: 1px solid #d9d9d9;
    margin-top: 20px;
}
.search-line .icon-search{
    color: #40b938;
}
.search-line input {
    width: calc(100% - 30px);
    font-size: 16px;
    height: 100%;
    border: 0;
    outline: none;
    vertical-align: middle;
}
.add-friends-options img {
    width: 35px;
    display: block;
    margin-right: 10px;
}
.add-friends-options .weui_cell_primary p {
    font-size: 15px;
}
.add-friends-options .weui_cell_primary p:last-child {
    font-size: 12px;
        color: #b7b7b7;
}
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
	#ADD{
    float: right;
    width: 50px;
    text-align: center;
    line-height: 30px;
    height: 30px;
    background: #09bb07;
    border-radius: 5px;
    margin-top: 7px;
    color: #fff;
}
</style>

