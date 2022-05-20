<template>
  <div class="container mx-auto grid grid-cols-4 gap-8 py-8">
    <main class="col-span-3">
      <h1 class="text-2xl font-bold mb-8">{{ $route.params.name }}</h1>
      <div class="grid gap-4">
        <PostTeaser v-for="post in posts" :post="post" />
      </div>
    </main>
    <aside>other suff</aside>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";

const route = useRoute();
const {
  data: posts,
  pending,
  error,
  refresh,
} = await useAsyncData(`posts-${route.params.name}`, () =>
  $fetch(`http://localhost:5000/posts?subreddit=${route.params.name}`)
);
</script>
