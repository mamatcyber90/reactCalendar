'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

class CalendarWeekdayCell extends Component {
  render() {
    return (
      <View style={[styles.calendarCell, styles.alignCenter]}>
        <Text style={[styles.alignCenter]}>{this.props.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  calendarCell: {
    width: 24,
    height: 24,
    borderRadius: 12
  },
  alignCenter: {
    alignSelf: 'center',
  },
});

React.AppRegistry.registerComponent("CalendarWeekdayCell", () => CalendarWeekdayCell);
module.exports = CalendarWeekdayCell;