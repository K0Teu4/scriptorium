<script setup>
import { useCitySearch } from '../composables/useCitySearch.js'
import { usePosterStore } from '../stores/poster.js'
import { cities } from '../data/cities.js'

const { query, results } = useCitySearch()
const store = usePosterStore()
const quick = ['London', 'Tokyo', 'Rome']

function pick(city) { store.setCity(city); query.value = '' }
function pickName(name) { const c = cities.find(x => x.name === name); if (c) pick(c) }
</script>

<template>
  <section>
    <h2 class="group-title">I · The City</h2>
    <div class="relative">
      <input id="city" v-model="query" class="input" autocomplete="off"
             placeholder="Seek a city… e.g. Istanbul" aria-label="Search city" />
      <ul v-if="results.length" class="menu">
        <li v-for="c in results" :key="c.tz">
          <button type="button" class="menu-item" @click="pick(c)">
            {{ c.name }} <small>{{ c.tz }}</small>
          </button>
        </li>
      </ul>
    </div>
    <div class="chips">
      <button v-for="n in quick" :key="n" type="button" class="chip" @click="pickName(n)">{{ n }}</button>
    </div>
  </section>
</template>