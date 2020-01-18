<template>
  <div class="mt-3">
    <div class="row">
      <div class="col-4 mb-3" v-for="(item, index) in imgs" :key="index">
        <img
          alt=""
          class="w-100 mb-2"
          v-skeleton.img="item.src"
          style="min-height: 100px;"
        />
        <h5
          class="w-100"
          style="min-height: 30px;"
          v-skeleton.text="item.name"
        ></h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'skeleton',
  directives: {
    skeleton: {
      bind(el) {
        el.style.backgroundColor = '#eeeeee'
        el.style.Color = '#eeeeee'
      },
      update(el, binding) {
        // 去除骨架屏
        el.style.backgroundColor = ''
        el.style.color = ''
        // 渲染数据
        Object.keys(binding.modifiers).forEach((v) => {
          switch (v) {
            case 'img':
              el.src = binding.value
              break
            case 'text':
              el.innerHTML = binding.value
              break
          }
        })
      }
    }
  },
  data() {
    return {
      imgs: []
    }
  },
  created() {
    for (let i = 0; i < 9; i++) {
      this.imgs.push({ name: '', src: '' })
    }
  },
  // 页面渲染完成
  mounted() {
    // 请求数据
    setTimeout(() => {
      this.imgs = [
        {
          name: 'Vue.js 进阶技巧实战开发',
          src:
            'https://edu-image.nosdn.127.net/3c432149e7754b43b5d2d8f3e9e8224e.jpg'
        },
        {
          name: 'VueCli3.x 实战商城后台管理',
          src:
            'http://edu-image.nosdn.127.net/9769ffd1157747c9b0f668276cf559cc.png'
        },
        {
          name: 'uni-app 实战开发之社区交友类app和小程序',
          src:
            'https://edu-image.nosdn.127.net/11d83c096bec414e8bdf7c4b311186a9.png'
        },
        {
          name: 'uni-app 实战开发之商城类app和小程序',
          src:
            'https://edu-image.nosdn.127.net/b4d2d9f9e6fe41d696133254133178d9.png'
        },
        {
          name: 'uni-app 实战开发之在线视频点播app和小程序',
          src:
            'https://edu-image.nosdn.127.net/561821cf12524f69bde0c6e9d3f3b030.png'
        },
        {
          name: 'uni-app 实战开发之多端企业网盘项目',
          src:
            'https://edu-image.nosdn.127.net/9d416f92eb9f4b0f99673914671a6805.png'
        },
        {
          name: 'uni-app 实战开发之仿微信app和小程序',
          src:
            'https://edu-image.nosdn.127.net/6acb1e3d39dc497bb98cf35b325a755d.png'
        },
        {
          name: 'UNICMF(uniapp+ThinkCMF)详解',
          src:
            'https://edu-image.nosdn.127.net/386d944fc97a4f75870ae3b5ee9f2356.png'
        },
        {
          name: 'ThinkPHP5开发RESTFUL-API接口',
          src:
            'https://edu-image.nosdn.127.net/4146F12EF744B01FBFC91BDF43B02998.png'
        }
      ]
    }, 1000)
  }
}
</script>

<style scoped></style>
