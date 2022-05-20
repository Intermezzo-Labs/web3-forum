<template>
  <div class="container mx-auto grid grid-cols-4 gap-8">
    <aside class="py-8">
      <AppTopicMenu class="sticky top-8" />
    </aside>
    <main class="col-span-2 py-8 grid gap-y-4">
      <PostTeaser v-for="n in 20" />
    </main>
    <aside class="py-8 flex flex-col gap-8">
      <UserCard v-for="n in 2" :key="`user-${n}`" />
      <PostStats v-for="n in 2" :key="`stat-${n}`" />
    </aside>
  </div>
</template>
