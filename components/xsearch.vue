<template>
	<div class="weui-search-bar" id="searchBar">
            <form class="weui-search-bar__form">
                <div class="weui-search-bar__box">
                    <i class="weui-icon-search"></i>
                    <input type="search" class="weui-search-bar__input" id="searchInput" placeholder="搜索" required="">
                    <a href="javascript:" class="weui-icon-clear" id="searchClear"></a>
                </div>
                <label @click="isShow" class="weui-search-bar__label" id="searchText">
                    <i class="weui-icon-search"></i>
                    <span>搜索</span>
                </label>
            </form>
        </div>
</template>

<script>
	export default {
		methods:{
			isShow(){
//				this.bool = true;
				location.href='#/searchContent'
			}
		}
	}
</script>

<style scoped>
</style>