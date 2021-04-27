<!--
 * @Author: your name
 * @Date: 2021-04-26 23:20:29
 * @LastEditTime: 2021-04-27 22:05:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \taro3-vue-ts\src\pages\index\index.vue
-->
<template>
  <view class="container">
    <view class="section">
      <input v-model="inputValue" />
      <view class="btn" @tap="handleAdd">新增</view>
    </view>
    <list :list="list" v-on:handleClickItem="handleClickItem"></list>
  </view>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import List from './components/List/index.vue'

export default defineComponent({
  name: 'Index',
  components: {
    List
  },
  setup() {
    const store = useStore();
    const list = computed(() => store.state.index.list)
    const inputValue = ref<string>('')
    const handleClickItem = (item: string) => {
      console.log(item)
    }
    const handleAdd = () => {
      if (inputValue.value.length === 0 ) {
        return;
      }
      store.commit({
        type: 'index/ADD_LIST',
        value: inputValue.value
      })
      inputValue.value = ''
    }
    return {
      list,
      inputValue,
      handleClickItem,
      handleAdd
    }
  }
})
</script>

<style lang="less">
  .container {
    .section {
      display: flex;
      width: 100vw;
      height: 100px;
      align-items: center;
      input {
        border: 1px solid #eee;
      }
    }
  }
</style>
