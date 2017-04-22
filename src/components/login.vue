<!--登录手机-->
<template>
<div class="login">
  <h2>登录</h2>
  <h4>绑定您的手机，及时通知健康随访时间以及社区医生的更多服务。</h4>
  <div class="med-m-tb">
    <mt-field label="手机号" placeholder="请输入手机号" type="tel"></mt-field>
    <mt-field label="验证码" placeholder="输入验证码"><mt-button type="default" size="small">发送验证码</mt-button></mt-field>
  </div>
  <div class="page-button">
  <mt-button type="primary" size="large">绑定手机</mt-button>
  </div>
  
</div>
</template>

<script>

</script>

<style lang="scss" scoped>
@import "../style/login.scss";
</style>
