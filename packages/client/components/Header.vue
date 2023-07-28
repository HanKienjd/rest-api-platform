<script lang="ts" setup>
import { ref } from 'vue';

const visibleModalLogin = ref(false);
</script>

<template>
  <header class="flex justify-between m-4">
    <div class="font-bold text-sm text-center uppercase text-red-500">
      <nuxt-link to="https://hoppscotch.io/" target="_blank">
        Hoppscotch
      </nuxt-link>
    </div>
    <div>
      <Icon name="uil:search" class="w-6 h-6" />
      <el-button type="primary" class="ml-2" @click="visibleModalLogin = true">
        Login
      </el-button>
    </div>
  </header>
  <Login
    :visible-modal-login="visibleModalLogin"
    @close-modal="visibleModalLogin = false"
  />
</template>

<style scoped></style>
