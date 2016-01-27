'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

class CalendarMonthName extends Component {
  render() {
    return (
      <View style={styles.flex1}>
        <Text style={styles.alignCenter}>{this.props.monthString}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flex1: {
    flex: 1
  },
  alignCenter: {
    alignSelf: 'center',
  },
});

React.AppRegistry.registerComponent("CalendarMonthName", () => CalendarMonthName);
module.exports = CalendarMonthName;