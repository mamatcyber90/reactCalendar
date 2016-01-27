'use strict';

var CalendarPagination = require('./CalendarPagination');
var CalendarMonthName = require('./CalendarMonthName');

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

class CalendarMonthRow extends Component {
  handlePaginationClick(paginationDiff) {
    var newMonth = this.props.date.getMonth();
    var newYear = this.props.date.getFullYear();
    
    if (paginationDiff == 1) {
      if (newMonth == 11) {
      	newMonth = 0;
      	newYear = newYear + 1;
      } else {
      	newMonth = newMonth + 1;
      }
    } else {
      if (newMonth == 0) {
        newMonth = 11;
        newYear = newYear - 1;
      } else {
        newMonth = newMonth - 1;
      }
    }
    
    this.props.onPaginationClick(new Date(newYear, newMonth), false);
  }
  
  render() {
    var monthNames = ["January", "February", "March", "April", "May", "June",
  		"July", "August", "September", "October", "November", "December" ];
    return (
      <View style={[styles.calendarRow, styles.padding10, styles.borderTopBottom]}>
        <CalendarPagination text="&lt;" onPress={this.handlePaginationClick.bind(this)} paginationDiff="-1" />
        <CalendarMonthName monthString={monthNames[this.props.date.getMonth()] + " " + this.props.date.getFullYear()} />
        <CalendarPagination text="&gt;" onPress={this.handlePaginationClick.bind(this)} paginationDiff="1" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  calendarRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  padding10: {
    padding: 10,
  },
  borderTopBottom: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
});

React.AppRegistry.registerComponent("CalendarMonthRow", () => CalendarMonthRow);
module.exports = CalendarMonthRow;