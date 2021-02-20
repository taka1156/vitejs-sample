<template>
  <h1>About</h1>
  <form-box @send-result="sendResult" />
  <template v-for="(result, index) in state.results" :key="`result_${index}`">
    <p>{{ result }}</p>
  </template>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import FormBox from '@/components/FormBox.vue';

export default defineComponent({
  name: 'About',
  components: {
    'form-box': FormBox
  },
  setup() {
    const state = reactive<ResultState>({
      results: null
    });

    const sendResult = (result: InputState) => {
      state.results = { ...result };
    };

    return { state, sendResult };
  }
});
</script>

<style scoped></style>
