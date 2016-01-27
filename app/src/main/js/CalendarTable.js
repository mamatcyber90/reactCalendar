'use strict';

var CalendarWeekRow = require('./CalendarWeekRow');
var CalendarMonthTable = require('./CalendarMonthTable');

import React, {
  AppRegistry,
  Component,
  View
} from 'react-native';

class CalendarTable extends Component {
  handleDateSelect(date) {
    this.props.onDateSelect(date, true);
  }
  render() {
    return (
      <View>
        <CalendarWeekRow />
        <CalendarMonthTable date={this.props.date} selectDate={this.props.selectDate} onDateSelect={this.handleDateSelect.bind(this)}/>
      </View>
    );
  }
}

React.AppRegistry.registerComponent("CalendarTable", () => CalendarTable);
module.exports = CalendarTable;