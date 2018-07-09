import React, { Component } from 'react'
import { ScrollView, View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { List, ListItem, Icon, Button } from 'react-native-elements'

class App extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Todo List',
      headerRight: (
        <TouchableOpacity onPress={navigation.getParam('add')}>
          <Icon
            name='add'
            containerStyle={{ marginRight: 15 }}
            size={30}
            color='#rgba(2, 122, 255, 1)'
          />
        </TouchableOpacity>
      )
    }
  }

  componentDidMount () {
    this.props.navigation.setParams({ add: this.addTodo })
  }

  addTodo = () => {
    this.props.navigation.navigate('AddTodo')
  }

  render () {
    const { todo } = this.props
    return (
      <ScrollView>
        <List>
          {todo.list.map((item, i) => {
            return (
              <ListItem key={i} component={() => this.renderItem(item, i)} />
            )
          })}
        </List>
      </ScrollView>
    )
  }

  renderItem = (item, index) => {
    return (
      <View
        style={{
          height: 64,
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center'
        }}
      >
        <Icon
          iconStyle={{ marginLeft: 15 }}
          name={item.complete ? 'cloud-done' : 'alarm'}
        />
        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontSize: 22, marginBottom: 5 }}>{item.title}</Text>
          <Text style={{ fontSize: 15, color: '#rgba(100, 100, 100, 1)' }}>
            {item.description}
          </Text>
        </View>
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
      </View>
    )
  }
}

let mapStateToProps = state => {
  const { todo } = state
  return { todo }
}

export default connect(mapStateToProps)(App)
