<template>
    <div>
        <router-link tag="div" to="/user" class="min-header">我的简历</router-link>
        <div class="submain">
            <!-- <h1 class="title">我的简历</h1> -->
            <router-link  tag="div" to="user/userinfo" class="userinfo">
                <img src="@/assets/img/userimg.png" alt class="user_img" />
                <div class="user_title">
                <dl>
                    <dt class="user_max_title">15910807805</dt>
                    <dd class="user_min_title">暂未设置个性签名</dd>
                </dl>
                </div>
                <div class="userinfofor"></div>
            </router-link>
            <div class="content">
                <mt-field label="用户昵称" placeholder="请填写昵称" class="algin-r" v-model="username"></mt-field>
                <h3 class="item_name">个性签名</h3>
                <mt-field placeholder="请输入您的个性签名" type="textarea" rows="4" class="add-bottom" v-model="introduction"></mt-field>
                <mt-field label="绑定手机" placeholder="未绑定" class="algin-r" v-model="phone"></mt-field>
                <mt-field label="绑定邮箱" placeholder="未绑定" class="algin-r" v-model="emaill"></mt-field>
                <div style="margin: 0.2rem;"><mt-button type="primary" size="small" style="width:100%;">保存</mt-button></div>
            </div>
        </div>  
        
    </div>
</template>
<script>
export default {
    name:"resume",
    data(){
        return {
            username:'',
            introduction:'',
            phone:'',
            emaill:'',

        }
    },
    methods: {}
}
</script>
<style scoped>
.submain{
    margin:.76rem 0.2rem 0 0.2rem;
}
.title{
    font-size: 0.46rem;
    line-height: 0.76rem;
    text-align: center;
}
.userjinfo {
  font-size: 0.3rem;
}
.userinfo .user_img {
  width: 1.4rem;
  height: 1.4rem;
  float: left;
  border-radius: 50%;
}
.userinfo .user_title {
  margin-left: 1.8rem;
  line-height: 0.6rem;
  position: relative;
}
.userinfo .user_max_title {
  font-size: 0.4rem;
}
.userinfo .user_min_title {
  font-size: 0.26rem;
  color: #999;
}
.item_name{
    font-size: .32rem;
    line-height: .64rem;
    background: #f2f2f2;
    padding: 0 .2rem;
}
.content{
    font-size: 0.26rem;
    line-height: 0.46rem;
    text-align: left;
    border-top: .2rem solid rgb(248, 248, 248);
}
.algin-r{
}
.add-bottom{
border-bottom: .2rem solid rgb(248, 248, 248);
}
</style>
