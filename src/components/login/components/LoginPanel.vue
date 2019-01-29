<template>
  <div class="login-panel">
    <div class="login-row">
      <h1>Easy Admin</h1>
    </div>
    <div class="login-row">
      <label><Icon type="person"/></label>
      <input
        type="text"
        placeholder="请输入用户名"
        v-model="loginName"
        @keyup.enter="handleUserLogin"
      >
    </div>
    <div class="login-row">
      <label><Icon type="key"/></label>
      <input
        type="password"
        placeholder="请输入密码"
        v-model="password"
        @keyup.enter="handleUserLogin"
      >
    </div>
    <div class="login-row">
      <input
        type="button"
        v-model="loginTip"
        @click="handleUserLogin"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPanel',
  props: {
    isLogin: {
      type: Boolean,
      required: true
    },
    loginTip: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      loginName: 'FishPlusOrange',
      password: ''
    }
  },
  methods: {
    handleUserLogin () {
      if (!this.loginName || !this.password) {
        this.$Message.warning('用户名和密码都不能为空')
        return
      }
      this.$emit('call-user-login', {
        loginName: this.loginName,
        password: this.password
      })
    }
  }
}
</script>

<style lang="scss">
.login-panel {
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
