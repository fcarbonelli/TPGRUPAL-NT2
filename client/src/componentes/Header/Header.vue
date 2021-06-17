<template>
  <a-layout-header class="header">
    <div class="logo" />
    <a-menu
      theme="dark"
      mode="horizontal"
      :default-selected-keys="[]"
      :style="{ lineHeight: '64px' }"
    >
      <a-menu-item key="1">
        Home
      </a-menu-item>
      <a-menu-item key="2">
        {{ nav2 }}
      </a-menu-item>
      <a-menu-item key="3">
        {{ nav3 }}
      </a-menu-item>
    </a-menu>
  </a-layout-header>
</template>

<script>
export default {
  name: "Header",
};
</script>
