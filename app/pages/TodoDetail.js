import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Icon, Card, Text, Button } from 'react-native-elements'
import { complete, delTodo } from '../actions/todoAction'

class Detail extends Component {
  static navigationOptions = {
    title: 'Todo'
  }

  done = () => {
    const index = this.props.navigation.getParam('index')
    const { dispatch } = this.props
    dispatch(complete(index))
    this.props.navigation.pop()
  }

  delete = () => {
    const index = this.props.navigation.getParam('index')
    const { dispatch } = this.props
    dispatch(delTodo(index))
    this.props.navigation.pop()
  }

  render () {
    const item = this.props.navigation.getParam('item')
    return (
      <Card
        containerStyle={{
          width: '90%',
          height: 500,
          justifyContent: 'flex-start'
        }}
      >
        <Text h2 style={{ marginBottom: 5, marginTop: 15 }}>Title:</Text>
        <Text h4 style={{ marginBottom: 30 }}>{item.title}</Text>
        <Text h2 style={{ marginBottom: 5 }}>Description:</Text>
        <Text h4 style={{ marginBottom: 130 }}>{item.description}</Text>
        <Button
          title='Done'
          icon={{ name: 'check' }}
          backgroundColor='#rgba(3, 169, 244, 1)'
          style={{marginBottom: 15}}
          onPress={this.done}
        />
        <Button
          title='Delete'
          icon={{ name: 'delete' }}
          backgroundColor='#rgba(228, 64, 28, 1)'
          onPress={this.delete}
        />
        <Icon
          name='logo-github'
          size={70}
          type='ionicon'
          containerStyle={{ position: 'absolute', top: 20, right: 40 }}
        />
      </Card>
    )
  }
}

let mapStateToProps = state => {
  const { todo } = state
  return { todo }
}

export default connect(mapStateToProps)(Detail)
