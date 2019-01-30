<template>
  <div class="sider-menu">
    <Menu
      class="menu"
      width="auto"
    >
      <MenuItem
        class="menu-item"
        name="menu"
      >
        <Icon class="menu-icon" type="gear-b"/>
        <span class="menu-name">Menu Level 2</span>
      </MenuItem>
    </Menu>
  </div>
</template>

<script>
export default {
  name: 'SiderMenu'
}
</script>

<style lang="scss">
.sider-menu {
  height: 100%;
  display: flex;
  .menu {
    flex: auto;
  }
}
</style>
