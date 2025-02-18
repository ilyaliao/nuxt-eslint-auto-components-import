<script setup>
import { ref } from 'vue'
import { TestCom3, TestCom2, TestCom1, TestCom } from '#components'

const count = ref(1)
</script>

<template>
  <div>
    Nuxt module playground! {{ count }}
    <TestCom />
    <TestCom1 />
    <TestCom2 />
    <TestCom3 />
  </div>
</template>
