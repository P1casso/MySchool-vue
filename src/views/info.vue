<template>
  <van-nav-bar title="购物街" left-text="返回" left-arrow @click-left="onClickLeft"/>
  product info
  {{ msg }}
</template>

<script>
import {NavBar, Grid, GridItem} from 'vant';

export default {
  name: "info",
  components: {
    NavBar
  },
  data() {
    return {
      msg: '',
      product: {
        id: '',
        name: "",
      },
    }
  },
  created() {
    this.get()

  },
  methods: {
    onClickLeft() {
      history.back()
    },

    get() {
      this.msg = this.$route.params
      this.product.id = this.$route.params.id;
      this.getProduct(this.product.id)
    },
    getProduct(id) {
      console.log("根据" + id + "查找")
      this.product.name = "shouji"
      console.log(this.product)
    }
  }
}
</script>

<style scoped>

</style>
