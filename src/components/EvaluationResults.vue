<script setup lang="ts">
import EvaluationSummary from "@/components/EvaluationSummary.vue";
import EvaluationScore from "@/components/EvaluationScore.vue";
import type {PitchDeckEvaluation} from "@/services/api.ts";

const { pitchDeckEvaluation } = defineProps<{pitchDeckEvaluation: PitchDeckEvaluation}>()
const emit = defineEmits<{ reset: () => void }>()
</script>

<template>
  <div>
    <v-btn class="mb-5" icon="mdi-chevron-left" @click="emit('reset')"></v-btn>

    <div class="d-flex justify-center">
      <EvaluationSummary class="mr-10" :summary="pitchDeckEvaluation"/>
      <v-divider class="mr-10" vertical></v-divider>
      <EvaluationScore :score="{}"/>
    </div>
  </div>
</template>
