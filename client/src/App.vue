<template>
  <div id="app">
    <div>
      <Header />
      <Sider />
    </div>
  </div>
</template>

<script>
import Header from "./componentes/Header/Header";
import Sider from "./componentes/Sider/Sider";

export default {
  name: "App",
  components: {
    Header,
    Sider,
  },
};
</script>
