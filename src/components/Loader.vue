<template>
  <div class="calculation-loader">
    <div class="grid">
      <div v-for="n in 9" :key="n" :class="'cell cell-' + n"></div>
    </div>
    <v-icon class="center-icon" size="48" color="primary">
      mdi-function-variant
    </v-icon>
  </div>
</template>

<script setup lang="ts">
// purely visual, no logic needed
</script>

<style scoped>
.calculation-loader {
  position: relative;
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.grid {
  position: absolute;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 8px;
  width: 100px;
  height: 100px;
  z-index: 1;
}

.cell {
  width: 20px;
  height: 20px;
  background: #2196f3;
  border-radius: 4px;
  opacity: 0.2;
  animation: pulse 1.5s infinite ease-in-out;
}

.cell-1 { animation-delay: 0s; }
.cell-2 { animation-delay: 0.2s; }
.cell-3 { animation-delay: 0.4s; }
.cell-4 { animation-delay: 0.6s; }
.cell-5 { animation-delay: 0.8s; }
.cell-6 { animation-delay: 1s; }
.cell-7 { animation-delay: 1.2s; }
.cell-8 { animation-delay: 1.4s; }
.cell-9 { animation-delay: 1.6s; }

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 0.2; }
  50% { transform: scale(1.4); opacity: 1; }
}

.center-icon {
  z-index: 2;
  filter: drop-shadow(0 0 8px rgba(0, 150, 255, 0.7));
}
</style>

