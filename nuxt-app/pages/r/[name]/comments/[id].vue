<template>
  <div class="container mx-auto grid grid-cols-4 gap-8 py-8">
    <main class="col-span-3">
      <h1 class="text-2xl font-bold mb-8">{{ data.post.title }}</h1>
      <div>
        <!-- <div v-hmtl="data.post.body"></div> -->
        <pre>{{ data }}</pre>
      </div>
    </main>
    <aside>other suff</aside>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";

const route = useRoute();
const { data, pending, error, refresh } = await useAsyncData(
  `comment-${route.params.id}`,
  () => $fetch(`http://localhost:5000/comments/${route.params.id}`)
);
</script>
