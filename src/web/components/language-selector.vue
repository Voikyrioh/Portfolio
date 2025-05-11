<script setup lang="ts">
import I18n from "../services/i18n.ts";
import {ref} from "vue";

function switchLanguage(lang: string) {
  I18n.activeLanguage = lang;
}

const languages = ref(I18n.availableLanguages);
</script>

<template>
  <div class="lang-select">
    <span>Changer de langue :</span>
    <ul>
      <li v-for="lang in languages"><img v-bind:alt="lang[1] + ' flag'" v-bind:src="'https://flagsapi.com/' + lang[1] + '/flat/32.png'" v-on:click="switchLanguage(lang[0])"></li>
    </ul>
  </div>
</template>

<style scoped>
.lang-select {
  span {
    margin: 0 auto;
    font-size: 1.2rem;
  }
  ul {
    margin: 0;
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    padding: 0 8px;

    li {
      transition: all 0.2s ease-in-out;
      &:hover {
        filter: brightness(1.2);
        transform: scale(1.1);
        cursor: pointer;
      }
      &:active {
        transform: scale(0.9);
      }
    }
  }
}
</style>
