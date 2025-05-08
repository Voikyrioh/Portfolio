<script setup lang="ts">
const props = defineProps<{text: string}>();

</script>

<template>
<button>{{props.text}}</button>
</template>

<style scoped>
button {
  position: relative;
  background-color: var(--bg-default);
  padding: 8px;
  border-radius: var(--border-default-radius);
  border: var(--border-default);
  color: var(--text-primary);
  font-size: 20px;
  cursor: pointer;
  text-transform: uppercase;
  transition: var(--transition-default);
  z-index: 1;
  &:hover {
    background-color: var(--bg-alt);
    border-color: var(--border-primary);
    color: var(--text-accent);
  }
  &:active {
    background-color:  var(--bg-alt);
    border-color:  var(--border-primary);
    color: var(--text-accent);
    transform: translateY(8px);
  }
}
button::before {
  position: absolute;
  z-index: 2;
  content: '';
  border: var(--border-default);
  padding-bottom: 8px;
  width: calc(100% + 1px);
  height: 100%;
  transform: translate(-9px, -9px);
  border-radius: var(--border-default-radius);
  transition: all 0.2s ease-in-out;
}

button:active::before {
  z-index: 2;
  content: '';
  padding-bottom: 0;
  border:  var(--border-default);
  width: 100%;
  height: 100%;
  border-radius: var(--border-default-radius);
}

</style>
