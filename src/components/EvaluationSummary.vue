<script setup lang="ts">
import type {Summary} from "@/services/api.ts";
import {summaryLabelMap} from "@/utils/evaluation.ts";

const { summary } = defineProps<{ summary: Summary }>()
const { company_name, pitch_deck_summary, one_sentence_pitch, ...information } = summary
const informationList = Object.keys(information).map((label) => ({ label, value: information[label] }))
const informationListFiltered = informationList.filter(({ label }) => !['business_model'].includes(label))
</script>

<template>
  <v-card width="500" elevation="10">
    <v-card-title>{{ company_name || 'Company' }}</v-card-title>
    <v-card-text>
      <h2>One sentence pitch</h2>
      <div class="mb-2">{{ one_sentence_pitch }}</div>

      <h2>Summary</h2>
      <div class="mb-2">{{ pitch_deck_summary }}</div>

      <h2>General</h2>
      <div v-for="information in informationListFiltered" :key="information.label" class="d-flex justify-space-between">
        <div> {{ summaryLabelMap[information.label] }}: </div>
        <div>{{ information.value || 'No Data...' }}</div>
      </div>
    </v-card-text>
  </v-card>
</template>

