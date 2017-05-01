<!--修改紧急联系人-->
<template title="修改紧急联系人">
<div>
  <div class="page-part">
    <mt-field label="姓名" placeholder="输入姓名" :value="user.name" ></mt-field>
    <mt-field label="联系电话" placeholder="输入手机号码" type="tel" :value="user.mobile"></mt-field>
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
          util.postData('')
          .then (data => {

          })
      }
    },
    mounted () {
        let user = this.$route.params;
        console.log(JSON.stringify(user));
        if(user) {
          this.user = user;
        }
    }
  }
</script>

<style lang="scss">
</style>
