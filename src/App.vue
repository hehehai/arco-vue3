<script setup lang="ts">
watchEffect(() => {
  if (isDark.value)
    document.documentElement.classList.add('dark')
  else
    document.documentElement.classList.remove('dark')
})
</script>

<template>
  <RouterView />
</template>
