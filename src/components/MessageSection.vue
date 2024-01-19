<template>
  <div class="q-pa-lg messageSectionContainer" style="width: 100%; overflow: scroll; max-height: 200px; ">
    <q-input v-model="text" square outlined autogrow :placeholder="placeholder" class="input"
      @v-on:keyup.enter="onTextSubmit">
      <div class="q-pa-md buttonContainer"> <q-btn square color="primary" icon="navigation" type="submit"
          @click="onTextSubmit" /></div>

    </q-input>
  </div>
</template>


<script setup lang="ts">
import { ref } from 'vue'

const { placeholder } = defineProps({
  placeholder: {
    type: String,
    default: 'Write a message'
  }
});

const text = ref('')

const onTextSubmit = (evt: any) => {
  evt.preventDefault()
  // to do
  // call gpt api
}


</script>

<style scoped lang="scss">
.messageSectionContainer {
  display: flex;
  flex-direction: column;
  width: 100%;

  .buttonContainer {
    align-self: end;
  }
}
</style>
