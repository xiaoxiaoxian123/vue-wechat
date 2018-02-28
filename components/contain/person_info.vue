<template>
  <div>
      <div class="_cover-top"  >
        <div class="top-back" >
            <a href="#/tab/contact" style="color:white;font-size: 16px;"><div class="_ellipsis iconfont icon-return-arrow v-link-active" ><img src="../../public/img/leftsanjiao.png" style="width:12px;height:19px;line-height: 45px;vertical-align: middle;margin-right: 5px;"/>返回</div></a>
        </div>
        <a href="#/con/person_info_set">
       
        <div class="top-other" >
            <div slot="right" class="_align-right"  style="float:right;">
                <span ><img src="../../public/img/pot.png" alt=""></span>
            </div>
        </div>
        </a>
        <div class="top-title _effect" >
            <p >
                <span >详细资料</span>
            </p>
        </div>
    </div>
    <div class="weui_cells" v-for="a in arr">
    <div class="weui_cell" >
        <div class="card_pic _left" >
        	<img :src="a.photo" style="width:55px;border-radius: 5px;"/>
        </div>
        <div class="card_line" >
            <div class="remark" >
                <span v-text="a.beizhu" id="wx"></span>
                <span class="gender gender-man" ></span>
            </div>
            <p class="wxid" >
                <span >微信号:</span>
                <span v-text="a.weixin"></span>
            </p>
            <p class="nickname" >
                <span >昵称:</span>
                <span v-text="a.contactname"></span>
            </p>
        </div>
    </div>
    <div class="weui_cells weui_cells_access" >
        <div class="weui_cell" href="javascript:;" >
            <div class="weui_cell_bd weui_cell_primary" >
                <p >设置备注和标签</p>
            </div>
            <div class="weui_cell_ft" ></div>
        </div>
        <div class="weui_cell" href="javascript:;" >
            <div class="weui_cell_bd weui_cell_primary" >
                <div >
                    <span >电话号码</span>&nbsp;&nbsp;
                    <a v-text="a.phone" style="color:blue"></a>
                </div>
            </div>
        </div>
    </div>
    </div>
    <div class="weui_cells weui_cells_access weui_cells_apm" v-for="aa in arr">
        <a class="weui_cell" href="javascript:;" >
            <div class="weui_cell_bd weui_cell_primary" >
                <span class="apm _left" >地区<i v-text="aa.address" style="font-style: normal;font-size: 15px;color:#888;margin-left:20px;"></i></span>
                <div class="apm_content" ></div>
            </div>
        </a>
        <a class="weui_cell weui_cells_photos" href="javascript:;" >
            <div class="weui_cell_bd weui_cell_primary" >
                <span class="apm _left" >个人相册</span>
                <div class="apm_content" ></div>
            </div>
            <div class="weui_cell_ft" ></div>
        </a>
        <a class="weui_cell" href="javascript:;" >
            <div class="weui_cell_bd weui_cell_primary" >
                <span class="apm _left" >更多</span>
                <div class="apm_content" ></div>
            </div>
            <div class="weui_cell_ft" >
                <span></span>
            </div>
        </a>
        <div style="height: 67px;padding-top: 20px;background-color: #f0eff5;">
        <a href="#/chatdetail" class="weui-btn weui-btn_primary" style="width:365px;" @click="getname(aa.beizhu,aa.s_id)">发消息</a>
        </div>
    </div>  
  </div>
</template>
<script>
	import $ from 'jQuery';
	import io from '../../template/socket.io.js';
	export default{
		data(){
			return {
				arr:[]
			}
		},
		mounted:function(){
			var _this=this;
			$.ajax({
				url:"http://120.78.142.165:5555/showinfo",
				type:"post",
				dataType:'json',
				data:{
					id:_this.$store.state.count+1,
				},
				success(data){
					for(var i in data){
					_this.arr.push({'contactname':data[i].contact_name,'photo':data[i].photo,'id':data[i].id,"beizhu":data[i].beizhu,"phone":data[i].phone,"address":data[i].address,"weixin":data[i].contact_num,"s_id":data[i].socket_id})
					}	
				}
			})
		},
		methods:{
			getname(beizhu,scocket_id){
				this.$store.state.chat_name=beizhu;
				this.$store.state.socket_Id = scocket_id;
				var socket = io("http://120.78.142.165:5555");
				socket.emit("addUser",{
					chatName:this.$store.state.chat_name,
					username:this.$store.state.name
				})
			}
		}
	}
</script>
<style scoped>
     ._cover-top {
    position: relative;
    z-index: 2;
    overflow: hidden;
    height: 45px;
    padding: 0 15px 0 10px;
    line-height: 45px;
    background: linear-gradient(180deg,#303036,#3c3b40);
    opacity: 1;
    color: #fff;
    }
    ._cover-top .top-back {
    max-width: 85px;
    float: left;
}
    ._ellipsis img{
        width:25px;
        vertical-align: middle;
    }
    ._cover-top .top-other {
    height: 100%;
    max-width: 75px;
    min-width: 53px;
    width: auto;
    float: right;
    }
    ._cover-top .top-title {
    padding: 0 8px;
    overflow: hidden;
    font-size: 18px;
    justify-content: center;
    text-align: center;
}
._align-right img{
    vertical-align: middle;
    line-height: 45px;
    width:23px;
}
.card_pic{
    width:55px;
    height:55px;
}
.card_line{
    margin-left: 15px;
}
.remark {
    font-size: 18px;
    color: #4f4f4f;
}
.wxid,.nickname{
    font-size: 14px;
    color: #888;
}
.weui_cells_access{
    font-size:17px;
}
.gender-man{
    background-image: url(../../public/img/contact_male.png);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 50%;
}
.gender {
    display: inline-block;
    width: 20px;
    height: 20px;
    vertical-align: middle;
    margin-left: 4px;
    margin-top: -2px;
}
</style>

