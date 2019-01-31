<template>
  <div
    class="full-screen"
    v-if="showFullScreenBtn"
    @click="toggleFullScreen"
  >
    <Tooltip :content="isFullScreen ? '退出全屏' : '全屏'" placement="bottom">
      <Icon :type="isFullScreen ? 'md-contract' : 'md-expand'"/>
    </Tooltip>
  </div>
</template>

<script>
export default {
  name: 'FullScreen',
  model: {
    prop: 'isFullScreen'
  },
  props: {
    isFullScreen: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    showFullScreenBtn () {
      return !window.navigator.userAgent.includes('MSIE')
    }
  },
  created () {
    // 获取初始页面处于全屏模式下的元素
    let isFullScreen = document.fullscreenElement ||
      document.mozFullScreenElement ||
      document.webkitFullscreenElement ||
      document.fullScreen ||
      document.mozFullScreen ||
      document.webkitsFullScreen
    // 初始状态
    this.$emit('input', !!isFullScreen)
    // 监听页面全屏操作
    document.addEventListener('fullscreenchange', () => {
      this.$emit('input', !this.isFullScreen)
    })
    document.addEventListener('mozFullscreenchange', () => {
      this.$emit('input', !this.isFullScreen)
    })
    document.addEventListener('webkitfullscreenchange', () => {
      this.$emit('input', !this.isFullScreen)
    })
    document.addEventListener('msfullscreenchange', () => {
      this.$emit('input', !this.isFullScreen)
    })
  },
  methods: {
    // 全屏操作
    toggleFullScreen () {
      if (this.isFullScreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen()
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen()
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen()
        }
      } else {
        let main = document.body
        if (main.requestFullscreen) {
          main.requestFullscreen()
        } else if (main.mozRequestFullScreen) {
          main.mozRequestFullScreen()
        } else if (main.webkitRequestFullScreen) {
          main.webkitRequestFullScreen()
        } else if (main.msRequestFullscreen) {
          main.msRequestFullscreen()
        }
      }
    }
  }
}
</script>

<style lang="scss">
.full-screen {
  color: $light-text;
  padding: 0 30px;
  margin: 0 20px;
  cursor: pointer;
}
</style>
