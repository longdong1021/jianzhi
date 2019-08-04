<template>
    <div>
        <router-link tag="div" to="/user" class="min-header">意见反馈</router-link>
        <div class="submain">
            <!-- <h1 class="title">意见反馈</h1> -->
            <div class="content">
                <h3 class="item_name">反馈详情</h3>
                <mt-field placeholder="请输入您对我们的意见反馈详情" type="textarea" rows="4" v-model="introduction"></mt-field>
                <h3 class="item_name">联系方式</h3>
                <mt-field placeholder="请输入您的邮箱" type="textarea" rows="4" v-model="usermaill"></mt-field>
                <div style="margin: 0.2rem;"><mt-button type="primary" size="small" style="width:100%;">发送</mt-button></div>
            </div>
        </div>  
    </div>
</template>
<script>
export default {
    name:"feedback",
    data(){
        return {
            introduction:'',
            usermaill:'',
        }
    },
    methods: {}
}
</script>
<style scoped>
.content{
    text-align: left;
}
.item_name{
    font-weight: bold;
    font-size: 0.26rem;
    line-height: 0.8rem;
    background: #f7f7f7;
    padding: 0 0.2rem;
}
</style>
