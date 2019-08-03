<template>
  <div>
    <div class="header">
      <h1>Today</h1>
      <input type="text" placeholder="搜索你想要的兼职">
    </div>

    <swiper :options="swiperOption" ref="mySwiper" class="swiper">
      <!-- slides -->
      <swiper-slide v-for="i in 4" :key="i">
        <img src="../assets/img/swiper-1@2x.png" alt="">
      </swiper-slide>
    </swiper>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <div class="panel">
      <div class="panel-title">
          <h2>热门类型</h2>
      </div>
      <div class="panel-content">
        <div class="active-box">
          <img src="../assets/img/active-1@2x.png" alt="">
          <div>
            <p>高薪招聘</p>
            <span>钱多活少离家近</span>
          </div>
        </div>
        <div class="active-box">
          <img src="../assets/img/active-2@2x.png" alt="">
          <div>
            <p>急速上岗</p>
            <span>随时随地简单</span>
          </div>
        </div>
      </div>
    </div>
    <div class="panel">
      <div class="panel-title">
          <h2>为你推荐</h2>
      </div>
      <div class="panel-content column">
        <router-link tag="div" :to="'/jobs/detail/1'" class="list-item">
          <div class="item-title"><img src="../assets/img/list-1@2x.png" alt=""><span>热门：手机兼职，在家轻松日赚300以上</span></div>
          <div class="item-price"><span>120</span>元/天</div>
          <div class="item-demand">日结 | 长期 | 男女不限</div>
        </router-link>
        <router-link tag="div" :to="'/jobs/detail/2'" class="list-item">
          <div class="item-title"><img src="../assets/img/list-1@2x.png" alt=""><span>热门：手机兼职，在家轻松日赚300以上</span></div>
          <div class="item-price"><span>600</span>元/天</div>
          <div class="item-demand">日结 | 长期 | 男女不限</div>
        </router-link>
        <router-link tag="div" :to="'/jobs/detail/3'" class="list-item">
          <div class="item-title"><img src="../assets/img/list-1@2x.png" alt=""><span>热门：手机兼职，在家轻松日赚300以上</span></div>
          <div class="item-price"><span>150</span>元/天</div>
          <div class="item-demand">日结 | 长期 | 男女不限</div>
        </router-link>
        <router-link tag="div" :to="'/jobs/detail/4'" class="list-item">
          <div class="item-title"><img src="../assets/img/list-1@2x.png" alt=""><span>热门：手机兼职，在家轻松日赚300以上</span></div>
          <div class="item-price"><span>600</span>元/天</div>
          <div class="item-demand">日结 | 长期 | 男女不限</div>
        </router-link>
        <router-link tag="div" :to="'/jobs/detail/5'" class="list-item">
          <div class="item-title"><img src="../assets/img/list-1@2x.png" alt=""><span>热门：手机兼职，在家轻松日赚300以上</span></div>
          <div class="item-price"><span>300</span>元/天</div>
          <div class="item-demand">日结 | 长期 | 男女不限</div>
        </router-link>
      </div>
    </div>
    <navbar></navbar>
  </div>
</template>

<script>
import navbar from '@/components/navbar'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'




export default {
  name: 'home',
  components: {
    navbar,
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        autoplay: 1000,
        loop: true,
        pagination: '.swiper-pagination',
      }
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
.header {
  height: .94em;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
  background: #fff;
}
.header h1 {
  font-size: .56rem;
  font-weight: 900;
}
.header input {
  width: 4rem;
  height: .64rem;
  border: 0px solid #fff;
  background: #f7f7f7;
  border-radius: 10px;
  padding-left: 30px;
  box-sizing: border-box;
}
.swiper {
  margin-top: .94rem;
}
.swiper img {
  width: 100%;
  height: 100%;
}
.panel {
  padding: 0 .3rem;
}
.panel .panel-title {
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
.panel-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.column {
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.panel-content .active-box {
  border: 2px solid #f2f2f2;
  border-radius: 5px;
  box-shadow :0px 0px 8px #f2f2f2;
  width: 48%;
  padding: .3rem 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.panel-content .active-box img {
  width:.93rem;
  height: .72rem;
}
.panel-content .active-box div {
  width: 2rem;
  display: flex;
  flex-direction: column;
}
.panel-content .active-box p {
  margin-bottom: .2rem;
  font-size: .32rem;
}
.panel-content .active-box span {
  font-size: .26rem;
  color: #bbb;
  overflow: hidden;
}
.panel-content .list-item {
  width: 100%;
  padding: .26rem 0;
  border-bottom: 1px solid #f3f4f4;
}
.panel-content .list-item .item-title {
  font-size: .28rem;
  font-weight: 600;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.panel-content .list-item .item-title span {
  padding-left: .18rem;
}
.panel-content .list-item .item-title img{
  width: .4rem;
  height: .4rem;
}
.panel-content .list-item .item-price {
  font-size: .28rem;
  text-align: right;
  font-weight: 600;
  color: #da473a;
}
.panel-content .list-item .item-price span {
  font-size: .32rem;
  font-weight: 600;
}
.panel-content .list-item .item-demand {
  font-size: .24rem;
  color: #ccc;
  padding-left: .58rem;
}
</style>
