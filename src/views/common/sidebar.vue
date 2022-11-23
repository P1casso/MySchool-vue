<template>
  <div style="padding-left: 80px ;padding-top: 20px;position: absolute">{{ msg }},{{
      info
    }},7777777777666666666666
  </div>
  <van-sidebar v-model="active">
    <div v-for="Menu in Menus" :key="Menus">
      <van-sidebar-item @click="jump(Menu.id)" :title="Menu.title"></van-sidebar-item>
    </div>
    <van-sidebar-item @click="jump(254)" title="标签名称"/>
    <van-sidebar-item @click="jump(35454)" title="标签名称"/>
    <van-sidebar-item @click="jump(4544)" title="标签名称"/>
    <van-sidebar-item @click="jump(55445)" title="标签名称"/>
    <van-sidebar-item @click="jump(6544)" title="标签名称"/>
    <van-sidebar-item @click="jump(75454)" title="标签名称"/>
  </van-sidebar>
</template>

<script>
export default {
  name: "sidebar",
  data() {
    return {
      id: '',
      active: 0,
      info: {},
      Menus: []
    }
  },
  created() {
    this.getAllMenu()
    this.jump()
  },
  methods: {
    jump(id) {
      this.msg = id
      this.getInfoById(id)
      this.$router.push({path: "/test/" + id})
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
