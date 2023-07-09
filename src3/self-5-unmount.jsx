import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
    },
    count: { fontSize: 48 }
});


class Counter extends Component {
    state = {
        count: 0,
    }

    // this.timer gives the interval-method a name/id, so we can unmount it later
    componentDidMount() {
        this.timer = setInterval(this.incrementCount, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    incrementCount = () => {
        console.log('incrementing')
        this.setState(prevState => ({ count: prevState.count + 1 }))
    }

    render() {
        return (
            <View style={styles.container}>
        <Text style={styles.count}> {this.state.count} </Text>
      </View>
        )
    }
}

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showCounter: true,
        }
    }

    toggleCounter = () => this.setState(prevState => ({
        showCounter: !prevState.showCounter
    }))


    render() {
        if (this.state.showCounter) {
            return (
                <View>
          <Button title="toggle" onPress={this.toggleCounter} />
          <Counter />
        </View>
            )
        } else {
            return (
                <View><Button title="toggle" onPress={this.toggleCounter} /></View>
            )
        }
    }
}