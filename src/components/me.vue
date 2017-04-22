<!--我的健康-->
<template>
  <div>
    <div class="myInfo">
      <div><img src="../assets/icon_account.png"  width="73"/></div>
      <h4>张三丰</h4>
      <div><span>高血压患者</span></div>
    </div>
    <div>
      <mt-cell title="我的二维码" to="myQrCode" is-link value=""><img src="../assets/icon_qr_code.png" width="30" /></mt-cell>
    </div>
    <div class="med-">健康随访</div>
    <div class="btns my-cell" >
        <div class="btn">高血压</div>
        <div class="btn">糖尿病</div>
        <div class="btn">健康报告</div>
    </div>
  </div>
</template>

<script>

</script>

<style scoped lang="scss">
.myInfo{
  text-align:center;
  padding:20px 0 30px;
}
</style>
