<script setup lang="ts">
import type {TranslationFile} from "../../../shared/services/translation-file.ts";

const { translations } = defineProps<{translations: TranslationFile | undefined}>()
</script>

<template>
  <div class="presentation">
    <p>{{translations?.get('PRESENTATION')}}</p>
  </div>
</template>

<style scoped>
  .presentation {
    max-width: 80%;
    padding: 16px;
    margin: 32px auto;
    min-height: 500px;
    p::after {
      content: "";
      display: block;
      position: absolute;
      background-color: var(--bg-default);
      border-left: 1px solid;
      border-bottom: 1px solid;
      width: 32px;
      height: 32px;
      bottom: 0;
      left: 0;
      transform:  matrix(0.5, -0.5, 0, 1, -9, 9);
    }
    p {
      color: var(--text-primary);
      font-size: 1.2rem;
      padding: 16px;
      text-align: center;
      border-radius: 16px;
      border: 1px solid;
      position: relative;
    }

    @media screen and (min-width: 900px) {
      max-width: 60%;
    }

    @media screen and (min-width: 1200px) {
      max-width: 33%;
    }
  }

</style>
