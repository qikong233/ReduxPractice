import * as types from './actionTypes'

let increase = () => {
  return {
    type: types.INCREASE
  }
}

let reduce = () => {
  return {
    type: types.REDUCE
  }
}

export { increase, reduce }
