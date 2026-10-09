<script setup>
import { computed } from 'vue'
import { usePosterStore } from './stores/poster.js'
import { palettes } from './data/palettes.js'
import PosterCanvas from './components/PosterCanvas.vue'
import CityInput from './components/CityInput.vue'
import PalettePicker from './components/PalettePicker.vue'
import SilhouetteLibrary from './components/SilhouetteLibrary.vue'
import ExportButtons from './components/ExportButtons.vue'

const store = usePosterStore()
const phaseLabel = computed(() => palettes[store.phase].label)
</script>

<template>
  <div class="sheet">
    <header class="masthead">
      <div>
        <p class="overline">Scriptorium · MMXXVI</p>
        <h1>Poster Factory</h1>
        <p class="lede">Every sheet keeps the true hour of its city. Choose a town across the
          realm, and the press will strike a living poster — sun, moon and all — in the colours
          of its present moment.</p>
      </div>
      <div class="masthead-seal" aria-hidden="true">❦</div>
    </header>

    <main class="workbench">
      <section class="press">
        <div class="frame">
          <PosterCanvas />
        </div>
        <div class="label">
          <div><strong>{{ store.city.name }}</strong> · {{ store.city.country }}</div>
          <div class="label-hour">{{ store.time }} — {{ phaseLabel }}</div>
        </div>
      </section>

      <aside class="panel">
        <CityInput />
        <PalettePicker />
        <SilhouetteLibrary />
        <ExportButtons />
      </aside>
    </main>

    <footer class="colophon">
      <p class="fleuron">· ❦ ·</p>
      <p>Set in Grenze Gotisch &amp; IM Fell English. Wrought by hand upon Vue 3, Vite and Pinia.</p>
    </footer>
  </div>
</template>