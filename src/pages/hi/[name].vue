<script setup lang="ts">
const props = defineProps<{ name: string }>()
const router = useRouter()
const user = useUserStore()
const { t } = useI18n()

watchEffect(() => {
  user.setNewName(props.name)
})
</script>

<template>
  <div>
    <div text-4xl mb-3>
      <div i-carbon-pedestrian inline-block />
    </div>
    <a-typography-paragraph>
      {{ t('intro.hi', { name: props.name }) }}
    </a-typography-paragraph>

    <a-typography-text opacity-75>
      <em>{{ t('intro.dynamic-route') }}</em>
    </a-typography-text>

    <template v-if="user.otherNames.length">
      <p text-sm mt-4>
        <span opacity-75>{{ t('intro.aka') }}:</span>
        <ul>
          <li v-for="otherName in user.otherNames" :key="otherName">
            <router-link :to="`/hi/${otherName}`" replace>
              {{ otherName }}
            </router-link>
          </li>
        </ul>
      </p>
    </template>

    <div mt-3>
      <a-button
        type="primary"
        @click="router.back()"
      >
        {{ t('button.back') }}
      </a-button>
    </div>
  </div>
</template>
