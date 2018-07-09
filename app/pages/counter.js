import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Button, Card } from 'react-native-elements'
import { increase, reduce } from '../actions/counterAction'

export default class App extends Component {
  render () {
    const { counter, dispatch } = this.props
    return (
      <View style={styles.container}>
        <Card
          containerStyle={{
            width: 300,
            height: 250,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Text
            style={{
              fontSize: 24,
              width: 200,
              textAlign: 'center',
              fontWeight: 'bold',
              marginBottom: 15
            }}
          >
            Counter:
          </Text>
          <Text style={{ fontSize: 24, width: 200, textAlign: 'center' }}>
            {counter.count}
          </Text>
        </Card>
        <View style={{ flexDirection: 'row' }}>
          <Button
            backgroundColor='skyblue'
            title='down'
            icon={{ name: 'trending-down' }}
            onPress={() => dispatch(reduce())}
          />
          <Button
            backgroundColor='skyblue'
            title='  up  '
            icon={{ name: 'trending-up' }}
            onPress={() => dispatch(increase())}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  btn: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray'
  },
  counter: {
    // flex: 1,
    textAlign: 'center'
  }
})
