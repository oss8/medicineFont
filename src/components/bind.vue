<!--绑定身份证-->
<template>
<div class="login">
  <h2>同步档案</h2>
  <h4>绑定您的医保账户或身份证，同步您的社区医疗数据，随时更新您的健康档案。</h4>
  <div class="med-m-tb">
    <mt-field label="身份证号" placeholder="18位居民身份证号码" type="tel"></mt-field>
    <mt-field label="医保卡号" placeholder="10位卡号"></mt-field>
  </div>
  <p class="med-note">选填身份证号或医保卡号</p>
  <div class="page-button">
  <mt-button type="primary" size="large">同步我的健康档案</mt-button>
  </div>
  
</div>
</template>

<script>

</script>

<style scoped lang="scss">
.login{
  h2{
    padding-top:20px;
    padding-bottom:10px;
  }
  h4{
    padding-bottom:30px;
  }
  .page-button{
    padding-top:40px;
  }
}
</style>
