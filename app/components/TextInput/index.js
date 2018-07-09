import React, { Component } from 'react'
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Animated,
  Keyboard,
  TouchableOpacity
} from 'react-native'

export default class extends Component {
  scaleAnim = new Animated.Value(1)

  focus = () => {
    Animated.timing(this.scaleAnim, {
      toValue: 0.6,
      duration: 200
    }).start()
  }

  end = () => {
    if (!this.text || this.text === '') {
      Animated.timing(this.scaleAnim, {
        toValue: 1,
        duration: 400
      }).start()
    }
  }

  onChangeText = value => {
    this.text = value
    this.props.onChangeText && this.props.onChangeText(value)
  }

  render () {
    transformStyle = { transform: [{ scale: this.scaleAnim }] }
    return (
      <View style={this.props.style}>
        <TextInput
          style={{ flex: 1, zIndex: 3, marginTop: 15 }}
          ref={r => (this.textInput = r)}
          fontSize={25}
          onFocus={this.focus}
          onEndEditing={this.end}
          onChangeText={this.onChangeText}
        />
        <Animated.Text
          style={{
            color: this.scaleAnim.interpolate({
              inputRange: [0.6, 1],
              outputRange: ['#rgba(3, 169, 244, 1)', '#rgba(191, 191, 191, 1)']
            }),
            fontSize: this.scaleAnim.interpolate({
              inputRange: [0.6, 1],
              outputRange: [16, 30]
            }),
            paddingBottom: 5,
            position: 'absolute',
            top: 0,
            left: 0,
            justifyContent: 'flex-end'
          }}
        >
          {this.props.placeHolder}
        </Animated.Text>
        <Animated.View
          style={{
            backgroundColor: this.scaleAnim.interpolate({
              inputRange: [0.6, 1],
              outputRange: ['#rgba(3, 169, 244, 1)', '#rgba(191, 191, 191, 1)']
            }),
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 2
          }}
        />
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
