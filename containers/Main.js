import React from 'react'
import { StyleSheet } from 'react-native'
import { Container } from 'native-base'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { setContent } from '../redux/actions/index.actions'

import AddScreen from '../components/AddScreen'
import AppHeader from '../components/AppHeader'
import FancyFooter from '../components/FancyFooter'
import ListScreen from '../components/ListScreen'
import WelcomeScreen from '../components/WelcomeScreen'
import WhatScreen from '../components/WhatScreen'

class Main extends React.Component {
  render () {
    const { setContent, activeScreen } = this.props
    return (
      <Container style={styles.container}>
        <AppHeader />
        {activeScreen === 'welcome' && <WelcomeScreen />}
        {activeScreen === 'add' && <AddScreen />}
        {activeScreen === 'list' && <ListScreen />}
        {activeScreen === 'what' && <WhatScreen />}
        <FancyFooter setContent={setContent} />
      </Container>
    )
  }
}

Main.propTypes = {
  activeScreen: PropTypes.string,
  setContent: PropTypes.func
}

const styles = StyleSheet.create({

})

const mapStateToProps = (state) => ({
  activeScreen: state.content.activeScreen
})

const mapDispatchToProps = (dispatch) => ({
  setContent: (activeWindow) => dispatch(setContent(activeWindow))
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)
