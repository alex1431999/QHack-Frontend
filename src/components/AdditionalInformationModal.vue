<script setup lang="ts">
import {ref} from "vue";
import type {InvestmentStage} from "@/types/evaluation.ts";

const { open } = defineProps<{ open: boolean }>()

const investmentStage = ref<InvestmentStage>('Pre-seed')

const emit = defineEmits<{ submit: (additionalInformation: { investmentStage: InvestmentStage }, close: () => void) => void }>()
</script>

<template>
  <v-dialog max-width="500" :model-value="open" @after-leave="emit('close')">
    <template v-slot:default="{ isActive }">
      <v-card title="Additional information">
        <v-card-text>
          <v-label>Investment stage</v-label>
          <v-select v-model="investmentStage" :items="['Pre-seed', 'Seed', 'Series A', 'Series B+']"></v-select>
        </v-card-text>

        <v-card-actions>
          <v-btn
            text="Submit"
            @click="emit('submit', { investmentStage })"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>
