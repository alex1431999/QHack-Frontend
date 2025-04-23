<script setup lang="ts">

import EvaluationSummary from "@/components/EvaluationSummary.vue";
</script>

<template>
  <div class="d-flex justify-center">
    <EvaluationSummary class="mr-10" summary="Summary"/>
    <v-divider class="mr-10" vertical></v-divider>
    <EvaluationSummary summary="Summary"/>
  </div>
</template>
