<style lang='scss' scoped>
  @import '~@/styles/variables';
  @import '~@/styles/mixins';
  @import '~@/styles/mixins/dropdown';
  @import '~@/styles/mixins/textfield';

  .datepicker {
    position: relative;
    padding: 24px 0;
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
    margin: 24px 0;
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
    @include text-caption;
    width: 280px;
    min-height: 210px;
    text-align: center;
    border-collapse: collapse;
  }

  .calendar th {
    width: 40px;
    height: 40px;
    padding: 0;
    color: $color-secondary-text;
  }

  .calendar td {
    @include transition-normal(background-color);
    height: 40px;
    padding: 0;
    border-radius: 3px;
    cursor: pointer;

    &:hover {
      background-color: $color-darker;
    }

    &.today {
      color: $color-primary;
    }

    &.selected {
      color: $color-white;
      background-color: $color-primary;
    }

    &.disabled {
      visibility: hidden;
    }
  }

  .backdrop {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: $elevation-menu - 1;
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
        <span class='title' @click='layer = "months"'>{{ months[cursor.month] }}</span>
        <span class='title' @click='layer = "years"'>{{ cursor.year }}</span>
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
      cursor: {},
      layer: '',
      visible: false
    }),

    computed: {
      text () {
        if (Date.parse(this.value)) {
          let str = new Date(this.value).toDateString().split(' ')
          return `${str[2]} ${str[1]} ${str[3]}`
        }
      },

      table () {
        let year = this.cursor.year
        let month = this.cursor.month
        switch (this.layer) {
          case 'days':
            return calendar.getDates(year, month)
          case 'months':
            return calendar.getMonths(this.months)
          case 'years':
            return calendar.getYears(year)
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
        this.cursor = this.date.toDateObject()
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
        this.cursor = this.date.toDateObject()
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
          let date = Date.parse(this.value) ? this.value : new Date()
          this.date = new datepicker.CustomDate(date)
          this.cursor = this.date.toDateObject()
          this.layer = 'days'
        }
      }
    },

    created () {
      this.days = datepicker.days
      this.months = datepicker.months
    }
  }
</script>
