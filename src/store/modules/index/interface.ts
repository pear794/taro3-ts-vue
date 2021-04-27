/*
 * @Author: your name
 * @Date: 2021-04-27 22:09:00
 * @LastEditTime: 2021-04-27 22:09:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \taro3-ts-vue\src\store\modules\index\interface.ts
 */
interface ListProps {
  id: number;
  title: string;
}

export default interface StateProps {
  list: ListProps[],
}