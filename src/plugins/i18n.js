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
            password: 'Mot de passe',
            Vos_Fichier: 'Vos Documents',
            datetable: 'Date',
            docname: 'Nom',
            editer: 'Editer',
            supression: 'Delect',
            operation: 'Operation',
            deposer: 'Déposer les fichiers ici ou',
            cliquerici: 'cliquez pour envoyer'
        },
        ch: {
            titre: '管理平台',
            LoginTxt: '集中和管理您的合同，以优化您的消费。',
            mdpo: '忘记密码',
            compte: '创建账户',
            log: '登录',
            email: '邮箱',
            password: '密码',
            Vos_Fichier: '您的文档',
            datetable: '日期',
            docname: '文件名',
            editer: '编辑',
            supression: '删除',
            operation: '操作',
            deposer: '将文件拖放到此处或',
            cliquerici: '点击发送',
        }
    }
})

export default i18n;