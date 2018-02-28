<template>
  <div>
      <div class="_cover-top" >
        <div class="top-back" >
            <a href="#/tab/contact" style="color:white;font-size: 16px;"><div class="_ellipsis iconfont icon-return-arrow v-link-active" ><img src="../../public/img/leftsanjiao.png" style="width:12px;height:19px;line-height: 45px;vertical-align: middle;margin-right: 5px;"/>返回</div></a>
        </div>
        <div class="top-title _effect">
            <p>
                <span >群聊</span>
            </p>
        </div>
    </div>
    <xsearch />
    <div class="weui_cells group-list" >
        <div class="weui_cell" >
            <div class="weui_cell_hd" >
                <img src="../../public/img/2.jpg" alt="" >
            </div>
            <div class="weui_cell_bd weui_cell_primary" >
                <p >web前端交流群
                    <span >0 </span>
                </p>
            </div>
        </div>
        <div class="weui_cell" >
            <div class="weui_cell_hd" >
                <img src="../../public/img/2.jpg" alt="" >
            </div>
            <div class="weui_cell_bd weui_cell_primary" >
                <p >web前端交流群
                    <span >1 </span>
                </p>
            </div>
        </div>
        <div class="weui_cell" >
            <div class="weui_cell_hd" >
                <img src="../../public/img/2.jpg" alt="" >
            </div>
            <div class="weui_cell_bd weui_cell_primary" >
                <p >web前端交流群
                    <span >2 </span>
                </p>
            </div>
        </div>
        <div class="weui_cell" >
            <div class="weui_cell_hd" >
                <img src="../../public/img/2.jpg" alt="" >
            </div>
            <div class="weui_cell_bd weui_cell_primary" >
                <p >web前端交流群
                    <span >3 </span>
                </p>
            </div>
        </div>
        <div class="weui_cell" >
            <div class="weui_cell_hd" >
                <img src="../../public/img/2.jpg" alt="" >
            </div>
            <div class="weui_cell_bd weui_cell_primary" >
                <p >web前端交流群
                    <span >4 </span>
                </p>
            </div>
        </div>
        <div class="weui_cell" >
            <div class="weui_cell_hd" >
                <img src="../../public/img/2.jpg" alt="" >
            </div>
            <div class="weui_cell_bd weui_cell_primary" >
                <p >web前端交流群
                    <span >5 </span>
                </p>
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
    ._cover-top .top-title {
    padding: 0 8px;
    overflow: hidden;
    font-size: 18px;
    justify-content: center;
    text-align: center;
    width:234px;
}
.weui_cells {
    background-color: #fff;
    line-height: 1.41176471;
    font-size: 17px;
    overflow: hidden;
    position: relative;
}
 .weui_cell_hd img {
    width: 35px;
    border: 0;
    margin-right: 10px;
    display: block;
}
</style>

