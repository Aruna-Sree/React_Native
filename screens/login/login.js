import React , { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    Alert,
    Navigator
  } from 'react-native';
export default class LoginScreen extends Component<{}> {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.loginTextSection}>
                    <TextInput placeholder='Username' style={styles.inputText} onEndEditing={this.onEndEditing} />
                    <TextInput placeholder='Password' style={styles.inputText} secureTextEntry={true} />
                </View>
                <View style={styles.buttonsView}>
                    <Button color='white' title="Login" onPress={this.onClickOfButton} />
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
const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    loginTextSection: {
        width: '100%',
        height: 100,
        alignItems: 'center',
    },
    inputText: {
        height: 40,
        margin: 5,
        width: '80%',
        borderBottomWidth: 0.5,
        borderBottomColor: 'red'
    },
    buttonsView: {
        backgroundColor: '#2E9298',
        borderRadius: 5,
        width: '80%',
        height: 40,
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
});
