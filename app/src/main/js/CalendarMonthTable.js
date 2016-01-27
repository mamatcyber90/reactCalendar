'use strict';

var CalendarCell = require('./CalendarCell');

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  View
} from 'react-native';

class CalendarMonthTable extends Component {
  handleCalendarCellPress(day) {
    if (day != "") {
      this.props.onDateSelect(new Date(this.props.date.getFullYear(), this.props.date.getMonth(), day));
    }
  }
  
  getStartingDay(date) {
    var firstOfTheMonth = new Date(date.getFullYear(), date.getMonth());
    return firstOfTheMonth.getDay();
  }
  
  getMonthLength(date) {
    var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var month = date.getMonth();
    var monthLength = daysInMonth[month];
    
    if (month == 1) { // Check leap year for February
  	  var year = date.getFullYear();
  	  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0){
        monthLength = 29;
      }
    }
    return monthLength;
  }
  
  getMonthRows(date, selectDate) {
    var dayNum = date.getDate();
    var startingDay = this.getStartingDay(date);
    var monthLength = this.getMonthLength(date);
    
    var day = 1;
    var monthRows = [];
    for (var i=0; i < 6; i++) { // Weeks
      var weekRow = [];
      var selectedDatePresentInWeek = false;
      for (var j=0; j < 7; j++) { // Weekdays
      	var key = i*6 + j;
      	var text = (day <= monthLength && (i > 0 || j >= startingDay)) ? day++ : "";
      	
      	var cellStyle = "";
      	if (selectDate && dayNum == text) {
      	  cellStyle = styles.selectedCell;
      	  selectedDatePresentInWeek = true;
      	}
      	
      	weekRow.push(<CalendarCell key={key} text={text} style={cellStyle} onPress={this.handleCalendarCellPress.bind(this)} />);
      }
      var rowStyle = (selectedDatePresentInWeek) ? styles.selectedRow : "";
      monthRows.push(<View key={i} style={[styles.calendarRow, rowStyle]}>{weekRow}</View>);
    }
    return monthRows;
  }
  
  render() {
    var monthRows = this.getMonthRows(this.props.date, this.props.selectDate);
    return (
      <View style={[styles.monthRows, styles.allBorders]}>
        {monthRows}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  calendarRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  monthRows: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  allBorders: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },
  selectedRow: {
    backgroundColor: "#EEEEEE"
  },
  selectedCell: {
  	backgroundColor: "#CCCCCC"
  }
});

React.AppRegistry.registerComponent("CalendarMonthTable", () => CalendarMonthTable);
module.exports = CalendarMonthTable;