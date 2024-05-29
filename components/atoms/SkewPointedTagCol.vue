<template>
  <div class="relative flex items-center justify-center">
    <div class="parallelogram bg-gradient-to-r flex items-center justify-center w-full h-full" :style="{
      background: `linear-gradient(to right, ${firstcolor}, ${endcolor})`
    }">
      <span class="text text-center text-white text-[14px]">{{ text1 }}<br />{{ text2 }}</span>
    </div>
    <div class="triangle" :style="{
      borderTopColor: middlecolor
    }"></div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  firstcolor: {
    type: String,
    required: true,
    default: '#7799FF'
  },
  endcolor: {
    type: String,
    required: true,
    default: '#77DDFF'
  },
  middlecolor: {
    type: String,
    required: true,
    default: '#77BCFF'
  },
  text1: {
    type: String,
    required: true,
  },
  text2: {
    type: String,
    required: true,
  }
});
</script>

<style scoped>
.parallelogram {
  @apply -skew-x-25;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.triangle {
  position: absolute;
  bottom: -5px;
  /* Adjust based on your needs */
  left: 50%;
  transform: translateX(-50%);
  /* Compensate for the skew o  f the parallelogram */
  width: 0px;
  height: 0px;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid;
}

.parallelogram .text {
  transform: skewX(25deg);
}
</style>