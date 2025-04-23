<template>
  <v-card
    class="dropzone"
    :class="{ 'drop-active': isDragging }"
    elevation="4"
    @dragover.prevent="handleDragOver"
    @dragleave="handleDragLeave"
    @drop.prevent="handleDrop"
  >
    <div class="content">
      <v-icon
        class="upload-icon"
        size="64"
        :class="{ 'icon-animate': isDragging }"
      >
        mdi-cloud-upload
      </v-icon>
      <div class="text">
        {{ isDragging ? 'Drop your files here!' : 'Upload your pitch deck with drag and drop!' }}
      </div>
      <v-btn
        class="mt-4 upload-btn"
        color="primary"
        size="large"
        variant="tonal"
        @click="triggerFileDialog"
      >
        Browse Files
      </v-btn>
      <input
        ref="fileInput"
        type="file"
        class="d-none"
        accept="application/pdf"
        @change="handleFileChange"
      />
    </div>
  </v-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const isDragging = ref(false)
const fileInput = ref<HTMLInputElement | null>(null)

const emit = defineEmits<{
  (e: 'upload', file: File): void
}>()

function handleDragOver() {
  isDragging.value = true
}

function handleDragLeave() {
  isDragging.value = false
}

function handleDrop(event: DragEvent) {
  isDragging.value = false
  if (event.dataTransfer?.files) {
    const files = Array.from(event.dataTransfer.files)
    emit('upload', files[0])
  }
}

function triggerFileDialog() {
  fileInput.value?.click()
}

function handleFileChange(event: Event) {
  const target = event.target as HTMLInputElement
  if (target.files) {
    const files = Array.from(target.files)
    emit('upload', files[0])
    target.value = ''
  }
}
</script>

<style scoped>
.dropzone {
  height: 500px;
  border: 2px dashed #ccc;
  border-radius: 16px;
  background: linear-gradient(135deg, #f5f5f5, #fafafa);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  cursor: pointer;
}

.dropzone:hover {
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.05);
}

.drop-active {
  background: linear-gradient(135deg, #e3f2fd, #f0faff);
  box-shadow: 0 0 16px rgba(33, 150, 243, 0.3);
}

.content {
  text-align: center;
}

.upload-icon {
  transition: transform 0.3s ease;
}

.icon-animate {
  transform: scale(1.2) rotate(5deg);
}

.text {
  font-size: 18px;
  font-weight: 500;
  margin-top: 12px;
}

.upload-btn {
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
</style>
