## Redux练习记录，方便回顾
### Counter
![image](https://github.com/qikong233/ReduxPractice/blob/master/Gif/Counter.gif)

### TodoList
![image](https://github.com/qikong233/ReduxPractice/blob/master/Gif/TodoLIst.gif)


## 源码解析
### Store

### 检查Reducer
```js
function assertReducerSanity(reducers) {
  var keys = Objects.keys(reducers)
  keys.forEach(key => {
    // 遍历所有的reducer
    var reducer = reducers[key]
    // 第一个参数传入undefined则使用默认的state
    // 第二个参数传入没有被定义的Action在switch中默认返回default
    // 如果返回的不是默认state，那么则不是合法的reducer
    var initialState = reducer(undefined, {type: Actiontypes.INIT})
    
    if (typeof initialState === 'undefined') {
      // 非法Reducer
      throw new Error('...description')
    }
    
    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.')
    // 随机一个Action传入
    if (typeof reducer(undefined, { type }) === 'undefined') {
      throw new Error('...description')
    }    
  })
}
```
