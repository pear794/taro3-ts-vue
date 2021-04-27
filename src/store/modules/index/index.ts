/*
 * @Author: your name
 * @Date: 2021-04-27 22:08:30
 * @LastEditTime: 2021-04-27 22:11:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \taro3-ts-vue\src\store\modules\index\index.ts
 */
import { Module } from 'vuex'
import RootStateProps from '../../RootInterfalse'

import StateProps from './interface'

const index: Module<StateProps, RootStateProps> =  {
  namespaced: true,
  state: {
    list: [{
      id: 1,
      title: '你好'
    }, {
      id: 2,
      title: '你好2'
    }, {
      id: 3,
      title: '你好3'
    }]
  },
  mutations: {
    ADD_LIST(state, payload) {
      console.log(payload)
      state.list = state.list.concat({
        id: state.list.length +1,
        title: payload.value
      })
    }
  }
}

export default index