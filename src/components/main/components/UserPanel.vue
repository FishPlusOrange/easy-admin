<template>
  <div class="user-panel">
    <Dropdown
      trigger="click"
      @on-visible-change="toggleUserHandlerIcon"
    >
      <div class="user-handler">
        <Avatar icon="person" size="small"/>
        <span class="user-name">{{ userInfo.userName }}</span>
        <Icon :type="userHandlerIcon"/>
      </div>
      <DropdownMenu slot="list">
        <DropdownItem @click.native="toggleUserInfo(true)">个人信息</DropdownItem>
        <DropdownItem @click.native="confirmLogout">退出</DropdownItem>
      </DropdownMenu>
    </Dropdown>
    <Modal
      title="个人信息"
      v-model="isShowUserInfo"
      :mask-closable="false"
    >
      <div class="user-info-panel">
        <div class="user-info-row">
          <label>用户名：</label>
          <span>{{ userInfo.userName || '-' }}</span>
        </div>
        <div class="user-info-row">
          <label>邮箱：</label>
          <span>{{ userInfo.email || '-' }}</span>
        </div>
        <div class="user-info-row">
          <label>权限：</label>
          <div class="user-info-tag">
            <Tag
              v-for="(accessName, index) of userInfo.access"
              :key="index"
            >
              {{ accessName }}
            </Tag>
            <span v-if="!userInfo.access.length">{{ '-' }}</span>
          </div>
        </div>
      </div>
      <div slot="footer">
        <Button type="text" @click="toggleUserInfo(false)">关闭</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'UserPanel',
  props: {
    userInfo: Object
  },
  data () {
    return {
      userHandlerIcon: 'arrow-down-b',
      isShowUserInfo: false
    }
  },
  methods: {
    ...mapActions([
      'userLogout'
    ]),
    // 切换箭头图标
    toggleUserHandlerIcon (isVisible) {
      this.userHandlerIcon = isVisible ? 'arrow-up-b' : 'arrow-down-b'
    },
    // 查看用户信息
    toggleUserInfo (isShow) {
      this.isShowUserInfo = isShow
    },
    // 确认退出登录
    confirmLogout () {
      this.$Modal.confirm({
        title: '退出登录',
        content: '确认要退出登录吗？',
        onOk: this.handlerUserLogout
      })
    },
    // 退出登录
    handlerUserLogout () {
      this.userLogout()
        .then(() => {
          this.$router.push({ name: 'login' }) // 路由跳转登录页
        })
        .catch(() => {
          this.handleLoginErr('退出登录失败，请稍后再试')
        })
    }
  }
}
</script>

<style lang="scss">
.user-panel {
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
.user-info-panel {
  font-size: 12px;
  display: flex;
  flex-direction: column;
  .user-info-row {
    min-height: 30px;
    display: flex;
    align-items: center;
    label {
      min-width: 75px;
      font-weight: 600;
    }
  }
}
</style>
