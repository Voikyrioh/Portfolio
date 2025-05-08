<script setup lang="ts">
  import {onMounted, ref} from "vue";
  import i18n from "../services/i18n.ts";
  import file from "../../../public/presentation.json?url";
  import type { Presentation } from "../models/presentation.ts";

  const text = ref('');
  onMounted(async () => {
    text.value = (await i18n.getDocument<Presentation>(file)).text;
  });
</script>

<template>
  <p>{{text}}</p>
</template>

<style scoped>
  p {
    color: var(--text-primary);
    font-size: 1.2rem;
    max-width: 80%;
    padding: 16px;
    margin: 0 auto;
    text-align: center;
  }

  @media screen and (min-width: 900px) {
    p {
      max-width: 60%;
    }
  }

  @media screen and (min-width: 1200px) {
    p {
      max-width: 33%;
    }
  }
</style>
