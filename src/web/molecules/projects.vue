<script setup lang="ts">
import {onMounted, ref, watch} from "vue";
import url from "../../../public/personal-projects.json?url";
import I18n from "../services/i18n.ts";
import type {PersonalProjectEntity} from "../models/personal-project-entity.ts";
import PersonalProject from "../components/personal-project.vue";

const projects = ref<PersonalProjectEntity[]>([]);
onMounted(async () => {
  projects.value = await I18n.getDocument<PersonalProjectEntity[]>(url)
})
watch(I18n.languageRef, async () => (
    projects.value = await I18n.getDocument<PersonalProjectEntity[]>(url)
))
function alternateAlign(index: number): 'left'|'right' {
  return index % 2 === 0 ? 'right' : 'left';
}
</script>

<template>
  <personal-project v-for="(project, index) in projects" v-bind:align="alternateAlign(index)" v-bind:project="project"></personal-project>
</template>

<style scoped>

</style>
