<script setup lang="ts">
import EvaluationSummary from "@/components/EvaluationSummary.vue";
import EvaluationScore from "@/components/EvaluationScore.vue";
import type {PitchDeckEvaluation} from "@/services/api.ts";

const { pitchDeckEvaluation } = defineProps<{pitchDeckEvaluation: PitchDeckEvaluation}>()
</script>

<template>
  <div class="d-flex justify-center">
    <EvaluationSummary class="mr-10" :summary="pitchDeckEvaluation"/>
    <v-divider class="mr-10" vertical></v-divider>
    <EvaluationScore :score="{}"/>
  </div>
</template>
