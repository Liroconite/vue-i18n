<template>
    <div id="app">
        <!-- <div class="option">
            <a href="#" @click="setLocale('fr')">Français</a>
            <a href="#" @click="setLocale('ch')">Chinese</a>
        </div> -->
        <el-dropdown>
        <el-button type="primary">
            Liste déroulante<i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item href="#" @click="setLocale('fr')">Français</el-dropdown-item>
            <el-dropdown-item href="#" @click="setLocale('ch')">Chinese</el-dropdown-item>
        </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script>
    export default {
        name: "NavBar",
        methods:{
    setLocale(locale){
      this.$i18n.locale = locale
    }
  },
    };
</script>

<style>

</style>
