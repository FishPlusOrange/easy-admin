<template>
  <Layout class="main">
    <Header class="header">
      <div class="header-part">
        <div class="logo">
          <h1>Easy Admin</h1>
        </div>
        <Menu class="menu" mode="horizontal" theme="dark">
          <MenuItem name="system">
            <Icon type="settings"/>
            系统管理
          </MenuItem>
        </Menu>
      </div>
      <div class="header-part">
        <user-panel :userInfo="userInfo"/>
        <full-screen v-model="isFullScreen"/>
      </div>
    </Header>
    <Layout>
      <router-view/>
    </Layout>
  </Layout>
</template>

<script>
import UserPanel from './components/UserPanel'
import FullScreen from './components/FullScreen'
import { mapState } from 'vuex'
export default {
  name: 'Main',
  components: {
    UserPanel,
    FullScreen
  },
  data () {
    return {
      isFullScreen: false
    }
  },
  computed: {
    ...mapState({
      userInfo: state => state.user.userInfo
    })
  }
}
</script>

<style lang="scss" scoped>
.main {
  .header {
    display: flex;
    justify-content: space-between;
    .header-part {
      display: flex;
      .logo {
        color: $light-text;
      }
      .menu {
        margin-left: 30px;
        height: 64px;
        line-height: 64px;
      }
    }
  }
}
</style>
