<template>
  <div>
    <h3>{{title}}</h3>
    <p>支持人数{{supNum}}</p>
    <p>反对人数{{oppNum}}</p>
    <p>支持率:{{ratio}}</p>
    <button @click="change(0)">支持</button>
    <button @click="change(1)">反对</button>
  </div>
</template>

<script>
import { ref, reactive, toRefs, readonly, computed, watchEffect } from 'vue'

export default {
  name: 'Vote',
  props: {
    title: String
  },
  // 函数是一个新的组件选项。作为在组件内使用 Composition API 的入口点。
  // 初始化props和beforeCreate之间被调用
  // props: 基于Proxy代理的响应式数据
  setup(props) {
    // 构建响应式数据 ref(一般处理简单值的响应式) 原理：defineProperty 监听 value 值
    const state = ref({
      supNum: 0,
      oppNum: 0
    })
    function add(val) {
      val === 0 ? state.value.supNum++ : state.value.oppNum++
    }

    /* 接受一个参数值并返回一个响应式且可改变的 ref 对象。ref 对象拥有一个指向内部值的单一属性 .value。
    const supNum = ref(0)
    const oppNum = ref(0)
    function change(val) {
      val === 0 ? supNum.value++ : oppNum.value++
    } */


    // 接收一个普通对象然后返回该普通对象的响应式代理。等同于 2.x 的 Vue.observable()
    const original = reactive({
      supNum: 0,
      oppNum: 0,
      arr: [1,2,3]
    })
    const change = val => {
      val === 0 ? original.supNum++ : original.oppNum++
      // 比 Object.defineProperty 好用在于：对于数据或者并未初始化的对象成员，都可以随意修改值，而且具备响应式的效果
      original.arr[1] = 200
      original.name = 'haolucky'
    }

    const obj = {
      x: 1,
      y: {
        z: 2
      }
    }
    // 传入一个对象（响应式或普通）或 ref，返回一个原始对象的只读代理。一个只读的代理是“深层的”，对象内部任何嵌套的属性也都是只读的。
    const obj1 = readonly(obj)
    // console.log(obj1.y = 2) // Set operation on key "y" failed: target is readonly. ⚠️当调用set方法时进行了拦截


    // 传入一个 getter 函数，返回一个默认不可手动修改的 ref 对象。或者传入一个拥有 get 和 set 函数的对象，创建一个可手动修改的计算状态。
    /* const ratio = computed(() => {
      let total = original.supNum + original.oppNum
      return total === 0 ? '---' : ((original.supNum/total) * 100).toFixed(2) + '%'
    }) */
    let ratio = computed({
      get: () => {
        let total = original.supNum + original.oppNum
        return total === 0 ? '---' : ((original.supNum/total) * 100).toFixed(2) + '%'
      },
      set: val => {
        console.log(val,'set')
      }
    })
    ratio.value = 123
    return {
      change,
      ...toRefs(original), // 把reactive中的每一项变为ref响应式数据
      ratio
    }
  }
}
</script>