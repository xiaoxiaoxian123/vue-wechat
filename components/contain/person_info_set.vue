<template>
<div>
  <div class="_cover-top"  >
        <div class="top-back" >
            <a href="#/con/person_info" style="color:white;float: left;font-size: 16px;"><div class="_ellipsis iconfont icon-return-arrow v-link-active" ><img src="../../public/img/leftsanjiao.png" style="width:12px;height:19px;line-height: 45px;vertical-align: middle;margin-right: 5px;"/>返回</div></a>
        </div>
        <div class="top-title _effect" style="width: 230px;">
            <p >
                <span style="color:white;">资料设置</span>
            </p>
        </div>
    </div>
    <div class="weui_cells weui_cells_access" >
        <a class="weui_cell" href="javascript:;">
            <div class="weui_cell_bd weui_cell_primary" >
                <p >设置备注及标签</p>
            </div>
            <div class="weui_cell_ft" > </div>
        </a>
    </div>
    <div class="weui_cells weui_cells_access" >
        <a class="weui_cell" href="javascript:;">
            <div class="weui_cell_bd weui_cell_primary" >
                <p>发送他的名片</p>
            </div>
            <div class="weui_cell_ft" > </div>
        </a>
    </div>
    <div class="weui_cells weui_cells_form" >
        <div class="weui_cell weui_cell_switch" >
            <div class="weui_cell_hd weui_cell_primary" >设为星标朋友</div>
            <div class="weui_cell_ft" >
                <input class="weui_switch" type="checkbox"> </div>
        </div>
    </div>
    <div class="weui_cells weui_cells_form" >
        <div class="weui_cell weui_cell_switch" >
            <div class="weui_cell_hd weui_cell_primary" >不让他(她)看我的朋友圈</div>
            <div class="weui_cell_ft" >
                <input class="weui_switch" type="checkbox" > </div>
        </div>
        <div class="weui_cell weui_cell_switch">
            <div class="weui_cell_hd weui_cell_primary" >不看他(她)的朋友圈</div>
            <div class="weui_cell_ft">
                <input class="weui_switch" type="checkbox"> </div>
        </div>
    </div>
    <div class="weui_cells weui_cells_access" >
        <div class="weui_cell weui_cell_switch" >
            <div class="weui_cell_hd weui_cell_primary" >加入黑名单</div>
            <div class="" >
                <input class="weui_switch" type="checkbox" > </div>
        </div>
        <div class="weui_cell">
            <div class="weui_cell_hd weui_cell_primary">投诉</div>
            <div class="weui_cell_ft" > </div>
        </div>
    </div>
</div>
</template>
<style>
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
    width:234px;
}
</style>

