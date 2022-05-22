<template>
  <main>
    <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
      <form
        action=""
        class="max-w-md mx-auto mt-8 mb-0 space-y-4"
        @submit.prevent="handleCreate"
      >
        <AppFormInput
          id="name"
          v-model="form.name"
          label="Subreddit name"
          placeholder="Enter name"
          :errors="v$.name.$errors"
        />
        <div>
          <textarea
            v-model="form.description"
            placeholder="Enter description (optional)"
            class="form-input w-full p-4 text-sm border-gray-200 rounded-lg shadow-sm"
          ></textarea>
        </div>
        <div>
          <AppButton type="submit" :disabled="v$.$invalid">
            Create topic
          </AppButton>
        </div>
      </form>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { useSubredditStore, ISubreddit } from "~~/store/subreddits";
import useVuelidate from "@vuelidate/core";
import { required, alphaNum } from "@vuelidate/validators";
import { useUserStore } from "~~/store/user";
import { storeToRefs } from "pinia";

const user = useUserStore();
const { token } = storeToRefs(user);

const form = reactive({
  name: "",
  description: "",
});
const rules = {
  name: { required, alphaNum },
  description: {},
};
const v$ = useVuelidate(rules, form, { $autoDirty: true });

const handleCreate = async () => {
  v$.value.$validate();
  if (!v$.value.$invalid) {
    try {
      const { data } = await useFetch<ISubreddit>(
        "http://localhost:5000/subreddits",
        {
          method: "POST",
          body: form,
          headers: {
            Authorization: token.value,
          },
        }
      );
      if (data) {
        const subredditStore = useSubredditStore();
        subredditStore.$patch((state) => state.subreddits.push(data.value));
      }
    } catch (error) {
      console.log("save subreddit failed", error);
    }
  }
};
</script>
