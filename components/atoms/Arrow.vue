<template>
    <div class="relative flex flex-col items-center">
      <div class="triangle"></div>
    </div>
  </template>
  
  <script lang="ts" setup>
  // If you need any props, define them here
  </script>
  
  <style scoped>
  .triangle {
    position: absolute;
    bottom: -6px; /* Adjust this value based on the size of your triangle */
    width: 0px;
    height: 0px;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid black; /* Use the same color as the gradient's end color */
  }
  </style>