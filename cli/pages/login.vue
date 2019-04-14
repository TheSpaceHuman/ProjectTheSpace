<template>
  <main class="content">
    <a-row type="flex" justify="center">
      <a-col :span="12">
        <a-tabs defaultActiveKey="1">
          <a-tab-pane tab="Login" key="1">
            <a-form
              :form="loginForm"
              class="login-form"
              layout="horizontal"
            >
              <a-form-item>
                <a-input
                  placeholder="Username"
                  v-model="loginForm.name"
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
                  type="password"
                  placeholder="Password"
                  v-model="loginForm.password"
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
                <a
                  class="login-form-forgot"
                  href="forgot-password"
                >
                  Forgot password
                </a>
              </a-form-item>
              <a-form-item>
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
          <a-tab-pane tab="Registration" key="2" forceRender>
            <a-form
              :form="registerForm"
              class="register-form"
              layout="horizontal"
            >
              <a-form-item>
                <a-input
                  placeholder="Username"
                  v-model="registerForm.name"
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
                  placeholder="Email"
                  v-model="registerForm.email"
                >
                  <a-icon
                    slot="prefix"
                    type="email"
                    style="color: rgba(0,0,0,.25)"
                  />
                </a-input>
              </a-form-item>
              <a-form-item>
                <a-input
                  type="password"
                  placeholder="Password"
                  v-model="registerForm.password"
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
                  type="password"
                  placeholder="Confirm password"
                  v-model="registerForm.repeatPassword"
                >
                  <a-icon
                    slot="prefix"
                    type="lock"
                    style="color: rgba(0,0,0,.25)"
                  />
                </a-input>
              </a-form-item>
              <a-form-item>
                <a-button
                  type="primary"
                  html-type="submit"
                  class="login-form-button"
                >
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
  name: 'PageHome',
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
.login-form {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  flex-direction: column;
  width: 360px;
  margin: 0 auto;
}
</style>
