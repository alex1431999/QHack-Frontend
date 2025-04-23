<script setup lang="ts">

import EvaluationSummary from "@/components/EvaluationSummary.vue";
import EvaluationScore from "@/components/EvaluationScore.vue";
</script>

<template>
  <div class="d-flex justify-center">
    <EvaluationSummary class="mr-10" summary="Summary"/>
    <v-divider class="mr-10" vertical></v-divider>
    <EvaluationScore :score="{}"/>
  </div>
</template>
