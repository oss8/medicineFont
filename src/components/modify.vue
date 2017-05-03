<!--修改紧急联系人-->
<template title="修改紧急联系人">
<div>
  <div class="page-part">
    <mt-field label="姓名" placeholder="输入姓名" v-model="user.contactname" ></mt-field>
    <mt-field label="联系电话" placeholder="输入手机号码" type="tel" v-model="user.contactmobile"></mt-field>
  </div>
  <div class="page-button">
    <mt-button type="primary" @click="save()" size="large">保存</mt-button>
  </div>
  
</div>
</template>

<script>
  import util from '@/util'
  export default {
    data () {
      return {
          user:{}
      }
    },
    methods: {
      save () {
        let params = {AddPatientContact:{id:this.user.id,contactmobile:this.user.contactmobile,contactname:this.user.contactname}}
          util.postData('baseServices/AddPatientContact',params)
          .then (data => {
              if (data.status === 1) {
                  util.toast('修改成功');
                  localStorage.setItem(util.userKey,JSON.stringify(this.user));
                  this.$router.go(-1);
              } else  {
                  util.toast(data.result);
              }
          })
      }
    },
    mounted () {
        let userInfo = localStorage.getItem(util.userKey);
        try {
            userInfo = JSON.parse(userInfo);
        }
        catch (err) {
            util.toast('出错了');
            this.$router.go(-1);
            userInfo = {}
        }
        console.log(userInfo);
        if(userInfo) {
          this.user = userInfo;
        }
    }
  }
</script>

<style lang="scss">
</style>
