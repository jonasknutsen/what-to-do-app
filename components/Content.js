import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View } from 'react-native'

class Content extends React.Component {
  render () {
    const { children } = this.props
    return (
      <View style={styles.container}>
        {children}
      </View>
    )
  }
}

Content.propTypes = {
  children: PropTypes.any
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1
  }
})

export default Content
