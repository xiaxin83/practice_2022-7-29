import {
  Button,
  Message,
  MessageBox,
  Form,
  FormItem,
  Input,
  Container,
  Header,
  Aside,
  Main,
  Col,
  Row,
  Radio,
  RadioButton,
  RadioGroup,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Menu,
  MenuItem,
  MenuItemGroup,
  Submenu,
  Breadcrumb,
  BreadcrumbItem,
  Table,
  TableColumn,
} from "element-ui";

const element = {
  install: function (Vue) {
    Vue.use(Button);
    Vue.use(Form);
    Vue.use(FormItem);
    Vue.use(Input);
    Vue.use(Container);
    Vue.use(Header);
    Vue.use(Aside);
    Vue.use(Main);
    Vue.use(Aside);
    Vue.use(Col);
    Vue.use(Row);
    Vue.use(Radio);
    Vue.use(RadioButton);
    Vue.use(RadioGroup);
    Vue.use(Dropdown);
    Vue.use(DropdownItem);
    Vue.use(DropdownMenu);
    Vue.use(Menu);
    Vue.use(MenuItem);
    Vue.use(MenuItemGroup);
    Vue.use(Submenu);
    Vue.use(Breadcrumb);
    Vue.use(BreadcrumbItem);
    Vue.use(Table);
    Vue.use(TableColumn);
    Vue.prototype.$message = Message;
    Vue.prototype.$messageBox = MessageBox;
  },
};
export default element;
