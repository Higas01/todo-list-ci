<template>
  <label>
    <span>{{ name }}</span>
    <input :type="type" v-model="model" />
  </label>
</template>

<script setup lang="ts">
interface Props {
  type: string
  name: string
}

defineProps<Props>()
const model = defineModel()
</script>

<style lang="scss" scoped></style>
