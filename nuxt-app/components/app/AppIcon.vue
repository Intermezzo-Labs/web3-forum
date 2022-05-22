<template>
  <span v-if="logo" v-html="logo.default"></span>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
const props = defineProps({
  name: { type: String, default: "", required: true },
});
const logo = ref();
onMounted(async () => {
  logo.value = await import(
    /* @vite-ignore */ `../../assets/icons/${props.name}`
  );
});
</script>

<style scoped>
:deep(svg) {
  @apply w-full h-full;
}
</style>
