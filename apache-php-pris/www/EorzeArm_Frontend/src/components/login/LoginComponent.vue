<template>

  <div class="flex items-center justify-center h-screen"> <!-- Clases para centrar el contenedor en la pantalla -->
    <div class='flex justify-center items-center'> <!-- Este contenedor podría ser redundante, considera eliminarlo si no es necesario -->
      <div class="mx-5 my-5 max-w-md z-50"> <!-- Quité 'w-full' para permitir el centrado horizontal -->
        <form @submit.prevent="handleSubmit" class="bg-white shadow-md rounded-3xl p-8" autocomplete="on">
   
          <div class="flex justify-center mb-4">
            <div class="text-[30px] text-purple-800">
              <span class="font-Lato">EorzeArm</span>
            </div>
          </div>

          <div class="mb-4">
            <input v-model="username" name = "username" id = "username" type="text" placeholder="Usuario" required autocomplete="username" />
          </div>

          <div class="mb-6">
            <input v-model="password" name = "password" id="password" type="password" placeholder="Contraseña" required autocomplete="current-password"/>
          </div>

          <div class="flex items-center justify-between mt-3 bg-purple-950 rounded-lg">
            <button type="submit" class="w-full rounded-full text-white text-xl py-2 px-4">
              Entrar
            </button>
          </div>
        </form>
 
      </div>
    </div>
  </div>

</template>

<script setup>


</script>
<style scoped></style>