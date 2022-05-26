<script setup lang="ts">
const props = defineProps<{
  initial: number
}>()

const { count, inc, dec } = useCounter(props.initial)
</script>

<template>
  <div>
    {{ count }}
    <a-button class="inc" @click="inc()">
      +
    </a-button>
    <a-button class="dec" @click="dec()">
      -
    </a-button>
  </div>
</template>
