import {
  OPEN_NAV_MENU,
  CLOSE_NAV_MENU
} from '../actions/app'

function app (state = {
  menuOpen: false
}, action) {
  switch (action.type) {
    case OPEN_NAV_MENU:
      return Object.assign({}, state, {
        menuOpen: true
      })
    case CLOSE_NAV_MENU:
      return Object.assign({}, state, {
        menuOpen: false
      })
    default:
      return state
  }
}

export default app
