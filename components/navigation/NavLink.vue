<template>
  <li class="border-b border-indigo hover:bg-indigo">
    <nuxt-link class="py-4 px-6 text-white font-semibold no-underline block hover:cursor-pointer" :to="to">
      <slot/>
    </nuxt-link>
  </li>
</template>

<script>
export default {
  props: {
    to: String
  }
}
</script>