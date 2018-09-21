import React from 'react'
import { StyleSheet } from 'react-native'

import AddForm from './AddForm'
import Content from './Content'

class WelcomeScreen extends React.Component {
  render () {
    return (
      <Content style={styles.container}>
        <AddForm />
      </Content>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    
  }
})

export default WelcomeScreen
