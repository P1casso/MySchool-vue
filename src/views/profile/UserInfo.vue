<template>
  <van-nav-bar
      title="个人信息" left-text="返回" left-arrow @click-left="goBack"/>
  <van-cell-group>
    <van-cell title="姓名" value="李永辉"/>
    <van-cell title="学号" :value="userId"/>
  </van-cell-group>
</template>

<script>
import {get} from "@/api/home"

export default {
  name: "UserInfo",
  data() {
    return {
      userId: localStorage.getItem("userId")
    }
  },
  created() {
  },
  methods: {
    goBack() {
      history.back()
    },
  }
}
</script>

<style scoped>

</style>
