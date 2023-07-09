import {View, Button, Text, ScrollView, StyleSheet, Switch} from 'react-native'
import React from 'react'
import Constants from 'expo-constants'
import BouncyCheckbox from "react-native-bouncy-checkbox";

let id = 0

const styles = StyleSheet.create({
  todoContainer: {flexDirection: 'row', alignItems: 'center'},
  appContainer: {paddingTop: Constants.statusBarHeight, flex: 1},
  fill: {flex: 1},
  right: {alignSelf: 'flex-end'}
})

const Todo = props => (
  <View style={[styles.todoContainer, styles.fill]}>
    <BouncyCheckbox isChecked={props.todo.checked} onPress={props.onToggle} />
    <Text>{props.todo.text}</Text>
    <Button onPress={props.onDelete} title="delete" style={styles.right} />    
  </View>
)

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: [],
    }
  }

  addTodo() {
    id++
    const text = `TODO number ${id}`
    this.setState({
      todos: [
        ...this.state.todos,
        {id: id, text: text, checked: false},
      ], 
    })
  }

  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    })
  }

  toggleTodo(id) {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id !== id) return todo
        return {
          id: todo.id,
          text: todo.text,
          checked: !todo.checked,
        }
      })
    })
  }

  render() {
    return (
      <View style={[styles.appContainer, styles.fill]}>
        <Text>Todo count: {this.state.todos.length}</Text>
        <Text>Unchecked todo count: {this.state.todos.filter(todo => !todo.checked).length}</Text>
        <Button onPress={() => this.addTodo()} title="Add TODO"/>
        <ScrollView>
          {this.state.todos.map(todo => (
            <Todo
              onToggle={() => this.toggleTodo(todo.id)}
              onDelete={() => this.removeTodo(todo.id)}
              todo={todo}
            />
          ))}
        </ScrollView>
      </View>
    )
  }
}