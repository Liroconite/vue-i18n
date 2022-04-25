<template>
  <div id="app">
    <div class="option">
        <a href="#" @click="setLocale('fr')">Français</a>
        <a href="#" @click="setLocale('ch')">Chinese</a>
         </div>
    <!-- <LoginPage :msg="$t('titre')"/> -->
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  },
  methods:{
    setLocale(locale){
      this.$i18n.locale = locale
    }
  },
}
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
