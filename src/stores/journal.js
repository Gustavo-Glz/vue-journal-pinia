import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useJournalStore = defineStore('journal', () => {
  // State
  const isLoading = ref(true)
  const entries = ref([
    { 
      id: new Date().gateTime(),
      date: new Date().toDateString(),
      text: 'Ipsum anim enim fugiat eu sint.',
      picture: null
    },
    { 
      id: new Date().gateTime() + 100,
      date: new Date().toDateString(),
      text: 'Ea anim excepteur sit excepteur.',
      picture: null
    },
    { 
      id: new Date().gateTime() + 200,
      date: new Date().toDateString(),
      text: 'Nisi veniam et esse mollit consectetur dolor irure deserunt veniam incididunt ullamco.',
      picture: null
    }
  ])
  // Getters
  const getEntriesByTerm = computed(() => { })
  const getEntryById = computed(() => { })

  // Actions
  const loadEntries = () => { }
  const updateEntry = () => { }
  const createEntry = () => { }

  return { 
    isLoading, 
    entries, 
    loadEntries, 
    updateEntry, 
    createEntry, 
    getEntriesByTerm, 
    getEntryById }
})