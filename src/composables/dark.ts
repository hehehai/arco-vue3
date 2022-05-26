// these APIs are auto-imported from @vueuse/core
export const isDark = useDark({
  selector: 'body',
  attribute: 'arco-theme',
  valueDark: 'dark',
  valueLight: 'light',
  storageKey: 'arco-theme',
})

export const toggleDark = useToggle(isDark)
export const preferredDark = usePreferredDark()
