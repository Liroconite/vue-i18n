<template>
     <nav class="head">
        <div class="row">
            <div class="option">
            <select class="custom-select" v-model="lang" @chance="handleChange($event)">
                <option value="fr"><a href="#" @click="setLocale('fr')">Français</a></option>
                <option value="ch"><a href="#" @click="setLocale('ch')">Chinois</a></option>
            </select>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "NavBar",
        methods: {
            handleChange(event){
                localStorage.setItem('lang', event.target.value);
                window.location.reload();
            }
        }
    };
</script>

<style>

</style>
