<style lang='scss' scoped>
  @import '~@/styles/variables';
  @import '~@/styles/mixins';
  @import '~@/styles/mixins/calendar';
  @import '~@/styles/mixins/dropdown';
  @import '~@/styles/mixins/textfield';

  .datepicker {
    position: relative;
    padding-top: 24px;
  }

  .input {
    @include textfield-input;
    padding-right: 24px;
    cursor: pointer;
  }

  .label {
    @include textfield-label;
  }

  .caret {
    @include textfield-caret;
  }

  .content {
    @include dropdown-content;
    padding: 16px;
  }

  .control {
    @include text-button;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 0;
    color: $color-primary;
    text-align: center;
    user-select: none;
  }

  .next {
    @include icon-material;
    cursor: pointer;
  }

  .title {
    cursor: pointer;
  }

  .calendar {
    @include calendar-table;
  }

  .calendar th {
    @include calendar-th;
  }

  .calendar td {
    @include calendar-td;
  }

  .backdrop {
    @include dropdown-backdrop;
  }
</style>

<template>
  <div class='datepicker'>
    <input class='input' type='text' readonly
      :placeholder='label'
      :value='text'
      v-bind='attributes'
      @click='toggle'>
    <label class='label'>{{ label }}</label>
    <div class='caret'>arrow_drop_down</div>
    <div class='content' :class='{ visible }'>
      <div class='control'>
        <div class='next' @click='next(-1)'>chevron_left</div>
        <span class='title' @click='layer = "months"'>{{ months[month] }}</span>
        <span class='title' @click='layer = "years"'>{{ year }}</span>
        <div class='next' @click='next(1)'>chevron_right</div>
      </div>
      <table class='calendar'>
        <tr v-if='layer === "days"'>
          <th v-for='col in days'>{{ col }}</th>
        </tr>
        <tr v-for='row in table'>
          <td v-for='col in row' :class='compute(col)' @click='select(col)'>{{ col }}</td>
        </tr>
      </table>
    </div>
    <div class='backdrop' v-show='visible' @click='toggle'></div>
  </div>
</template>

<script>
  import calendar from '@/utils/calendar'
  import datepicker from '@/utils/datepicker'

  export default {
    name: 'element-datepicker',

    props: {
      label: String,
      value: String,
      attributes: Object
    },

    data: () => ({
      layer: '',
      year: '',
      month: '',
      visible: false
    }),

    computed: {
      text () {
        if (Date.parse(this.value)) {
          let str = new Date(this.value).toDateString()
          return str.replace(/(\w+) (\w+) (\d+) (\d+)/i, '$3 $2 $4')
        }
      },

      table () {
        switch (this.layer) {
          case 'days':
            return calendar.getDates(this.year, this.month)
          case 'months':
            return calendar.getMonths(this.months)
          case 'years':
            return calendar.getYears(this.year)
        }
      }
    },

    methods: {
      next (direction) {
        switch (this.layer) {
          case 'days':
            this.date.moveMonth(direction)
            break
          case 'months':
            this.date.moveYear(direction)
            break
          case 'years':
            this.date.moveYear(direction * 10)
            break
        }
        this.year = this.date.getYear()
        this.month = this.date.getMonth()
      },

      select (value) {
        switch (this.layer) {
          case 'days':
            this.date.setDate(value)
            this.visible = false
            this.$emit('input', this.date.toDateString())
            break
          case 'months':
            this.date.setMonth(this.months.indexOf(value))
            this.layer = 'days'
            break
          case 'years':
            this.date.setYear(value)
            this.layer = 'months'
            break
        }
        this.year = this.date.getYear()
        this.month = this.date.getMonth()
      },

      compute (value) {
        if (value) {
          let date = this.date.toCustomDate()
          switch (this.layer) {
            case 'days':
              date.setDate(value)
              break
            case 'months':
              date.setMonth(this.months.indexOf(value))
              break
            case 'years':
              date.setYear(value)
              break
          }
          return {
            today: date.isEqual(new Date()),
            selected: date.isEqual(this.value)
          }
        }
        return { disabled: true }
      },

      toggle () {
        this.visible = !this.visible
        if (this.visible) {
          this.date = new datepicker.CustomDate(this.value)
          this.layer = 'days'
          this.year = this.date.getYear()
          this.month = this.date.getMonth()
        }
      }
    },

    created () {
      this.days = datepicker.days
      this.months = datepicker.months
    }
  }
</script>
