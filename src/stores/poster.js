import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { cities } from '../data/cities.js'
import { phaseOf, cityTime } from '../composables/useTimezone.js'

export const usePosterStore = defineStore('poster', () => {
  const city = ref(cities[0])
  const silhouetteId = ref('bigben')
  const phaseOverride = ref(null)
  const now = ref(new Date())
  setInterval(() => { now.value = new Date() }, 1000)

  const phase = computed(() => phaseOverride.value ?? phaseOf(now.value, city.value.tz))
  const time = computed(() => cityTime(now.value, city.value.tz))

  return {
    city, silhouetteId, phaseOverride, phase, time,
    setCity: (c) => { city.value = c },
    setSilhouette: (id) => { silhouetteId.value = id },
    setPhase: (p) => { phaseOverride.value = p },
  }
})