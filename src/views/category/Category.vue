<template>
  <div class="wrapper">
    <div v-for="carousel in carousels" :key="carousels">
      <van-cell :title="carousel.id" center class="user-info"
                url="/userinfo">
        <template #icon>
          <nut-image
              :src="carousel.imagePath"
              width="70"
              height="70"
              style="padding-right: 10px"
          />
        </template>
        <template #label>
          <a href="https://www.baidu.com">软件工程系</a>
        </template>
      </van-cell>
    </div>
  </div>

</template>

<script>

import {getCarousel} from "@/api/home"

export default {

  name: "Category",
  created() {
    this.getCarousel()
  },
  methods: {
    getCarousel() {
      getCarousel().then(res => {
        console.log(res)
        this.carousels = res.data.carousels;
      })
    }
  },
  data() {
    return {
      images: [
        "https://p1casso-college.oss-cn-guangzhou.aliyuncs.com/0.jpg",
        "https://p1casso-college.oss-cn-guangzhou.aliyuncs.com/0%20%281%29.jpg",
        "https://pic.rmb.bdstatic.com/bjh/75e8132a1c31fedac4e38de030dc4ac7.jpeg",
        "https://pic.rmb.bdstatic.com/bjh/722a86b92eaafa9d3ba613d8259fa7c1.jpeg",
        "https://pic.rmb.bdstatic.com/bjh/ec71b344647718d52a2b0f90090a0e8e.jpeg",
        "https://pic.rmb.bdstatic.com/bjh/6947f37ab142cc2a8308f4b344dd735d.jpeg",
      ],
      carousels: {}
    }
  },
}
</script>

<style scoped>

</style>
