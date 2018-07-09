import * as types from './actionTypes'

export let addTodo = todo => {
  return {
    type: types.ADDTODO,
    todo: todo
  }
}

export let complete = index => {
  return {
    type: types.COMPLETE,
    index: index
  }
}

export let delTodo = index => {
  return {
    type: types.DELTODO,
    index: index
  }
}
