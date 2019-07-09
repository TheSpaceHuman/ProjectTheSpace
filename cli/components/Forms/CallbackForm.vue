<template>
  <section class="callback-form-wrapper">
    <div class="container">
      <h2 class="callback-form__title">
        Обратная связь
      </h2>
      <el-row type="flex">
        <el-col :span="12" :offset="6">
          <el-form ref="callbackForm" :model="callbackForm" :rules="callbackRules">
            <input type="hidden" name="csrf" :value="$store.state.csrf">
            <el-form-item :label="$t('forms.callback.inputName.title')" prop="name">
              <el-input v-model="callbackForm.name" :placeholder="$t('forms.callback.inputName.placeholder')" />
            </el-form-item>
            <el-form-item :label="$t('forms.callback.inputEmail.title')" prop="email">
              <el-input v-model="callbackForm.email" :placeholder="$t('forms.callback.inputEmail.placeholder')" type="text" />
            </el-form-item>
            <el-form-item>
              <el-input v-model="callbackForm.message" type="textarea" />
            </el-form-item>
            <el-button type="primary" @click="submitForm('callbackForm')">
              {{ $t('forms.callback.submit') }}
            </el-button>
          </el-form>
        </el-col>
      </el-row>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      callbackForm: {
        name: null,
        email: null,
        message: null
      },
      callbackRules: {
        name: [
          { required: true, message: 'Поле обязательное', trigger: 'blur' },
          { min: 3, message: 'Не мении 3-х символов', trigger: 'blur' }
        ],
        email: [
          { required: true, message: 'Поле обязательное', trigger: 'blur' },
          { type: 'email', message: 'Введите email', trigger: 'blur' }
        ],
        message: [
          { min: 3, message: 'Не мении 3-х символов', trigger: 'blur' },
          { max: 10000, message: 'Ухх, длиноватое у вас сообщение...', trigger: ['blur', 'change'] }
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      console.log(this.$refs)
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$axios.post(this.$store.state.apiPath + 'sendCallback', {
            name: this.callbackForm.name,
            email: this.callbackForm.email,
            message: this.callbackForm.message
          }).then((res) => {
            console.log(res)
            this.callbackForm.name = null
            this.callbackForm.email = null
            this.callbackForm.message = null
            this.$message({
              showClose: true,
              message: 'Сообщение успушно отправленно',
              type: 'success'
            })
          })
            .catch(e => console.error(e))
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

<style lang="scss">
.callback-form__title {
  font-size: 29px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 20px;
}
</style>
