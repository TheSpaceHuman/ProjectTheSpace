export default {
  pages: {
    index: {
      promo: {
        title: 'ProjectTheSpace',
        text: 'Привет, меня зовут Артем. Рад все приведствовавить на сайте, посвещённый моим наработкам в Web индустрии.'
      }
    },
    blog: {
      promo: {
        title: '',
        text: ''
      }
    }
  },
  navigation: {
    index: { title: 'Главная', children: null },
    blog: { title: 'Блог', children: null },
    projects: {
      title: 'Проекты',
      children: {
        chat: 'Чат',
        todoList: 'Заметки',
        passwordManager: 'Менеджер паролей'
      }
    },
    userLabel: {
      register: 'Зарегистрироваться',
      login: 'Войти'
    }
  },
  forms: {
    login: {
      title: 'Авторизация',
      inputName: { title: 'Имя', placeholder: 'Введите имя' },
      inputPassword: { title: 'Пароль', placeholder: 'Введите пароль' }
    },
    register: {
      title: 'Регистрация',
      inputName: { title: 'Имя', placeholder: 'Введите имя' },
      inputEmail: { title: 'Почта', placeholder: 'Введите почту' },
      inputPassword: { title: 'Пароль', placeholder: 'Введите пароль' },
      inputConfirmPassword: { title: 'Поворите пароль', placeholder: 'Введите пароль' }
    }
  }
}
