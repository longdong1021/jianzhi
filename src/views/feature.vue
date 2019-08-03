<template>
  <div>
    <div class="featuretop">
      <h2>Selected</h2>
      <span><em class="iconfont iconfont-top">&#xe640;</em>换一批</span>
    </div>
    <div class="submain">
      <div class="conlist">
        <div v-for="(item,i) in dataList" :key="item.id + '-label'">
          <router-link tag="div" :id="i" :to="'/jobs/detail/1'" class="list-item clearfix">
            <div class="list-title">
              <img src="../assets/img/list-1@2x.png" alt />
              <span>{{item.company}}</span>
            </div>
            <div class="list-com">
              <div class="item-title">
                <span>{{item.title}}</span>
              </div>
              <div class="item-price">
                <strong>120</strong>元/天
              </div>
              <div class="item-demand">日结 | 长期 | 男女不限</div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <navbar></navbar>
  </div>
</template>
<script>
import navbar from "@/components/navbar";

export default {
  name: "feature",
  components: {
    navbar
  },
  data() {
    return {
      dataList: [
        {
          id: 1,
          title: "热门：手机兼职，在家轻松日赚300以上",
          company: "江西甚至网络有限公司",
          videopic: "../assets/img/feature-job-img1.jpg"
        },
        {
          id: 2,
          title: "热门：手机兼职，在家轻松日赚300以上",
          company: "江西甚至网络有限公司",
          videopic: "../assets/img/feature-job-img1.jpg"
        },
        {
          id: 3,
          title: "热门：手机兼职，在家轻松日赚300以上",
          company: "江西甚至网络有限公司",
          videopic: "../assets/img/feature-job-img1.jpg"
        },
        {
          id: 3,
          title: "热门：手机兼职，在家轻松日赚300以上",
          company: "江西甚至网络有限公司",
          videopic: "../assets/img/feature-job-img1.jpg"
        },
        {
          id: 3,
          title: "热门：手机兼职，在家轻松日赚300以上",
          company: "江西甚至网络有限公司",
          videopic: "../assets/img/feature-job-img1.jpg"
        }
      ]
    };
  },
  methods: {}
};
</script>
<style scoped>
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
.submain {
  margin: 0.76rem 0.2rem 0 0.2rem;
}
.conlist .list-item {
  line-height: 0.68rem;
  border-bottom: 1px solid #eee;
  padding-top: 0.2rem;
  padding-bottom: 0.6rem;
}
.conlist .list-item .list-title {
  line-height: 0.68rem;
  padding-top: 0.2rem;
  font-size: 0.28rem;
}
.conlist .list-item .list-title img {
  width: 0.4rem;
  height: 0.4rem;
  margin-right: 0.2rem;
  vertical-align: sub;
}
.conlist .list-item .item-price {
  float: left;
  color: red;
}
.conlist .list-item .item-demand {
  float: right;
  text-align: right;
}
.conlist .list-item .list-com {
  background-size: 8rem;
  height: 2rem;
  font-size: 0.36rem;
  background: url("../assets/img/feature-job-img1.jpg") no-repeat 100% 100%;
  text-shadow: -1px -1px white, 1px 1px #333;
  padding: 0.2rem;
}
.conlist .list-item .list-com .item-title {
  color: white;
  font-weight: bold;
  font-size: 0.36rem;
}
.iconfont-top {
    margin-right:.1rem;
}
</style>
