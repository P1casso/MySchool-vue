<template>
  <div style="padding-top: 250px">
    <van-form @submit="loginSubmit">
      <van-cell-group inset>
        <van-field v-model="username" name="userName" label="userName" placeholder="用户名"
                   :rules="[{ required: true, message: '请填写用户名' }]"/>
        <van-field v-model="password" type="password" name="password" label="password" placeholder="密码"
                   :rules="[{ required: true, message: '请填写密码' }]"/>
      </van-cell-group>
      <div style="margin: 16px;">
        <van-button round block type="primary" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import {mapMutations} from "vuex";
import {get, login} from "@/api/home"

export default {
  name: "login",
  data() {
    return {
      username: '',
      password: '',
      token: ''
    }
  },
  methods: {
    ...mapMutations(['login']),
    loginSubmit(userInfo) {
      login(userInfo).then(res => {
        if (res.data.code === 200) {
          this.login({Authorization: res.data.token,UserId: res.data.id})
          this.$router.push("/home")
        }
      })
    },
  }
}
</script>

<style scoped>

</style>
