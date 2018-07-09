import * as types from '../actions/actionTypes'

const initialState = {
  count: 0
}

export default function counter (state = initialState, action) {
  switch (action.type) {
    case types.INCREASE: {
      return Object.assign({}, state, {
        count: state.count + 1
      })
    }
    case types.REDUCE: {
      return Object.assign({}, state, {
        count: state.count - 1
      })
    }
    default: {
      return state
    }
  }
}
