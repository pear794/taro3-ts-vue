/*
 * @Author: your name
 * @Date: 2021-04-27 21:20:03
 * @LastEditTime: 2021-04-27 22:10:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \taro3-ts-vue\src\store\index.ts
 */
import { createStore } from 'vuex'
import RootStateProps from './RootInterfalse'

import index from './modules/index/index'

const store = createStore<RootStateProps>({
  modules: {
    index
  }
})

export default store