<template>
  <main id="main" class="main">
    <div class="container">
      <el-row justify="space-around" align="center" type="flex">
        <el-col :span="12">
          <el-tabs v-model="activeTab">
            <el-tab-pane :label="$t('forms.login.title')" name="login">
              <el-form ref="loginForm" :model="loginForm" :rules="loginRules">
                <el-form-item :label="$t('forms.login.inputName.title')" prop="name">
                  <el-input v-model="loginForm.name" :placeholder="$t('forms.login.inputName.placeholder')" />
                </el-form-item>
                <el-form-item :label="$t('forms.login.inputPassword.title')" prop="password">
                  <el-input v-model="loginForm.password" :placeholder="$t('forms.login.inputPassword.placeholder')" type="password" />
                </el-form-item>
                <el-button type="primary" @click="submitLogin('loginForm')">
                  {{ $t('forms.login.submit') }}
                </el-button>
              </el-form>
            </el-tab-pane>
            <el-tab-pane :label="$t('forms.register.title')" name="register">
              <el-form ref="registerForm" :model="registerForm" :rules="registerRules">
                <el-form-item :label="$t('forms.register.inputName.title')" prop="name">
                  <el-input v-model="registerForm.name" :placeholder="$t('forms.register.inputName.placeholder')" />
                </el-form-item>
                <el-form-item :label="$t('forms.register.inputEmail.title')" prop="email">
                  <el-input v-model="registerForm.email" :placeholder="$t('forms.register.inputEmail.placeholder')" />
                </el-form-item>
                <el-form-item :label="$t('forms.register.inputPassword.title')" prop="password">
                  <el-input v-model="registerForm.password" :placeholder="$t('forms.register.inputPassword.placeholder')" type="password" />
                </el-form-item>
                <el-button type="primary" @click="submitRegister('registerForm')">
                  {{ $t('forms.register.submit') }}
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
        password: null
      },
      activeTab: 'login',
      loginRules: {
        name: [
          { required: true, message: 'Поле обязательное', trigger: 'blur' },
          { min: 3, message: 'Не мении 3-х символов', trigger: 'blur' }
        ],
        password: [
          { required: true, message: 'Поле обязательное', trigger: 'blur' },
          { min: 6, message: 'Не мении 6-х символов', trigger: 'blur' }
        ]
      },
      registerRules: {
        name: [
          { required: true, message: 'Поле обязательное', trigger: 'blur' },
          { min: 3, message: 'Не мении 3-х символов', trigger: 'blur' }
        ],
        email: [
          { required: true, message: 'Поле обязательное', trigger: 'blur' },
          { type: 'email', message: 'Введите корректную почту', trigger: 'blur' }
        ],
        password: [
          { required: true, message: 'Поле обязательное', trigger: 'blur' },
          { min: 6, message: 'Не мении 6-х символов', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitLogin(formName) {
      console.log(this.$refs)
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$message({
            showClose: true,
            message: 'Вход упешный успешно',
            type: 'success'
          })
        } else {
          this.$message({
            showClose: true,
            message: 'Валидация не корректна',
            type: 'error'
          })
          return false
        }
      })
    },
    submitRegister(formName) {
      const apiPath = this.$store.state.apiPath + 'register'
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$axios.$post(apiPath, {
            name: this.registerForm.name,
            email: this.registerForm.email,
            password: this.registerForm.password
          }).then((res) => {
            console.log(res)
            this.registerForm.name = null
            this.registerForm.email = null
            this.registerForm.password = null
            this.$router.push('/')
            this.$message({
              showClose: true,
              message: 'Регистрация успешна',
              type: 'success'
            })
          }).catch((e) => {
            console.error(e)
          })
        } else {
          this.$message({
            showClose: true,
            message: 'Валидация не корректна',
            type: 'error'
          })
          return false
        }
      })
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
