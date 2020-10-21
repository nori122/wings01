<template>
  <div class="wrap">
    <div>新規登録画面</div>
    <SignUpForm :is-sending="isSending" @submit="submit" />
    <BaseButton to="/" class="mts" is-txt>戻る</BaseButton>
  </div>
</template>

<script>
import firebase from '~/plugins/firebase'
export default {
  // Initialize the FirebaseUI Widget using Firebase.
  data() {
    return {
      isSending: false,
    }
  },
  methods: {
    submit({ email, password }) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch(function (error) {
          // Handle Errors here.
          const errorCode = error.code
          const errorMessage = error.message
          // [START_EXCLUDE]
          if (errorCode === 'auth/weak-password') {
            alert('The password is too weak.')
          } else {
            alert(errorMessage)
          }
          console.log(error)
          // [END_EXCLUDE]
        })
    },
  },
}
</script>
