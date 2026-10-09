<script setup>
import { computed } from 'vue'
import { usePosterStore } from '../stores/poster.js'
import { palettes } from '../data/palettes.js'
import { silhouettes } from '../data/silhouettes.js'

const store = usePosterStore()
const pal = computed(() => palettes[store.phase])
const sil = computed(() => silhouettes.find(s => s.id === store.silhouetteId) ?? silhouettes[0])
</script>

<template>
  <svg id="poster-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 400" role="img"
       :aria-label="`Poster: ${store.city.name}, ${store.time}, ${pal.label}`"
       :style="{ color: pal.ink }">
    <rect width="300" height="400" :fill="pal.sky" />
    <rect x="10" y="10" width="280" height="380" fill="none" stroke="currentColor" stroke-width="1.5" />
    <rect x="16" y="16" width="268" height="368" fill="none" stroke="currentColor" stroke-width=".75" opacity=".55" />
    <g fill="none" stroke="currentColor" stroke-width="2" opacity=".8">
      <path d="M10,26 L10,10 L26,10" />
      <path d="M274,10 L290,10 L290,26" />
      <path d="M290,374 L290,390 L274,390" />
      <path d="M26,390 L10,390 L10,374" />
    </g>
    <circle cx="232" cy="70" r="36" :fill="pal.disc" />
    <text x="150" y="46" text-anchor="middle" fill="currentColor" font-size="13" letter-spacing="5"
          font-family="'IM Fell English SC', Georgia, serif">{{ store.city.country }}</text>
    <text x="272" y="34" text-anchor="middle" fill="currentColor" font-size="12" opacity=".75"
          font-family="'IM Fell English', Georgia, serif">{{ store.time }}</text>
    <g :key="sil.id" class="art-swap" v-html="sil.body"></g>
    <text x="150" y="374" text-anchor="middle" fill="currentColor" font-size="36" letter-spacing="2"
          font-family="'Grenze Gotisch', Georgia, serif" font-weight="700">{{ store.city.name }}</text>
    <path d="M112,388 h76" fill="none" stroke="currentColor" stroke-width="2" />
    <rect x="147" y="385" width="6" height="6" fill="currentColor" transform="rotate(45 150 388)" />
  </svg>
</template>