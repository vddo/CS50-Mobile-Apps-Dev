import { View, Button, Text, ScrollView, StyleSheet, Switch } from 'react-native'
import React from 'react'
import Constants from 'expo-constants'

export default class App extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0,
        }
    }

    componentDidMount() {
        setInterval(this.inc, 1000)
    }

    inc = () => {
        this.setState(prevState => ({
            count: prevState + 1
        }))
    }

    render() {
        return (
            <View >
        <Text </Text>
      </View>
        )
    }
}