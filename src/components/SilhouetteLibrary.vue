<script setup>
import { usePosterStore } from '../stores/poster.js'
import { silhouettes } from '../data/silhouettes.js'

const store = usePosterStore()
</script>

<template>
  <section>
    <h2 class="group-title">III · The Silhouette</h2>
    <div class="thumb-grid">
      <button v-for="s in silhouettes" :key="s.id" type="button" class="thumb"
              :class="{ 'is-active': store.silhouetteId === s.id }"
              @click="store.setSilhouette(s.id)">
        <svg viewBox="0 0 300 400" aria-hidden="true" v-html="s.body"></svg>
        <span>{{ s.name }}</span>
      </button>
    </div>
  </section>
</template>