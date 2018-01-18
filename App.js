/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  // Navigator
} from 'react-native';

import StartScreen from './screens/start/start'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  render() {
    // return (
    //   <Navigator
    //     initialRoute = {{name: 'Start', title: ''}}
    //     renderScene = {this.renderScene}
    //     navigationBar = {
    //       <Navigator.NavigationBar
    //         style = {styles.navigationBar}
    //         routeMapper = {NavigationBarRouteMapper} />
    //     }
    //   />
    //   );
    return (
      <View style={styles.container}>
        <StartScreen />
      </View>
    );
  }
  renderScene (route, navigator) {
    if(route.name == 'Start') {
      return (
        <StartScreen
          navigator = {navigator}
          {...route.passProps}
        />
      )
    }
  }
}
var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
     if(index > 0) {
        return (
           <TouchableOpacity
              onPress = {() => { if (index > 0) { navigator.pop() } }}>
              <Text style={ styles.leftButton }>
                 Back
              </Text>
           </TouchableOpacity>
        )
     }
     else { return null }
  },
  RightButton(route, navigator, index, navState) {
     if (route.openMenu) return (
        <TouchableOpacity
           onPress = { () => route.openMenu() }>
           <Text style = { styles.rightButton }>
              { route.rightText || 'Menu' }
           </Text>
        </TouchableOpacity>
     )
  },
  Title(route, navigator, index, navState) {
     return (
        <Text style = { styles.title }>
           {route.title}
        </Text>
     )
  }
};
const styles = StyleSheet.create({
  // navigationBar: {
  //    backgroundColor: 'blue',
  // },
  // leftButton: {
  //    color: '#ffffff',
  //    margin: 10,
  //    fontSize: 17,
  // },
  // title: {
  //    paddingVertical: 10,
  //    color: '#ffffff',
  //    justifyContent: 'center',
  //    fontSize: 18
  // },
  // rightButton: {
  //    color: 'white',
  //    margin: 10,
  //    fontSize: 16
  // }
  container: {
    flex: 1,
  }
});

// AppRegistry.registerComponent('screens', () => screens);
