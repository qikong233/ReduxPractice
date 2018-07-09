import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import Counter from './counter'

class Container extends Component {
  static navigationOptions = {
    title: 'Counter'
  }

  render () {
    return (
      <View style={styles.container}>
        <Counter {...this.props}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

let mapStateToProps = state => {
  const { counter } = state
  return { counter }
}

export default connect(mapStateToProps)(Container)


