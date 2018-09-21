import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

class Header extends React.Component {
  render () {
    return (
      <View style={styles.header}>
        <Text>What To Do?</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'center'
  }
})

export default Header
