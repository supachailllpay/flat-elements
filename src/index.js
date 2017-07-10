import App from './components/app'

const FlatElement = {
  install (Vue, options) {
    [
      App
    ].forEach(component => {
      Vue.component(component.name, component)
    })
  }
}

export default FlatElement
