<template>
    <div>
        <router-view></router-view>
        <xfooter />
    </div>
</template>
<script>
// 引入公共组件
import xfooter from "../xfooter.vue"
export default {
  components:{
      xfooter
  }
}
</script>

