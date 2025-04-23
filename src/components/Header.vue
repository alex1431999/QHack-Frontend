<template>
  <header class="site-header d-flex justify-space-between align-center">
    <h2>Startup Evaluation</h2>
    <v-btn>Startup Evaluation</v-btn>
    <v-btn>Startup crawling</v-btn>
    <v-btn>Industry analysis</v-btn>
    <v-btn>Startup reachout</v-btn>

    <div class="d-flex">
      <v-btn icon="mdi-cog" class="mr-2"></v-btn>
      <v-btn icon="mdi-account"></v-btn>
    </div>
  </header>
</template>


<style scoped>
.site-header {
  width: 100%;
  height: 80px;
  background-color: #1a1a1a;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  padding: 20px;
}
</style>
<script setup lang="ts">
</script>
