import { SET_CONTENT } from '../actions/index.actions'

const defaultState = {
  activeScreen: 'welcome'
}

const content = (state = defaultState, action) => {
  switch (action.type) {
    case SET_CONTENT: {
      return {...state, activeScreen: action.payload}
    }
    default:
      return state
  }
}

export default content
