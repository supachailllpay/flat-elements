import App from './components/app'
import Textarea from './components/textarea'
import Textfield from './components/textfield'

const FlatElement = {
  install (Vue, options) {
    [
      App,
      Textarea,
      Textfield
    ].forEach(component => {
      Vue.component(component.name, component)
    })
  }
}

export default FlatElement
