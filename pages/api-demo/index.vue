<template>
  <div>
    <Headline>API demo</Headline>
    <p class="max-w-md text-lg text-indigo-darker">
      This page is a demo of how content can be fetched from an API and stored into the "data" object in our page Vue instance. The following data comes from the JSON Placeholder API, using the <a href="https://jsonplaceholder.typicode.com/users">users</a> endpoint.
    </p>

    <div class="flex flex-wrap my-8">
      <div v-for="user in users" :key="user.id">
        <div class="w-64 bg-white px-8 py-4 mr-4 mb-4 shadow rounded">
          <h2 class="text-base text-indigo-dark">{{ user.name }}</h2>
          <p class="text-sm text-grey-dark">{{ user.company.name }}</p>
          <hr class="border-t border-grey-lighter mt-2 mb-2">
          <p class="mb-1"><a href="#" class="lowercase text-sm text-indigo border-b border-sm no-underline border-indigo-lighter">{{ user.email }}</a></p>
          <p class="text-sm text-indigo">&rarr; <a href="#" class="text-sm text-indigo lowercase border-b border-sm no-underline border-indigo-lighter">{{ user.website }}</a></p>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Headline from '@/components/Headline'

export default {
  components: {
    Headline
  },
  asyncData() {
    return axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        return {
          users: response.data
        }
      })
      .catch(error => console.log('error', error))
    return {
      hello: 'world'
    }
  }
}
</script>