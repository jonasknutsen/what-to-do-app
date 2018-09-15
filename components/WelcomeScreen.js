import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { Content } from 'native-base'

class WelcomeScreen extends React.Component {
  render () {
    return (
      <Content style={styles.container}>
        <Text style={styles.welcomeText}>Welcome</Text>
      </Content>
    )
  }
}

const styles = StyleSheet.create({
  welcomeText: {
    padding: 10,
    fontSize: 48,
    textAlign: 'center'
  }
})

export default WelcomeScreen
