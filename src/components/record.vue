<!--健康随访-->
<template title="健康随访">
<div>
  <div class="page-part">
    <mt-cell v-for="(item,index) in recordList" :title="item.context.bloodHigh +'/'+ item.context.bloodLow + 'mmHg'" label="正常" :value="item.addtime | timeFilter" :to="{name:'recordList',params:{context:item.contextJson}}" is-link></mt-cell>
  </div>  
</div>
</template>

<script>
import util from '@/util'
    let userId = ''
    export default {
      data () {
        return {
            recordList:[]
        }
      },
      methods :{
        cellClick (context) {
          this.$router.push({name:'recordList',params:context})
        }
      },
      mounted () {
        let id = this.$route.params.id;
        if(id) {
          userId = id
          util.postData('baseServices/RequestPatientFollow',{RequestPatientFollow:{id:userId}})
          .then( data => {
              if(data.status === 1) {
                this.recordList = data.result.map(item => {
                    return {addtime:item.addtime,context:JSON.parse(item.context),contextJson:item.context};
                });
              } else {
                util.toast(data.result);
              }
          });
          
        } else {
          // this.$router.go(-1);
        }
      }
    }
</script>

<style lang="scss">
</style>
