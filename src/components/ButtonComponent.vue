<template>
  <button @click="click" :type="type">
    <slot />
  </button>
</template>

<script setup lang="ts">
interface Props {
  click?: () => void
  type: 'button' | 'submit' | 'reset'
}

defineProps<Props>()
</script>

<style lang="scss" scoped></style>
