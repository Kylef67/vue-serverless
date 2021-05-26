<template>
  <div id="app">
    <div id="nav" v-show="isLoggedIn">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/alert">Alerts</router-link> |
      <a v-on:click="logout">Logout</a>
    </div>
    <router-view @login="checkLogin" />
  </div>
</template>

<script>
import { Auth } from "aws-amplify";

export default {
  data() {
    return { isLoggedIn: false };
  },
  async mounted() {
    this.checkLogin();
  },
  methods: {
    async logout() {
      await Auth.signOut();
      this.isLoggedIn = false;
      this.$router.push("/login");
    },

    async checkLogin() {
      try {
        await Auth.currentSession();
        this.isLoggedIn = true;
        this.$router.push("/");
      } catch (e) {
        this.$router.push("/login");
        console.log(e);
      }
    },
  },
};
</script>
s
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
