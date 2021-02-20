<template>
  <img src="../../assets/logo.png" alt="Vue logo" />
  <HelloWorld msg="Vite.js + Vue + TypeScript" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue';

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld
  }
});
</script>
