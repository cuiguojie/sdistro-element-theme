/* eslint-disable import/no-extraneous-dependencies */
import Vue from 'vue';
import {
  Aside,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Col,
  Container,
  Checkbox,
  CheckboxGroup,
  DatePicker,
  Dialog,
  Form,
  FormItem,
  Header,
  Icon,
  Input,
  Loading,
  Main,
  Message,
  MessageBox,
  Option,
  OptionGroup,
  Pagination,
  Popover,
  Radio,
  RadioGroup,
  RadioButton,
  Row,
  Select,
  Table,
  TableColumn,
  Tabs,
  TabPane,
  Tree,
  Upload,
} from 'element-ui';

import '@/index.scss';

Vue.use(Aside);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Button);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Col);
Vue.use(Container);
Vue.use(DatePicker);
Vue.use(Dialog);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Header);
Vue.use(Icon);
Vue.use(Input);
Vue.use(Main);
Vue.use(Option);
Vue.use(OptionGroup);
Vue.use(Pagination);
Vue.use(Popover);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(RadioButton);
Vue.use(Row);
Vue.use(Select);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Tree);
Vue.use(Upload);

Vue.use(Loading.directive);

// 不可以同时使用Vue.user(Message) 和 Vue.prototype.$message = Message
// 否则会多次初始化，在调试工具里的表现是多个Root
// 同理还有MessageBox
Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$message = Message;
