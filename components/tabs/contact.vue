<template>
<div>
    <xheader/>
    <xsearch/>
    <div style="padding-bottom:30px;background-color: #EFEFF4;">
        <div class="weui_cells_contact-head weui_cells weui_cells_access" style="margin-top:-1px">
            <a class="weui_cell" href="#/con/new_friend" >
                <div class="weui_cell_hd" >
                    <img class="img-obj-cover" src="../../public/img/contact_top-friend-notify.png" > </div>
                <div class="weui_cell_bd weui_cell_primary" >
                    <p >新的朋友</p>
                </div>
            </a>
            <a class="weui_cell" href="#/con/group_chat" >
                <div class="weui_cell_hd" >
                    <img class="img-obj-cover" src="../../public/img/contact_top-addgroup.png" > </div>
                <div class="weui_cell_bd weui_cell_primary" >
                    <p >群聊</p>
                </div>
            </a>
            <a class="weui_cell" href="" >
                <div class="weui_cell_hd" >
                    <img class="img-obj-cover" src="../../public/img/contact_top-tag.png" > </div>
                <div class="weui_cell_bd weui_cell_primary" >
                    <p >标签</p>
                </div>
            </a>
            <a class="weui_cell" href="" >
                <div class="weui_cell_hd" >
                    <img class="img-obj-cover" src="../../public/img/contact_top-offical.png" >
                </div>
                <div class="weui_cell_bd weui_cell_primary" >
                    <p >公众号</p>
                </div>
            </a>
        </div>
        <div class="contact-friends " >
            <p class="contact-alpha" >H</p>
            <a href="#/con/person_info" style="color:black" v-for="(items,index) in arr" @click="showinfo(index)">
                <div class="weui_cells weui_cells_access" style="border-bottom: 1px solid #D9D9D9;">
                    <div class="weui_cell"  style="touch-action: manipulation; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
                        <div class="weui_cell_hd" >
                            <img  :src="items.photo">
                        </div>
                        <div class="weui_cell_bd weui_cell_primary" >
                            <p v-text="items.contactname"></p>
                        </div>
                    </div>
                </div>
            </a>
            
        </div>
    </div>
</div>
</template>
<script>
    import xheader from "../xheader.vue";
    import xsearch from "../xsearch.vue";
    import  $ from "jQuery"
    export default {
    	data(){
    		return{
    			arr:[],
    			
    		}
    	},
    	mounted:function(){
    		var _this=this;
    		$.ajax({
    			url:"http://120.78.142.165:5555/getcontactList",
    			type:"post",
    			success(data){
					var obj = JSON.parse(data)	
					for(var i in obj){						
						_this.arr.push({'contactname':obj[i].beizhu,'photo':obj[i].photo,'id':obj[i].id})
						
					}
				},
				error(){
					console.log('error');
				}
    		})
    	},
    	methods:{
	    		showinfo(index){	
		    		this.$store.state.count=index;
    		}
    	},
        components:{
            xheader,
            xsearch
    }
}
</script>
<style scoped> 
    .weui_cells_contact-head {
    margin-top: 0;
}

.weui_cells_contact-head .weui_cell {
    padding: 9px 15px
}

.weui_cells_contact-head .weui_cell_hd {
    height: 36px;
    width: 36px;
    overflow: hidden;
    margin-right: 10px;
}

.img-obj-cover {
    display: block;
    border: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.component-contact {
    background: #f1f0f6;
    overflow: auto;
}

.contact-friends .weui_cells::before,
.contact-friends .weui_cells::after {
    visibility: hidden;
}

.contact-friends .weui_cells {
    margin-top: 0;
}

.contact-alpha {
    padding-left: 15px;
    height: 20px;
    line-height: 20px;
    font-size: 14px;
    color: #888888;
}

.contact-friends .weui_cell_primary {
    font-size: 16px;
}

.contact-friends .weui_cell_hd img {
    width: 35px;
    margin-right: 5px;
    display: block;
}
.weui_cell:before{
	    border-top: 1px solid #d9d9d9;
}
.contact-friends{
	margin-bottom: 50px;
}
</style>

