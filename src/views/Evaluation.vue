<script setup lang="ts">
import UploadPitchDeck from '@/components/UploadPitchDeck.vue'
import Loader from '@/components/Loader.vue'
import EvaluationResults from '@/components/EvaluationResults.vue'
import {ref} from "vue";
import {ApiService, type PitchDeckEvaluation} from "@/services/api.ts";
import AdditionalInformationModal from "@/components/AdditionalInformationModal.vue";
import type {InvestmentStage} from "@/types/evaluation.ts";

const pitchDeck = ref<File | null>(null)
const pitchDeckEvaluation = ref<PitchDeckEvaluation | null>(null)
const investmentStage = ref<InvestmentStage>('Seed')
const isLoading = ref(false)
const openModal = ref(false)

async function onUpload(file: File) {
  pitchDeck.value = file
  openModal.value = true
}

async function onAdditionalInformationSubmitted(additionalInformation) {
  investmentStage.value = additionalInformation.investmentStage
  openModal.value = false

  isLoading.value = true
  pitchDeckEvaluation.value = await ApiService.uploadPitchDeck(pitchDeck.value)
  isLoading.value = false
}

function onModalClose() {
  openModal.value = false
  pitchDeck.value = null
}

function onReset() {
  pitchDeck.value = null
  pitchDeckEvaluation.value = null
}
</script>

<template>
  <v-card width="1200px" min-height="600">
    <AdditionalInformationModal :open="openModal" @submit="onAdditionalInformationSubmitted" @close="onModalClose" />
    <v-card-text class="h-100">
      <div class="d-flex align-center justify-center mt-auto mb-auto">
        <Loader style="margin-top: 17%" v-if="isLoading"></Loader>
        <UploadPitchDeck v-if="pitchDeck === null" @upload="onUpload" />
        <EvaluationResults v-if="pitchDeckEvaluation" :pitchDeckEvaluation="pitchDeckEvaluation" :investment-stage="investmentStage" @reset="onReset"></EvaluationResults>
      </div>
    </v-card-text>
  </v-card>
</template>
