<template>
  <div>
    <header class="flex justify-between m-4">
      <div
        class="font-bold text-sm text-center uppercase text-blue-500 flex items-center"
      >
        <!-- <img src="/images/logo.png" alt="Logo" class="logo mr-2" /> -->
        <nuxt-link to="https://hoppscotch.io/" target="_blank">
          LOTUS
        </nuxt-link>
      </div>
      <div class="flex items-center">
        <Icon name="uil:search" class="w-6 h-6" />
        <el-button type="primary" class="ml-2 btn-x1" @click="showLoginModal">
          Login
        </el-button>
      </div>
    </header>
    <ClientOnly>
      <el-dialog
        v-model="visibleModalLogin"
        width="400px"
        append-to-body
        title="Login to Lotus"
        class="rounded-lg dialog-modal"
        data-v-5a4a5a9a
      >
        <el-divider />
        <el-row :gutter="16">
          <el-col :span="2">
            <Icon name="akar-icons:github-fill" class="w-6 h-6" />
          </el-col>
          <el-col :span="22">
            <span class="ml-3 icon-text">Continue with Github</span>
          </el-col>
        </el-row>
        <el-row class="mt-2">
          <el-col :span="2">
            <Icon name="logos:google-gmail" class="w-6 h-6" />
          </el-col>
          <el-col :span="22">
            <span class="ml-3 icon-text">Continue with Google</span>
          </el-col>
        </el-row>
        <el-row class="mt-2">
          <el-col :span="2">
            <Icon name="material-symbols:mail" class="w-6 h-6" />
          </el-col>
          <el-col :span="22">
            <span class="ml-3 icon-text" @click="showEmailModal"
              >Continue with Email</span
            >
          </el-col>
        </el-row>

        <!-- </div> -->
        <!--<hr class="w-full border-t border-gray-300 my-4"> 
        <span slot="footer" class="dialog-footer">
          <el-button @click="hiddenLoginModal">Cancel</el-button>
          <el-button type="primary">Login</el-button>
        </span> -->
      </el-dialog>
      <el-dialog
        v-model="visibleEmailModal"
        title="Login to Lotus"
        width="400px"
        class="rounded-lg"
      >
        <div>
          <el-form class="items-center mb-4">
            <el-form-item label="Email" :label-width="formLabelWidth">
              <el-input
                v-model="email"
                placeholder="Enter your email"
              ></el-input>
            </el-form-item>
            <el-form-item label="Password" :label-width="formLabelWidth">
              <el-input
                v-model="password"
                placeholder="Enter your password"
                type="password"
              ></el-input>
            </el-form-item>
          </el-form>
          <hr class="w-full border-t border-gray-300 my-4" />
          <span slot="footer" class="dialog-footer flex justify-center">
            <!-- <el-button @click="visibleEmailModal = false">Cancel</el-button> -->
            <el-button type="primary">Login</el-button>
          </span>
        </div>
      </el-dialog>
    </ClientOnly>
  </div>
  <!-- </ClientOnly> -->
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const visibleModalLogin = ref(false);
const showLoginModal = () => {
  visibleModalLogin.value = true;
};
const hiddenLoginModal = () => {
  visibleModalLogin.value = false;
};

const visibleEmailModal = ref(false);
const showEmailModal = () => {
  visibleEmailModal.value = true;
};
const hiddenEmailModal = () => {
  visibleEmailModal.value = false;
};
const formLabelWidth = '70px';
</script>

<style module>
.dialog-modal .el-dialog__body {
  padding: 0px 20px 20px 20px !important;
}

.dialog-modal .el-dialog__title {
  font-size: x-large;
}

.icon {
  width: 24px;
  height: 24px;
}
</style>
