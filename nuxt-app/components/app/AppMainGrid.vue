<template>
  <div class="container mx-auto grid md:grid-cols-4 gap-12 p-4">
    <main class="grid gap-y-4 md:col-span-2 content-start">
      <slot />
    </main>
    <aside class="md:order-first">
      <div class="sticky top-4">
        <AppTopicMenu class="mb-4" />
        <div class="text-xs text-slate-400 underline text-center">
          <nuxt-link to="/create"> Create new thread </nuxt-link>
        </div>
      </div>
    </aside>
    <aside class="flex flex-col gap-8 content-start">
      <UserCard />
      <ForumStats />
    </aside>
  </div>
</template>
