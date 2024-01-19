<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />
        <q-select borderless v-model="model" :options="options" :dark="true" />
        <q-toolbar-title>
          <b>G</b>i<b>p</b>i<b>t</b>y
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <ChatHistory />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import ChatHistory from 'components/ChatHistory.vue';

export default defineComponent({
  name: 'MainLayout',
  components: {
    ChatHistory,
  },
  setup() {
    const model = ref('GPT 4');
    const options = ref(['GPT 3.5', 'GPT 4', 'Other']);
    const leftDrawerOpen = ref(false);

    const toggleLeftDrawer = () => {
      leftDrawerOpen.value = !leftDrawerOpen.value;
    };

    return {
      model,
      options,
      leftDrawerOpen,
      toggleLeftDrawer
    };
  }
});
</script>
