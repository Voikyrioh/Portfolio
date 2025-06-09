<script setup lang="ts">
import "./styles/globals.css"
import Home from "./pages/home/home.vue";
import SiteTitle from "./structure/site-title.vue";
import translationsUrl from "./assets/translations/translations.json?url";
import I18n from "./services/i18n.ts";
import {onMounted, ref, watch} from "vue";
import type {TranslationFile} from "./services/translation-file.ts";

const translations = ref<TranslationFile>();
onMounted(async () => {translations.value = await I18n.getDocument(translationsUrl);});
watch(I18n.languageRef, async () => { translations.value = await I18n.getDocument(translationsUrl); })
</script>


<template>
  <site-title :translations="translations"></site-title>
  <home></home>

</template>

<style scoped>

</style>
