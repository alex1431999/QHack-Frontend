<script setup lang="ts">
import {ref} from "vue";
import type {InvestmentStage} from "@/types/evaluation.ts";

const { open } = defineProps<{ open: boolean }>()

const investmentStage = ref<InvestmentStage>('Pre-seed')

const emit = defineEmits<{ submit: (additionalInformation: { investmentStage: InvestmentStage }, close: () => void) => void }>()
</script>

<template>
  <v-dialog max-width="500" :model-value="open">
    <template v-slot:default>
      <v-card title="Additional information">
        <v-card-text>
          <v-label>Investment stage</v-label>
          <v-select v-model="investmentStage" :items="['Pre-seed', 'Seed', 'Series A', 'Series B+']"></v-select>

          <v-label>Industry</v-label>
          <v-select model-value="FinTech" :items="['FinTech', 'HealthTech', 'ConstructionTech', 'AgrarTech', 'ClimateTech', 'FoodTech', 'Other']"></v-select>

          <v-file-input
              label="Upload financial data"
              prepend-icon="mdi-file-upload"
              outlined
              dense
              show-size
          ></v-file-input>
        </v-card-text>

        <v-card-actions>
          <v-btn text="cancel" @click="emit('close')"></v-btn>
          <v-btn
            text="Submit"
            @click="emit('submit', { investmentStage })"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>
