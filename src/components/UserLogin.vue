<script setup lang="ts">
import FormComponent from './FormComponent.vue'
import { ref, watch } from 'vue'
import { type InputField } from '@/utils/interfaces/InputField'

const value = ref<string>('')

const inputsField: InputField[] = [
  {
    name: 'userName',
    type: 'text',
    modelValue: value,
  },
]

watch(value, () => console.log(value.value))
</script>

<template>
  <main>
    <div>
      <h1>Bem Vindo ao nosso sistema</h1>
      <p>Entre com seu username!</p>
      <FormComponent :inputs="inputsField" />
    </div>
  </main>
</template>

<style scoped>
main {
  min-height: 100vh;
  display: flex;
  align-items: center;
}

div {
  min-width: 100vw;
  display: flex;
  align-items: center;
  min-height: inherit;
  flex-direction: column;
}
</style>
