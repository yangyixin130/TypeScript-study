<!--
 * @Author: yangyixin130 1578111082@qq.com
 * @Date: 2023-07-23 13:33:53
 * @LastEditors: yangyixin130 1578111082@qq.com
 * @LastEditTime: 2023-07-23 15:45:11
 * @FilePath: \vue3-ts\vue-ts\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div>{{ nowTime }}</div>
  <div><button @click="getNowTime">点击</button></div>
  <!-- <h2>使用ts教程</h2>
  <div>请选择你的英雄</div>
  <div>
    <button
      v-for="(item, index) in girls"
      :key="index"
      @click="selectGrlFunc(index)"
    >
      {{ index }}:{{ item }}
    </button>
    <div>你选择了{{ selectGirl }}</div>
    <button @click="overAction">点餐完毕</button>
    <div>{{ overText }}</div>
  </div> -->
</template>

<script lang="ts">
import { nowTime, getNowTime } from './hooks/useNowTime'
import {
  ref,
  reactive,
  toRefs,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onRenderTracked, //跟踪响应式代码
  onRenderTriggered, //状态触发
  watch,
} from 'vue'
// onActivated 激活中  <keep-alive></keep-alive> onDeactived
interface DataProps {
  girls: string[]
  selectGirl: string
  selectGrlFuncp?: (index: number) => void
}

export default {
  name: 'App',
  components: {},
  // 在beforeCreate create之前 他会在原先的vue2的生命周期要早执行
  setup() {
    return { nowTime, getNowTime }
    // console.log('开始之前')
    // // 必须要加类型注解
    // const data: DataProps = reactive({
    //   girls: ['样一小会', '你好', 'm名字'],
    //   selectGirl: '',
    //   selectGrlFunc: (index: number) => {
    //     data.selectGirl = data.girls[index]
    //   },
    // })
    // const refData = toRefs(data)
    // const overText = ref('')
    // const overAction = () => {
    //   overText.value = '点餐完成|' + overText.value
    // }
    // /**
    //  * Invalid watch source:   A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.
    //  */
    // watch([overText, () => data.selectGirl], (newValue, oldValue) => {
    //   console.log('newValue',newValue);
    //   console.log('oldValue',oldValue);
    //   document.title = newValue[1]
    // })
    // // const girls = ref(['样一小会', '你好', 'm名字'])
    // // const selectGirl = ref('')
    // // const selectGrlFunc = (index: number) => {
    // // }
    // // reactive 不支持... toRefs可以
    // onBeforeMount(() => {
    //   console.log('你好绑定')
    // })
    // onMounted(() => {
    //   console.log('绑定上了')
    // })
    // onBeforeUpdate(() => {
    //   console.log('组件更新之前')
    // })
    // onUpdated(() => {
    //   console.log('组件更新之后执行')
    // })
    // // onRenderTracked((event) => {
    // //   console.log('状态跟踪钩子函数------------->')
    // //   console.log(event)
    // // });
    // /**
    //  * 渲染追踪
    //  */
    // onRenderTriggered((event) => {
    //   console.log('状态跟踪钩子函数------------->')
    //   console.log(event)
    // })
    // return {
    //   ...refData,
    //   overText,
    //   overAction,
    // }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
