<template>
  <div style="padding-left: 100px ;padding-top: 20px;position: absolute">{{ msg }}

    <van-grid :column-num="3" :border="false">
      <van-grid-item>
        <van-image
            src="https://mall-p1casso.oss-cn-shenzhen.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20220804164112.jpg"/>
        <div style="padding-top: 7px">rjfc</div>
      </van-grid-item>

      <van-grid-item>
        <van-image
            src="https://mall-p1casso.oss-cn-shenzhen.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20220804165046.jpg"></van-image>
        <div style="padding-top: 7px">rjgc</div>
      </van-grid-item>
      <van-grid-item>
        <van-image
            src="https://mall-p1casso.oss-cn-shenzhen.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20220804165046.jpg"></van-image>
        <div style="padding-top: 7px">rjgc</div>
      </van-grid-item>
      <van-grid-item>
        <van-image
            src="https://mall-p1casso.oss-cn-shenzhen.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20220804165046.jpg"></van-image>
        <div style="padding-top: 7px">rjgc</div>
      </van-grid-item>
      <van-grid-item>
        <van-image
            src="https://mall-p1casso.oss-cn-shenzhen.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20220804165046.jpg"></van-image>
        <div style="padding-top: 7px">rjgc</div>
      </van-grid-item>
    </van-grid>

  </div>
  <van-sidebar v-model="active">
    <div v-for="Menu in Menus" :key="Menus">
      <van-sidebar-item @click="get(Menu.id)" :title="Menu.title"></van-sidebar-item>
    </div>
  </van-sidebar>
</template>

<script>
import {Grid, GridItem} from 'vant';

export default {
  name: "Cart",
  data() {
    return {
      id: '',
      active: 0,
      info: {},
      Menus: [],
      msg: ''
    }
  },
  created() {
    this.getAllMenu()
    this.get(this.Menus[0].id)
  },
  methods: {
    get(id) {
      this.msg = id
      this.getInfoById(id)
      // this.$router.push({path: "/test/" + id})
    },
    getInfoById(id) {
      let info = {name: "123", age: 12}
      this.info = info
    },
    getAllMenu() {
      this.Menus = [{id: 1234, title: "社团"},
        {id: 1235, title: "学院"},
        {id: 1236, title: "部门"}]
    }
  }
}
</script>

<style scoped>

</style>
