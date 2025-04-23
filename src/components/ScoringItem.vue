<script setup lang="ts">
import {type Criteria, criteriaNameMap, normaliseScore, scoringFunctions} from "@/utils/scoring.ts";
import type {InvestmentStage} from "@/types/evaluation.ts";
import {computed} from "vue";

const { criteria, value, investmentStage } = defineProps<{ criteria: Criteria, value: number, investmentStage: InvestmentStage }>()

const scoringFunction = scoringFunctions[criteria]
const score = scoringFunction ? scoringFunction(value, investmentStage) : 0
const criteriaName = computed(() => criteriaNameMap[criteria])
</script>

<template>
  <div class="d-flex justify-space-between">
    <div> {{ criteriaName }} </div>
    <div> {{ value }} </div>
    <div> {{ normaliseScore(score) }} </div>
  </div>
</template>
