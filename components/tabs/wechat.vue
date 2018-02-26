<template>
    <div>
        <xheader />
        <xsearch />
        <xchat />
    </div>
</template>
<script>
import xheader from "../xheader.vue";
import xsearch from "../xsearch.vue";
import xchat from "./xchat.vue";
export default {
  components: {
    xheader,
    xsearch,
    xchat
  }
};
</script>
