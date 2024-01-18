<template>
  <q-page class="column items-center justify-end">
    <MessageSection placeholder="Write a message" active></MessageSection>
  </q-page>
</template>

<script lang="ts">
import MessageSection from 'components/MessageSection.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  components: { MessageSection },
  setup() {

    return {};
  }
});
</script>
