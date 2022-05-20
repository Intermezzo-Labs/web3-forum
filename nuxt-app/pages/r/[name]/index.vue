<template>
  <AppMainGrid>
    <ForumPost teaser v-for="post in posts" :post="post" />
  </AppMainGrid>
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
