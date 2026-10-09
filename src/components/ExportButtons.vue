<script setup>
import { useExport } from '../composables/useExport.js'

const { downloadSvg, downloadPng } = useExport('#poster-svg')
</script>

<template>
  <section>
    <h2 class="group-title">IV · The Seal</h2>
    <div class="flex gap-3">
      <button type="button" class="btn btn-seal flex-1" title="Download poster as PNG"
              @click="downloadPng()">Strike the PNG seal</button>
      <button type="button" class="btn flex-1" title="Download poster as SVG"
              @click="downloadSvg()">Take the SVG scroll</button>
    </div>
  </section>
</template>