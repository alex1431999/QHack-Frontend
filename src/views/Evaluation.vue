<script setup lang="ts">
import UploadPitchDeck from '@/components/UploadPitchDeck.vue'
import Loader from '@/components/Loader.vue'
import EvaluationResults from '@/components/EvaluationResults.vue'
import {ref} from "vue";
import {ApiService, type PitchDeckEvaluation} from "@/services/api.ts";

const pitchDeck = ref<File | null>(null)
const pitchDeckEvaluation = ref<PitchDeckEvaluation | null>(null)
const isLoading = ref(false)

async function onUpload(file: File) {
  pitchDeck.value = file

  isLoading.value = true
  pitchDeckEvaluation.value = await ApiService.uploadPitchDeck(file)
  isLoading.value = false
}
</script>

<template>
  <v-card width="1200px" height="600px">
    <v-card-text class="h-100">
      <div class="d-flex align-center justify-center mt-auto mb-auto h-100">
        <Loader v-if="isLoading"></Loader>
        <UploadPitchDeck v-if="pitchDeck === null" @upload="onUpload" />
        <EvaluationResults v-if="pitchDeckEvaluation" :pitchDeckEvaluation="pitchDeckEvaluation"></EvaluationResults>
      </div>
    </v-card-text>
  </v-card>
</template>
