import Vue from 'vue'
import App from './App.vue'

import vuex from "vuex";
import VueRouter from "vue-router";
import router from "./router/index.js";
import store from "./sotre/index"
import "./style/global.css";

import MyTable from "./components/MyTable.vue"

Vue.use(vuex);
Vue.use(VueRouter);
Vue.config.productionTip = false

Vue.component(MyTable.name, MyTable);

import {
  Button,
  Input,
  Menu,
  MenuItem,
  Submenu,
  Container,
  Header,
  Main,
  Pagination,
  MenuItemGroup,
  Aside,
  Table,
  TableColumn,
  Dialog,
  Form,
  FormItem,
  Select,
  Option,
  Checkbox,
  CheckboxGroup,
  CheckboxButton,
  Row,
  Col,
  Dropdown,
  DropdownMenu,
  DropdownItem,
} from "element-ui";

Vue.use(Button);
Vue.use(Input);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(Container);
Vue.use(Header);
Vue.use(Main);
Vue.use(Pagination);
Vue.use(MenuItemGroup);
Vue.use(Aside);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Dialog);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Select);
Vue.use(Option);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(CheckboxButton);
Vue.use(Row);
Vue.use(Col);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);

new Vue({
  render: h => h(App),
  store,
  // 
  router: router,
  beforeCreate() {
    Vue.prototype.$bus = this
  },
}).$mount('#app')
