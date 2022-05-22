<template>
  <div>
    <label :for="String($attrs.id ?? '')" class="sr-only">{{ label }}</label>

    <div class="relative">
      <input
        type="text"
        v-bind="$attrs"
        v-model="modelValue"
        class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
      />
      <span class="absolute inset-y-0 inline-flex items-center right-4">
        <AppIcon
          v-if="iconName"
          :name="iconName"
          class="w-5 h-5 text-gray-400"
        />
      </span>
    </div>
    <div
      v-if="errors && errors.length"
      class="list-disc text-xs text-red-400 p-2"
    >
      <p v-for="error in errors">{{ error.$message }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { ErrorObject } from "@vuelidate/core";

export default defineComponent({
  inheritAttrs: false,
});
</script>
<script lang="ts" setup>
defineProps({
  modelValue: {
    type: [String, Number, undefined],
    default: "",
    required: true,
  },
  iconName: {
    type: String,
    default: "",
    required: false,
  },
  label: {
    type: String,
    default: "",
    required: false,
  },
  errors: {
    type: Array as () => ErrorObject[],
    default: () => [],
    required: false,
  },
});
</script>
