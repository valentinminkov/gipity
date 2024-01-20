<template>
  <div class="previewContainer" :onclick="onMessageClick">
    <p class="previewTitle">{{ message.title }}</p>
  </div>
</template>


<script setup lang="ts">
import { defineProps } from 'vue'
import { Message } from 'components/types/db'

const { message } = defineProps<{
  message: Message;
}>();
const onMessageClick = () => {
  console.log('Message clicked!')
}
</script>

<style scoped lang="scss">
.previewContainer {
  border-radius: 0.5rem;

  &:hover {
    background-color: #f5f5f5;
  }

  .previewTitle {
    font-size: 1.2rem;
    cursor: pointer;
    margin: 0;
    padding: 0.5rem;

    font-size: .875rem;
    line-height: 1.25rem;
  }
}
</style>
