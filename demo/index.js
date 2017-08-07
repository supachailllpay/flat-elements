(function () {
  const Vue = window.Vue
  const FlatElements = window.FlatElements.default

  Vue.use(FlatElements)

  void new Vue({
    el: '#app',

    data: () => ({
      form: {
        fullname: '',
        email: '',
        gender: '',
        dateOfBirth: '',
        aboutme: ''
      },
      radio: 'all',
      checkbox: true
    }),

    methods: {
      submit (event) {
        event.preventDefault()
        let form = window.localStorage.getItem('form')
        window.localStorage.setItem('form', JSON.stringify(this.form))
        this.$refs.toast.show('Profile updated', 'Undo', () => {
          window.localStorage.setItem('form', form)
          setTimeout(() => {
            this.$refs.toast.show('Update profile be undone')
          })
        })
      }
    },

    created () {
      let form = JSON.parse(window.localStorage.getItem('form'))
      this.form = Object.assign(this.form, form)
      this.people = [{
        firstName: 'Eduardo',
        lastName: 'Vanyarkin',
        email: 'evanyarkin0@ca.gov',
        age: '45'
      }, {
        firstName: 'Stillmann',
        lastName: 'Kropach',
        email: 'skropach1@constantcontact.com',
        age: '27'
      }, {
        firstName: 'Carmon',
        lastName: 'Dory',
        email: 'cdory2@theatlantic.com',
        age: '51'
      }, {
        firstName: 'Law',
        lastName: 'Walkington',
        email: 'lwalkington3@netlog.com',
        age: '24'
      }, {
        firstName: 'Carny',
        lastName: 'Brolan',
        email: 'cbrolan4@time.com',
        age: '44'
      }, {
        firstName: 'Tonie',
        lastName: 'Mowday',
        email: 'tmowday5@theatlantic.com',
        age: '54'
      }, {
        firstName: 'Luce',
        lastName: 'Cookson',
        email: 'lcookson6@seattletimes.com',
        age: '54'
      }, {
        firstName: 'Kori',
        lastName: 'Cayley',
        email: 'kcayley7@about.com',
        age: '25'
      }, {
        firstName: 'Cacilia',
        lastName: 'Peltz',
        email: 'cpeltz8@e-recht24.de',
        age: '22'
      }, {
        firstName: 'Con',
        lastName: 'Mabbott',
        email: 'cmabbott9@archive.org',
        age: '55'
      }]
    }
  })
}())
