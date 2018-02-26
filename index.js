import Vue from "vue";
// 路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// 状态管理
import Vuex from 'vuex'
Vue.use(Vuex)
import "weui";
// 全局样式
import "./template/base.css";
import "./template/weui.min.css";

// 选项卡组件
import mine from "./components/tabs/mine.vue";
import discovery from "./components/tabs/discovery.vue";
import contact from "./components/tabs/contact.vue";
import wechat from "./components/tabs/wechat.vue";
import own from "./components/tabs/own.vue";
import con from "./components/tabs/cons.vue";
import tab from "./components/contain/tab.vue";
import login from "./components/tabs/login.vue";
// 容器组件

import chatdetail from "./components/contain/chatdetail.vue";
import chatInfo from "./components/contain/chatInfo.vue";
import name from "./components/contain/changeName.vue";
import cont from "./components/contain/mess-cont.vue";
import coll from "./components/contain/collection.vue";
import sets from "./components/contain/setting.vue";
import expr from "./components/contain/expression.vue";
import card from "./components/contain/card.vue";
import more from "./components/contain/more.vue";
import new_friend from "./components/contain/new_friend.vue";
import group_chat from "./components/contain/group_chat.vue";
import person_info from "./components/contain/person_info.vue";
import friendcircle from "./components/contain/friend-circle.vue";
import person_info_set from "./components/contain/person_info_set.vue";
import add_friend from "./components/contain/add_friend.vue";
import saoyisao from "./components/contain/sao-yi-sao.vue";
import yaoyiyao from "./components/contain/yao-yi-yao.vue";
import piaoliuping from "./components/contain/piao-liu-ping.vue";
import searchContent from "./components/contain/searchContent.vue";
import my_photo from "./components/contain/my_photo.vue";
import safe from "./components/contain/safe.vue";
// 配置路由
var router = new VueRouter({
	routes: [
	    {
            path: "/tab",
            component: tab,
            children: [{
                    path: "wechat",
                    component: wechat
                },
                {
                    path: "mine",
                    component: mine
                },
                {
                    path:"discovery",
                    component:discovery
                },{
                    path:"contact",
                    component:contact

                }]
        },
		 // 默认进入页面的时候跳转到
		{
			path: '/',
			redirect: '/login'
		},
		//我的页面及其组件
		{
			path: "/own",
			component: own,
			children:[
				{
					path: "name",
					component: name,
				},
				{
					path: "cont",
					component: cont,
				},
				{
					path: "coll",
					component: coll,
				},
				{
					path: "sets",
					component: sets,
				},
				{
					path: "expr",
					component: expr,
				},
				{
					path:"card",
					component:card
				},
				{
					path:"more",
					component:more
				},
				{
					path:"my_photo",
					component:my_photo
				},
				{
					path:"safe",
					component:safe
				}
			],
			redirect: '/own/cont'
			
		},
        {
        	path:"/chatdetail",
        	component:chatdetail
        },
         {
        	path:"/chatInfo",
        	component:chatInfo
        },
        {
        	path:"/friend-circle",
        	component:friendcircle
        },
        {
            path: "/con",
            component: con,
            children:[
                {
                    path: "new_friend",
                    component: new_friend
                },{
                    path: "group_chat",
                    component: group_chat
                },{
                    path: "person_info",
                    component: person_info
                },{
                    path: "person_info_set",
                    component: person_info_set
                },{
                    path: "add_friend",
                    component: add_friend
                }
                 
            ]
        },
        {
            path: "/sao-yi-sao",
            component: saoyisao
		},
		{
            path: "/yao-yi-yao",
            component: yaoyiyao
		}, 
		{
            path: "/piao-liu-ping",
            component: piaoliuping
		},
		//登录页面
		{
			path: "/login",
            component: login
        },
		{
			path:"/searchContent",
			component:searchContent
		}
    ]
});

// 配置store
var store = new Vuex.Store({
    state:{
        count:0,
        bool:true,
        name:"",
        id:1,
        wei_num:"",
        img:"",
        chat_name:"",
        chat_Id:'',
        my_photo:'',
        chat_photo:'',
        sex:""
    }
})

new Vue({
	el: "#app",
	router,
	store,
	template: `
        <div>
            <router-view></router-view> 
        </div>
    `
})
