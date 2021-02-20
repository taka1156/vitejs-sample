<template>
  <form @submit.prevent>
    <base-label id="sample-text">テキスト</base-label>
    <base-input
      id="sample-text"
      name="sample-text"
      type="text"
      placeholder="テキスト"
      v-model:value="state.sampleText"
    />
    <base-label id="sample-password">パスワード</base-label>
    <base-input
      id="sample-password"
      name="sample-password"
      type="password"
      placeholder="パスワード"
      v-model:value="state.samplePassword"
    />
    <base-label id="sample-textarea">テキスエリア</base-label>
    <base-text-area
      id="sample-textarea"
      name="sample-textarea"
      :rows="3"
      :cols="50"
      placeholder="テキストエリア"
      v-model:value="state.sampleTextarea"
    />
    <fieldset>
      <base-label id="front-used">Frontend</base-label>
      <legend>使ったことのあるフレームワークは?</legend>
      <base-select
        id="front-used"
        name="front-used"
        :options="selects"
        v-model:value="state.sampleSelect"
      />
    </fieldset>
    <fieldset>
      <legend>使ったことのある言語は?</legend>
      <base-radio
        name="backend-used"
        :options="radios"
        v-model:value="state.sampleRadio"
      />
    </fieldset>
    <fieldset>
      <legend>今後学びたい言語は?</legend>
      <base-check-box
        name="next-learning"
        :options="checkboxes"
        v-model:value="state.sampleCheck"
      />
    </fieldset>
    <input type="submit" value="確定" @click="sendResult" />
  </form>
</template>

<script lang="ts">
import { defineComponent, reactive, SetupContext } from 'vue';
import BaseLabel from './forms/BaseLabel.vue';
import BaseCheckBox from './forms/BaseCheckBox.vue';
import BaseInput from './forms/BaseInput.vue';
import BaseRadio from './forms/BaseRadio.vue';
import BaseSelect from './forms/BaseSelect.vue';
import BaseTextArea from './forms/BaseTextArea.vue';
import { selects, radios, checkboxes } from '@/constants/index';

export default defineComponent({
  name: 'FormBox',
  components: {
    'base-label': BaseLabel,
    'base-input': BaseInput,
    'base-text-area': BaseTextArea,
    'base-check-box': BaseCheckBox,
    'base-radio': BaseRadio,
    'base-select': BaseSelect
  },
  setup(props, context: SetupContext) {
    const state = reactive<InputState>({
      sampleText: '',
      samplePassword: '',
      sampleTextarea: '',
      sampleRadio: '',
      sampleSelect: '',
      sampleCheck: []
    });

    const sendResult = () => {
      context.emit('send-result', state);
    };

    return { state, sendResult, selects, radios, checkboxes };
  }
});
</script>

<style scoped></style>
