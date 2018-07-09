import React, { Component } from 'react'
import { View, TouchableOpacity, Text, FlatList } from 'react-native'
import { createStackNavigator } from 'react-navigation'

import CounterScreen from '../pages/Container'
import TodoScreen from '../pages/Todo'
import AddScreen from '../pages/AddTodo'
import TodoDetailScreen from '../pages/TodoDetail'

const stack = [{ title: 'Counter' }, { title: 'Todo' }]

class Router extends Component {
  static navigationOptions = {
    title: 'Redux使用'
  }

  render () {
    return (
      <FlatList
        keyExtractor={this.keyExtractor}
        style={{ flex: 1 }}
        data={stack}
        renderItem={this.renderItem}
      />
    )
  }

  keyExtractor = (item, index) => `${item.title}_${index}`

  renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        style={{
          width: '100%',
          height: 64,
          justifyContent: 'center',
          backgroundColor: 'white'
        }}
        onPress={() => this.props.navigation.navigate(item.title)}
      >
        <Text style={{ marginLeft: 10 }}>
          {item.title}
        </Text>
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            left: 15,
            height: 1,
            backgroundColor: 'lightgray'
          }}
        />
      </TouchableOpacity>
    )
  }
}

export default createStackNavigator({
  Home: Router,
  Counter: CounterScreen,
  Todo: TodoScreen,
  AddTodo: AddScreen,
  TodoDetail: TodoDetailScreen
})
