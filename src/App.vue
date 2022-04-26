<template>
  <div id="app">
    <el-dropdown>
      <span class="el-dropdown-link">
        Menu déroulant<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item
          ><a href="#" @click="setLocale('fr')">Français</a></el-dropdown-item
        >
        <el-dropdown-item
          ><a href="#" @click="setLocale('ch')">Chinese</a></el-dropdown-item
        >
      </el-dropdown-menu>
    </el-dropdown>
    <!-- <LoginPage :msg="$t('titre')"/> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
