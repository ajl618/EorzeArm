<template>

  <div class="flex items-center justify-center h-full">
    <div class='flex justify-center items-center'>
      <div class="max-w-md z-80">

        <img src="@/assets/pictures/dra.png" alt="EorzeArm" class="w-[200px] h-[200px] ml-[180px]"/>
        <form @submit.prevent="handleSubmit" class="bg-white shadow-md rounded-3xl p-8 w-[380px]" autocomplete="on">
   
          <div class="flex justify-center mb-4">
            <div class="text-[30px] text-purple-800">
              <span class="font-Lato">EorzeArm</span>
            </div>
          </div>

          <div class="mb-4 text-purple-900">
            <input v-model="username" name = "username" id = "username" type="text" placeholder="Usuario" required  class="w-full"/>
          </div>

          <div class="mb-6 text-purple-900">
            <input v-model="password" name = "password" id="password" type="password" placeholder="Contraseña" required class="w-full"/>
          </div>

          <div class="flex items-center justify-between mt-3 bg-purple-950 rounded-lg">
            <button type="submit" class="w-full rounded-full text-white text-xl py-2 px-4">
              Entrar
            </button>
          </div>

          <div class="text-purple-600 mt-4">
            ¿No tienes cuenta?  <router-link to="/registrarse" class="text-purple-900 font-bold">Regístrate</router-link>
          </div>

        </form>
 
      </div>
    </div>
  </div>

</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'


const username = ref('')
const password = ref('')




</script>
<style scoped></style>