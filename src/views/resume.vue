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
                <h3 class="item_name">基本信息</h3>
                <mt-field label="姓名" placeholder="请填写姓名" class="algin-r" v-model="name"></mt-field>
                <mt-field label="性别" placeholder="请选择性别" class="algin-r" type="select" v-model="gender">
                    <option value=1>男</option>
                    <option value=2>女</option>
                </mt-field>
                <!-- <mt-radio
                    align="right"
                    title="请选择查询业务"
                    v-model="gender"
                    :options="options" @change="checkeds">
                </mt-radio> -->
                <div></div>
                <!-- <select name="gender" v-model="gender" style=" width: 100%;border: 0px solid #ccc;background: #fff;font-size:0.28rem;">
                    <option value=1>男</option>
                    <option value=2>女</option>
                </select> -->
                <mt-field label="年龄" placeholder="请填写年龄" class="algin-r" type="number" v-model="age"></mt-field>
                <h3 class="item_name">教育经历</h3>
                <mt-field label="入学年份" placeholder="请填写入学年份" class="algin-r" v-model="entrance"></mt-field>
                <mt-field label="学校名称" placeholder="请填写学校名称" class="algin-r" v-model="university"></mt-field>
                <h3 class="item_name">工作经验</h3>
                <mt-field placeholder="请填写工作经验" type="textarea" rows="4" class="add-bottom" v-model="experience"></mt-field>
                <h3 class="item_name">自我简介</h3>
                <mt-field placeholder="请填写简介" type="textarea" rows="4" class="add-bottom" v-model="introduction"></mt-field>
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
            options: [
                {label: '银联线上线下业务',value: '00'},
                {label: '银联二维码业务',value: '01'}
            ],
            name:'',
            gender:'',
            age:'',

            entrance:'',
            university:'',
            experience:'',
            introduction:'',

        }
    },
    methods: {
        checkeds () {
            console.log('this.valueChoose', this.gender)
        }
    }
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
.userinfo {
  padding: .3rem 0;
}
.userinfo .user_img {
  width: 1.2rem;
  height: 1.2rem;
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
}
.algin-r{
}
.add-bottom{
border-bottom: .2rem solid rgb(248, 248, 248);
}
</style>
