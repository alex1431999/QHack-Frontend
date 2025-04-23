<script setup lang="ts">
import {type Category, categoryMapping, type ScoringItemType} from "@/utils/scoring.ts";
import ScoringCategory from "@/components/ScoringCategory.vue";
import type {InvestmentStage} from "@/types/evaluation.ts";

const { scoringItems, investmentStage } = defineProps<{ scoringItems: ScoringItemType[], investmentStage: InvestmentStage[] }>()

function getCategory(scoringItem: ScoringItemType): Category {
  return categoryMapping[scoringItem.criteria]
}

function getItems(category: Category): ScoringItemType[] {
  return scoringItems.filter((item: ScoringItemType) => getCategory(item) === category)
}
</script>

<template>
  <v-card width="500" height="400" elevation="10">
    <v-card-title>Score</v-card-title>
    <v-card-text>
      <ScoringCategory
        v-for="scoringItem in scoringItems"
        :category="getCategory(scoringItem)"
        :items="getItems(getCategory(scoringItem))"
        :investment-stage="investmentStage"
      />
    </v-card-text>
  </v-card>
</template>

