<!--个人基本信息-->
<template>
  <div>
  <mt-cell title="标题文字" to="//github.com" is-link value="带链接"></mt-cell>
        <mt-cell class="my-cell" title="我的二维码"></mt-cell>
        <mt-index-section class="my-cell" index="健康随访">
        
        </mt-index-section>
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
.btns {
  height:90px;
  .btn {
    display:inline-block;
    text-align:center;
    width:32%;
    padding:0;
    margin:0;
    height:89px;
    background:#fff;
    border-radius:0;
    box-sizing: border-box;
  }
}
</style>
