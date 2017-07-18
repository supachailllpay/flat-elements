const forInRange = (r, c, cb) => {
  for (let i = 0; i < r; i += 1) {
    for (let j = 0; j < c; j += 1) cb(i, j, i * c + j)
  }
}

export default {
  getDates (year, month) {
    let first = new Date(year, month, 1)
    let last = new Date(year, month + 1, 0)
    let firstDate = first.getDate()
    let lastDate = last.getDate()
    let firstDay = first.getDay()
    let dates = [[], [], [], [], [], []]
    forInRange(6, 7, (i, j, index) => {
      let date = index - firstDay + 1
      dates[i][j] = date >= firstDate && date <= lastDate ? date : ''
    })
    return dates
  },

  getMonths (names) {
    let months = [[], [], []]
    forInRange(3, 4, (i, j, index) => {
      let month = index
      months[i][j] = names[month]
    })
    return months
  },

  getYears (year) {
    let firstYear = year - year % 10
    let lastYear = firstYear + 10
    let years = [[], [], []]
    forInRange(3, 4, (i, j, index) => {
      let year = index + firstYear
      years[i][j] = year < lastYear ? year : ''
    })
    return years
  }
}
