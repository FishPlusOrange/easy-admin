<template>
  <div class="login">
    <div class="login-box">
      <div class="login-row">
        <h1>Easy Admin</h1>
      </div>
      <div class="login-row">
        <label><Icon type="person"/></label>
        <input type="text" placeholder="请输入用户名" @keyup.enter="userLogin">
      </div>
      <div class="login-row">
        <label><Icon type="key"/></label>
        <input type="password" placeholder="请输入密码" @keyup.enter="userLogin">
      </div>
      <div class="login-row">
        <input type="button" v-model="loginTip" @click="userLogin">
      </div>
    </div>
    <div class="copyright">
      <span>By FishPlusOrange</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      loginTip: '登录',
      isLogin: false
    }
  },
  methods: {
    // 用户登录
    userLogin () {
      if (!this.isLogin) {
        this.toggleLogin(true)
        setTimeout(() => {
          this.$router.push({ name: 'main' })
        }, 1000)
      }
    },
    // 切换登录状态
    toggleLogin (flag) {
      this.loginTip = flag ? '登录中...' : '登录'
      this.isLogin = flag
    }
  }
}
</script>

<style lang="scss" scoped>
$radius-size: 4px;
$light-bg: rgba(255, 255, 255, .7);
$dark-bg: rgba(73, 80, 96, .7);
$light-text: rgba(255, 255, 255, 1);
@mixin square($size: 100%) {
  width: $size;
  height: $size;
}

.login {
  @include square;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url(../assets/images/login-bg.jpg) no-repeat center;
  background-size: cover;
  .login-box {
    animation: fade .8s;
    .login-row {
      display: flex;
      justify-content: center;
      margin-bottom: 15px;
      h1 {
        color: $light-text;
        font-size: 35px;
        font-weight: 300;
        letter-spacing: .5px;
      }
      label {
        @include square(50px);
        display: flex;
        align-items: center;
        justify-content: center;
        background: $dark-bg;
        border-top-left-radius: $radius-size;
        border-bottom-left-radius: $radius-size;
        i {
          color: $light-text;
          font-size: 18px;
        }
      }
      input {
        outline: none;
        background: $light-bg;
        border: 0 none;
      }
      input[placeholder] {
        width: 350px;
        padding-left: 10px;
        border-top-right-radius: $radius-size;
        border-bottom-right-radius: $radius-size;
      }
      input[type="button"] {
        flex: 1;
        height: 50px;
        background: $light-bg;
        border: 0 none;
        border-radius: $radius-size;
        cursor: pointer;
        font-size: 14px;
        transition: background .3s;
        &:hover {
          color: $light-text;
          background: $dark-bg;
        }
      }
    }
  }
  .copyright {
    color: $light-text;
    font-size: 14px;
    letter-spacing: .5px;
    position: absolute;
    bottom: 50px;
  }
}
@keyframes fade {
  from {
    transform: translateY(-15px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
