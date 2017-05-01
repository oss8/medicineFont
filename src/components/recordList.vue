<!--健康随访-->
<template title="健康随访">
<div class="recordList">
  <div class="chart">

  </div>
  <div>
    <div class="mint-cell">
      <mt-cell title="血压数据" :value="context.thisDate | timeFilter" :label="(context.bloodHigh+'/'+context.bloodLow) | bloodFilter" class="med-info">
        <img slot="icon" src="../assets/icon_blood_pressure.png" width="24" height="24">
      </mt-cell>
      <div class="mint-cell-wrapper myItem" >
          <div class="item">
            <span>高压</span>
            <p>{{context.bloodHigh}}<span>mmHg</span></p>
          </div>
          <div class="item">
            <span>低压</span>
            <p>{{context.bloodLow}}<span>mmHg</span></p>
          </div>
          <div class="item">
            <span>脉搏</span>
            <p>80<span>bpm</span></p>
          </div>
      </div>
    </div>
  </div>
  <div class="med-spaceTitle">危险因素</div>  
  <div class="page-part">
     <mt-cell v-for="(item,index) in context.dangerType" :title="item"></mt-cell>
    <mt-cell v-if="context.dangerOther" title="其他" :value="context.dangerOther"></mt-cell>
  </div>
  <div class="med-spaceTitle">主要体征</div>
  <div class="page-part">
    <mt-cell title="体重" :value="context.weight+ 'kg'"></mt-cell>
    <mt-cell title="身高" :value="context.height+'cm'"></mt-cell>
    <mt-cell title="体质指数" :value="(context.weight+'/'+context.height) | bmiFilter"></mt-cell>
    <mt-cell title="腰围" :value="context.waistline+'cm'"></mt-cell>
    <mt-cell v-if="context.bodyOther" title="其他" :value="context.bodyOther"></mt-cell>
  </div>
  <div class="med-spaceTitle">生活方式指导</div>
  <div class="page-part">
    <mt-cell title="日吸烟量" :value="context.smoke+'支'"></mt-cell>
    <mt-cell title="日饮酒量" :value="context.wine+'两'"></mt-cell>
    <mt-cell title="摄盐情况" :value="context.smoke+'克/天'"></mt-cell>
    <mt-cell title="食用油摄入情况" :value="context.salt+'克/天'"></mt-cell>
    <mt-cell title="运动" :value="context.sportNum+'次/周'+context.sportMinute+'分钟/次'"></mt-cell>
    <mt-cell title="心理调整" :value="context.heartDebug"></mt-cell>
    <mt-cell title="遵医行为" value="一般"></mt-cell>
  </div>
  <div class="med-spaceTitle">转归情况</div>
  <div class="page-part">
    <mt-cell title="是否转归" :value="context.isBack"></mt-cell>
    <mt-cell title="转归列别" :value="context.backType"></mt-cell>
    <mt-cell title="原因" :value="context.backReason"></mt-cell>
  </div>
  <div class="med-spaceTitle">随访总结</div>
  <div class="page-part">
    <mt-cell title="辅助检查" value="无"></mt-cell>
    <mt-cell title="接受管理程度" :value="context.accept"></mt-cell>
    <mt-cell title="此次随访分类" value="高血压患者"></mt-cell>
    <mt-cell title="下次随访日期" :value="context.nextDate | timeFilter"></mt-cell>
    <mt-cell title="随访医生" value="李医生"></mt-cell>
  </div>
</div>
</template>

<script>
import util from '@/util'

    export default {
      data () {
        return {
            context:{}
        }
      },
      mounted () {
        let context = this.$route.params.context;
        if(context) {
          this.context = JSON.parse(context);
        } else {
          util.toast('出错了')
        }
      }
    }
</script>

<style lang="scss">
.med-info{
  .mint-cell-wrapper{
    padding:10px;
    align-items: baseline;
    .mint-cell-value{
      -webkit-box-align: start;
      -ms-flex-align: start;
      align-items: baseline;
    }
  }
  .mint-cell-label{
    font-size:18px;
    color: #E23E2C;
    padding:0 0 0 30px;
  }
}

</style>
