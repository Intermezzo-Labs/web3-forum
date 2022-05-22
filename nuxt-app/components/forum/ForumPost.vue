<template>
  <article class="bg-white border-2 border-gray-100 rounded">
    <div class="flex items-start p-6">
      <nuxt-link :to="`/u/${post.author_name}`" class="block shrink-0">
        <img
          src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          alt="User Avatar"
          class="object-cover rounded-lg h-14 w-14"
        />
      </nuxt-link>

      <div class="ml-4">
        <strong class="font-medium sm:text-lg">
          <nuxt-link
            :to="`/r/${post.subreddit_name}/comments/${post.id}`"
            class="hover:underline"
          >
            {{ post.title }}</nuxt-link
          >
        </strong>

        <p class="text-sm text-gray-700" :class="{ 'line-clamp-2': teaser }">
          {{ post.body }}
        </p>

        <div class="mt-2 sm:flex sm:items-center sm:gap-2">
          <template v-if="teaser">
            <div class="flex items-center text-gray-500">
              <p class="ml-1 text-xs leading-4 flex gap-1">
                <AppIcon name="comments" class="h-4 w-4" />
                {{ post.number_of_comments }} comments
              </p>
            </div>

            <span class="hidden sm:block" aria-hidden="true">&middot;</span>
          </template>

          <p class="hidden sm:block sm:text-xs sm:text-gray-500">
            Posted by
            <nuxt-link
              :to="`/u/${post.author_name}`"
              class="font-medium underline hover:text-gray-700"
              >{{ post.author_name }}</nuxt-link
            >
          </p>
        </div>
      </div>
    </div>

    <div class="flex justify-end">
      <strong
        class="-mr-[2px] -mb-[2px] inline-flex items-center gap-1 rounded-tl-xl rounded-br-xl bg-green-600 py-1.5 px-3 text-white"
      >
        <AppIcon name="checkmark" class="h-4" />
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
  teaser: {
    type: Boolean,
    default: false,
    required: false,
  },
});
</script>
