<script setup>
import { usePosterStore } from '../stores/poster.js'

const store = usePosterStore()

const options = [
  { id: null,      name: 'Auto' },
  { id: 'morning', name: 'Dawn' },
  { id: 'day',     name: 'Highday' },
  { id: 'evening', name: 'Eventide' },
  { id: 'night',   name: 'Nightwatch' },
]

const icons = {
  auto:    '<circle cx="10" cy="10" r="6" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M10,4 a6,6 0 0 1 0,12 Z" fill="currentColor"/>',
  morning: '<path d="M3,14 h14 M6,14 a4,4 0 0 1 8,0 M10,7 v-3 M5,9 l-2,-2 M15,9 l2,-2" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>',
  day:     '<circle cx="10" cy="10" r="3.4" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M10,3 v2 M10,15 v2 M3,10 h2 M15,10 h2 M5,5 l1.4,1.4 M13.6,13.6 l1.4,1.4 M15,5 l-1.4,1.4 M6.4,13.6 l-1.4,1.4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>',
  evening: '<path d="M3,11 h14 M6,11 a4,4 0 0 0 8,0 M10,4 v2 M6,6 l-1.5,-1.5 M14,6 l1.5,-1.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>',
  night:   '<path d="M12.5,4 a6.5,6.5 0 1 0 3.5,12 a7,7 0 0 1 -3.5,-12 Z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><circle cx="15" cy="6" r=".9" fill="currentColor"/>',
}
</script>

<template>
  <section>
    <h2 class="group-title">II · The Hour</h2>
    <div class="phase-grid">
      <button v-for="o in options" :key="String(o.id)" type="button" class="phase-btn"
              :class="{ 'is-active': store.phaseOverride === o.id }"
              @click="store.setPhase(o.id)">
        <svg viewBox="0 0 20 20" aria-hidden="true" v-html="icons[o.id ?? 'auto']"></svg>
        {{ o.name }}
      </button>
    </div>
  </section>
</template>