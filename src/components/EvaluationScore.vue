<script setup lang="ts">
import {CATEGORIES, type Category, categoryMapping, type ScoringItemType} from "@/utils/scoring.ts";
import ScoringCategory from "@/components/ScoringCategory.vue";
import type {InvestmentStage} from "@/types/evaluation.ts";

const { scoringItems, investmentStage } = defineProps<{ scoringItems: ScoringItemType[], investmentStage: InvestmentStage[] }>()

function getCategory(scoringItem: ScoringItemType): Category {
  return categoryMapping[scoringItem.criteria]
}

function getItems(category: Category): ScoringItemType[] {
  if (!category) return []
  return scoringItems.filter((item: ScoringItemType) => getCategory(item) === category)
}
</script>

<template>
  <v-card class="overflow-auto" width="500" height="400" elevation="10">
    <v-card-title>Score</v-card-title>
    <v-card-text>
      <v-expansion-panels>
        <ScoringCategory
          v-for="category in CATEGORIES"
          :category="category"
          :items="getItems(category)"
          :investment-stage="investmentStage"
        />
      </v-expansion-panels>
    </v-card-text>
  </v-card>
</template>

