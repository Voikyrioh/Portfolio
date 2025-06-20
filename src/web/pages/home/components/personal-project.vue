<script setup lang="ts">
import type {PersonalProjectEntity} from "../entities/personal-project-entity.ts";
import CustomButton from "../../../atoms/custom-button.vue";
import {computed} from "vue";
import type {TranslationFile} from "../../../services/translation-file.ts";

const {project, align, translations} = defineProps<{align: 'left' | 'right', project: PersonalProjectEntity, translations: TranslationFile | undefined}>()
function navigateUrl() {
  window.open(project.url, "_blank");
}

const alignProject = computed(() => align === "right" ? 'row' : 'row-reverse');
const imageCrop = computed(() => align === "right" ? 'polygon(0 0, 100% 0, 100% 100%, 200px 100%)' : 'polygon(0 0, 100% 0, calc(100% - 200px) 100%, 0 100%)');
const imgUrl = computed(() => {return new URL(`../../../assets/medias/projects/${project.img}`, import.meta.url).href;})
</script>

<template>
  <div class="personal-project">
    <div class="project-description">
      <h2>{{project.name}}</h2>
      <p v-html="translations?.get('PROJECT.' + project.description)"></p>
      <custom-button :text="translations?.get('SEE_PROJECT') ?? ''" v-on:click="navigateUrl"/>
    </div>
    <img v-bind:src="imgUrl" v-bind:alt="project.name + ' visual'"/>
  </div>
</template>

<style scoped>
  .personal-project {
    display: flex;
    border-top: solid 1px;
    flex-direction: column;
    background-color: var(--bg-contrast);
    color: var(--text-primary);
    &:last-child {
      border-bottom: solid 1px;
    }
    .project-description {
      justify-content: center;
      padding: 8px;
      >* {
        margin: 8px auto;
        max-width: 80%;
        text-align: center;
      }
      h2 {
        font-size: 2.5rem;
      }
      button {
        display: block;
        margin: 16px auto;
      }
    }
  }

  @media screen and (min-width: 1920px) {
    .personal-project {
      flex-direction: v-bind(alignProject);
      height: 800px;
      .project-description {
        width: 1fr;
        justify-content: center;
      }
      img {
        width: 1200px;
        object-fit: cover;
        clip-path: v-bind(imageCrop);
      }
    }
  }
</style>
