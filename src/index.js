import App from './components/app'
import Checkbox from './components/checkbox'
import Collapse from './components/collapse'
import Datepicker from './components/datepicker'
import Dialog from './components/dialog'
import Drawer from './components/drawer'
import Dropdown from './components/dropdown'
import Radio from './components/radio'
import Ripple from './components/ripple'
import Select from './components/select'
import Tab from './components/tab'
import Tabs from './components/tabs'
import Textarea from './components/textarea'
import Textfield from './components/textfield'
import Toast from './components/toast'
import Toolbar from './components/toolbar'

export default {
  install (Vue, options) {
    [
      App, Checkbox, Collapse, Datepicker, Dialog, Drawer, Dropdown, Radio,
      Ripple, Select, Tab, Tabs, Textarea, Textfield, Toast, Toolbar
    ].forEach(component => {
      Vue.component(component.name, component)
    })
  }
}
