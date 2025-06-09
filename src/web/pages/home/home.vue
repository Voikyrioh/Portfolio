<script setup lang="ts">
import Projects from "./components/projects.vue";
import Presentation from "./components/presentation.vue";
import {onMounted, ref, watch} from "vue";
import I18n from "../../services/i18n.ts";
import translationsUrl from "../../assets/translations/pages/home/translations.json?url"
import type {TranslationFile} from "../../services/translation-file.ts";


const translations = ref<TranslationFile>();
onMounted(async () => {translations.value = await I18n.getDocument(translationsUrl);});
watch(I18n.languageRef, async () => { translations.value = await I18n.getDocument(translationsUrl); })

</script>

<template>
  <presentation :translations="translations"></presentation>
  <projects :translations="translations"></projects>
</template>

<style scoped>

</style>
