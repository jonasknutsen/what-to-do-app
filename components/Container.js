import React from 'react'
import { ImageBackground, StyleSheet, SafeAreaView } from 'react-native'
import PropTypes from 'prop-types'

class Container extends React.Component {
  render () {
    const { children } = this.props
    return (
      <ImageBackground style={styles.backgroundImage} source={require('..//assets/images/clouds.jpg')}>
        <SafeAreaView style={styles.mainView}>
          {children}
        </SafeAreaView>
      </ImageBackground>
    )
  }
}

Container.propTypes = {
  children: PropTypes.any
}

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: '100%'
  },
  mainView: {
    flex: 1,
    flexDirection: 'column'
  }
})

export default Container
