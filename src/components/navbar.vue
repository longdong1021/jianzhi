<template>
  <!--底部选项卡-->
  <mt-tabbar v-model="selected" class="navbar">
    <mt-tab-item id="home">
      <p class="iconfont">&#xe603;</p>
      首页
    </mt-tab-item>
    <mt-tab-item id="feature">
      <p class="iconfont">&#xe6b8;</p>
      精选
    </mt-tab-item>
    <mt-tab-item id="message">
      <p class="iconfont">&#xe613;</p>
      消息
    </mt-tab-item>
    <mt-tab-item id="user">
      <p class="iconfont">&#xe601;</p>
      我的
    </mt-tab-item>
  </mt-tabbar>
  <!--底部选项卡-->
</template>
<script>
import { debuglog } from "util";

export default {
  name: "navbar",
  data() {
    return {
      selected: "home"
    };
  },
  watch: {
    selected: function(val) {
      this.$router.push(val);
    }
  },
  mounted() {
    if (this.$route.fullPath.substr(1) == "") {
      this.selected = "home";
    } else {
      this.selected = this.$route.fullPath.substr(1);
    }
    console.log(this.selected);
  }
};
</script>
<style scoped>
.navbar {
  color: #999;
}
.mint-tabbar {
  position: fixed;
  z-index: 999999;
}
.navsvg {
  width: 25%;
  height: 25%;
  clear: both;
  margin: 0 auto;
  display: block;
}
.iconfont {
    font-size: .48rem;
    height: 0.6rem;
    line-height: 0.6rem;
}

.mint-tabbar > .mint-tab-item.is-selected {
    background-color: #eaeaea;
    color: rgb(67, 167, 7);
}
</style>
