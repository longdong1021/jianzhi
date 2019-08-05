<template>
    <div>
        <router-link tag="div" to="/user" class="min-header">我的信息</router-link>
        <div class="submain">
            <!-- <h1 class="title">我的信息</h1> -->
            <div class="content">
                <mt-field label="用户昵称" placeholder="请填写昵称" class="algin-r" v-model="username"></mt-field>
                <h3 class="min-title">个性签名</h3>
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
    name:"userinfo",
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
.title{
    font-size: 0.46rem;
    line-height: 0.76rem;
    text-align: center;
}
.min-title{
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