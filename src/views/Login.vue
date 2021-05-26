<template>
  <b-container class="bv-example-row bv-example-row-flex-cols">
    <b-row class="vh-100 p-5" align-v="center" align-h="center">
      <b-col cols="6">
        <b-row align-h="center">
          <h3>Welcome</h3>
        </b-row>

        <b-row align-h="center">
          <b-form v-on:submit.prevent @submit="onSubmit" @reset="onReset">
            <b-form-group id="input-group-1">
              <b-form-input
                id="input-1"
                v-model="form.email"
                placeholder="Email"
                type="email"
                autocomplete="off"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2">
              <b-form-input
                type="password"
                id="input-2"
                placeholder="Password"
                autocomplete="off"
                v-model="form.password"
                required
              ></b-form-input>
            </b-form-group>

            <b-col>
              <b-row align-h="end">
                <b-button type="submit" variant="primary" :disabled="loading">
                  <b-spinner
                    v-show="loading"
                    small
                    label="Spinning"
                  ></b-spinner>
                  Login</b-button
                >
              </b-row>
            </b-col>
          </b-form>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { Auth } from "aws-amplify";
export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      loading: false,
    };
  },
  methods: {
    async onSubmit() {
      this.loading = true;
      await Auth.signIn(this.form.email, this.form.password);
      this.$emit("login");
      this.loading = false;
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.password = "";
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>
