<template>
    <div class="flex justify-center items-center space-x-2">
      <button
        class="w-[35px] h-[35px] flex items-center justify-center border rounded-full text-purple-500 hover:bg-gray-200 disabled:opacity-50 shadow-lg"
        :disabled="currentPage === 1"
        @click="changePage(currentPage - 1)"
      >
        &lt;
      </button>
      
      <button
        v-for="page in pages"
        :key="page"
        :class="['w-[35px] h-[35px] flex items-center justify-center border text-purple-500 hover:bg-gray-200 rounded-full shadow-lg', { 'bg-gray-300': page === currentPage }]"
        @click="changePage(page)"
      >
        {{ page }}
      </button>
      
      <span v-if="totalPages > maxVisiblePages" class="flex items-center">...</span>
      <button
        class="w-[35px] h-[35px] flex items-center justify-center border rounded-full text-purple-500 hover:bg-gray-200 shadow-lg"
        v-if="totalPages > maxVisiblePages"
        @click="changePage(totalPages)"
      >
        {{ totalPages }}
      </button>
      
      <button
        class="w-[35px] h-[35px] flex items-center justify-center border rounded-full shadow-lg text-purple-500 hover:bg-gray-200 disabled:opacity-50"
        :disabled="currentPage === totalPages"
        @click="changePage(currentPage + 1)"
      >
        &gt;
      </button>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref, computed } from 'vue';
  
  const props = defineProps<{
    currentPage: number,
    totalPages: number,
  }>();
  
  const emit = defineEmits(['updatePage']);
  
  const maxVisiblePages = 4; // Maximum number of visible pages before showing ...
  
  const pages = computed(() => {
    if (props.totalPages <= maxVisiblePages) {
      return Array.from({ length: props.totalPages }, (_, i) => i + 1);
    } else {
      return Array.from({ length: maxVisiblePages }, (_, i) => i + 1);
    }
  });
  
  const changePage = (page: number) => {
    if (page >= 1 && page <= props.totalPages) {
      emit('updatePage', page);
    }
  };
  </script>
  
  <style scoped>
  button:disabled {
    cursor: not-allowed;
  }
  </style>