import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyAEExuDfcX8d5uxVqQ5inUp51MJ8oYwzHM',
    authDomain: 'wings01.firebaseapp.com',
    databaseURL: 'https://wings01.firebaseio.com',
    projectId: 'wings01',
    storageBucket: 'wings01.appspot.com',
    messagingSenderId: '184140956297',
    appId: '1:184140956297:web:2877109078f8d31cbefc58',
    measurementId: 'G-LQNQP9QJ3C',
  })
}

export default firebase
