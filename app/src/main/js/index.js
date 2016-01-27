/**
 * Calendar in React
 * https://github.com/facebook/react-native
 */
'use strict';

var Calendar = require("./Calendar");

import React, {
  AppRegistry,
  Component
} from 'react-native';

class reactCalendar extends Component {
  render() {
    return (
      <Calendar />
    );
  }
}

AppRegistry.registerComponent('reactCalendar', () => reactCalendar);
