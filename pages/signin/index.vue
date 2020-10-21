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
    <v-card> </v-card>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      console.log('login')
      this.$store.dispatch('login')
    },
  },
}
</script>
