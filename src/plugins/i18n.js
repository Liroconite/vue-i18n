import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)


const i18n = new VueI18n({
    locale: 'fr',
    fallbackLocale: 'ch',
    messages: {
        fr: {
            titre: 'Plateforme de gestion',
            LoginTxt: 'Centralisez et gérez vos contrats pour optimiser vos consommations.',
            mdpo: 'Mot de passe oublé',
            compte: 'Crée un compte',
            log: 'Login',
            email: 'Email',
            password: 'Mot de passe'
        },
        ch: {
            titre: '管理平台',
            LoginTxt: '忘记密码1',
            mdpo: '忘记密码',
            compte: '创建账户',
            log: '登录',
            email: '邮箱',
            password: '密码'
        }
    }
})

export default i18n;