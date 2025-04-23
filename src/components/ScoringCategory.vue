<script setup lang="ts">
import type {Category, ScoringItemType} from "@/utils/scoring.ts";
import ScoringItem from "@/components/ScoringItem.vue";
import type {InvestmentStage} from "@/types/evaluation.ts";

const { category, items, investmentStage } = defineProps<{ category: Category, items: ScoringItemType[], investmentStage: InvestmentStage }>()
</script>

<template>
  <h2>{{ category }}</h2>
  <ScoringItem v-for="item in items" :criteria="item.criteria" :value="item.value" :investment-stage="investmentStage" :key="item.criteria" />
</template>

