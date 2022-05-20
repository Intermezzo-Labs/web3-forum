<template>
  <div>
    <AppBanner />
    <div class="container mx-auto md:grid grid-cols-4 gap-8">
      <aside class="py-8">
        <AppTopicMenu class="sticky top-8" />
      </aside>
      <main class="py-8 grid gap-y-4 md:col-span-2 content-start">
        <PostTeaser v-for="post in posts" :post="post" />
      </main>
      <aside class="py-8 flex flex-col gap-8 content-start">
        <UserCard v-for="n in 2" />
        <PostStats v-for="n in 2" />
      </aside>
    </div>
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
