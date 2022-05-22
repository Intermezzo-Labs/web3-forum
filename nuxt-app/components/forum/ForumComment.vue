<template>
  <article class="bg-white border-2 border-gray-100 rounded">
    <div class="flex items-start p-6">
      <nuxt-link :to="`/u/${comment.author_name}`" class="block shrink-0">
        <img
          src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          alt="User Avatar"
          class="object-cover rounded-lg h-14 w-14"
        />
      </nuxt-link>

      <div class="ml-4">
        <p class="text-sm text-gray-700">
          {{ comment.body }}
        </p>

        <div class="mt-2 sm:flex sm:items-center sm:gap-2">
          <div class="flex items-center text-gray-500">
            <p class="ml-1 text-xs">{{ comment.votes }} comments</p>
          </div>
        </div>
      </div>
    </div>
    <ForumComment
      v-for="childComment in comment.children"
      :comment="childComment"
    />
  </article>
</template>

<script lang="ts" setup>
defineProps({
  comment: {
    type: Object,
    default: () => ({}),
    required: true,
  },
});
</script>
