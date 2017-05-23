<!--我的健康-->
<template>
  <div>
    <div class="myInfo">
    <div class="pic" @click="profileClick()"><img src="../assets/icon_account.png"  width="73"/></div>
      
      <h4 class="name">{{userInfo.name}}</h4>
      <div><span class="icon-tag">高血压患者</span></div>
    </div>
    <div>
      <mt-cell title="我的二维码" :to="{name:'myQrCode',params:{id:userInfo.id}}" is-link value=""><img src="../assets/icon_qr_code.png" width="30" /></mt-cell>
    </div>
    <div class="med-spaceTitle">健康随访</div>
    <div class="mint-cell">
    <div class="mint-cell-wrapper myItem" >
    
        <div class="item" @click="itemClick('blood')">
            <i class="icon"><img src="../assets/icon_blood_pressure.png" /></i>
            <p>高血压</p>
        </div>
        <div class="item">
            <i class="icon"><img src="../assets/icon_blood_gulcose.png" /></i>
            <p>2型糖尿病</p>
        </div>
         
        <div class="item">
            <i class="icon"><img src="../assets/icon_report.png" /></i>
            <p>健康报告</p>
        </div>
    </div>
    </div>
  </div>
</template>

<script>
import util from '@/util'
    export default {
      data () {
        return {
            userInfo:{}
        }
      },
      methods: {
        itemClick (command) {
            if (command === 'blood') {
                this.$router.push({name:'record',params:{id:this.userInfo.id}});
            }
        },
        profileClick () {
              this.$router.push({name:'profile',params:{user:this.userInfo}});
        }
      },
      mounted () {
        let token = this.$route.query.token;
        console.log(token);
        // let token = '123';
        if(token) {
            util.postData('baseServices/PublicUserLogin',{PublicUserLogin:{token:token}})
            .then(data => {
              console.log(data);
                switch (data.status) {
                  case 0 :
                      this.$router.replace({name: 'login'})
                      break
                  case 1:
                      this.$router.replace({name: 'bind'})
                      break
                  case 2:
                      localStorage.setItem(util.userKey,JSON.stringify(data.result))
                      this.userInfo = data.result;
                      break
                  default :
                      this.$router.replace({name: 'login'})
                }
            })
            .catch(err => {
                      this.$router.replace({name: 'login'})
            })
        } else {
          util.toast('获取token失败');
          this.$router.replace({name: 'login'})
        }
          
      }
    }
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
