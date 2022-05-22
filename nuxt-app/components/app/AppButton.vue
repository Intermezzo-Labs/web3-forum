<template>
  <button
    class="inline-flex gap-2 justify-center items-center px-8 py-3 text-white border border-indigo-600 rounded active:text-indigo-500 focus:outline-none focus:ring"
    :class="{
      'text-white bg-indigo-600 hover:bg-transparent hover:text-indigo-600':
        !isOutlined,
      'text-indigo-600 hover:bg-indigo-600 hover:text-white': isOutlined,
    }"
  >
    <span class="text-sm font-medium">
      <slot />
    </span>
    <AppIcon v-if="iconName" :name="iconName" class="h-5" />
  </button>
</template>

<script lang="ts" setup>
defineProps({
  isOutlined: {
    type: Boolean,
    default: false,
    required: false,
  },
  iconName: {
    type: String,
    default: "",
    required: false,
  },
});
</script>
