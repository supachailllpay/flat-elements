const updateStyle = (element, style, unset) => {
  Object.keys(style).forEach(key => {
    element.style[key] = !unset ? style[key] : ''
  })
}

const animate = (element, keyframe, options) => {
  let timing = { duration: 200, easing: 'ease-in' }
  updateStyle(element, options.style)
  let animation = element.animate(keyframe(), timing)
  if (options.reversed) animation.reverse()
  animation.onfinish = () => {
    updateStyle(element, options.style, true)
  }
}

export default {
  expand (element, options) {
    let keyframe = () => ({
      height: [0, element.scrollHeight + 'px']
    })
    animate(element, keyframe, options)
  },

  fadeInUp (element, options) {
    let keyframe = () => ({
      transform: ['translateY(24px)', 'translateY(0)'],
      opacity: [0, 1]
    })
    animate(element, keyframe, options)
  }
}
