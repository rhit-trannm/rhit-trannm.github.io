<script setup lang="ts">
import WelcomeItem from '@/components/WelcomeItem.vue'
</script>

<template>
  <main class="min-h-screen bg-gray-100 py-12 px-4">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-4xl font-bold text-center text-gray-900 mb-8">Welcome to Your Vue.js App</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <WelcomeItem
          title="Tailwind CSS"
          description="A utility-first CSS framework packed with classes that can be composed to build any design, directly in your markup."
          buttonText="Learn More"
        />
        <WelcomeItem
          title="PrimeVue"
          description="The ultimate collection of design-agnostic, flexible and accessible Vue UI Components."
          buttonText="Explore Components"
        />
      </div>
    </div>
  </main>
</template>
