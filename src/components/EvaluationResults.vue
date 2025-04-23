<script setup lang="ts">
import EvaluationSummary from "@/components/EvaluationSummary.vue";
import EvaluationScore from "@/components/EvaluationScore.vue";
import type {PitchDeckEvaluation} from "@/services/api.ts";
import {pitchDeckEvaluationToScoringItems} from "@/utils/evaluation.ts";
import type {InvestmentStage} from "@/types/evaluation.ts";

const { pitchDeckEvaluation, investmentStage } = defineProps<{pitchDeckEvaluation: PitchDeckEvaluation, investmentStage: InvestmentStage}>()
const emit = defineEmits<{ reset: () => void }>()

const scoringItems = pitchDeckEvaluationToScoringItems(pitchDeckEvaluation)
</script>

<template>
  <div>
    <v-btn class="mb-5" icon="mdi-chevron-left" @click="emit('reset')"></v-btn>

    <div class="d-flex justify-center">
      <EvaluationSummary class="mr-10" :summary="pitchDeckEvaluation"/>
      <v-divider class="mr-10" vertical></v-divider>
      <EvaluationScore :scoring-items="scoringItems" :investment-stage="investmentStage" />
    </div>
  </div>
</template>
