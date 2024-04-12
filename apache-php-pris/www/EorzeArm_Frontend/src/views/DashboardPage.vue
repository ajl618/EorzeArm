<template>
    <div style="align-content: center;">
        <div class="flex mb-2 justify-end mr-3 shadow-2xl">
            <button @click="logout()" class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded ">
                <div class="flex text-black font-bold text-[12px] items-center">
                    <img src="@/assets/icons/ffxiv1.svg" alt="Logout" class="w-6 h-6 mr-2"> Logout
                </div>
            </button>
        </div>

        <div class="flex justify-center items-center w-full h-full">
            <!-- Contenedor Principal con imagen y miniaturas -->
            <div v-if="ready" class="w-[70vh] h-[80vh] mx-2 relative flex justify-center items-center rounded"
                style="background-color: #170A18;">

                <!-- Imagen Principal -->
                <!-- <img  :src="`../../assets/pictures/class/${clase}.jpg`" alt="Main Armor" class="absolute w-full h-full object-cover rounded"> -->
                <img src="../../assets/pictures/class/Paladin.jpg" alt="Main Armor"
                    class="absolute w-full h-full object-cover rounded">

                <div class="absolute left-0 top-0 bottom-0 flex flex-col justify-between p-2">

                    <div class="relative w-[50px] h-[50px] bg-gray-300 rounded mb-2">
                        <img src="https://ffxivcollect.com/images/fashions/large/1.png" alt="Armor Piece"
                            class="w-full h-full">
                        <button
                            class="absolute top-0 right-0 translate-x-[50%] -translate-y-[50%] bg-red-500 rounded-full w-6 h-6 flex items-center justify-center text-white"
                            @click="removeElement">X</button>
                    </div>

                    <!-- Elemento 2 -->
                    <div class="relative w-[50px] h-[50px] bg-gray-300 rounded mb-2">
                        <img src="https://ffxivcollect.com/images/fashions/large/1.png" alt="Armor Piece"
                            class="w-full h-full">
                        <button
                            class="absolute top-0 right-0 translate-x-[50%] -translate-y-[50%] bg-red-500 rounded-full w-6 h-6 flex items-center justify-center text-white"
                            @click="removeElement">X</button>
                    </div>

                    <div class="relative w-[50px] h-[50px] bg-gray-300 rounded mb-2">
                        <img src="https://ffxivcollect.com/images/fashions/large/1.png" alt="Armor Piece"
                            class="w-full h-full">
                        <button
                            class="absolute top-0 right-0 translate-x-[50%] -translate-y-[50%] bg-red-500 rounded-full w-6 h-6 flex items-center justify-center text-white"
                            @click="removeElement">X</button>
                    </div>

                    <div class="relative w-[50px] h-[50px] bg-gray-300 rounded mb-2">
                        <img src="https://ffxivcollect.com/images/fashions/large/1.png" alt="Armor Piece"
                            class="w-full h-full">
                        <button
                            class="absolute top-0 right-0 translate-x-[50%] -translate-y-[50%] bg-red-500 rounded-full w-6 h-6 flex items-center justify-center text-white"
                            @click="removeElement">X</button>
                    </div>

                    <div class="relative w-[50px] h-[50px] bg-gray-300 rounded mb-2">
                        <img src="https://ffxivcollect.com/images/fashions/large/1.png" alt="Armor Piece"
                            class="w-full h-full">
                        <button
                            class="absolute top-0 right-0 translate-x-[50%] -translate-y-[50%] bg-red-500 rounded-full w-6 h-6 flex items-center justify-center text-white"
                            @click="removeElement">X</button>
                    </div>

                    <div class="relative w-[50px] h-[50px] bg-gray-300 rounded mb-2">
                        <img src="https://ffxivcollect.com/images/fashions/large/1.png" alt="Armor Piece"
                            class="w-full h-full">
                        <button
                            class="absolute top-0 right-0 translate-x-[50%] -translate-y-[50%] bg-red-500 rounded-full w-6 h-6 flex items-center justify-center text-white"
                            @click="removeElement">X</button>
                    </div>

                    <div class="relative w-[50px] h-[50px] bg-gray-300 rounded mb-2">
                        <img src="https://ffxivcollect.com/images/fashions/large/1.png" alt="Armor Piece"
                            class="w-full h-full">
                        <button
                            class="absolute top-0 right-0 translate-x-[50%] -translate-y-[50%] bg-red-500 rounded-full w-6 h-6 flex items-center justify-center text-white"
                            @click="removeElement">X</button>
                    </div>

                </div>

                <!-- Sidebar Right with smaller squares -->
                <div class="absolute right-0 top-0 bottom-0 flex flex-col justify-between p-2">
                    <!-- Aquí irían tus miniaturas derechas, repetir para cada una -->
                    <div class="relative w-[50px] h-[50px] bg-gray-300 rounded mb-2">
                        <img src="https://ffxivcollect.com/images/fashions/large/1.png" alt="Armor Piece"
                            class="w-full h-full">
                        <button
                            class="absolute top-0 right-0 translate-x-[50%] -translate-y-[50%] bg-red-500 rounded-full w-6 h-6 flex items-center justify-center text-white"
                            @click="removeElement">X</button>
                    </div>

                    <div class="relative w-[50px] h-[50px] bg-gray-300 rounded mb-2">
                        <img src="https://ffxivcollect.com/images/fashions/large/1.png" alt="Armor Piece"
                            class="w-full h-full">
                        <button
                            class="absolute top-0 right-0 translate-x-[50%] -translate-y-[50%] bg-red-500 rounded-full w-6 h-6 flex items-center justify-center text-white"
                            @click="removeElement">X</button>
                    </div>

                    <div class="relative w-[50px] h-[50px] bg-gray-300 rounded mb-2">
                        <img src="https://ffxivcollect.com/images/fashions/large/1.png" alt="Armor Piece"
                            class="w-full h-full">
                        <button
                            class="absolute top-0 right-0 translate-x-[50%] -translate-y-[50%] bg-red-500 rounded-full w-6 h-6 flex items-center justify-center text-white"
                            @click="removeElement">X</button>
                    </div>

                    <div class="relative w-[50px] h-[50px] bg-gray-300 rounded mb-2">
                        <img src="https://ffxivcollect.com/images/fashions/large/1.png" alt="Armor Piece"
                            class="w-full h-full">
                        <button
                            class="absolute top-0 right-0 translate-x-[50%] -translate-y-[50%] bg-red-500 rounded-full w-6 h-6 flex items-center justify-center text-white"
                            @click="removeElement">X</button>
                    </div>

                    <div class="relative w-[50px] h-[50px] bg-gray-300 rounded mb-2">
                        <img src="https://ffxivcollect.com/images/fashions/large/1.png" alt="Armor Piece"
                            class="w-full h-full">
                        <button
                            class="absolute top-0 right-0 translate-x-[50%] -translate-y-[50%] bg-red-500 rounded-full w-6 h-6 flex items-center justify-center text-white"
                            @click="removeElement">X</button>
                    </div>

                    <div class="relative w-[50px] h-[50px] bg-gray-300 rounded mb-2">
                        <img src="https://ffxivcollect.com/images/fashions/large/1.png" alt="Armor Piece"
                            class="w-full h-full">
                        <button
                            class="absolute top-0 right-0 translate-x-[50%] -translate-y-[50%] bg-red-500 rounded-full w-6 h-6 flex items-center justify-center text-white"
                            @click="removeElement">X</button>
                    </div>

                </div>
            </div>

            <!-- Contenido de la segunda partición -->
            <div class="w-[60vw] h-[80vh] mx-2 bg-black flex flex-col justify-start items-center rounded">
                <!-- Área de Selección -->
                <div class="text-white w-full p-4">
                    <label for="clase" class="block mb-2">Selecciona el elemento que deseas agregar a tu
                        personaje:</label>
                    <select v-model="selectedClass" id="clase" required
                        class="w-full md:w-auto rounded-lg bg-white text-black">
                        <option value="" disabled selected>Elige una opción</option>
                        <option value="Mounts">Mounts</option>
                        <option value="Minions">Minions</option>
                        <option value="Orchestrions">Orchestrions</option>
                        <option value="Frames">Frames</option>
                        <option value="Spells">Spells</option>
                        <option value="Emotes">Emotes</option>
                        <option value="Bardings">Bardings</option>
                        <option value="Hairstyles">Hairstyles</option>
                        <option value="Armoires">Armoires</option>
                        <option value="Fashions">Armoires</option>
                        <option value="Triad">Armoires</option>
                        <option value="Records">Armoires</option>
                        <option value="Levels">Armoires</option>
                        <option value="Relics">Armoires</option>
                        <option value="Tomestones">Armoires</option>
                        <option value="Characters">Armoires</option>
                    </select>
                </div>

                <!-- Área de la Tabla -->
                <div class="w-full flex-grow overflow-auto">
                    <DataTable :value="filteredProducts" class="w-full">
                        <Column field="code" header="Código"></Column>
                        <Column field="name" header="Nombre"></Column>
                        <Column field="category" header="Categoría"></Column>
                        <Column field="quantity" header="Cantidad"></Column>
                    </DataTable>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
