import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
    },
});

export default class App extends Component {
    state = {
        count: 0,
    }

    componentDidMount() {
        this.timer = setInterval(this.incrementCount, 1000)
    }

    incrementCount = () => {
        this.setState(prevState => ({ count: prevState.count + 1 }))
    }

    render() {
        return (
            <View style={styles.container}>
        <Text>{this.state.count}</Text>
      </View>
        )
    }
}