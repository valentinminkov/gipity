<template>
  <div class="q-pa-md">
    <h2>{{ message.title }}</h2>
    <p>{{ message.text }}</p>
  </div>
</template>


<script setup lang="ts">
import { defineProps } from 'vue'
import { Message } from 'components/types/db'

const { message } = defineProps<{
  message: Message;
}>();

</script>

<style scoped lang="scss"></style>
