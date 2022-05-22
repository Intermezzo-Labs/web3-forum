<template>
  <div>
    <label class="sr-only" :for="String($attrs.id ?? '')">{{ label }}</label>

    <select
      v-model="modelValue"
      class="w-full p-4 text-sm border-gray-200 rounded-lg shadow-sm"
      v-bind="$attrs"
    >
      <option value="" selected disabled hidden>{{ label }}</option>
      <option v-for="option in options" :value="option.value">
        {{ option.text }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
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
  options: {
    type: Array as () => { text: string; value: any }[],
    default: () => [],
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
});
</script>
