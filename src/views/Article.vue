<template xmlns="http://www.w3.org/1999/html">
  <nut-navbar @on-click-back="back" title="MySchool"></nut-navbar>

  <h3 class="title">{{ article.title }}</h3>

  <van-cell :title=article.organizationName :label=article.gmtCreate center :border=false
            @click="jumpToOrganization(article.authorId)">
    <template #icon>
      <nut-avatar style="margin-right:7px "
                  size="normal"
                  :icon=article.organizationLogo
      ></nut-avatar>
    </template>

  </van-cell>
  <div v-html="article.content" class="content"></div>
  <!--  <div class="comment">-->
  <!--    <nut-comment :info="cmt.info"></nut-comment>-->
  <!--  </div>-->
<!--  <nut-cell-group>-->
<!--  <nut-cell :title=author desc="2022-09-13"></nut-cell>-->
<!--  <nut-cell title='评论内容评论内容评论内容评论内容评论内容' ></nut-cell>-->
<!--  </nut-cell-group>-->
<!--  <nut-cell-group>-->
<!--    <nut-cell :title=author desc="2022-09-13"></nut-cell>-->
<!--    <nut-cell title='评论内容评论内容评论内容评论内容评论内容' ></nut-cell>-->
<!--  </nut-cell-group>-->
<!--  <nut-cell-group>-->
<!--    <nut-cell :title=author desc="2022-09-13"></nut-cell>-->
<!--    <nut-cell title='评论内容评论内容评论内容评论内容评论内容' ></nut-cell>-->
<!--  </nut-cell-group>-->
<!--  <nut-cell-group>-->
<!--    <nut-cell :title=author desc="2022-09-13"></nut-cell>-->
<!--    <nut-cell title='评论内容评论内容评论内容评论内容评论内容' ></nut-cell>-->
<!--  </nut-cell-group>-->
  <van-cell-group inset>
    <van-cell title="单元格" value="内容" label="评论内容评论内容评论内容评论内容评论内容" />
  </van-cell-group>
  <van-cell-group inset>
    <van-cell title="单元格" value="内容" label="评论内容评论内容评论内容评论内容评论内容" />
  </van-cell-group>
  <nut-cell title="我是标题" sub-title="评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容" desc="描述文字"></nut-cell>
  <nut-cell title="我是标题" sub-title="评论内容评论内容评论内容评论内容评论内容" desc="描述文字"></nut-cell>
  <nut-cell title="我是标题" sub-title="评论内容评论内容评论内容评论内容评论内容" desc="描述文字"></nut-cell>
  <nut-cell title="我是标题" sub-title="评论内容评论内容评论内容评论内容评论内容" desc="描述文字"></nut-cell>
</template>

<script>
import {getArticleById} from "@/api/Article";

export default {
  name: "Article",
  data() {
    return {
      id: this.$route.params.id,
      article: [],
      author: 'lyh',
      cmt: {
        "info": {
          "content": "产品包装：塑料瓶，但是能接受，也很喜欢。",
          "nickName": "p1casso",
          "avatar": "https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png",
          "time": "2021-09-09",
          "replay": 23,
          "like": 1
        },
      }
    }
  },
  methods: {
    getArticle() {
      getArticleById(this.id).then(res => {
        this.article = res.data.articles
      })
    },
    jumpToOrganization(id) {
      console.log(id)
    }
  },
  created() {
    this.getArticle()
  }
}
</script>

<style scoped>
.title {
  padding-left: 4%;
  padding-right: 4%;
}

.content {
  padding-left: 4%;
  padding-right: 4%;
  line-height: 2em;
}

.comment {
  padding-left: 4%;
  padding-right: 4%;
}

</style>
