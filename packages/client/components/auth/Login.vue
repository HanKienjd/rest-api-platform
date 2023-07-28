<template>
  <div>
    <el-dialog title="Login to Lotus" width="30%" v-model="visibleModalLogin">
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
        <el-button @click="$emit('close-modal')">Cancel</el-button>
        <el-button type="primary">Login</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script setup>
const props = defineProps({
  visibleModalLogin: Boolean,
});
console.log(props);
</script>

<style lang="scss" scoped></style>