import { ref, computed } from 'vue'
import { useAppStore } from '@/stores/AppStore';
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/AuthStore';
import { useUserControllerStore } from '@/stores/UserControllerStore.js'
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

const appStore = useAppStore();
const authstore = useAuthStore();
const router = useRouter();
const userControllerStore = useUserControllerStore();

let clase = ref('');
let name = ref('');
let ready = ref(false);

const selectedClass = ref('');
const products = ref([
    { code: 'P100', name: 'Producto 1', category: 'Armadura', quantity: 20 },
    { code: 'P200', name: 'Producto 2', category: 'Monk', quantity: 15 },
]);

const filteredProducts = computed(() => {
    return products.value.filter(product => product.category === selectedClass.value);
});

function dataUser() {

    userControllerStore.user().then(success => {
        appStore.setIdle().then(function () {
            name.value = success.name;
            clase.value = success.clase;
            ready.value = true;
        });
    }, error => {
        appStore.setIdle().then(function () {
            appStore.showAlert('error', '!Error!', error.data.message, 'Cerrar');
        });
    });

}

function logout() {

    appStore.setBusy();

    authstore.logout().then(success => {
        appStore.setIdle().then(function () {
            appStore.showAlert('success', '', '¡Se ha cerrado sesión de manera satisfactoria!', 'Cerrar');
            router.push({ path: '/' });
        });
    }, error => {
        appStore.setIdle().then(function () {
            appStore.showAlert('error', '!Error!', error.data.message, 'Cerrar');
        });
    });
}

dataUser();
</script>
<style scoped></style>