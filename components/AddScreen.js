import React from 'react'
import { StyleSheet } from 'react-native'
import { Body, Button, Card, CardItem, Content, Form, Icon, Item, Input, Picker, Text } from 'native-base'

class AddScreen extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      text: '',
      selected: 'task'
    }
  }

  handlePickerChange = (value) => {
    this.setState({
      selected: value
    })
  }

  handleSubmit = () => {
    console.log('submit')
  }

  render () {
    return (
      <Content style={styles.container}>
        <Form>
          <Item regular>
            <Input placeholder='What to do?' name='text' value={this.state.text} onChangeText={(text) => this.setState({text})} />
          </Item>
          <Picker
            mode='dropdown'
            iosHeader='Category'
            iosIcon={<Icon name='ios-arrow-down-outline' />}
            style={{ width: '100%' }}
            selectedValue={this.state.selected}
            onValueChange={this.handlePickerChange}
          >
            <Picker.Item label='Movie' value='Movie' />
            <Picker.Item label='Book' value='Book' />
            <Picker.Item label='Task' value='Task' />
          </Picker>
          <Button full style={styles.button}>
            <Text>Add something to do</Text>
          </Button>
        </Form>
        <Card style={styles.card}>
          <CardItem header>
            <Text style={styles.cardHeader}>{this.state.selected}</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>
                {this.state.text}
              </Text>
              {this.state.text === '' && <Text>
                Nothing so far
              </Text>}
            </Body>
          </CardItem>
          <CardItem footer>
            <Text>This is what you are adding</Text>
          </CardItem>
        </Card>
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
  },
  card: {
    marginTop: 20
  },
  cardHeader: {
    textAlign: 'center',
    fontSize: 24
  }
})

export default AddScreen
