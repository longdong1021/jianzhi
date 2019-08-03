<template>
    <div>
        <router-link tag="div" to="/user" class="min-header">联系我们</router-link>
        <div class="submain">
            <!-- <h1 class="title">联系我们</h1> -->
            <div class="content">
                <img src="@/assets/img/contact_01.png" alt="">
                <img src="@/assets/img/contact_02.png" alt="">
            </div>
        </div>  
    </div>
</template>
<script>
export default {
    name:"contact",
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
.content img{
    width: 100%;
}

</style>
