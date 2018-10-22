<template>
  <div>
    <Headline>Colors</Headline>
      <div class="flex flex-wrap">
        <template v-for="(value, key) in designSystem.colors">
          <div 
            :key="`color-${key}`" 
            class="mr-4 mb-4 w-32">
            <div :class="`shadow w-100 h-32 rounded-lg mb-2 bg-${key}`"></div>
            <p class="font-bold text-xs tracking-wide uppercase text-grey-darker">{{ key }}</p>
          </div>
        </template>
      </div>

      <Headline>Font sizes</Headline>
      <div 
        v-for="(value, key) in designSystem.textSizes" 
        :key="`fontsize-${key}`"> 
        <Badge>
          {{ `.text-${key} (${value})` }}
        </Badge>
        <p :class="`mb-6 leading-tight text-${key}`">
          The quick brown fox jumps over the lazy dog
        </p>
      </div>

      <Headline>Font weights</Headline>
      <div 
        v-for="(value, key) in designSystem.fontWeights" 
        :key="`fontweight-${key}`">
        <Badge>
          {{ `.font-${key} (${value})` }}
        </Badge>
        <p :class="`font-mono mb-4 text-xl font-${key}`">
          The quick brown fox jumps over the lazy dog
        </p>
      </div>

      <Headline>Line heights</Headline>
      <div 
        v-for="(value, key) in designSystem.leading" 
        :key="`lineheight-${key}`" 
        class="w-1/3 inline-block align-top mr-8 mb-4">
        <Badge>
          {{ `.leading-${key} (${value})` }}
        </Badge>
        <p :class="`mt-2 mb-4 leading-${key}`">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, itaque? Modi voluptate eveniet consequatur recusandae sed ex quam earum et animi soluta asperiores magni doloremque, natus, doloribus delectus eaque repellendus!
        </p>
      </div>
  </div>
</template>

<script>
import TailwindConfig from '@/tailwind.config'
import Badge from '@/components/Badge'

export default {
  head: {
    title: 'Design Tokens',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'This page shows the different design tokens used in our design system. Colors, type scale, spacing scale. The good stuff!'
      }
    ]
  },
  components: {
    Badge
  },
  asyncData() {
    return {
      designSystem: TailwindConfig
    }
  }
}
</script>