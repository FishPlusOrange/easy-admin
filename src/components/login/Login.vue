<template>
  <div class="login">
    <login-panel
      :isLogin="isLogin"
      :loginTip="loginTip"
      @call-user-login="handleUserLogin"
    />
    <div class="copyright">
      <span>By FishPlusOrange</span>
    </div>
  </div>
</template>

<script>
import LoginPanel from './components/LoginPanel'
import { getToken, setToken } from '@/libs/util'
import { mapActions } from 'vuex'
export default {
  name: 'Login',
  components: {
    LoginPanel
  },
  data () {
    return {
      isLogin: false,
      loginTip: '登录'
    }
  },
  methods: {
    ...mapActions([
      'userLogin'
    ]),
    // 用户登录操作
    handleUserLogin ({ loginName, password }) {
      if (!this.isLogin) {
        this.toggleLogin(true)
        this.userLogin({
          loginName,
          password
        })
          .then(() => {
            const token = getToken()
            if (token) {
              this.$router.push({ name: 'Main' }) // 路由跳转主页
            } else {
              this.handleLoginErr('用户名或密码错误，请确认后再试')
            }
          })
          .catch(() => {
            this.handleLoginErr('用户登录失败，请稍后再试')
          })
      }
    },
    // 登录失败
    handleLoginErr (errTip) {
      this.$Message.error(errTip)
      this.toggleLogin(false) // 切换登录状态
    },
    // 切换登录状态
    toggleLogin (flag) {
      this.loginTip = flag ? '登录中...' : '登录'
      this.isLogin = flag
    }
  }
}
</script>

<style lang="scss">
.login {
  @include square;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url(../../assets/images/login-bg.jpg) no-repeat center;
  background-size: cover;
  .copyright {
    color: $light-text;
    font-size: 14px;
    letter-spacing: .5px;
    position: absolute;
    bottom: 50px;
  }
}
</style>
