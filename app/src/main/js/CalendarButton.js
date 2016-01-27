'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  TouchableHighlight
} from 'react-native';

class CalendarButton extends Component {
  goToToday() {
    this.props.onButtonClick(new Date(), true);
  }
  render() {
    return (
        <TouchableHighlight style={[styles.allBorders, styles.margin10TopBottom]} onPress={this.goToToday.bind(this)}>
          <Text style={styles.alignCenter}>Today</Text>
        </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  allBorders: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },
  alignCenter: {
    alignSelf: 'center',
  },
  margin10TopBottom: {
    marginTop: 10,
    marginBottom: 10,
  },
});

React.AppRegistry.registerComponent("CalendarButton", () => CalendarButton);
module.exports = CalendarButton;