export default {
  pages: {
    index: {
      promo: {
        title: 'The Space Projects',
        text: 'Привет, меня зовут Артем. Рад все приведствовавить на сайте, посвещённый моим раюотам.'
      },
      strip1: {
        title: 'Технологии',
        text: 'В этом блоке представлен мой стрек инструментов',
        subText: ''
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
        title: 'Блог',
        text: 'Мой простой блог, в котором я сохраняю статьи, которые мне приглянулись'
      }
    },
    todoList: {
      promo: {
        title: 'Заметки',
        text: 'Простая реализация небольшого задачника.'
      }
    },
    passwordManager: {
      promo: {
        title: 'Менеджер паролей',
        text: 'Здесь можно хранить все свои пароли, лишьбы не держать их в голове.'
      }
    },
    chat: {
      promo: {
        title: 'Чат',
        text: 'Добро пожаловать, в групповой чатик.'
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
