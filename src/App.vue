<template>
  <div id="app">
    <router-view></router-view>
    <p class="footer">本服务由     技术支持</p>
  </div>
</template>

<script>
export default {
  name: 'app',
   mounted () {
            let state = this.$route.query.state;
            let name = ''
            console.log(this.$route.query)
            if(state == 1) {
                  name = 'bind'
            } else if(state == 2) {
                name = 'me'
            }
            this.$router.push({name: name})
                        
          },
  }

</script>

<style lang="scss">
    @import "style/common.scss";
</style>
