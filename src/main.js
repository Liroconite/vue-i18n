import Vue from 'vue'
import App from './App.vue'
import i18n from './plugins/i18n'
import ElementUI from 'element-ui'
import { router } from './router'

// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getStorage, ref, getDownloadURL, uploadBytes } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACU9YLDlSv5rVubpD_CCRQRwEX28Xwci0",
  authDomain: "application-d86e0.firebaseapp.com",
  databaseURL: "https://application-d86e0-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "application-d86e0",
  storageBucket: "application-d86e0.appspot.com",
  messagingSenderId: "750475289760",
  appId: "1:750475289760:web:081b8ce6c9a9a5747b95c5",
  measurementId: "G-0DBNF38DC0"
};
let firebaseApp
const apps = getApps()

if (!apps.length) {
  firebaseApp = initializeApp(firebaseConfig)
} else {
  firebaseApp = apps[0]
}

Vue.prototype.$firebaseApp = firebaseApp

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);



Vue.use(ElementUI);
Vue.use(router);
Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  render: h => h(App),
}).$mount('#app')
