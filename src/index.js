import App from './components/app'
import Checkbox from './components/checkbox'
import Dialog from './components/dialog'
import Drawer from './components/drawer'
import Dropdown from './components/dropdown'
import Radio from './components/radio'
import Select from './components/select'
import Tab from './components/tab'
import Tabs from './components/tabs'
import Textarea from './components/textarea'
import Textfield from './components/textfield'

const FlatElement = {
  install (Vue, options) {
    [
      App,
      Checkbox,
      Dialog,
      Drawer,
      Dropdown,
      Radio,
      Select,
      Tab,
      Tabs,
      Textarea,
      Textfield
    ].forEach(component => {
      Vue.component(component.name, component)
    })
  }
}

export default FlatElement
