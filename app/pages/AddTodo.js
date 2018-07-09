import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Text, Button } from 'react-native-elements'
import { addTodo } from '../actions/todoAction'
import TextInput from '../components/TextInput/index'

class App extends Component {
  static navigationOptions = {
    title: 'Create Todo'
  }

  addTodo = () => {
    const { dispatch } = this.props
    this.title &&
      dispatch(
        addTodo({
          title: this.title,
          description: this.description,
          complete: false
        })
      )
    this.props.navigation.pop()
  }

  render () {
    return (
      <Card
        containerStyle={{
          width: '90%',
          height: 500,
          justifyContent: 'flex-start'
        }}
      >
        <Text h1 style={{ marginBottom: 30 }}>What do you want to do? </Text>
        <TextInput
          placeHolder='Add a todo list here'
          style={{ width: '90%', height: 64, marginBottom: 50 }}
          onChangeText={value => (this.title = value)}
        />
        <TextInput
          placeHolder='Description'
          style={{ width: '90%', height: 64, marginBottom: 50 }}
          onChangeText={value => (this.description = value)}
        />
        <Button
          title='Add'
          icon={{ name: 'bookmark' }}
          backgroundColor='#rgba(3, 169, 244, 1)'
          onPress={this.addTodo}
        />
      </Card>
    )
  }
}

let mapStateToProps = state => {
  const { todo } = state
  return { todo }
}

export default connect(mapStateToProps)(App)
