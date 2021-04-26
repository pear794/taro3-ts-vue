<!--
 * @Author: your name
 * @Date: 2021-04-26 23:26:10
 * @LastEditTime: 2021-04-27 00:04:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \taro3-vue-ts\src\pages\index\components\List\index.vue
-->
<template>
  <view class="container">
    <view v-for="item in list" :key="item.id" @tap="handleClickItem(item.title)">{{item.title}}</view>
  </view>
</template>

<script lang="ts">
import { defineComponent, PropType, onMounted, toRefs } from 'vue'

export interface ListProps {
  id: number;
  title: string;
}

export default defineComponent({
  name: 'List',
  props: {
    list: Array as PropType<ListProps[]>,
  },
  setup(props, { emit }) {
    const { list } = toRefs(props)
    onMounted(() => {
      console.log(list)
    })
    const handleClickItem = (item: string) => {
      emit('handleClickItem', item)
    }
    return {
      handleClickItem,
    }
  }
})
</script>

<style>
  @import "index.module.less"
</style>