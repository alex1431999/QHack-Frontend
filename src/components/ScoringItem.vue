<script setup lang="ts">
import {type Criteria, scoringFunctions} from "@/utils/scoring.ts";
import type {InvestmentStage} from "@/types/evaluation.ts";

const { criteria, value, investmentStage } = defineProps<{ criteria: Criteria, value: number, investmentStage: InvestmentStage }>()

const scoringFunction = scoringFunctions[criteria]
const score = scoringFunction ? scoringFunction(value, investmentStage) : 0
</script>

<template>
  <div>{{ criteria }} {{ value }} {{ score }}</div>
</template>
