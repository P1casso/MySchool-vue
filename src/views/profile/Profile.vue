<template>

  <van-cell title="李永辉" label="1940129114" is-link center class="user-info" url="/userinfo">
    <template #icon>
      <nut-avatar style="margin-right:7px "
                  size="normal"
                  icon="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
      ></nut-avatar>
    </template>
  </van-cell>

</template>

<script>
export default {
  name: "Profile",
  created() {
    // console.log(this.)
  }
}
</script>

<style scoped>
/*.custom-title {*/
/*  margin-right: 4px;*/
/*  vertical-align: middle;*/
/*}*/
/*.user-info{*/
/*  padding-top: 30px;*/
/*}*/
</style>
