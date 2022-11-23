<template>
<!--  <div style="padding-left: 80px ;padding-top: 20px;position: absolute">{{ msg }}</div>-->


  <!--  <van-sidebar style="position: relative" v-model="active" @change="change">-->
  <!--    <van-sidebar-item @click="jump(1)" title="标签名称"/>-->
  <!--    <van-sidebar-item title="标签名称"/>-->
  <!--    <van-sidebar-item title="标签名称"/>-->
  <!--    <van-sidebar-item title="标签名称"/>-->
  <!--    <van-sidebar-item title="标签名称"/>-->
  <!--    <van-sidebar-item title="标签名称"/>-->
  <!--    <van-sidebar-item title="标签名称"/>-->
  <!--    <van-sidebar-item title="标签名称"/>-->
  <!--    <van-sidebar-item title="标签名称"/>-->
  <!--  </van-sidebar>-->

  <sidebar></sidebar>
</template>

<script>
import {Sidebar, SidebarItem} from 'vant';
import sidebar from "@/views/common/sidebar";

export default {
  name: "test",
  data() {
    return {
      active: 0,
      msg: ''
    }
  },
  created() {
    this.get()
  },
  components: {
    Sidebar,
    SidebarItem,
    sidebar
  },
  methods: {
    get() {
      this.msg = this.$route.params.id
    },
  }
}
</script>

<style scoped>

</style>
