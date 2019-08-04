<template>
    <div>
        <router-link tag="div" to="/user" class="min-header">关于我们</router-link>
        <div class="submain">
            <!-- <h1 class="title">关于我们</h1> -->
            <div class="content">
                <p>来自不同行业的兼职、短期及临时工作可随时随地任你搜寻，更可网上阅读有关最新兼职资讯。</p>
                <br>
                <h3 class="min-title">- 实用功能 -</h3>
                <ul>
                    <li>- 优选兼职，层层审核，真实可靠</li>
                    <li>- 按工作类别、关键字、工作地点搜寻你的心仪职位</li>
                    <li>- 建立及更新履历表，只须点击即可申请工作，简单快捷</li>
                    <li>- 随时查看申请记录</li>
                </ul>
                <br>

                <p>卓越的体验来自一颗追求完美的心！如果在使用过程中有任何问题或建议，请随时联系我们。</p>
            </div>
        </div>  
        
    </div>
</template>
<script>
export default {
    name:"about",
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
    font-weight: bold;
    text-align: center;
}
.content{
    font-size: 0.26rem;
    line-height: 0.46rem;
        padding-top: 1.2rem;
}
</style>
