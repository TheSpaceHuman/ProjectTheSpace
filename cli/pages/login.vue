<template>
  <main class="content">
    <a-row type="flex" justify="center">
      <a-col :span="8">
        <a-tabs default-active-key="1">
          <a-tab-pane
            key="1"
            tab="Login"
          >
            <a-form
              :form="loginForm"
              class="login-form"
              layout="horizontal"
            >
              <a-form-item>
                <a-input
                  v-model="loginForm.name"
                  placeholder="Username"
                >
                  <a-icon
                    slot="prefix"
                    type="user"
                    style="color: rgba(0,0,0,.25)"
                  />
                </a-input>
              </a-form-item>
              <a-form-item>
                <a-input
                  v-model="loginForm.password"
                  type="password"
                  placeholder="Password"
                >
                  <a-icon
                    slot="prefix"
                    type="lock"
                    style="color: rgba(0,0,0,.25)"
                  />
                </a-input>
              </a-form-item>
              <a-form-item>
                <a-checkbox>
                  Remember me
                </a-checkbox>
              </a-form-item>
              <a-form-item
                class="button--centered"
              >
                <a-button
                  type="primary"
                  html-type="submit"
                  class="login-form-button"
                >
                  Log in
                </a-button>
              </a-form-item>
            </a-form>
          </a-tab-pane>
          <a-tab-pane
            key="2"
            tab="Registration"
            force-render
          >
            <a-form
              :form="registerForm"
              class="register-form"
              layout="horizontal"
            >
              <a-form-item>
                <a-input
                  v-model="registerForm.name"
                  placeholder="Username"
                >
                  <a-icon
                    slot="prefix"
                    type="user"
                    style="color: rgba(0,0,0,.25)"
                  />
                </a-input>
              </a-form-item>
              <a-form-item>
                <a-input
                  v-model="registerForm.email"
                  placeholder="Email"
                >
                  <a-icon
                    slot="prefix"
                    type="mail"
                    style="color: rgba(0,0,0,.25)"
                  />
                </a-input>
              </a-form-item>
              <a-form-item>
                <a-input
                  v-model="registerForm.password"
                  type="password"
                  placeholder="Password"
                >
                  <a-icon
                    slot="prefix"
                    type="lock"
                    style="color: rgba(0,0,0,.25)"
                  />
                </a-input>
              </a-form-item>
              <a-form-item>
                <a-input
                  v-model="registerForm.repeatPassword"
                  type="password"
                  placeholder="Confirm password"
                >
                  <a-icon
                    slot="prefix"
                    type="lock"
                    style="color: rgba(0,0,0,.25)"
                  />
                </a-input>
              </a-form-item>
              <a-form-item class="button--centered">
                <a-button type="primary" html-type="submit">
                  Register me
                </a-button>
              </a-form-item>
            </a-form>
          </a-tab-pane>
        </a-tabs>
      </a-col>
    </a-row>
  </main>
</template>

<script>
import { required, minLength, maxLength, email, sameAs } from 'vuelidate/lib/validators'

export default {
  components: {},
  data() {
    return {
      loginForm: {
        name: null,
        password: null
      },
      registerForm: {
        name: null,
        email: null,
        password: null,
        repeatPassword: null
      }
    }
  },
  methods: {},
  validations: {
    loginForm: {
      name: {
        required,
        maxLength: maxLength(40)
      },
      password: {
        required,
        minLength: minLength(6)
      }
    },
    registerForm: {
      name: {
        required,
        maxLength: maxLength(40)
      },
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(6)
      },
      repeatPassword: {
        sameAsPassword: sameAs('password')
      }
    }
  }
}
</script>

<style scoped>
.button--centered {
  display: flex;
  justify-content: space-around;
 }
</style>
