<!--
 * @Author: your name
 * @Date: 2021-04-26 23:20:29
 * @LastEditTime: 2021-04-26 23:59:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \taro3-vue-ts\src\pages\index\index.vue
-->
<template>
  <view class="container">
    <list :list="list" v-on:handleClickItem="handleClickItem"></list>
  </view>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import List, { ListProps } from './components/List/index.vue'

export default defineComponent({
  name: 'Index',
  components: {
    List
  },
  setup() {
    const list = ref<ListProps[]>([{
      id: 1,
      title: '你好'
    }, {
      id: 2,
      title: '你好2'
    }, {
      id: 3,
      title: '你好3'
    }])
    const handleClickItem = (item: string) => {
      console.log(item)
    }
    return {
      list,
      handleClickItem
    }
  }
})
</script>

<style lang="less" global>
  .container {
    width: 300px;
    height: 300px;
    background: red;
  }
</style>
