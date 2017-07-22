const days = [
  'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'
]

const months = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
]

class CustomDate {
  constructor (date) {
    this.date = Date.parse(date) ? new Date(date) : new Date()
    this.date.setHours(0, 0, 0, 0)
  }

  setDate (date) {
    this.date.setDate(date)
  }

  setMonth (month) {
    this.date.setMonth(month)
  }

  setYear (year) {
    this.date.setFullYear(year)
  }

  moveMonth (delta) {
    this.date.setMonth(this.date.getMonth() + delta)
  }

  moveYear (delta) {
    this.date.setFullYear(this.date.getFullYear() + delta)
  }

  isEqual (value) {
    if (Date.parse(value)) {
      return new Date(value).toDateString() === this.date.toDateString()
    }
  }

  toDateString () {
    return this.date.toDateString()
  }

  toDateObject () {
    return {
      year: this.date.getFullYear(),
      month: this.date.getMonth(),
      date: this.date.getDate()
    }
  }

  toCustomDate () {
    return new CustomDate(this.date)
  }
}

export default {
  days,
  months,
  CustomDate
}
