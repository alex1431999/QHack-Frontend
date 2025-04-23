<script setup lang="ts">
import UploadPitchDeck from '@/components/UploadPitchDeck.vue'
import {ref} from "vue";

const pitchDeck = ref<File | null>(null)
</script>

<template>
  <v-card width="1200px" height="600px">
    <v-card-text>
      <UploadPitchDeck v-if="pitchDeck === null" @upload="file => pitchDeck = file" />
    </v-card-text>
  </v-card>
</template>
