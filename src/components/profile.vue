<!--个人基本信息-->
<template>
  <div>
  <div class="page-part">
    <mt-cell title="姓名" :value="user.name"></mt-cell>
    <mt-cell title="身份证" :value="user.cardNo"></mt-cell>
    <mt-cell title="出生日期" value="1950年1月1日(67岁)"></mt-cell>
    <mt-cell title="性别" :value="user.sex | sexFilter"></mt-cell>
    <mt-cell title="血型" value="未设置"></mt-cell>
    <mt-cell title="联系电话" to="" is-link :value="user.mobile"></mt-cell>
    <mt-cell title="紧急联系人" :to="{name:'modify',params:{id:user.id,name:'哈哈',mobile:'15868177542'}}" is-link value="张叁  18900000000"></mt-cell>
  </div>
  <div>
    <mt-cell title="随访分类" value="高血压患者"></mt-cell>
    <mt-cell title="地区" :value="user.province +'省 '+user.city+ '市 ' +user.region"></mt-cell>
    <mt-cell title="详细住址" :value="user.address"></mt-cell>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
          user:{}
      }
    },
    mounted () {
        let userInfo = this.$route.params.user;
        console.log(userInfo);
        if(userInfo) {
          this.user = userInfo;
        }
    }
  }
</script>

<style scoped lang="scss">

</style>
