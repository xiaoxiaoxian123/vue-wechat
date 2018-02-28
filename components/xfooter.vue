<template>
	<div class="weui-tabbar">
        <a href="#/tab/wechat" class="weui-tabbar__item" @click="change(0)" :class="{'weui-bar__item_on':changecolor==0}">
            <span style="display: inline-block;position: relative;">
                <img :src="changecolor==0?arr[0].chat:arr[0].Img" alt="" class="weui-tabbar__icon">
                <span class="weui-badge" style="position: absolute;top: -2px;right: -13px;">8</span>
            </span>
            <p class="weui-tabbar__label">微信</p>
        </a>
        <a href="#/tab/contact" class="weui-tabbar__item" @click="change(1)" :class="{'weui-bar__item_on':changecolor==1}">
            <img :src="changecolor==1?arr[1].chat:arr[1].Img" alt="" class="weui-tabbar__icon">
            <p class="weui-tabbar__label">通讯录</p>
        </a>
        <a href="#/tab/discovery" class="weui-tabbar__item" @click="change(2)" :class="{'weui-bar__item_on':changecolor==2}">
            <span style="display: inline-block;position: relative;">
                <img :src="changecolor==2?arr[2].chat:arr[2].Img" alt="" class="weui-tabbar__icon">
                <span class="weui-badge weui-badge_dot" style="position: absolute;top: 0;right: -6px;"></span>
            </span>
            <p class="weui-tabbar__label">发现</p>
        </a>
        <a href="#/tab/mine" class="weui-tabbar__item" @click="change(3)" :class="{'weui-bar__item_on':changecolor==3}">
            <img :src="changecolor==3?arr[3].chat:arr[3].Img" alt="" class="weui-tabbar__icon" >
            <p class="weui-tabbar__label">我</p>
        </a>
    </div>
</template>

<script>
	import $ from "jQuery"
	export default {
		data(){
			return {
				arr:[{					
					Img:require('../public/img/chat.png'),
					chat:require('../public/img/chat_c.png'),
				},
				{					
					Img:require('../public/img/contact.png'),
					chat:require('../public/img/contact_c.png'),
				},
				{					
					Img:require('../public/img/discovery.png'),
					chat:require('../public/img/discovery_c.png'),
				},
				{					
					Img:require('../public/img/mine.png'),
					chat:require('../public/img/mine_c.png'),
				}
				],
				changecolor:0
			}
		},
		methods:{
			change(id){
				this.changecolor=id;
			}			
		}
	}
</script>

<style scoped="scoped">
	.weui-tabbar{
		position: fixed;
		bottom: 0;
	}
</style>