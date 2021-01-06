<template>
<Demo :title="title"></Demo>
</template>

<script>
import { ref, onMounted } from 'vue'
import Demo from './components/Demo.vue'

export default {
  name: 'App',
  components: {
    Demo
  },
  data(){
    return {
      title: '前端好学么？'
    }
  },
  mounted() {
    setTimeout(() => {
      this.title = 'Hello World'
    } ,2000)
  }
}
</script>
