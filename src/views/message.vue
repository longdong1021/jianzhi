<template>
  <div>
    <div class="messagetop">消息通知</div>
    <div class="submain">
      <div class="messages">
        <ul>
          <li>
            <p class="iconfont" style="color:#26a2ff;">&#xe66d;</p>
            <p>工作预约</p>
          </li>
          <li>
            <p class="iconfont" style="color:#67bc00;">&#xe613;</p>
            <p>在线客服</p>
          </li>
          <li>
            <p class="iconfont" style="color:orange;">&#xe614;</p>
            <p>系统通知</p>
          </li>
        </ul>
      </div>
      <div class="instructions clearfix">
        <img src="/images/xuzhi.png" alt />
        <p>
          1. 确保兼职的可靠性，是否收取额外费用
          <br />2. 看准兼职的时间，别耽误上工时间
          <br />3. 确认兼职的地点，避免不必要的麻烦
          <br />
        </p>
      </div>
    </div>
    <navbar></navbar>
  </div>
</template>
<script>
import navbar from "@/components/navbar";

export default {
  name: "message",
  components: {
    navbar
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
<style scoped>
.messagetop {
  font-size: 0.48rem;
  height: 0.96rem;
  line-height: 0.96rem;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
  background: #fff;
  padding: 0 0.2rem;
}
.submain {
  margin: 0.96rem 0.2rem 0 0.2rem;
}
.messages {
  padding-top: 0.4rem;
}
.messages h2 {
  font-size: 0.4rem;
  margin: 0 0.3rem;
  padding-top: 0.4rem;
  padding-bottom: 0.1rem;
}
.messages ul {
  display: flex;
}
.messages ul li {
  font-size: 0.3rem;
  flex: 1;
  text-align: center;
  line-height: 0.36rem;
  padding-top: 0.2rem;
}
.messages ul li svg {
  width: 0.8rem;
  height: 0.8rem;
}
.instructions {
  font-size: 0.28rem;
  margin-top: 1.2rem;
  border-top: 0.2rem solid rgb(248, 248, 248);
  padding-top: 1rem;
}
.instructions img {
  width: 2rem;
  float: left;
}
.instructions p {
  font-size: 0.26rem;
  line-height: 0.68rem;
  float: right;
  width: 5.4rem;
  padding-top: 0.2rem;
  padding-left: 0.2rem;
}
.iconfont {
  font-size: 0.6rem;
  height: 0.8rem;
  line-height: 0.8rem;
}
</style>
