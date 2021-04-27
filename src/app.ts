/*
 * @Author: your name
 * @Date: 2021-04-27 00:04:56
 * @LastEditTime: 2021-04-27 21:22:39
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \taro3-ts-vue\src\app.ts
 */
import { createApp } from 'vue'
import store from './store/store'

import './app.less'

const App = createApp({
  onShow (options) {},
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

App.use(store)

export default App
