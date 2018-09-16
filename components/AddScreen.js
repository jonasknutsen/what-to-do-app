import React from 'react'
import { StyleSheet } from 'react-native'
import { Button, Content, Form, Icon, Item, Input, Picker, Text } from 'native-base'

class AddScreen extends React.Component {
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
        <Form>
          <Item regular>
            <Input placeholder='What to do?' />
          </Item>
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
          <Button full style={styles.button}>
            <Text>Add something to do</Text>
          </Button>
        </Form>
      </Content>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  button: {
    backgroundColor: '#C73E1D'
  }
})

export default AddScreen
