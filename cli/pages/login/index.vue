<template>
  <main id="main" class="main">
    <div class="container">
      <el-row justify="space-around" align="center" type="flex">
        <el-col span="12">
          <el-tabs v-model="activeTab">
            <el-tab-pane :label="$t('forms.login.title')" name="login">
              <el-form :model="loginForm">
                <el-form-item :label="$t('forms.login.inputName.title')">
                  <el-input v-model="loginForm.name" :placeholder="$t('forms.login.inputName.placeholder')" />
                </el-form-item>
                <el-form-item :label="$t('forms.login.inputPassword.title')">
                  <el-input v-model="loginForm.password" :placeholder="$t('forms.login.inputPassword.placeholder')" type="password" />
                </el-form-item>
                <el-button type="primary">
                  {{ $t('forms.login.title') }}
                </el-button>
              </el-form>
            </el-tab-pane>
            <el-tab-pane :label="$t('forms.register.title')" name="register">
              <el-form :model="registerForm">
                <el-form-item :label="$t('forms.register.inputName.title')">
                  <el-input v-model="registerForm.name" :placeholder="$t('forms.register.inputName.placeholder')" />
                </el-form-item>
                <el-form-item :label="$t('forms.register.inputEmail.title')">
                  <el-input v-model="registerForm.email" :placeholder="$t('forms.register.inputEmail.placeholder')" />
                </el-form-item>
                <el-form-item :label="$t('forms.register.inputPassword.title')">
                  <el-input v-model="registerForm.password" :placeholder="$t('forms.register.inputPassword.placeholder')" type="password" />
                </el-form-item>
                <el-form-item :label="$t('forms.register.inputConfirmPassword.title')">
                  <el-input v-model="registerForm.repeatPassword" :placeholder="$t('forms.register.inputConfirmPassword.placeholder')" type="password" />
                </el-form-item>
                <el-button type="primary">
                  {{ $t('forms.register.title') }}
                </el-button>
              </el-form>
            </el-tab-pane>
          </el-tabs>
        </el-col>
      </el-row>
    </div>
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
      },
      activeTab: 'login'
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

<style>
.button--centered {
  display: flex;
  justify-content: space-around;
 }
</style>
