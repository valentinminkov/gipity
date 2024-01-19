<template>
  <q-layout view="lHh Lpr lFf">

    <q-header elevated>
      <q-toolbar class="text-white shadow-2">
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />
        <q-separator dark vertical inset class="q-mx-md" />
        <q-select borderless v-model="model" :options="options" :dark="true" />
        <!-- title grows to the remaining space -->
        <q-toolbar-title />
        <q-toggle v-model="isDarkmode" checked-icon="check" color="green" unchecked-icon="clear"
          @click="toggleDarkMode" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-toolbar-title class="q-ma-md">
        <b>G</b>i<b>p</b>i<b>t</b>y
      </q-toolbar-title>
      <q-separator inset />
      <q-list>
        <ChatHistory :messages="dummyMessages" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import ChatHistory from 'components/ChatHistory.vue';
import { Message } from 'src/components/types/db';

const dummyMessages: Message[] = [
  {
    title: 'Welcome',
    text: 'This is your first message!',
    timestamp: '2024-01-19T21:29:06.207960'
  },
  {
    title: 'Reminder',
    text: "Don't forget the meeting at 10 AM",
    timestamp: '2024-01-19T20:29:06.207967'
  },
  {
    title: 'Update',
    text: 'Your application has been updated',
    timestamp: '2024-01-18T21:29:06.207975'
  }
]
const model = ref('GPT 4');
const options = ref(['GPT 3.5', 'GPT 4', 'Other']);
const leftDrawerOpen = ref(false);
const isDarkmode = ref(false);

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};

const toggleDarkMode = () => {
  // Todo
};

</script>
