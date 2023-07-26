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
      <el-button type="success">Success</el-button>
    </div>
  </header>
  <el-dialog title="Login to Lotus" v-model="visibleModalLogin" width="30%">
    <div class="mr-5">
      <el-row>
        <Icon name="uil:github" class="w-6 h-6" />
        <span>Continue with Github</span>
      </el-row>
      <el-row>
        <Icon name="uil:google" class="w-6 h-6" />
        <span>Continue with Google</span>
      </el-row>
      <el-row>
        <Icon name="uil:mail" class="w-6 h-6" />
        <span>Continue with Email</span>
      </el-row>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="visibleModalLogin = false">Cancel</el-button>
      <el-button type="primary">Login</el-button>
    </span>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const visibleModalLogin = ref(false);
console.log(visibleModalLogin);
</script>

<style scoped></style>