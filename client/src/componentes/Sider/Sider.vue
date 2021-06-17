<template>
  <a-layout-sider width="200" style="background: #fff">
    <a-menu
      mode="inline"
      :default-selected-keys="['1']"
      :default-open-keys="['sub1']"
      :style="{ height: '100%', borderRight: 0 }"
    >
      <a-sub-menu key="sub1">
        <span slot="title"><a-icon type="user" />Mi perfil</span>
        <a-menu-item key="1">
          {{ option1 }}
        </a-menu-item>
        <a-menu-item key="2">
          {{ option2 }}
        </a-menu-item>
        <a-menu-item key="3">
          {{ option3 }}
        </a-menu-item>
        <a-menu-item key="4">
          {{ option4 }}
        </a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <span slot="title"><a-icon type="laptop" />Vender</span>
        <a-menu-item key="5">
          Auto
        </a-menu-item>
        <a-menu-item key="6">
          Camioneta
        </a-menu-item>
        <a-menu-item key="7">
          Moto
        </a-menu-item>
        <a-menu-item key="8">
          {{ option8 }}
        </a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub3">
        <span slot="title"><a-icon type="notification" />Comprar</span>
        <a-menu-item key="9">
          Auto
        </a-menu-item>
        <a-menu-item key="10">
          Camioneta
        </a-menu-item>
        <a-menu-item key="11">
          Moto
        </a-menu-item>
        <a-menu-item key="12">
          {{ option12 }}
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </a-layout-sider>
</template>

<script>
export default {
  name: "Sider",
};
</script>
