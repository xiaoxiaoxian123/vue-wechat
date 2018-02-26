<template>
	<div>
		<xheader />
		<titles></titles>
		<cont></cont>
	</div>
	
</template>

<script>
	import xheader from "../xheader.vue";
	import titles from "../contain/mine-title.vue";
	import cont from "../contain/mine-cont.vue";
	export default {
		components:{
			xheader,
			titles,
			cont
		}
	}
</script>

<style>
html{font-size: 62.5%;}/*1rem=10px*/
a img{
  border:0;
}
a{
  text-decoration:none;
  -webkit-tap-highlight-color:rgba(0, 0, 0, 0);
}
</style>
