<template>
  <div class="user-panel">
    <Dropdown trigger="click">
      <div class="user-handler">
        <Avatar icon="person" size="small"/>
        <span class="user-name">管理员</span>
        <Icon :type="userHandlerIcon"/>
      </div>
      <DropdownMenu slot="list">
        <DropdownItem>个人信息</DropdownItem>
        <DropdownItem>退出</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </div>
</template>

<script>
export default {
  name: 'UserPanel',
  data () {
    return {
      userHandlerIcon: 'arrow-down-b'
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
</style>
