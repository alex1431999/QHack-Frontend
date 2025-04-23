<script setup lang="ts">
import UploadPitchDeck from '@/components/UploadPitchDeck.vue'
import Loader from '@/components/Loader.vue'
import EvaluationResults from '@/components/EvaluationResults.vue'
import {ref} from "vue";
import {ApiService, type PitchDeckEvaluation} from "@/services/api.ts";
import AdditionalInformationModal from "@/components/AdditionalInformationModal.vue";

const pitchDeck = ref<File | null>(null)
const pitchDeckEvaluation = ref<PitchDeckEvaluation | null>(null)
const isLoading = ref(false)
const openModal = ref(false)

async function onUpload(file: File) {
  pitchDeck.value = file
  openModal.value = true
}

async function onAdditionalInformationSubmitted({ investmentStage }) {
  console.log(investmentStage) // TODO
  openModal.value = false

  isLoading.value = true
  pitchDeckEvaluation.value = await ApiService.uploadPitchDeck(pitchDeck.value)
  isLoading.value = false
}

function onReset() {
  pitchDeck.value = null
  pitchDeckEvaluation.value = null
}
</script>

<template>
  <v-card width="1200px" height="600px">
    <AdditionalInformationModal :open="openModal" @submit="onAdditionalInformationSubmitted" />
    <v-card-text class="h-100">
      <div class="d-flex align-center justify-center mt-auto mb-auto h-100">
        <Loader v-if="isLoading"></Loader>
        <UploadPitchDeck v-if="pitchDeck === null" @upload="onUpload" />
        <EvaluationResults v-if="pitchDeckEvaluation" :pitchDeckEvaluation="pitchDeckEvaluation" @reset="onReset"></EvaluationResults>
      </div>
    </v-card-text>
  </v-card>
</template>
