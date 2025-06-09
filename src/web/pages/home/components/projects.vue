<script setup lang="ts">
import {onMounted, ref, watch} from "vue";
import projectsData from "../../../assets/data/personal-projects.json?url";
import I18n from "../../../services/i18n.ts";
import { type PersonalProjectEntity, validatePersonalProjects } from "../entities/personal-project-entity.ts";
import PersonalProject from "./personal-project.vue";
import type {TranslationFile} from "../../../services/translation-file.ts";

const { translations } = defineProps<{translations: TranslationFile | undefined}>();
const projects = ref<PersonalProjectEntity[]>([]);
onMounted(async () => {
    projects.value = await fetch(projectsData).then((response) => response.json()).then(validatePersonalProjects)
})
watch(I18n.languageRef, async () => (
    projects.value = await fetch(projectsData).then((response) => response.json()).then(validatePersonalProjects)
))
function alternateAlign(index: number): 'left'|'right' {
  return index % 2 === 0 ? 'right' : 'left';
}
</script>

<template>
  <personal-project v-for="(project, index) in projects" v-bind:align="alternateAlign(index)" v-bind:project="project" :translations="translations"></personal-project>
</template>

<style scoped>

</style>
