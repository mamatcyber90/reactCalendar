'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  TouchableHighlight
} from 'react-native';

class CalendarPagination extends Component {
  onPress() {
    this.props.onPress(this.props.paginationDiff);
  }
  
  render() {
    return (
      <TouchableHighlight style={[styles.pagination, styles.allBorders]} onPress={this.onPress.bind(this)}>
        <Text style={styles.alignCenter}>{this.props.text}</Text>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  pagination: {
    backgroundColor: '#EEEEEE',
    width: 30
  },
  allBorders: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },
  alignCenter: {
    alignSelf: 'center',
  },
});

React.AppRegistry.registerComponent("CalendarPagination", () => CalendarPagination);
module.exports = CalendarPagination;