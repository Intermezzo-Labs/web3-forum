<template>
  <div class="container mx-auto md:grid grid-cols-4 gap-8">
    <aside class="py-8">
      <AppTopicMenu class="sticky top-8" />
    </aside>
    <main class="py-8 grid gap-y-4 md:col-span-2 content-start">
      <slot />
    </main>
    <aside class="py-8 flex flex-col gap-8 content-start">
      <UserCard v-for="n in 2" />
      <ForumStats v-for="n in 2" />
    </aside>
  </div>
</template>
