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
        <div class="user-box">
          <Dropdown trigger="click">
            <div class="user-handler">
              <Avatar icon="person" size="small"/>
              <span class="user-name">超级管理员</span>
              <Icon :type="userHandlerIcon"/>
            </div>
            <DropdownMenu slot="list">
              <DropdownItem>个人信息</DropdownItem>
              <DropdownItem>退出</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
        <full-screen v-model="isFullScreen"/>
      </div>
    </Header>
    <Layout>
      <router-view/>
    </Layout>
  </Layout>
</template>

<script>
import FullScreen from '@/components/common/FullScreen'
export default {
  name: 'Main',
  components: {
    FullScreen
  },
  data () {
    return {
      isFullScreen: false,
      userHandlerIcon: 'arrow-down-b'
    }
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
    .user-box {
      .user-handler {
        color: $light-text;
        cursor: pointer;
        display: flex;
        align-items: center;
        .user-name {
          margin: 0 8px;
          max-width: 100px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }
}
</style>
