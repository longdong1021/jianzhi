<template>
  <div class="wrapper">
    
    <router-link tag="div" to="/" class="min-header">职位详情</router-link>
    <div class="submain">
      <div class="panel">
        <div class="detail">
          <p>微信在线兼职，不限时间地点</p>
          <p class="price">30元/小时<span>日结 | 长期 | 男女不限</span></p>
          </div>
      </div>
      <div class="panel" style="margin-top: .2rem;">
        <div class="panel-title"><h2>商家信息</h2></div>
        <div class="shop">
            <img src="../assets/img/shop@2x.png" alt="">
            <div>
              <p>重庆智乐网络科技有限公司</p>
              <p class="start">综合评分<span></span><span></span><span></span><span></span></p>
            </div>
        </div>
        <div class="contact">
            <span>联系方式</span>
            <span class="qq">1027691664</span>
            <span class="btn">复制</span>
        </div>
      </div>
      <div class="panel" style="margin-top: .2rem;">
        <div class="panel-title"><h2>工作内容</h2></div>
        <div class="work-content">
          <p>报名须知:未成年人和学生请不要报名</p>
          <p>请主动复制商家QQ号群了解工作内容，添加好友后算报名成功</p>
          <p>【工作要求】: 20岁以上</p>
          <p>【工作内容】: 根据客服小姐姐的提示，按步骤手机操作</p>
        </div>
        <div class="demain">
          <p><img src="../assets/img/people@2x.png" alt="">8000人</p>
          <p><img src="../assets/img/time@2x.png" alt="">不限时间</p>
          <p><img src="../assets/img/local@2x.png" alt="">在家可做</p>
        </div>
      </div>
      <div class="navbar">
        <div class="collect">收藏</div>
        <div>立即报名</div>
      </div>
    </div>  
  </div>
</template>

<script>

export default {
  name: 'detail',
  components: {

  },
  data() {
    return {
    }
  },
  computed: {
     
  },
  mounted() {
  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper {
  background: #f5f5f5;
  height: 100vh;
}
/* 导航 */
.navbar {
  height: 1rem;
  line-height: 1rem;
  display: flex;
  font-size: .38rem;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99999;
  background: #fff;
}
.navbar .collect {
  width: 2.38rem;
  background: url("../assets/img/collect@2x.png") no-repeat 18% center / .42rem .42rem;
  background-color: #f9f9f9; 
}

.navbar :last-child {
  flex: 1;
  background: #97c666;
  color: #fff;
}
.panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  
  padding: 0 .3rem;
  background: #fff;
}
.panel .panel-title {
  width: 100%;
  font-size: .36rem;
  height: .52rem;
  line-height: .52rem;
  margin: .26rem 0;
}
.panel .panel-title h2 {
  font-weight: 500;
}
.panel .panel-title h2::before {
  content: '';
  display: block;
  float: left;
  height: .52rem;
  width: .1rem;
  margin-right: .16rem;
  background: #97c666;
  border-radius: 5px;
}
/* 标题 */
.panel .detail {
  padding: .52rem 0;
  width: 100%;
}
.panel .detail p{
  font-size: .38rem;
  font-weight: 600;
}
.panel .detail .price {
  font-size: .32rem;
  color: #d23630;
  margin-top: .58rem;
}
.panel .detail .price span {
  font-size:  .28rem;
  color: #bbb;
  padding-left: .5rem;
}
/* 商家信息 */
.panel .shop {
  width: 100%;
  display: flex;

}
.panel .shop img {
  width: 1.01rem;
  height: 1rem;
}
.panel .shop div {
  flex: 1;
  padding-left: .2rem;
  font-size: .32rem;
  color: #616060;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.panel .shop .start {
  font-size: .3rem;
}
.panel .shop .start span:first-child {
  margin-left: .17rem;
}
.panel .shop .start span {
  display: inline-block;
  width: .26rem;
  height: .26rem;
  background: url("../assets/img/start@2x.png") no-repeat center / 100%;
}
.panel .contact {
  width: 100%;
  border: 1px solid #f2f2f2;
  border-radius: 8px;
  box-shadow :0px 0px 8px #f2f2f2;
  font-size: .32rem;
  color: #3f3e3e;
  padding: .38rem 0;
  margin: .46rem 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.panel .contact .qq {
  padding-left: .35rem;
  height: .35rem;
  line-height: .35rem;
  background: url("../assets/img/contact-2@2x.png") no-repeat -0.86rem center / 1.18rem .36rem;
}
.panel .contact .btn {
  font-size: .28rem;
  width: .76rem;
  height: .44rem;
  line-height: .44rem;
  text-align: center;
  color: #fff;
  background: #97c666;
  border: 1px solid #97c666;
  border-radius: 5px;
}
/* 工作内容 */
.work-content {
  font-size: .28rem;
}
.work-content p{
  padding: .2rem 0;
}
.panel .demain {
  width: 100%;
  font-size: .28rem;
  color: #575656;
  padding-bottom: 1.2rem;
  display: flex;
  flex-direction: column;
}
.panel .demain p {
  margin-top: .36rem;
  height: .33rem;
  line-height: .33rem;
  display: flex;
}
.panel .demain p>img {
  width: .33rem;
  height: .33rem;
  padding-right: .28rem;
}
</style>
