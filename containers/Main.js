import React from 'react'
import { StyleSheet } from 'react-native'
import { Container } from 'native-base'
import { connect } from 'react-redux'

import AddScreen from '../components/AddScreen'
import AppHeader from '../components/AppHeader'
import FancyFooter from '../components/FancyFooter'
import ListScreen from '../components/ListScreen'
import WelcomeScreen from '../components/WelcomeScreen'
import WhatScreen from '../components/WhatScreen'

class Main extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      displayAddScreen: false,
      displayListScreen: false,
      displayWelcomeScreen: true,
      displayWhatScreen: false
    }
  }
  onAdd = () => {
    this.setState({
      displayWelcomeScreen: this.state.displayAddScreen,
      displayAddScreen: !this.state.displayAddScreen,
      displayListScreen: false,
      displayWhatScreen: false
    })
  }
  onList = () => {
    this.setState({
      displayWelcomeScreen: this.state.displayListScreen,
      displayListScreen: !this.state.displayListScreen,
      displayAddScreen: false,
      displayWhatScreen: false
    })
  }
  onWhat = () => {
    this.setState({
      displayWelcomeScreen: this.state.displayWhatScreen,
      displayWhatScreen: !this.state.displayWhatScreen,
      displayAddScren: false,
      displayListScreen: false
    })
  }
  render () {
    return (
      <Container style={styles.container}>
        <AppHeader />
        {this.state.displayWelcomeScreen && <WelcomeScreen />}
        {this.state.displayAddScreen && <AddScreen />}
        {this.state.displayListScreen && <ListScreen />}
        {this.state.displayWhatScreen && <WhatScreen />}
        <FancyFooter />
      </Container>
    )
  }
}

const styles = StyleSheet.create({

})

const mapStateToProps = (state) => ({
  state
})

const mapDispatchToProps = (dispatch) => ({
  dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)
