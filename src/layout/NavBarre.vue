<template>
  <div class="LayoutDefault">
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
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "LayoutDefault",
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale;
    },
  },
};
</script>

<style>
</style>
