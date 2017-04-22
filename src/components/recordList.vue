<!--健康随访-->
<template title="健康随访">
<div class="recordList">
  <div class="chart">
  
  </div>
  <div>
    <div class="mint-cell">
      <mt-cell title="血压数据" value="2017-04-01  07:00" label="偏高" class="med-info">
        <img slot="icon" src="../assets/icon_blood_pressure.png" width="24" height="24">
      </mt-cell>
      <div class="mint-cell-wrapper myItem" >
          <div class="item">
            <span>高压</span>
            <p>149<span>mmHg</span></p>
          </div>
          <div class="item">
            <span>低压</span>
            <p>78<span>mmHg</span></p>
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
    <mt-cell title="正常高值血压"></mt-cell>
    <mt-cell title="超重或肥胖"></mt-cell>
    <mt-cell title="长期膳食高盐"></mt-cell>
    <mt-cell title="高血压家庭史"></mt-cell>
    <mt-cell title="长期过量饮酒"></mt-cell>
    <mt-cell title="年龄≥55周岁"></mt-cell>
    <mt-cell title="其他" value="其他危险因素详细描述"></mt-cell>
  </div>
  <div class="med-spaceTitle">主要体征</div>
  <div class="page-part">
    <mt-cell title="体重" value="kg"></mt-cell>
    <mt-cell title="身高" value="cm"></mt-cell>
    <mt-cell title="体质指数" value="kg/m2"></mt-cell>
    <mt-cell title="腰围" value="cm"></mt-cell>
    <mt-cell title="其他" value="cm"></mt-cell>
  </div>
  <div class="med-spaceTitle">生活方式指导</div>
  <div class="page-part">
    <mt-cell title="日吸烟量" value="支"></mt-cell>
    <mt-cell title="日饮酒量" value="两"></mt-cell>
    <mt-cell title="摄盐情况" value="克/天"></mt-cell>
    <mt-cell title="食用油摄入情况" value="克/天"></mt-cell>
    <mt-cell title="运动" value="次/周      分钟/次"></mt-cell>
    <mt-cell title="心理调整" value="良好"></mt-cell>
    <mt-cell title="遵医行为" value="一般"></mt-cell>
  </div>
  <div class="med-spaceTitle">转归情况</div>
  <div class="page-part">
    <mt-cell title="是否转归" value="是"></mt-cell>
    <mt-cell title="转归列别" value="高血压患者"></mt-cell>
    <mt-cell title="原因" value="原因"></mt-cell>
  </div>
  <div class="med-spaceTitle">随访总结</div>
  <div class="page-part">
    <mt-cell title="辅助检查" value="无"></mt-cell>
    <mt-cell title="接受管理程度" value="接受"></mt-cell>
    <mt-cell title="此次随访分类" value="高血压患者"></mt-cell>
    <mt-cell title="下次随访日期" value="2017-05-01"></mt-cell>
    <mt-cell title="随访医生" value="李医生"></mt-cell>
  </div>
</div>
</template>

<script>

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
