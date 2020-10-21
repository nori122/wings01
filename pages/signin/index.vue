<template>
  <div>
    <v-card outlined>
      <v-container>
        <v-row>
          <v-col cols="12" sm="8" md="8">
            <v-btn class="ma-5" outlined @click="login"
              >Googleアカウントでログイン</v-btn
            >
          </v-col>
          <v-col cols="12" sm="8" md="8">メールアドレスでログイン</v-col>
          <v-col cols="12" sm="8" md="8">
            <v-text-field
              label="Wings ID または メールアドレス"
              placeholder="example@gmail.com"
              prepend-icon="mdi-email-outline"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="8" md="8">
            <v-text-field
              label="パスワード"
              placeholder="******"
              prepend-icon="mdi-lock-outline"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <v-card
      ><h1>Welcome to My Awesome App</h1>
      <v-btn class="ma-5" outlined @click="maillogin">mailでログイン</v-btn>
      <div id="firebaseui-auth-container"></div>
      <div id="loader">Loading...</div>
    </v-card>
  </div>
</template>

<script>
import firebaseui from 'firebaseui'
import firebase from '~/plugins/firebase'
export default {
  methods: {
    login() {
      console.log('login')
      this.$store.dispatch('login')
    },
    maillogin() {
      const ui = new firebaseui.auth.AuthUI(firebase.auth())
      ui.start('#firebaseui-auth-container', {
        signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
        // Other config options...
      })
      const uiConfig = {
        callbacks: {
          signInSuccessWithAuthResult(authResult, redirectUrl) {
            // User successfully signed in.
            // Return type determines whether we continue the redirect automatically
            // or whether we leave that to developer to handle.
            return true
          },
          uiShown() {
            // The widget is rendered.
            // Hide the loader.
            document.getElementById('loader').style.display = 'none'
          },
        },
        // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
        signInFlow: 'popup',
        signInSuccessUrl: '<url-to-redirect-to-on-success>',
        signInOptions: [
          // Leave the lines as is for the providers you want to offer your users.
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.FacebookAuthProvider.PROVIDER_ID,
          firebase.auth.TwitterAuthProvider.PROVIDER_ID,
          firebase.auth.GithubAuthProvider.PROVIDER_ID,
          firebase.auth.EmailAuthProvider.PROVIDER_ID,
          firebase.auth.PhoneAuthProvider.PROVIDER_ID,
        ],
        // Terms of service url.
        tosUrl: '<your-tos-url>',
        // Privacy policy url.
        privacyPolicyUrl: '<your-privacy-policy-url>',
      }
      ui.start('#firebaseui-auth-container', uiConfig)
    },
  },
}
</script>
