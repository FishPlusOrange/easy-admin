<template>
  <div class="header-menu">
    <div class="header-part">
      <div class="logo">
        <h1>Admin by Vue</h1>
      </div>
      <Menu class="menu" mode="horizontal" theme="dark">
        <MenuItem class="menu-item" name="system">
          <Icon type="settings"/>
          Menu Level 1
        </MenuItem>
      </Menu>
    </div>
    <div class="header-part">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderMenu'
}
</script>

<style lang="scss">
.header-menu {
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
</style>
