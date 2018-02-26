<template>
<div>
    <div class="_cover-top"  >
        <div class="top-back" >
            <a href="#/tab/contact" style="color:white;"><div class="_ellipsis iconfont icon-return-arrow v-link-active" ><img src="../../public/img/leftsanjiao.png" style="width:12px;height:19px;line-height: 45px;vertical-align: middle;margin-right: 5px;"/>通讯录</div></a>
        </div>
        <div class="top-other" >
            <div slot="right" class="_align-right"  style="float:right;">
                <span ><a href="#/con/add_friend"><img src="../../public/img/jia.png" alt=""></a></span>
            </div>
        </div>
        <div class="top-title _effect" >
            <p >
                <span >新朋友</span>
            </p>
        </div>
    </div>
    
    <div class="weui_cell" >
        <dl class="add-tel-address" >
            <dt >
                <img src="../../public/img/phone.png" alt="">
            </dt>
            <dd >添加手机联系人</dd>
        </dl>
    </div>
    <div class="weui_cells message-list" style="margin-top: 0px;" >
        <div class="weui_cell" >
            <div class="weui_cell_hd" >
                <img src="//ad-gold-cdn.xitu.io/14999140634069b6825290779221783b3b59fbba0addd.jpg" alt="" style="width:40px;margin-right:5px;display:block"
                    > </div>
            <div class="weui_cell_bd weui_cell_primary" >
                <p >
                    <b >陌生人</b>
                </p>
                <p >
                    <span >我是群聊""的</span>
                    <span >陌生人</span>
                </p>
            </div>
            <div class="weui_cell_ft" >已添加</div>
        </div>
        <div class="weui_cell" >
            <div class="weui_cell_hd" >
                <img src="//ad-gold-cdn.xitu.io/14999140634069b6825290779221783b3b59fbba0addd.jpg" alt="" style="width:40px;margin-right:5px;display:block"
                    >
            </div>
            <div class="weui_cell_bd weui_cell_primary" >
                <p >
                    <b >陌生人</b>
                </p>
                <p >
                    <span >我是群聊""的</span>
                    <span >陌生人</span>
                </p>
            </div>
            <div class="weui_cell_ft" >已拒绝</div>
        </div>
        <div class="weui_cell" >
            <div class="weui_cell_hd" >
                <img src="//ad-gold-cdn.xitu.io/14999140634069b6825290779221783b3b59fbba0addd.jpg" alt="" style="width:40px;margin-right:5px;display:block"
                    >
            </div>
            <div class="weui_cell_bd weui_cell_primary" >
                <p >
                    <b >陌生人</b>
                </p>
                <p >
                    <span >我是群聊""的</span>
                    <span >陌生人</span>
                </p>
            </div>
            <div class="weui_cell_ft" >
                <a href="javascript:;" class="weui_btn weui_btn_mini weui_btn_primary" >接受</a>
            </div>
        </div>
    </div>
</div>
</template>
<script>
    import xsearch from "../xsearch.vue"
    export default{
        components:{
            xsearch
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
}
.weui_cell {
    padding: 10px 15px;
    position: relative;
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
}
.add-tel-address{
    margin: 0 auto;
    text-align: center;
}
.add-tel-address dt{
    height:50px;
    line-height: 50px;
}
.add-tel-address dt img{
    width:30px;
    vertical-align: middle;
}
.add-tel-address dd {
    font-size: 14px;
    color: #929292;
}
.weui_cells {
    margin-top: 1.17647059em;
    background-color: #fff;
    line-height: 1.41176471;
    font-size: 17px;
    overflow: hidden;
    position: relative;
}
.weui_cell_primary p b{
    font-size: 18px;
    font-weight: 400;
}
.weui_cell_primary p span {
    font-size: 14px;
    color: #888;
}
</style>

