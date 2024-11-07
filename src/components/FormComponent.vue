<template>
  <form>
    <div v-for="(input, index) in inputs" :key="index">
      <InputComponent :type="input.type" :name="input.name" v-model="input.modelValue.value" />
    </div>
    <ButtonComponent type="submit"> Enviar </ButtonComponent>
  </form>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import InputComponent from './InputComponent.vue'
import ButtonComponent from './ButtonComponent.vue'
import { type InputField } from '@/utils/interfaces/InputField'

defineProps<{
  inputs: InputField[]
}>()
</script>

<style scoped></style>
