<template>
  <q-page class="column items-center justify-end">
    <InputSection class="" placeholder="Write a message" active></InputSection>
  </q-page>
</template>

<script lang="ts">
import InputSection from 'components/InputSection.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  components: { InputSection },
  setup() {

    return {};
  }
});
</script>
