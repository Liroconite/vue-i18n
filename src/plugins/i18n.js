import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)


const i18n = new VueI18n({
    locale: 'fr',
    fallbackLocale: 'ch',
    messages:{
        fr: {
            titre: 'Plateforme de gestion',
            LoginTxt: 'Centralisez et gérez vos contrats pour optimiser vos consommations.',
            mdpo: 'Mot de passe oublé',
            compte: 'Crée un compte',
            log:'Login'
        },
        ch: {
            titre: '管理平台',
            LoginTxt: '忘记密码1',
            mdpo: '忘记密码',
            compte: '创建帐户',
            log:'创建帐户2'
        }
    }
})

export default i18n;