<template>
  <div class="headerBox">
    <!-- HEADER -->
    <header class="headerBox">
      <div class="base">
        <span class="time">
          {{day}}
          <em>{{month}}月</em>
        </span>
      </div>
    </header>

    <!-- BANNER -->
    <div class="bannerBox">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <a>
              <img src="https://pic1.zhimg.com/v2-986f7d270cde7610fa65f8e286f8e99c.jpg" alt="">
              <div class="desc">
                <p>怎样欣赏印象派的画作？</p>
                <p>作者 / stone-zeng</p>
              </div>
            </a>
          </div>
          <div class="swiper-slide">
            <a>
              <img src="https://pic4.zhimg.com/v2-2d9107965bf91f1dc0ad9c93a25a08c3.jpg" alt="">
              <div class="desc">
                <p>怎样欣赏印象派的画作？</p>
                <p>作者 / stone-zeng</p>
              </div>
            </a>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>

    <!-- LIST -->
    <div class="newsBox">
      <!-- START -->
      <div class="itemBox">
        <h4 class="time">
          <span>06月25日</span>
          <i></i>
        </h4>

        <ul class="content">
          <li class="item">
            <a>
              <div class="con">
                <h4>有了 GPS 为什么还要做北斗？</h4>
                <span>作者 / 了不起的苏小姐</span>
              </div>
              <div class="img">
                <img src="https://pic1.zhimg.com/v2-986f7d270cde7610fa65f8e286f8e99c.jpg" alt="">
              </div>
            </a>
          </li>
        </ul>
      </div>
      <!-- END -->
    </div>
  </div>
</template>

<script>
import { computed, onBeforeMount, reactive, toRefs } from 'vue'
import API from '../api'
import utils from '../assets/utils'
export default {
  name: 'Home',
  setup(){
    // 构建响应式数据
    let state = reactive({
      date: new Date(),
      bannerData: [],
      newsData: []
    })

    // 基于计算属性构建月和日
    let month = computed(()=>utils.formatTime(state.date)[1])
    let day = computed(()=>utils.formatTime(state.date)[2])

    // 在第一次渲染组件之前，从服务器获取数据
    onBeforeMount(async () => {
      let {date, stories, top_stories} = await API.zhihu.API_LATEST()
      console.log(date)
      state.data = utils.convertTime(data)
    })

    // 暴露给模版使用
    return {
      ...toRefs(state),
      month,
      day
    }
  }
}
</script>

<style lang="less" scoped>
.headerBox{
  background: pink;
}
</style>