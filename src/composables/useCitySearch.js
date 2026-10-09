import { ref, computed } from 'vue'
import { cities } from '../data/cities.js'

export function useCitySearch() {
  const query = ref('')
  const results = computed(() => {
    const q = query.value.trim().toLowerCase()
    if (!q) return []
    return cities.filter(c => c.name.toLowerCase().includes(q)).slice(0, 8)
  })
  return { query, results }
}