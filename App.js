import React from 'react'
import { Provider } from 'react-redux'

import { initStore } from './redux/store'
import Main from './containers/Main'

const store = initStore()

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    )
  }
}

export default App
