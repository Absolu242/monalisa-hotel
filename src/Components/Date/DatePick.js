import React, { Component } from "react"
import moment from "moment"
import "react-dates/initialize"
import "react-dates/lib/css/_datepicker.css"

import { DateRangePicker } from "react-dates"

class DatePick extends Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: moment(),
      endDate: moment().add(7, "days"),
      focusedInput: null,
      dateFormat: "DD/MM",
    }
  }

  render() {
    //Start Date CONFIG for props
    const stDate = this.state.startDate
    let startDay = stDate.format("DD")
    let startMonth = stDate.format("MM")

    this.props.startDy(startDay)
    this.props.startMth(startMonth)

    //End Date config for props

    const edDate = this.state.endDate
    let endDay = edDate.format("DD")
    let endMonth = edDate.format("MM")

    this.props.endDay(endDay)
    this.props.endMonth(endMonth)

    return (
      <div className="App">
        <DateRangePicker
          startDateId="startDate"
          endDateId="endDate"
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          displayFormat={this.state.dateFormat}
          onDatesChange={({ startDate, endDate }) => {
            this.setState({ startDate, endDate })
          }}
          focusedInput={this.state.focusedInput}
          onFocusChange={(focusedInput) => {
            this.setState({ focusedInput })
          }}
        />
      </div>
    )
  }
}

export default DatePick
