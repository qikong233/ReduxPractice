import * as types from '../actions/actionTypes'

const initialState = {
  list: [
    { title: 'Redux', description: 'learning', complete: false },
    { title: 'gym', description: 'do it', complete: false },
    { title: 'check paper', description: 'friday night', complete: true },
  ]
}

export default function todo (state = initialState, action) {
  switch (action.type) {
    case types.ADDTODO: {
      list = state.list.slice(0)
      list.push(action.todo)
      return Object.assign({}, state, {
        list: list
      })
    }
    case types.COMPLETE: {
      list = state.list.slice(0)
      list[action.index].complete = true
      return Object.assign({}, state, {
        list: list
      })
    }
    case types.DELTODO: {
      list = state.list.slice(0)
      list.splice(action.index, 1)
      return Object.assign({}, state, {
        list: list
      })
    }
    default: return state
  }
}
