<script setup lang="ts">
const { summary } = defineProps<{ summary: string }>()
</script>

<template>
  <v-card width="500" height="400" elevation="10">
    <v-card-title>Summary</v-card-title>
    <v-card-text>
      <div class="text">{{ summary }}</div>
    </v-card-text>
  </v-card>
</template>

