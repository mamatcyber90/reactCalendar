'use strict';

var CalendarWeekdayCell = require('./CalendarWeekdayCell');

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

class CalendarWeekRow extends Component {
  render() {
    var dayNames = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
	return (
      <View style={[styles.calendarRow, styles.allBorders]}>
        {dayNames.map(function(dayName, i){
          return <CalendarWeekdayCell key={i} text={dayName} />
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  calendarRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  allBorders: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },
});

React.AppRegistry.registerComponent("CalendarWeekRow", () => CalendarWeekRow);
module.exports = CalendarWeekRow;