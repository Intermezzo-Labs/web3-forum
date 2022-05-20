<template>
  <div>
    <AppBanner />
    <AppMainGrid>
      <ForumPost teaser v-for="post in posts" :post="post" />
    </AppMainGrid>
  </div>
</template>

<script lang="ts" setup>
const {
  data: posts,
  pending,
  error,
  refresh,
} = await useAsyncData("posts", () => $fetch("http://localhost:5000/posts"));
</script>
