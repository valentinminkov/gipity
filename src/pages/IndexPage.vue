<template>
  <q-page class="column items-center justify-end">
    <MessageSection :placeholder="dummyPlaceholder" active></MessageSection>
  </q-page>
</template>

<script lang="ts" setup>
import MessageSection from 'components/MessageSection.vue';
import { ref } from 'vue'

const dummyPlaceholder = ref('Write a message');

</script>

