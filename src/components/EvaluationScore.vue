<script setup lang="ts">
import {
  CATEGORIES,
  type Category,
  categoryMapping,
  computeFinalScore,
  type ScoringItemType
} from "@/utils/scoring.ts";
import ScoringCategory from "@/components/ScoringCategory.vue";
import type {InvestmentStage} from "@/types/evaluation.ts";
import {computed} from "vue";

const { scoringItems, investmentStage } = defineProps<{ scoringItems: ScoringItemType[], investmentStage: InvestmentStage[] }>()

function getCategory(scoringItem: ScoringItemType): Category {
  return categoryMapping[scoringItem.criteria]
}

function getItems(category: Category): ScoringItemType[] {
  if (!category) return []
  return scoringItems.filter((item: ScoringItemType) => getCategory(item) === category)
}

const score = computeFinalScore(scoringItems, investmentStage)
const scoreThreshold = 0.5
const scoreColor: string = computed(() => score > scoreThreshold ? 'success': 'error')
</script>

<template>
  <v-card :color="scoreColor" class="overflow-auto" width="500" elevation="10">
    <v-card-title>
      <div class="d-flex justify-space-between">
        <div>Score</div>
        <div>{{ (score * 100).toFixed(1) }}</div>
      </div>
    </v-card-title>
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

