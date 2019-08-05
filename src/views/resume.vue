<template>
  <div>
    <router-link tag="div" to="/user" class="min-header">我的简历</router-link>
    <div class="submain">
      <!-- <h1 class="title">我的简历</h1> -->
      <router-link tag="div" to="user/userinfo" class="userinfo">
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
        <div class="form-item">
          <label style="padding-left: .22rem;">性别</label>
          <span class="full" @click="popVisible=true" style="font-size: .3rem;color: #777777;">{{ gender || '请选择性别'}}</span>
        </div>
        
        <mt-field label="年龄" placeholder="请填写年龄" class="algin-r" type="number" v-model="age"></mt-field>
        <h3 class="item_name">教育经历</h3>
        <mt-field label="入学年份" placeholder="请填写入学年份" class="algin-r" v-model="entrance"></mt-field>
        <mt-field label="学校名称" placeholder="请填写学校名称" class="algin-r" v-model="university"></mt-field>
        <h3 class="item_name">工作经验</h3>
        <mt-field
          placeholder="请填写工作经验"
          type="textarea"
          rows="4"
          class="add-bottom"
          v-model="experience"
        ></mt-field>
        <h3 class="item_name">自我简介</h3>
        <mt-field
          placeholder="请填写简介"
          type="textarea"
          rows="4"
          class="add-bottom"
          v-model="introduction"
        ></mt-field>
        <div style="margin: 0.2rem;">
          <mt-button type="primary" size="small" style="width:100%;">保存</mt-button>
        </div>
      </div>
    </div>
    <mt-popup closeOnClickModal="false" v-model="popVisible" position="bottom" style="width:100%">
      <div class="pop-bar">
        <span class="left" @click="onPopCanel">取消</span> 请选择
        <span class="right" @click="onPopConfirm">确定</span>
      </div>
      <mt-picker ref="popPicker" :slots="slots" value-key="name"></mt-picker>
    </mt-popup>
  </div>
</template>
<script>
export default {
  name: "resume",
  data() {
    return {
      name: "",
      gender: "",
      age: "",
      entrance: "",
      university: "",
      experience: "",
      introduction: "",
      popVisible: false,
      slots: [
        {
          flex: 1,
          values: [{ name: "男", value: 1 }, { name: "女", value: 2 }]
        }
      ]
    };
  },
  created(){
    // // get 请求 demo
    // this.$axios.get('/api/index/sendMsg?tel=18200000000').then(res => {
    //     console.log(res)
    // }).catch(err => { console.log(res)});
    
    // // post 请求 deom
    // let data = { user_id: 1}
    // this.$axios.post('url', data).then(res => {
    //     console.log(res)
    // }).catch(err => { console.log(err) });
    },
  methods: {
    checkeds() {
      console.log("this.valueChoose", this.gender);
    },
    onPopCanel() {
      this.popVisible = false;
    },
    onPopConfirm() {
      // debugger
      var curPopValue = this.$refs.popPicker.getSlotValue(0);
      this.gender = curPopValue.name;
      console.log(curPopValue);
      this.onPopCanel();
    }
  }
};
</script>
<style scoped>
.submain {
  margin: 0.76rem 0.2rem 0 0.2rem;
}
.title {
  font-size: 0.46rem;
  line-height: 0.76rem;
  text-align: center;
}
.userjinfo {
  font-size: 0.3rem;
}
.userinfo {
  padding: 0.3rem 0;
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
.item_name {
  font-size: 0.32rem;
  line-height: 0.64rem;
  background: #f2f2f2;
  padding: 0 0.2rem;
}
.content {
  font-size: 0.26rem;
  line-height: 0.46rem;
  text-align: left;
}
.add-bottom {
  border-bottom: 0.2rem solid rgb(248, 248, 248);
}
.form-item {
  line-height: 1;
  display: flex;
}
.form-item label {
  font-size: 0.34rem;
  line-height: 0.6rem;
  width: 2rem;
}
.form-item .full {
  flex: 1;
  line-height: 0.6rem;
  text-align: left;
}
.pop-bar {
  background: #f2f2f2;
  font-size: 0.3rem;
  border-color: #e5e5e5;
  line-height: 0.8rem;
  height: 0.8rem;
  text-align: center;
}
.pop-bar span {
  width: 1.5rem;
  padding: 0 0.14rem;
  line-height: 0.8rem;
}
.pop-bar span.left {
  float: left;
}
.pop-bar span.right {
  float: right;
}
</style>