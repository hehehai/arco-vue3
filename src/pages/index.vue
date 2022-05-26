<script setup lang="ts">
import logo from '~/assets/arco.svg'

const user = useUserStore()
const name = $ref(user.savedName)

const router = useRouter()
const go = () => {
  if (name)
    router.push(`/hi/${encodeURIComponent(name)}`)
}

const { t } = useI18n()
</script>

<template>
  <div>
    <div text-4xl mb-3>
      <a-image :width="100" :preview="false" :src="logo" />
    </div>
    <a-typography-paragraph>
      <a-link rel="noreferrer" href="https://arco.design/vue" target="_blank">
        Arco Vue
      </a-link>
    </a-typography-paragraph>
    <a-typography-text opacity-75>
      <em text-sm opacity-75>{{ t('intro.desc') }}</em>
    </a-typography-text>

    <div mt-8>
      <a-input
        id="input"
        v-model="name"
        :placeholder="t('intro.whats-your-name')"
        :aria-label="t('intro.whats-your-name')"
        :style="{ width: '250px' }"
        @keydown.enter="go"
      />
      <div mt-3>
        <a-button
          type="primary"
          :disabled="!name"
          @click="go"
        >
          {{ t('button.go') }}
        </a-button>
      </div>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
