// 组合式API下使用store
<template>
  <div>{{ count }}</div>
</template>
<script>
import { computed } from '@vue/reactivity'
import { useStore } from 'vuex'

export default {
  setup () {
    const store = useStore()
    return {
      count: computed(() => store.state.count),
    }
  }
}
</script>