<template>
  <main>
    <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
      <form
        action=""
        class="max-w-md mx-auto mt-8 mb-0 space-y-4"
        @submit.prevent="handleLogin"
      >
        <AppFormInput
          id="email"
          v-model="email"
          icon-name="email"
          label="Email"
          placeholder="Enter email"
        />
        <AppFormInput
          id="password"
          v-model="pass"
          type="password"
          icon-name="eye"
          placeholder="Enter password"
        />

        <div class="flex items-center justify-between">
          <p class="text-sm text-gray-500">
            No account?
            <nuxt-link class="underline" to="/register">Sign up</nuxt-link>
          </p>
          <AppButton
            type="submit"
            class="inline-block px-5 py-3 ml-3 text-sm font-medium text-white bg-blue-500 rounded-lg"
          >
            Sign in
          </AppButton>
        </div>
      </form>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useUserStore } from "@/store/user";

const email = ref();
const pass = ref();

const store = useUserStore();
const handleLogin = () => {
  store.login(email.value, pass.value);
};
</script>
