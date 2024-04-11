<template>

  <div class="flex items-center justify-center h-full">
    <div class='flex justify-center items-center'>
      <div class="max-w-md z-80">

        <img src="@/assets/pictures/dra.png" alt="EorzeArm" class="w-[200px] h-[200px] ml-[180px]" />
        <form @submit.prevent="handleSubmit" class="bg-white shadow-md rounded-3xl p-8 w-[380px]" autocomplete="on">

          <div class="flex justify-center mb-4">
            <div class="text-[30px] text-purple-800">
              <span class="font-Lato">EorzeArm</span>
            </div>
          </div>

          <div class="mb-4 text-purple-900 border-2 border-purple-200 rounded-lg">
            <input v-model="email" name="email" id="email" type="email" placeholder="Email" required
              class="w-full rounded-lg" />
          </div>

          <div class="mb-6 text-purple-900 border-2 border-purple-200 rounded-lg">
            <input v-model="password" name="password" id="password" type="password" placeholder="Contraseña" required
              class="w-full rounded-lg" />
          </div>

          <div class="flex items-center justify-between mt-3 bg-purple-800 rounded-lg hover:bg-purple-950">
            <button  @click="login" class="w-full rounded-full text-white text-xl py-2 px-4">
              Entrar
            </button>
          </div>

          <div class="text-purple-600 mt-4">
            ¿No tienes cuenta? <router-link to="/registrarse" class="text-purple-900 font-bold">Regístrate</router-link>
          </div>

        </form>

      </div>
    </div>
  </div>

</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAppStore } from '@/stores/AppStore.js'
import { useAuthStore } from '@/stores/AuthStore.js'

const email = ref('')
const password = ref('')

const router = useRouter();
const appStore = useAppStore()
const authstore = useAuthStore();

function login() {

  appStore.setBusy();

  let data = {
    email: email.value,
    password: password.value
  };

  authstore.login(data).then(success => {
    appStore.setIdle().then(function () {
      appStore.showAlert('success', '', '¡Se ha logeado de manera satisfactoria!', 'Cerrar');
      router.push({ name: 'about' });
    });
  }, error => {
    appStore.setIdle().then(function () {
      appStore.showAlert('error', '!Error!', error.data.message, 'Cerrar');
    });
  });
}

</script>
<style scoped></style>