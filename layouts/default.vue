<template>
  <div class="h-screen leading-normal font-sans bg-blue-lightest flex">
    <div class="w-64 bg-indigo-dark">
      <Navigation/>
    </div>

    <div class="w-screen max-h-full overflow-y-scroll">
      <div class="max-w-xl pl-16">
        <nuxt/>
      </div>
    </div>
    
  </div>
</template>

<script>
import Navigation from '@/components/navigation'

export default {
  components: {
    Navigation
  }
}
</script>