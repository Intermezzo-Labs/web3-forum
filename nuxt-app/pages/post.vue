<template>
  <main>
    <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
      <div class="max-w-lg mx-auto text-center">
        <p class="mt-4 text-gray-500">Register a new user account.</p>
      </div>

      <form
        action=""
        class="max-w-md mx-auto mt-8 mb-0 space-y-4"
        @submit.prevent="handleRegister"
      >
        <AppFormInput
          id="title"
          v-model="title"
          label="Title"
          placeholder="Enter title"
        />
        <div>
          <button
            type="submit"
            class="inline-block px-5 py-3 ml-3 text-sm font-medium text-white bg-blue-500 rounded-lg"
          >
            Create topic
          </button>
        </div>
      </form>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { ref } from "vue";
import { useSubredditStore } from "~~/store/posts";

enum PostType {
  Text,
  Link,
}

const subredditStore = useSubredditStore();
const { subreddits } = storeToRefs(subredditStore);
const subredditOptions = computed(() =>
  subreddits.value.map((s) => ({
    text: s.name,
    value: s.id,
  }))
);
if (!subreddits.value.length) {
  await subredditStore.getSubreddits();
}

const postType = ref<PostType>();
const title = ref();
const body = ref();
const subreddit = ref();
const handleRegister = () => {
  //
};
</script>
