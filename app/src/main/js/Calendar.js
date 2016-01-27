/**
 * Calendar in React
 * https://github.com/facebook/react-native
 */
'use strict';

var CalendarMonthRow = require('./CalendarMonthRow');
var CalendarTable = require('./CalendarTable');
var CalendarButton = require('./CalendarButton');

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

class Calendar extends Component {
  constructor(props) {
    super(props);
    var today = new Date();
    this.state = {
      date: today,
      selectedDate: today,
      selectDate: true
    };
  }
  
  goToMonth(newDate, selectNewDate) {
    if (selectNewDate) {
      this.setState({date: newDate, selectedDate: newDate, selectDate: true});
    } else if (this.state.selectedDate.getMonth() == newDate.getMonth()
        && this.state.selectedDate.getFullYear() == newDate.getFullYear()) {
      this.setState({date: this.state.selectedDate, selectDate: true});
    } else {
      this.setState({date: newDate, selectDate: false});
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <CalendarMonthRow date={this.state.date} onPaginationClick={this.goToMonth.bind(this)} />
        <CalendarTable date={this.state.date} selectDate={this.state.selectDate} onDateSelect={this.goToMonth.bind(this)} />
        <CalendarButton onButtonClick={this.goToMonth.bind(this)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
});

React.AppRegistry.registerComponent("Calendar", () => Calendar);
module.exports = Calendar;