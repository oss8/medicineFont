<!--登录手机-->
<template>
<div class="login">
  <h2>登录</h2>
  <h4>绑定您的手机，及时通知健康随访时间以及社区医生的更多服务。</h4>
  <div class="med-m-tb">
    <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="mobile" @change="mobileChange(mobile)"></mt-field>
    <mt-field label="验证码" placeholder="输入验证码" v-model="code"><mt-button type="default" size="small"  @click="sendSMS()">{{smsText}}</mt-button></mt-field>
  </div>
  <div class="page-button">
  <mt-button type="primary" size="large" @click="bindMobile()">绑定手机</mt-button>
  </div>
  
</div>
</template>

<script>
    import util from '../util'
    export default {
      data () {
        return {
          mobile:'',
          code:'',
          smsBtnDisabled:true,
          smsText:'获取验证码'
        }
      },
     
      methods:{
          sendSMS () {
            let params = {mobile:this.mobile};
            if(validateInput.call(this,0)){ 
                this.smsBtnDisabled = true;
                this.smsText = "正在发送...";
                let _this = this;
                reqSendSMS(params)
                .then((data) => {
                  (function(me){
                            let time = 60
                            var  timer = setInterval(function(){
                                if(time === 0) {
                                    me.smsBtnDisabled = false;
                                    me.smsText = '再次获取验证码';
                                    time = 59;
                                    clearInterval(timer);
                                } else {
                                    time --;
                                    me.smsText = time + '秒';
                                }
                                
                            },1000);
                        })(_this)
                })
                .catch((err)=>{
                    _this.smsBtnDisabled = false;
                    _this.smsText = '短信获取验证码';
                })
             }

            
          },
          mobileChange (mobile) {
                console.log(mobile);
               if(util.checkPhone(mobile)) {
                   this.smsBtnDisabled = false;
               }
          },
          bindMobile () {
              let token = this.$route.query.token;
              if(!token) {util.toast('token过期，请重新进入我的健康');return;}
              let params = {mobile:this.mobile,randcode:this.code,token:token};
              if(validateInput.call(this,1)) {
                reqBindMobile(params)
                .then((data) => {
                    this.$router.replace({
                                name: 'bind',
                                query:{token}
                        })
                })
                .catch((err)=>{

                })
              }
                
          }
      }
    }
    function reqSendSMS(params) {
        let promiseFunc = (resove,reject) => {
            util.axios.post('baseServices/PublicUserGetRand',{PublicUserGetRand:params})
                    .then((data) => {
                            console.log(data);
                            if(data.status == 1){
                               util.toast('发送成功');
                                resove(data)
                            } else {
                                util.toast('发送失败，请重试');
                                reject(data)
                            }
                        }
                    )
                    .catch( (err) => {
                        reject(err)
                    });
        }
        return new Promise(promiseFunc);
    }
    function reqBindMobile(params) {
        let promiseFunc = (resove,reject) => {
            util.axios.post('baseServices/RegPublicUser',{RegPublicUser:params})
                    .then((data) => {
                            if(data.status == 1){
                                resove(data)
                            } else {
                                util.toast('添加失败，请重试');
                                reject(data)
                            }
                        }
                    )
                    .catch( (err) => {
                        reject(err)
                    });
        }
        return new Promise(promiseFunc);
    }
     function validateInput(type) {
        if(!util.checkPhone(this.mobile)){
            util.toast('请填写正确的手机格式');
       
                    return false;
            }
         if(type ==1 && this.code.length == 0) {
              util.toast('请填写正确的手机格式');
                    return false;
        }
        return true;
    }
</script>

<style lang="scss">
@import "../style/login.scss";
</style>
