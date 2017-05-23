<!--绑定身份证-->
<template>
<div class="login">
  <h2>同步档案</h2>
  <h4>绑定您的医保账户或身份证，同步您的社区医疗数据，随时更新您的健康档案。</h4>
  <div class="med-m-tb">
    <mt-field label="身份证号" placeholder="18位居民身份证号码" type="number" v-model="fromData.carNo"></mt-field>
    <mt-field label="医保卡号" placeholder="10位卡号" v-model="fromData.medicalNo"></mt-field>
  </div>
  <p class="med-note">选填身份证号或医保卡号</p>
  <div class="page-button">
    <mt-button type="primary" size="large" @click="bindMyDoc()">同步我的健康档案</mt-button>
  </div>
  
</div>
</template>
    
<script>
    import util from '../util'
    export default {
        data () {
          return {
              fromData:{
                  cardNo:'',
                  medicalNo:''
              }
            
          }
        },
        methods: {
            bindMyDoc () {
                let token = this.$route.query.token;
                if(!token) {util.toast('token过期，请重新进入我的健康');return;}
                let params = {PublicUserInputDetailCode:{token:token,cardNo:this.fromData.carNo,medicalNo:this.fromData.medicalNo}};
                if(this.idCard.length > 0 || this.cardNo.length > 0) {
                    util.postData('baseServices/PublicUserInputDetailCode',params)
                    .then((data)=> {
                        this.$router.replace({
                                name: '/',
                                query:token
                        })
                    })
                    .catch(err=> {

                    })
                } else {
                    util.toast('请填写身份证号或者病历号！');
                }
                
            }
        }
    }
</script>

<style scoped lang="scss">
</style>
