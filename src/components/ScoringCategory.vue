<script setup lang="ts">
import {type Category, computeScoreForCriteria, type ScoringItemType} from "@/utils/scoring.ts";
import ScoringItem from "@/components/ScoringItem.vue";
import type {InvestmentStage} from "@/types/evaluation.ts";

const { category, items, investmentStage } = defineProps<{ category: Category, items: ScoringItemType[], investmentStage: InvestmentStage }>()
const categoryScore = items.reduce((sum, item) => sum + computeScoreForCriteria(item.criteria, item.value, investmentStage), 0) / items.length
const categoryScoreString = isNaN(categoryScore) ? null : (categoryScore * 100).toFixed(1)
</script>

<template>
  <v-expansion-panel>
    <v-expansion-panel-title>
      <div class="d-flex justify-space-between w-100">
        <div> {{ category }} </div>
        <div> {{ categoryScoreString }} </div>
      </div>
    </v-expansion-panel-title>
    <v-expansion-panel-text>
      <ScoringItem v-for="item in items" v-if="items.length" :criteria="item.criteria" :value="item.value" :investment-stage="investmentStage" :key="item.criteria" />
      <div v-else>No data found...</div>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>

