import Vue from 'vue'
// import Antd from 'ant-design-vue/lib'
import {
  Button,
  Menu,
  Icon,
  Breadcrumb,
  Form,
  Row,
  Col,
  Input,
  Select,
  Checkbox,
  Tabs
} from 'ant-design-vue'

export default () => {
  // Vue.use(Antd)
  Vue.use(Button)
  Vue.use(Menu)
  Vue.use(Icon)
  Vue.use(Breadcrumb)
  Vue.use(Form)
  Vue.use(Row)
  Vue.use(Col)
  Vue.use(Input)
  Vue.use(Select)
  Vue.use(Tabs)
  Vue.use(Checkbox)
}
