<template>
  <div class="q-pa-lg" style="width: 100%; overflow: scroll; max-height: 200px; ">
    <q-input v-model="text" square outlined autogrow :placeholder="placeholder" class="input"
      @v-on:keyup.enter="onTextSubmit">
      <q-btn square color="primary" icon="navigation" type="submit" @click="onTextSubmit" />
    </q-input>
  </div>
</template>


<script setup >
import { ref } from 'vue'

const { placeholder } = defineProps({
  placeholder: {
    type: String,
    default: 'Write a message'
  }
});

const text = ref('')

const onTextSubmit = (evt) => {
  evt.preventDefault()
  // to do
  // call gpt api
}


</script>

<style scoped lang="scss"></style>
