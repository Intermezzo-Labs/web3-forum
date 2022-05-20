<template>
  <article class="bg-white border-2 border-gray-100 rounded">
    <div class="flex items-start p-6">
      <router-link :to="`/u/${post.author_name}`" class="block shrink-0">
        <img
          src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          alt="User Avatar"
          class="object-cover rounded-lg h-14 w-14"
        />
      </router-link>

      <div class="ml-4">
        <strong class="font-medium sm:text-lg">
          <nuxt-link
            :to="`/r/${post.subreddit_name}/comments/${post.id}`"
            class="hover:underline"
          >
            {{ post.title }}</nuxt-link
          >
        </strong>

        <p class="text-sm text-gray-700 line-clamp-2">
          {{ post.body }}
        </p>

        <div class="mt-2 sm:flex sm:items-center sm:gap-2">
          <div class="flex items-center text-gray-500">
            <p class="ml-1 text-xs">{{ post.number_of_comments }} comments</p>
          </div>

          <span class="hidden sm:block" aria-hidden="true">&middot;</span>

          <p class="hidden sm:block sm:text-xs sm:text-gray-500">
            Posted by
            <router-link
              :to="`/u/${post.author_name}`"
              class="font-medium underline hover:text-gray-700"
              >{{ post.author_name }}</router-link
            >
          </p>
        </div>
      </div>
    </div>

    <div class="flex justify-end">
      <strong
        class="-mr-[2px] -mb-[2px] inline-flex items-center gap-1 rounded-tl-xl rounded-br-xl bg-green-600 py-1.5 px-3 text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        </svg>

        <span class="text-[10px] font-medium sm:text-xs">Solved!</span>
      </strong>
    </div>
  </article>
</template>

<script lang="ts" setup>
defineProps({
  post: {
    type: Object,
    default: () => ({}),
    required: true,
  },
});
</script>
