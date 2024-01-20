<template>
  <div class="q-px-md">
    <div class="messagesContainer q-pt-md">
      <MessagePreview v-for="message in messages" :message="message" :key="message.timestamp" />
    </div>
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

<style scoped lang="scss">
.messagesContainer {
  display: flex;
  flex-direction: column-reverse;
  height: 100%;
  overflow-y: auto;
}
</style>
