<script setup lang="ts">
import LanguageSelector from "./components/language-selector.vue";
import type {TranslationFile} from "../shared/services/translation-file.ts";

const { translations } = defineProps<{ translations: TranslationFile|undefined }>();
</script>

<template>
  <div class="site-title">
    <h1>Voikyrioh.fr</h1>
    <language-selector :translations="translations"></language-selector>
  </div>
</template>

<style scoped>
  .site-title {
    padding: 3rem 0;
    margin: 0;
    background-color: #111;
    color: var(--text-primary);
    position: relative;

    h1 {
      font-size: 4rem;
      text-align: center;
      margin: 0;
    }

    .lang-select {
      width: fit-content;
      position: absolute;
      top: 50%;
      right: 32px;
      transform: translateY(-50%);
    }
  }
</style>
