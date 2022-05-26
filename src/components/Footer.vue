<script setup lang="ts">
const { t, availableLocales, locale } = useI18n()

const toggleLocales = () => {
  // change to some real logic
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}
</script>

<template>
  <a-space size="large" text-xl mt-10>
    <RouterLink class="icon-btn" to="/" :title="t('button.home')">
      <div i-carbon-campsite />
    </RouterLink>

    <div class="icon-btn !outline-none cursor-pointer" :title="t('button.toggle_dark')" @click="toggleDark()">
      <icon-moon-fill v-if="isDark.value" />
      <icon-sun-fill v-else />
    </div>

    <a class="icon-btn cursor-pointer" :title="t('button.toggle_langs')" @click="toggleLocales()">
      <div i-carbon-language />
    </a>

    <RouterLink class="icon-btn" to="/about" :title="t('button.about')">
      <div i-carbon-dicom-overlay />
    </RouterLink>

    <a class="icon-btn" rel="noreferrer" href="https://github.com/hehehai/arco-vue3" target="_blank" title="GitHub">
      <div i-carbon-logo-github />
    </a>
  </a-space>
</template>
