'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  TouchableHighlight
} from 'react-native';

class CalendarCell extends Component {
  onPress() {
  	this.props.onPress(this.props.text);
  }
  render() {
    return (
      <TouchableHighlight style={[styles.calendarCell, styles.alignCenter, this.props.style]} onPress={this.onPress.bind(this)}>
        <Text style={[styles.alignCenter]}>{this.props.text}</Text>
      </TouchableHighlight>
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

React.AppRegistry.registerComponent("CalendarCell", () => CalendarCell);
module.exports = CalendarCell;