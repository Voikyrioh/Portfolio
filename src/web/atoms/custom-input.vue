<script setup lang="ts">
type InputAvailableTypes = 'text' | 'email' | 'password' | 'number';

const props = defineProps<{ type: InputAvailableTypes, error?: boolean }>()
</script>

<template>
  <input v-bind:type="props.type" v-bind:class="{ error: props.error }">
</template>

<style scoped>
  input {
    padding: 4px 8px;
    border: var(--border-default);
    border-radius: var(--border-default-radius);
    background-color: var(--bg-default);
    color: var(--text-primary);
    &:focus {
      outline: none;
      border-width: 2px;
    }
    &.error {
      border-color: var(--error);
      animation: wrong-input 0.1s ease-in-out;
      animation-iteration-count: 6;
    }
  }

  @keyframes wrong-input {
    0% {
      transform: translateX(4px);
    }
    50% {
      transform: translateX(0px);
    }
    100% {
      transform: translateX(-4px);
    }
  }
</style>
