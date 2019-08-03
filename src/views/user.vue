<template>
  <div class="user">
    <div class="featuretop">
      <h2>Personal</h2>
      <span class="iconfont iconfont-top">&#xe604;</span>
    </div>
    <div class="userbox">
      <div class="userinfo">
        <img src="@/assets/img/userimg.png" alt class="userimg" />
        <div class="user_title">
          <dl>
            <dt class="user_max_title">15910807805</dt>
            <dd class="user_min_title">暂未设置个性签名</dd>
          </dl>
        </div>
        <div class="userinfofor"></div>
      </div>
      <div class="userjianli">
        <h2 class="userjname">我的简历</h2>
        <p class="userjinfo">完善简历提高你的录取率！</p>
        <mt-button type="primary" size="small">去完善</mt-button>
        <img src="@/assets/img/myjob.png" alt class="userjad" />
      </div>
      <div class="usertype">
        <h2>我的报名</h2>
        <ul>
          <li>
            <div class="iconfont iconfont-type">&#xe748;</div>
            <p>已报名</p>
          </li>
          <li>
            <div class="iconfont iconfont-type">&#xe605;</div>
            <p>已录取</p>
          </li>
          <li>
            <div class="iconfont iconfont-type">&#xe631;</div>
            <p>已到岗</p>
          </li>
          <li>
            <div class="iconfont iconfont-type">&#xe696;</div>
            <p>已完成</p>
          </li>
        </ul>
      </div>
      <div class="usertools">
        <ul>
          <li>
            <router-link tag="div" to="/user/collection">我的收藏</router-link>
          </li>
          <li>
            <router-link tag="div" to="/user/contact">联系我们</router-link>
          </li>
          <li>
            <router-link tag="div" to="/user/feedback">意见反馈</router-link>
          </li>
          <li>
            <router-link tag="div" to="/user/about">关于我们</router-link>
          </li>
        </ul>
      </div>
    </div>
    <navbar></navbar>
  </div>
</template>
<script>
import navbar from "@/components/navbar";

export default {
  name: "user",
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
.submain {
  margin: 0.76rem 0.2rem 0 0.2rem;
  font-size: 0.4rem;
}
.featuretop {
  font-size: 0.32rem;
  height: 0.76rem;
  line-height: 0.76rem;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
  background: #fff;
  padding: 0 0.2rem;
}
.featuretop h2 {
  float: left;
}
.featuretop span {
  float: right;
}
.userbox{
  margin: .8rem .2rem .2rem .2rem;
}
.userinfo {
  border-radius: 50%;
}
.userimg {
  width: 1.4rem;
  height: 1.4rem;
  float: left;
  border-radius: 50%;
}
.user_title {
  margin-left: 1.8rem;
  line-height: 0.6rem;
}
.user_max_title {
  font-size: 0.4rem;
}
.user_min_title {
  font-size: 0.26rem;
  color: #999;
}
.userjianli {
  font-size: 0.4rem;
  line-height: 0.6rem;
  padding: 0.6rem .2rem 0.4rem .2rem;
  position: relative;
  border-bottom: 0.1rem solid rgb(228, 228, 228);
}
.userjname {
  font-size: 0.4rem;
}
.userjinfo {
  font-size: 0.3rem;
}
.userjad {
  float: right;
  right: 0.2rem;
  position: absolute;
  width: 2.8rem;
  top: 0;
}

.usertype {
  padding-bottom: .3rem;
  border-bottom: 0.1rem solid rgb(228, 228, 228);
}
.usertype h2 {
  font-size: 0.4rem;
  margin: 0 0.3rem;
  padding-top: 0.4rem;
  padding-bottom: 0.1rem;
}
.usertype ul {
  display: flex;
}
.usertype ul li {
  font-size: 0.3rem;
  flex: 1;
  text-align: center;
  line-height: 0.36rem;
  padding-top: .2rem;
  
}
.usertype ul li svg {
  width: 0.8rem;
  height: 0.8rem;
}
.usertools {
  margin: 0.2rem;
}
.usertools ul {
}
.usertools ul li {
      line-height: 1rem;
    font-size: 0.3rem;
    border-bottom: 1px solid #e6e6e6;
    position: relative;
}
.usertools ul li::after {
    content: "";
    display: inline-block;
    width: .18rem;
    height: .18rem;
    border: 1px solid #666;
    border-color: transparent transparent #666 #666;
    transform: rotate(225deg);
    position: absolute;
    top: .44rem;
    right: .2rem;
    z-index: 1;
}

/**************************************************/
.iconfont-type {
    font-size: .6rem;
    height: 0.9rem;
    line-height: 0.8rem;
    color: #67bc00;
}
.iconfont-top {
    font-size: .4rem;
    height: .7rem;
    line-height: 0.7rem;
    color: #5d5d5d;
}

/**************************************************/
</style>
