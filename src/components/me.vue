<!--我的健康-->
<template>
  <div>
    <div class="myInfo">
    <router-link to="/profile"><div class="pic"><img src="../assets/icon_account.png"  width="73"/></div></router-link>
      
      <h4 class="name">张三丰</h4>
      <div><span class="icon-tag">高血压患者</span></div>
    </div>
    <div>
      <mt-cell title="我的二维码" to="/myQrCode" is-link value=""><img src="../assets/icon_qr_code.png" width="30" /></mt-cell>
    </div>
    <div class="med-spaceTitle">健康随访</div>
    <div class="mint-cell">
    <div class="mint-cell-wrapper myItem" >
    
        <div class="item">
        <router-link to="">
          <i class="icon"><img src="../assets/icon_blood_pressure.png" /></i>
          <p>高血压</p>
        </router-link>
        </div>

        <router-link to="">
        </router-link>
        <div class="item">
          <router-link to="/modify">
            <i class="icon"><img src="../assets/icon_blood_gulcose.png" /></i>
            <p>2型糖尿病</p>
          </router-link>
        </div>
         
        <div class="item">
          <router-link to="/record">
            <i class="icon"><img src="../assets/icon_report.png" /></i>
            <p>健康报告</p>
          </router-link>
          
        </div>
    </div>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss">
.myInfo{
  text-align:center;
  padding:20px 0 30px;
  .pic{
    width:74px;
    height:74px;
    overflow:hidden;
    margin:0 auto;
  }
  .name{
    font-size:18px;
    padding:5px 0 0;
  }
  .icon-tag{
    background-color: #F6A623;
    color:#fff;
    padding:0 10px;
  }
}
.myItem{
  display:flex;
  background-origin:border-box;
  .item{
    flex:1;
    padding:20px 0px;
    text-align:center;
    .icon{
      width:44px;
      height:44px;
      display:inline-block;
      overflow:hidden;
      margin-bottom:15px;
      img{
        width:100%;
      }
    }
    p{
      padding:2px 0;
    }
    span{
      color: #A2A2A2;
      font-size:12px;
      padding: 0 3px;
    }
  }
}
</style>
