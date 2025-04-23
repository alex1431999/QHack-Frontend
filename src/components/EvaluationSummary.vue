<script setup lang="ts">
const { summary } = defineProps<{ summary: string }>()
</script>

<template>
  <v-card width="500" height="400" color="primary">
    <v-card-title>Summary</v-card-title>
    <v-card-text> {{ summary }}</v-card-text>
  </v-card>
</template>

