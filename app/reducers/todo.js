import * as types from '../actions/actionTypes'

const initialState = {
  list: [
    { title: 'learn Redux', description: 'learn', complete: false },
    { title: 'paper work', description: 'oooops', complete: false },
    { title: 'wash work', description: 'oh!', complete: false },
    { title: 'go to gym', description: 'fight', complete: true },
    { title: 'weapp online', description: 'friday night', complete: true },
    { title: 'taro', description: 'this weekend', complete: true },
    { title: 'flutter', description: 'observe', complete: true },
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
      return Object.assign({}, state, {
        list: state.list.splice(action.index, 1)
      })
    }
    default: return state
  }
}
