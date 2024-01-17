<template>
  <div class="q-pa-md" style="width: 100%">

    <q-input v-model="text" filled autogrow :placeholder="placeholder">
      <template v-slot:append>
        <q-avatar>
          <q-btn square color="primary" icon="navigation" />
        </q-avatar>
      </template>
    </q-input>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  props: {
    placeholder: String
  },
  setup() {
    return {
      text: ref('')
    }
  }
}
</script>
