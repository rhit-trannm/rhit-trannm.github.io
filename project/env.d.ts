/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// PrimeVue module declarations
declare module 'primevue/config'
declare module 'primevue/button'
declare module 'primevue/*'
