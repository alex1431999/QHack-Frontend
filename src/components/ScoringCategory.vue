<script setup lang="ts">
import type {Category, ScoringItemType} from "@/utils/scoring.ts";
import ScoringItem from "@/components/ScoringItem.vue";
import type {InvestmentStage} from "@/types/evaluation.ts";

const { category, items, investmentStage } = defineProps<{ category: Category, items: ScoringItemType[], investmentStage: InvestmentStage }>()
const itemsFiltered = items.filter(item => item.value !== undefined)
</script>

<template>
  <v-expansion-panel :title="category">
    <v-expansion-panel-text>
      <ScoringItem v-for="item in items" v-if="itemsFiltered.length" :criteria="item.criteria" :value="item.value" :investment-stage="investmentStage" :key="item.criteria" />
      <div v-else>No data found...</div>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>

