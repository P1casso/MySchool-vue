<template>

  <!--顶部搜索框-->
  <form action="/">
    <van-search v-model="searchValue" placeholder="请输入搜索关键词" @search="getCarousel" shape="round">
    </van-search>
  </form>

  <!--  &lt;!&ndash;轮播图&ndash;&gt;-->
  <!--  <nut-swiper :init-page="page" :pagination-visible="true" pagination-color="#426543" auto-play="3000"-->
  <!--              style="height: auto">-->
  <!--    <nut-swiper-item v-for="carousel in carousels" :key="carousels"><img-->
  <!--        :src="carousel.imagePath" alt="" class="banner-img"></nut-swiper-item>-->
  <!--  </nut-swiper>-->

  <!--中间的按钮-->
  <van-grid :border="false">
    <van-grid-item icon="friends" icon-color="" text="社团"/>
    <van-grid-item icon="cluster" icon-color="#1f8aec" text="组织"/>
    <van-grid-item icon="thumb-circle" icon-color="#f80a0a" text="志愿"/>
    <van-grid-item icon="medal" text="体育" icon-color="#d7a222"></van-grid-item>
    <van-grid-item icon="chat" text="表白墙" icon-color="deeppink" to="/confessionalWall"></van-grid-item>
    <van-grid-item icon="search" text="失物招领" icon-color="#d7a222"></van-grid-item>
    <van-grid-item icon="bill" text="兼职" icon-color="black"></van-grid-item>
    <van-grid-item icon="search" text="失物招领" icon-color="#d7a222"></van-grid-item>
  </van-grid>

  <!--底部新闻列表-->
  <div style="padding-bottom: 50px">
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <div v-for="article in articles" :key="articles">
          <van-cell :title="article.title" center class="user-info" @click="gotoArticle(article.id)">
            <template #icon>
              <nut-image src="https://p1casso-college.oss-cn-guangzhou.aliyuncs.com/0.jpg" width="70" height="70"
                         style="padding-right: 10px"/>
            </template>
            <template #label>
              <a>{{ article.organizationName }}</a>
            </template>
          </van-cell>
        </div>
      </van-list>

    </van-pull-refresh>
    <nut-backtop :bottom="100"></nut-backtop>
  </div>
</template>

<script>
import {NavBar, Grid, GridItem} from 'vant';
import {getArticle, getArticleById, getCarousel} from "@/api/home"

import {Search} from 'vant';
import MescrollVue from 'mescroll.js/mescroll.vue'
import {PullRefresh} from 'vant';

export default {
  name: "Home",
  data() {
    return {
      // banners: [],
      // recommends: [],
      // count: 0,
      loading: false,
      finished: false,
      refreshing: false,
      page: 0,
      // list: [],
      carousels: {},
      searchValue: "",
      current: 1,
      limit: 7,
      articles: [],
      total: 0
    }
  },
  components: {
    NavBar,
    Grid,
    GridItem,
    Search,
    MescrollVue,
    PullRefresh
  },

  created() {
    this.getCarousel()
    this.getArticle(this.current, this.limit);
  },

  methods: {
    onRefresh() {
      this.finished = false
      this.loading = true;
      this.onLoad();
    },
    onLoad() {
      setTimeout(() => {
        if (this.refreshing) {
          this.articles = []
          this.current = 1
        }
        this.getArticle(this.current, this.limit)
        this.loading = false
        this.refreshing = false
      }, 2000)

    },
    search() {
      alert("搜索的内容是" + this.searchValue)
    },

    getCarousel() {
      getCarousel().then(res => {
        this.carousels = res.data.carousels;
      })
    },


    getArticle(current, limit) {
      getArticle(current, limit).then(res => {
        this.total = res.data.total
        for (let i = 0; i < res.data.articles.length; i++) {
          this.articles.push(res.data.articles[i])
        }

        this.current++
        if (this.articles.length === this.total) {
          this.finished = true
        }
      })
    },

    gotoArticle(id) {
      this.$router.push("/article/" + id)
    }
  }
}
</script>

<style scoped>
@import url("@/assets/icons/iconfont.css");

.banner-img {
  width: 100%;
  height: 150px;
}

/*.my-swipe .van-swipe-item {*/
/*  color: #fff;*/
/*  font-size: 20px;*/
/*  line-height: 150px;*/
/*  !*text-align: center;*!*/
/*  !*text-align: ;*!*/
/*  background-color: #39a9ed;*/
/*}*/

/*.item .text {*/
/*  padding-left: 20px;*/
/*}*/

.van-card {
  font-size: 16px;
  /*font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Segoe UI, Arial, Roboto, PingFang SC, miui, Hiragino Sans GB, Microsoft Yahei, sans-serif;*/
}

.van-card__title {
  padding-left: 10px;
}

a:link {
  color: gray;
}

a:visited {
  color: gray;
}

a:hover {
  color: gray;
}

a:active {
  color: gray;
}

</style>
