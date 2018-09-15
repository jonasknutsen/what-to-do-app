import React from 'react'
import { Body, Header, Left, Right, Title } from 'native-base'

class AppHeader extends React.Component {
  render () {
    return (
      <Header>
        <Left />
        <Body>
          <Title>What To Do?</Title>
        </Body>
        <Right />
      </Header>
    )
  }
}

export default AppHeader
