<template>
  <AppMainGrid>
    <div class="grid gap-8">
      <ForumPost :post="data.post" />
      <hr />
      <ForumComment
        v-for="comment in getCommentsWithChildren"
        :comment="comment"
      />
    </div>
  </AppMainGrid>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";

const route = useRoute();
const { data, pending, error, refresh } = await useAsyncData(
  `comment-${route.params.id}`,
  () => $fetch(`http://localhost:5000/comments/${route.params.id}`)
);

const getCommentsWithChildren = computed(() => {
  if (!data.value.comments?.length) return [];
  const commentsWithChildren = data.value.comments.map((comment) => ({
    ...comment,
    children: [],
  }));
  commentsWithChildren.forEach((childComment) => {
    const { parent_comment_id } = childComment;
    if (parent_comment_id) {
      const parent = commentsWithChildren.find(
        (comment) => parent_comment_id === comment.id
      );
      parent.children = parent.children.concat(childComment);
    }
  });
  return commentsWithChildren.filter(
    ({ parent_comment_id, body, children }) =>
      parent_comment_id === null && (body !== null || children.length > 0)
  );
});
</script>
