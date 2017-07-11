import App from './components/app'
import Checkbox from './components/checkbox'
import Radio from './components/radio'
import Textarea from './components/textarea'
import Textfield from './components/textfield'

const FlatElement = {
  install (Vue, options) {
    [
      App,
      Checkbox,
      Radio,
      Textarea,
      Textfield
    ].forEach(component => {
      Vue.component(component.name, component)
    })
  }
}

export default FlatElement
