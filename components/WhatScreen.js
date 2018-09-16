import React from 'react'
import { StyleSheet } from 'react-native'
import { Content, Icon, Picker } from 'native-base'

class WhatScreen extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      text: '',
      selected: 'key2'
    }
  }

  onValueChange = (value) => {
    this.setState({
      selected: value
    })
  }

  render () {
    return (
      <Content style={styles.container}>
        <Picker
          mode='dropdown'
          iosHeader='Category'
          iosIcon={<Icon name='ios-arrow-down-outline' />}
          style={{ width: '100%' }}
          selectedValue={this.state.selected}
          onValueChange={this.onValueChange}
        >
          <Picker.Item label='Movie' value='key0' />
          <Picker.Item label='Book' value='key1' />
          <Picker.Item label='Task' value='key2' />
        </Picker>
      </Content>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  }
})

export default WhatScreen
