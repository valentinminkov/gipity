<template>
  <div class="q-px-md">
    <h5>Messages</h5>

    <MessagePreview v-for="message in messages" :message="message" :key="message.timestamp" />
  </div>
</template>


<script setup lang="ts">
import { defineProps } from 'vue'
import MessagePreview from 'components/MessagePreview.vue'
import { Message } from 'components/types/db'

const { messages } = defineProps<{
  messages: Message[];
}>();

</script>

<style scoped lang="scss"></style>
