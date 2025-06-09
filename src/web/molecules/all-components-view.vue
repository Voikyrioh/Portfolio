<script setup lang="ts">
import CustomButton from "../atoms/custom-button.vue";
import CustomInput from "../atoms/custom-input.vue";
import {ref} from "vue";

const isInputOnError = ref(false);

function buttonClicked() { alert('test button clicked'); }
function onInputError() {
  isInputOnError.value = true;
  setTimeout(() => {
    isInputOnError.value = false;
  }, 1000)
}
</script>

<template>
  <div class="component-view">
    <div style="display: flex; width: 100%; justify-content: space-evenly;">
      <custom-button text="test"></custom-button>
      <custom-button text="with click event" v-on:click="buttonClicked"></custom-button>
    </div>
    <custom-input type="text" placeholder="Enter your name"></custom-input>
    <custom-input type="text" placeholder="Error every letter" v-on:input="onInputError()" v-bind:error="isInputOnError"></custom-input>
  </div>
</template>

<style scoped>
  .component-view {
    outline: var(--border-default);
    margin: 16px auto;
    padding: 16px;
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    >* {
      margin: 16px auto;
    }
  }
</style>
