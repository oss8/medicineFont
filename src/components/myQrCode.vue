<!--我的二维码-->
<template>
<div  class="myQrCode">
  <div class="box">
    <h2>张三丰</h2>
    <div class="pic" >
      <vue-q-art :config="config"></vue-q-art>

    </div>
    
    <p>扫一扫上面的二维码图案，加我微信</p>
  </div>
</div>
</template>

<script>
import util from '@/util'
import VueQArt from 'vue-qart'

  export default {
      components: {VueQArt},
      data () {
          return {
              config: {
                  value: 'https://www.baidu.com',
                  imagePath: 'static/img/icon_account.75637ff.png',
                  filter: 'color'
              }
          }
      },
      mounted () {
          let id = this.$route.params.id;
          console.log(id);
          if(id) {
             util.postData('baseServices/RequestMyQRCode',{RequestMyQRCode:{id:id}})
             .then(data => {
                if(data.status === 1) {
                    this.config.value = data.result;
                }
             })
          }
      }
  }
</script>

<style lang="scss">
.myQrCode{
  padding:50px 15px 0;
.box{
  border:1px solid #ccc;
  background: #FFFFFF;
  border-radius: 10px;
  text-align:center;
  padding:20px 0;
  .pic{
    width:100%;
    height:360px;
    padding:20px;
    overflow:hidden;
    img{
      width:100%;
    }
  }
  p{
    font-size:12px;
    color: #8B8B8B;
  }
  
}
}
</style>
