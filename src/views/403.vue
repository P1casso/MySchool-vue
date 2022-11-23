<template>
  <van-nav-bar left-text="返回" left-arrow @click-left="goBack"></van-nav-bar>
  <van-empty class="error" image="error" description="没有权限"/>
</template>

<script>
export default {
  name: "403",
  methods: {
    goBack() {
      history.back()
    }
  }
}
</script>

<style scoped>
.error {
  padding-top: 140px;
}
</style>
