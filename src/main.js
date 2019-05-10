import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'



  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAKAyLyHNrnSWJPc0PsfcvpM9KAcOFfIfY",
    authDomain: "colorvue-3fdf5.firebaseapp.com",
    databaseURL: "https://colorvue-3fdf5.firebaseio.com",
    projectId: "colorvue-3fdf5",
    storageBucket: "colorvue-3fdf5.appspot.com",
    messagingSenderId: "586832090669",
    appId: "1:586832090669:web:161886e3c5eb05b9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

new Vue({
  render: h => h(App),
}).$mount('#app')
