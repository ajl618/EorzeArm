<template>

  <div class="flex items-center justify-center h-full">
    <div class='flex justify-center items-center'>
      <div class="max-w-md z-80">

        <form @submit.prevent="handleSubmit" class="bg-white shadow-md rounded-3xl p-8 w-[380px]" autocomplete="on">

          <div class="flex justify-center mb-4">
            <div class="text-[30px] text-purple-800">
              <span class="font-Lato">Registrarse</span>
            </div>
          </div>

          <div class="mb-4 text-purple-900 border-2 border-purple-200 rounded-lg">
            <input v-model="username" name="username" id="username" type="text" placeholder="Usuario" required
              class="w-full rounded-lg" />
          </div>

          <div class="mb-4 text-purple-900 border-2 border-purple-200 rounded-lg">
            <input v-model="email" name="email" id="email" type="email" placeholder="Email" required
              class="w-full rounded-lg" />
          </div>

          <div class="mb-6 text-purple-900 border-2 border-purple-200 rounded-lg">
            <input v-model="password" name="password" id="password" type="password" placeholder="Contraseña" required
              class="w-full rounded-lg" />
          </div>

          <div class="mb-6 text-purple-900 border-2 border-purple-200 rounded-lg">
            <input v-model="password_repeat" name="password_repeat" id="password_repeat" type="password"
              placeholder="Repita su contraseña" required class="w-full rounded-lg" />
          </div>

          <div class="mb-4 text-purple-900 border-2 border-purple-200 rounded-lg">
            <select v-model="clase" name="clase" id="clase" required class="w-full rounded-lg">
              <option value="" disabled selected>Clase del personaje</option>
              <option value="Warrior">Warrior</option>
              <option value="Monk">Monk</option>
              <option value="Bard">Bard</option>
              <option value="Dragoon">Dragoon</option>
              <option value="Black_Mage">Black Mage</option> 
              <option value="Machinist">Machinist</option>
              <option value="Ninja">Ninja</option>
              <option value="Paladin">Paladin</option>
              <option value="Dark_Knight">Dark Knight</option>
              <option value="Astrologian">Astrologian</option>
              <option value="Summoner">Summoner</option>
              <option value="Scholar">Scholar</option>
              <option value="White_Mage">White Mage</option>
              <option value="Gunbreaker">Gunbreaker</option>
              <option value="Dancer">Dancer</option>
            </select>
          </div>

          <div v-if="error_mensaje" class="mb-4 text-red-500">
            {{ error_mensaje }}
          </div>

          <div class="flex items-center justify-between mt-3 bg-purple-800 rounded-lg hover:bg-purple-950">
            <button type="submit" class="w-full rounded-full text-white text-xl py-2 px-4">
              Entrar
            </button>
          </div>

          <div class="text-purple-600 mt-4 text-center">
            <router-link to="/" class="text-purple-900 font-bold">Login</router-link>
          </div>

        </form>
      </div>
    </div>
  </div>

</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import { useAppStore } from '@/stores/AppStore.js'
import { useUserControllerStore } from '@/stores/UserControllerStore.js'

const username = ref('')
const email = ref('')
const password = ref('')
const password_repeat = ref('')
const clase = ref('')
const error_mensaje = ref('')

const appStore = useAppStore()
const router = useRouter();
const userControllerStore = useUserControllerStore()

function handleSubmit() {

  if (password.value != password_repeat.value) {
    error_mensaje.value = "Las contraseñas no coinciden"
    return
  }

  error_mensaje.value = ""
  let data = {
    username: username.value,
    email: email.value,
    password: password.value,
    clase: clase.value
  }

  appStore.setBusy();

  userControllerStore.create(data).then(success => {
    appStore.setIdle().then(function () {
      appStore.showAlert('success', '', '¡Se ha logeado de manera satisfactoria!', 'Cerrar');
      router.push({ name: 'login' });
    });
  }, error => {
    appStore.setIdle().then(function () {
      appStore.showAlert('error', '!Error!', error.data.message, 'Cerrar');
    });
  });
}

</script>
<style scoped></style>