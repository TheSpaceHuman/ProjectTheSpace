export default {
  pages: {
    index: {
      promo: {
        title: 'ProjectTheSpace',
        text: 'Привет, меня зовут Артем. Рад все приведствовавить на сайте, посвещённый моим наработкам в Web индустрии.'
      },
      strip1: {
        title: 'Практический опыт',
        text: 'Мой опыт работы в этой области более 3-х лет',
        subText: 'Я повидaл много проектов'
      },
      strip2: {
        title: '',
        text: '',
        supText: ''
      },
      technologies: {
        html: {
          title: 'HTML',
          text: 'Язык гипертекстовой разметки. Отвечает за струтуру построения документа (разметку страницы).'
        },
        css: {
          title: 'CSS',
          text: 'Каскадная таблица стилей. Отвечает за стилизацию элемнтов на странице.'
        },
        js: {
          title: 'JavaScript',
          text: 'Язык програмирования, которые оживляет наши интерфейсы.'
        },
        vue: {
          title: 'Vue.js',
          text: 'Прогрессивный фреймворк для создания пользовательских интерфейсов. Идеальный для создания сложных одностраничных приложений.'
        },
        nuxt: {
          title: 'Nuxt.js',
          text: 'Фреймворк, обеспечивающий экосистему проектирования SPA с серверным рендерингом.'
        },
        laravel: {
          title: 'Laravel',
          text: 'PHP фреймворк, на базе которого строиться REST API для нашего приложения.'
        }
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
