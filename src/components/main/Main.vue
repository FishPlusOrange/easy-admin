<template>
  <Layout class="main">
    <Header>
      <header-menu>
        <user-panel :userInfo="userInfo"/>
        <full-screen v-model="isFullScreen"/>
      </header-menu>
    </Header>
    <Layout class="content">
      <Sider>
        <sider-menu/>
      </Sider>
      <Layout class="main-content">
        <Content class="main-content-inner">
          <router-view/>
        </Content>
        <Footer class="footer">By FishPlusOrange</Footer>
      </Layout>
    </Layout>
  </Layout>
</template>

<script>
import HeaderMenu from './components/HeaderMenu'
import UserPanel from './components/UserPanel'
import FullScreen from './components/FullScreen'
import SiderMenu from './components/SiderMenu'
import { mapState } from 'vuex'
export default {
  name: 'Main',
  components: {
    HeaderMenu,
    UserPanel,
    FullScreen,
    SiderMenu
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

<style lang="scss">
$gap-size: 24px;

.main {
  .content {
    .main-content {
      padding: $gap-size $gap-size 0;
      .main-content-inner {
        padding: $gap-size;
        background: #fff;
        display: flex;
        flex-shrink: 0;
      }
      .footer {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #999;
      }
    }
  }
}
</style>
