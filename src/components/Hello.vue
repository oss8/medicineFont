<template>
  <div >
      <mt-cell title="标题文字"></mt-cell>
      <mt-cell title="标题文字" value="说明文字"></mt-cell>
      <mt-cell
  title="标题文字"
  to="//github.com"
  is-link
  value="带链接">
</mt-cell>
  </div>
</template>

<script>
export default {

  data () {
    return {
      value:true,
      msg: 'Welcome to Your Vue.js App',
      loading:false,
      list:[1,2,3,4,5,6,7]
    }
  },
  methods: {
    loadMore() {
      this.loading = true;
        setTimeout(() => {
          let last = this.list[this.list.length - 1];
          for (let i = 1; i <= 10; i++) {
            this.list.push(last + i);
          }
          this.loading = false;
        }, 2500);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
.page-infinite-listitem {
    height: 50px;
    line-height: 50px;
}
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
