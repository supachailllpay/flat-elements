const FlatElement = {
  install (Vue, options) {
    [].forEach(component => {
      Vue.component(component.name, component)
    })
  }
}

export default FlatElement
