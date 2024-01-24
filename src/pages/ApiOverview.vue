<template>
  <q-page padding>
    <q-table :rows="tableData" :columns="columns" row-key="id" virtual-scroll binary-state-sort flat bordered
      title="Models Overview">
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="id" :props="props">{{ props.row.id }}</q-td>
          <q-td key="object" :props="props">{{ props.row.object }}</q-td>
          <q-td key="created" :props="props">{{ formatDate(props.row.created) }}</q-td>
          <q-td key="owned_by" :props="props">{{ props.row.owned_by }}</q-td>
        </q-tr>
      </template>
    </q-table>
  </q-page>
</template>



<script lang="ts" setup>
import { computed } from 'vue';

interface Column {
  name: string;
  required?: boolean;
  label: string;
  align?: 'left' | 'right' | 'center';
  field: string | ((row: any) => any);
  sortable?: boolean;
  format?: (val: any) => string;
}

const columns: Column[] = [
  { name: 'id', required: true, label: 'ID', align: 'left', field: 'id', sortable: true },
  { name: 'object', label: 'Object', field: 'object', sortable: true },
  { name: 'created', label: 'Created', field: 'created', sortable: true, format: formatDate },
  { name: 'owned_by', label: 'Owned By', field: 'owned_by', sortable: true },
];


const dummyData = { 'options': { 'method': 'get', 'path': '/models' }, 'response': { 'size': 0, 'timeout': 0 }, 'body': { 'object': 'list', 'data': [{ 'id': 'gpt-3.5-turbo-1106', 'object': 'model', 'created': 1698959748, 'owned_by': 'system' }, { 'id': 'dall-e-3', 'object': 'model', 'created': 1698785189, 'owned_by': 'system' }, { 'id': 'whisper-1', 'object': 'model', 'created': 1677532384, 'owned_by': 'openai-internal' }, { 'id': 'dall-e-2', 'object': 'model', 'created': 1698798177, 'owned_by': 'system' }, { 'id': 'gpt-3.5-turbo-16k', 'object': 'model', 'created': 1683758102, 'owned_by': 'openai-internal' }, { 'id': 'gpt-3.5-turbo-16k-0613', 'object': 'model', 'created': 1685474247, 'owned_by': 'openai' }, { 'id': 'text-embedding-ada-002', 'object': 'model', 'created': 1671217299, 'owned_by': 'openai-internal' }, { 'id': 'tts-1-hd-1106', 'object': 'model', 'created': 1699053533, 'owned_by': 'system' }, { 'id': 'tts-1-hd', 'object': 'model', 'created': 1699046015, 'owned_by': 'system' }, { 'id': 'gpt-3.5-turbo-instruct', 'object': 'model', 'created': 1692901427, 'owned_by': 'system' }, { 'id': 'davinci-002', 'object': 'model', 'created': 1692634301, 'owned_by': 'system' }, { 'id': 'babbage-002', 'object': 'model', 'created': 1692634615, 'owned_by': 'system' }, { 'id': 'gpt-4-0613', 'object': 'model', 'created': 1686588896, 'owned_by': 'openai' }, { 'id': 'gpt-4-1106-preview', 'object': 'model', 'created': 1698957206, 'owned_by': 'system' }, { 'id': 'gpt-4', 'object': 'model', 'created': 1687882411, 'owned_by': 'openai' }, { 'id': 'gpt-4-vision-preview', 'object': 'model', 'created': 1698894917, 'owned_by': 'system' }, { 'id': 'tts-1-1106', 'object': 'model', 'created': 1699053241, 'owned_by': 'system' }, { 'id': 'tts-1', 'object': 'model', 'created': 1681940951, 'owned_by': 'openai-internal' }, { 'id': 'gpt-3.5-turbo-instruct-0914', 'object': 'model', 'created': 1694122472, 'owned_by': 'system' }, { 'id': 'gpt-3.5-turbo', 'object': 'model', 'created': 1677610602, 'owned_by': 'openai' }, { 'id': 'gpt-3.5-turbo-0301', 'object': 'model', 'created': 1677649963, 'owned_by': 'openai' }, { 'id': 'gpt-3.5-turbo-0613', 'object': 'model', 'created': 1686587434, 'owned_by': 'openai' }] }, 'data': [{ 'id': 'gpt-3.5-turbo-1106', 'object': 'model', 'created': 1698959748, 'owned_by': 'system' }, { 'id': 'dall-e-3', 'object': 'model', 'created': 1698785189, 'owned_by': 'system' }, { 'id': 'whisper-1', 'object': 'model', 'created': 1677532384, 'owned_by': 'openai-internal' }, { 'id': 'dall-e-2', 'object': 'model', 'created': 1698798177, 'owned_by': 'system' }, { 'id': 'gpt-3.5-turbo-16k', 'object': 'model', 'created': 1683758102, 'owned_by': 'openai-internal' }, { 'id': 'gpt-3.5-turbo-16k-0613', 'object': 'model', 'created': 1685474247, 'owned_by': 'openai' }, { 'id': 'text-embedding-ada-002', 'object': 'model', 'created': 1671217299, 'owned_by': 'openai-internal' }, { 'id': 'tts-1-hd-1106', 'object': 'model', 'created': 1699053533, 'owned_by': 'system' }, { 'id': 'tts-1-hd', 'object': 'model', 'created': 1699046015, 'owned_by': 'system' }, { 'id': 'gpt-3.5-turbo-instruct', 'object': 'model', 'created': 1692901427, 'owned_by': 'system' }, { 'id': 'davinci-002', 'object': 'model', 'created': 1692634301, 'owned_by': 'system' }, { 'id': 'babbage-002', 'object': 'model', 'created': 1692634615, 'owned_by': 'system' }, { 'id': 'gpt-4-0613', 'object': 'model', 'created': 1686588896, 'owned_by': 'openai' }, { 'id': 'gpt-4-1106-preview', 'object': 'model', 'created': 1698957206, 'owned_by': 'system' }, { 'id': 'gpt-4', 'object': 'model', 'created': 1687882411, 'owned_by': 'openai' }, { 'id': 'gpt-4-vision-preview', 'object': 'model', 'created': 1698894917, 'owned_by': 'system' }, { 'id': 'tts-1-1106', 'object': 'model', 'created': 1699053241, 'owned_by': 'system' }, { 'id': 'tts-1', 'object': 'model', 'created': 1681940951, 'owned_by': 'openai-internal' }, { 'id': 'gpt-3.5-turbo-instruct-0914', 'object': 'model', 'created': 1694122472, 'owned_by': 'system' }, { 'id': 'gpt-3.5-turbo', 'object': 'model', 'created': 1677610602, 'owned_by': 'openai' }, { 'id': 'gpt-3.5-turbo-0301', 'object': 'model', 'created': 1677649963, 'owned_by': 'openai' }, { 'id': 'gpt-3.5-turbo-0613', 'object': 'model', 'created': 1686587434, 'owned_by': 'openai' }], 'object': 'list' }

const tableData = computed(() => {
  return dummyData.body.data.map(item => ({
    ...item,
    created: new Date(item.created * 1000).toLocaleString()
  }));
});

function formatDate(val: any): string {
  if (typeof val === 'number') {
    return new Date(val * 1000).toLocaleDateString();
  }
  return val;
}
</script>
