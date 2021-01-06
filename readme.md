# Vue3新特性全面剖析
- 开发
- alpha版：内部测试版 α
- bate版：公开测试版 β
- rc版：Release Candidate （候选版本）
- stable版：稳定版

------

Performance
- 重写了虚拟DOM的实现（跳过静态节点，只处理动态节点）
- update性能提高1.3~2倍
- SSR速度提高了2~3倍

Tree shaking
- 可以将无用模块“剪辑”，仅打包需要的

Fragment
- 不再限于模板中的单个根节点

<Teleport>
- 以前称为<Portal>，译作传送门

<Suspense>
- 可在嵌套层级中等待嵌套的异步依赖项

TypeScript
- 更好的TypeScript支持

Custom Renderer API
- 自定义渲染器API
- 用户可以尝试WebGL自定义渲染器

Composition API
- 组合式API，替换原有的 Options API
  - 根据逻辑相关性组织代码，提高可读性和可维护性
  - 更好的重用逻辑代码（避免mixins混入时命名冲突的问题）
- 但是依然可以延用 Options API

Proxy
> https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy

- 响应式原理不再基于 Object.defineProperty

------
### 掌握setup和响应式系统API
> https://vue-composition-api-rfc.netlify.app/zh/api.html

### 掌握新生命周期函数和模板refs的使用