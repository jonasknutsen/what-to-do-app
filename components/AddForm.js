import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

class AddForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      text: ''
    }
  }
  render () {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 5
  },
  input: {
    fontSize: 20,
    padding: 10
  }
})

export default AddForm
