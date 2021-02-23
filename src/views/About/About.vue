<template>
  <h1>About</h1>
  <div class="about">
    <form-box @send-result="sendResult" />
    <div class="result">
      <p>Result</p>
      <template
        v-for="(result, index) in state.results"
        :key="`result_${index}`"
      >
        <p>{{ result }}</p>
      </template>
    </div>
  </div>
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

<style scoped>
.about {
  display: flex;
  flex-direction: row;
  margin: 10px auto;
  width: 80%;
}

.result {
  border: 2px dotted #42b983;
  width: 50%;
}
</style>
