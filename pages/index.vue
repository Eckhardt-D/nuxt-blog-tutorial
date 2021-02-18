<template>
  <div class="container">
    <ul>
      <li v-for="post in posts" :key="post.id">
        <h1>{{ post.title }}</h1>
        <div v-html="post.body"/>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Home',
  computed: {
    ...mapState(['posts'])
  }
}
</script>

<style>

</style>