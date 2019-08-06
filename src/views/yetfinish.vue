<template>
    <div>
        <router-link tag="div" to="/user" class="min-header">已完成</router-link>
        <div class="submain">
            <div class="conlist">
                <router-link tag="div" :to="'/jobs/detail/1'" class="list-item clearfix">
                    <div class="list-uite-left">
                        <div class="item-title"><span>热门：手机兼职，在家轻松日赚300以上</span></div>
                        <div class="item-demand"><span  class="item-price"><strong>120</strong>元/天</span> 日结 | 长期 | 男女不限</div>
                        <div class="item-source"><img src="../assets/img/list-1@2x.png" alt=""><span>江西甚至网络有限公司</span></div>
                    </div>
                    <div class="list-uite-right">
                        <img src="../assets/img/list-1@2x.png" alt="">
                        <mt-button type="danger" size="small" class="set-button">已完成</mt-button>
                    </div>
                </router-link>
                <router-link tag="div" :to="'/jobs/detail/1'" class="list-item clearfix">
                    <div class="list-uite-left">
                        <div class="item-title"><span>热门：手机兼职，在家轻松日赚300以上</span></div>
                        <div class="item-demand"><span  class="item-price"><strong>120</strong>元/天</span> 日结 | 长期 | 男女不限</div>
                        <div class="item-source"><img src="../assets/img/list-1@2x.png" alt=""><span>江西甚至网络有限公司</span></div>
                    </div>
                    <div class="list-uite-right">
                        <img src="../assets/img/list-1@2x.png" alt="">
                        <mt-button type="danger" size="small" class="set-button">已完成</mt-button>
                    </div>
                </router-link>
                <router-link tag="div" :to="'/jobs/detail/1'" class="list-item clearfix">
                    <div class="list-uite-left">
                        <div class="item-title"><span>热门：手机兼职，在家轻松日赚300以上</span></div>
                        <div class="item-demand"><span  class="item-price"><strong>120</strong>元/天</span> 日结 | 长期 | 男女不限</div>
                        <div class="item-source"><img src="../assets/img/list-1@2x.png" alt=""><span>江西甚至网络有限公司</span></div>
                    </div>
                    <div class="list-uite-right">
                        <img src="../assets/img/list-1@2x.png" alt="">
                        <mt-button type="danger" size="small" class="set-button">已完成</mt-button>
                    </div>
                </router-link>
            </div>
        </div>  
    </div>
</template>
<script>
export default {
    name:"yetfinish",
    data(){
        return {

        }
    },
    methods: {}
}
</script>
<style scoped>
.submain{
    margin:.76rem 0.2rem 0 0.2rem;
}
.set-button{
    background: #fff;
    color: #43a707;
    border: 1px solid #43a707;
    margin: .2rem 0;
}
.conlist .list-item {
    line-height: 0.68rem;
    border-bottom: .15rem solid #eee;
    padding-top: .2rem;
    padding-bottom: .2rem;
}
.conlist .list-uite-left {
    width: 5.5rem;
    float: left;
}
.conlist .list-uite-right {
    text-align: right;
    float: right;
    width: 2rem;
}
.conlist .list-uite-right img{
        width: 1.8rem;
    height: 1.2rem;
}
.conlist .list-item .item-title {
  font-size: .32rem;
  font-weight: 600;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
text-overflow:ellipsis;
white-space: nowrap;
}
.conlist .list-item .item-price {
  font-size: .28rem;
  text-align: right;
  font-weight: 600;
  color: #da473a;
}
.conlist .list-item .item-price strong {
  font-size: .32rem;
  font-weight: 600;
}
.conlist .list-item .item-demand {
    white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
  font-size: .24rem;
  color: #ccc;
}
.conlist .list-item .item-source{
  font-size: .24rem;
  color: #ccc;
   white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
}
.conlist .list-item .item-source img{
    width: 0.4rem;
    height: 0.4rem;
    display: inline-block;
    vertical-align: sub;
}
</style>
