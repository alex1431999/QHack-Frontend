<script setup lang="ts">
import {ref} from "vue";
import type {InvestmentPhase} from "@/types/evaluation.ts";

const { open } = defineProps<{ open: boolean }>()

const investmentPhase = ref<InvestmentPhase>('Pre-seed')

const emit = defineEmits<{ submit: (additionalInformation: { investmentPhase: InvestmentPhase }) => void }>()
</script>

<template>
  <v-dialog max-width="500" :model-value="open">
    <template v-slot:default="{ isActive }">
      <v-card title="Additional information">
        <v-card-text>
          <v-label>Investment phase</v-label>
          <v-select v-model="investmentPhase" :items="['Pre-seed', 'Seed', 'Series A', 'Series B+']"></v-select>
        </v-card-text>

        <v-card-actions>
          <v-btn
            text="Submit"
            @click="emit('submit', { investmentPhase })"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>
