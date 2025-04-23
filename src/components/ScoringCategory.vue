<script setup lang="ts">
import type {Category, ScoringItemType} from "@/utils/scoring.ts";
import ScoringItem from "@/components/ScoringItem.vue";
import type {InvestmentStage} from "@/types/evaluation.ts";

const { category, items, investmentStage } = defineProps<{ category: Category, items: ScoringItemType[], investmentStage: InvestmentStage }>()
</script>

<template>
  <v-expansion-panel :title="category">
    <v-expansion-panel-text>
      <ScoringItem v-for="item in items" v-if="items.length" :criteria="item.criteria" :value="item.value" :investment-stage="investmentStage" :key="item.criteria" />
      <div v-else>No data found...</div>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>

