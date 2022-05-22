<template>
  <nav class="flex flex-col space-y-1">
    <nuxt-link
      :to="`/r/${sub.name}`"
      v-for="sub in subreddits"
      active-class="!text-gray-700 !bg-gray-100"
      class="flex items-center px-4 py-2 text-gray-500 rounded-lg group hover:bg-gray-100 hover:text-gray-700"
    >
      <span class="ml-3 text-sm font-medium"> r/{{ sub.name }} </span>

      <span
        class="ml-auto shrink-0 rounded-full bg-gray-100 py-0.5 px-3 text-xs text-gray-600 group-hover:bg-gray-200 group-hover:text-gray-700"
      >
        {{ sub.id }}
      </span>
    </nuxt-link>
  </nav>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useSubredditStore } from "~~/store/subreddits";

const subredditStore = useSubredditStore();
await subredditStore.getSubreddits();
const { subreddits } = storeToRefs(subredditStore);
</script>
