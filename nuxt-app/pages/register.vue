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
          id="email"
          v-model="user"
          type="email"
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
        <AppFormInput
          id="password-confirm"
          v-model="passConfirm"
          type="password"
          icon-name="eye"
          placeholder="Confirm password"
        />

        <div class="flex items-center justify-between">
          <p class="text-sm text-gray-500">
            Already have an account?
            <nuxt-link class="underline" to="/login">Sign in</nuxt-link>
          </p>

          <button
            type="submit"
            class="inline-block px-5 py-3 ml-3 text-sm font-medium text-white bg-blue-500 rounded-lg"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useUserStore } from "~~/store/user";
const user = ref();
const pass = ref();
const passConfirm = ref();
const store = useUserStore();
const handleRegister = () => {
  if (pass.value === passConfirm.value) {
    store.register(user.value, pass.value);
  }
};
</script>
