import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    Alert,
  } from 'react-native';
// import LoginScreen from '../login/login'

export default class StartScreen extends Component<{}> {
    onClickOfButton() {
        // this.props.navigate('LoginScreen');
        Alert.alert('Button click action');
    }
    onEndEditing() {
        Alert.alert('Resign');
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonsView}>
                        <Button color='white' title="Login" onPress={this.onClickOfButton} />
                    </View>
                    <View style={styles.buttonsView}>
                        <Button color='white' title="Signup" onPress={this.onClickOfButton} />
                    </View>
                </View>
                {/* <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text> */}
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    buttonsContainer: {
        backgroundColor: '#FFFFFF',
        height: 50,
        flexDirection: 'row',
        marginTop: 50
    },
    buttonsView: {
        backgroundColor: '#2E9298',
        borderRadius: 5,
        width: '40%',
        height: 40,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
});
