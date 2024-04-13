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
                <!-- <img  :src="`@/assets/pictures/class/${clase}.jpg`" alt="Main Armor" class="absolute w-full h-full object-cover rounded"> -->
                <img src="@/assets/pictures/estanteria.jpg" alt="Estanteria"
                    class="absolute w-full h-full object-cover rounded">

                <!-- Posicionamiento de elementos en las baldas -->
                <!-- Balda 1 -->
                <div class="absolute w-full top-[10%] flex justify-around">
                    <!-- Repetir este div para cada elemento en la balda -->
                    <div class="w-12 h-12 bg-gray-300 rounded mb-2 relative">
                        <img src="https://ffxivcollect.com/images/fashions/large/1.png" alt="Armor Piece"
                            class="w-full h-full object-cover">
                        <button
                            class="absolute top-0 right-0 translate-x-[50%] -translate-y-[50%] bg-red-500 rounded-full w-6 h-6 flex items-center justify-center text-white">X</button>
                    </div>
                    <div class="w-12 h-12 bg-gray-300 rounded mb-2 relative">
                        <img src="https://ffxivcollect.com/images/fashions/large/1.png" alt="Armor Piece"
                            class="w-full h-full object-cover">
                        <button
                            class="absolute top-0 right-0 translate-x-[50%] -translate-y-[50%] bg-red-500 rounded-full w-6 h-6 flex items-center justify-center text-white">X</button>
                    </div>
                    <div class="w-12 h-12 bg-gray-300 rounded mb-2 relative">
                        <img src="https://ffxivcollect.com/images/fashions/large/1.png" alt="Armor Piece"
                            class="w-full h-full object-cover">
                        <button
                            class="absolute top-0 right-0 translate-x-[50%] -translate-y-[50%] bg-red-500 rounded-full w-6 h-6 flex items-center justify-center text-white">X</button>
                    </div>
                    <div class="w-12 h-12 bg-gray-300 rounded mb-2 relative">
                        <img src="https://ffxivcollect.com/images/fashions/large/1.png" alt="Armor Piece"
                            class="w-full h-full object-cover">
                        <button
                            class="absolute top-0 right-0 translate-x-[50%] -translate-y-[50%] bg-red-500 rounded-full w-6 h-6 flex items-center justify-center text-white">X</button>
                    </div>
                    <!-- 3 divs adicionales para los elementos restantes -->
                </div>

                <!-- Balda 2 -->
                <div class="absolute w-full top-[28%] flex justify-around">
                    <!-- Repetir este div para cada elemento en la balda -->
                    <div class="w-12 h-12 bg-gray-300 rounded mb-2 relative">
                        <img src="https://ffxivcollect.com/images/fashions/large/1.png" alt="Armor Piece"
                            class="w-full h-full object-cover">
                        <button
                            class="absolute top-0 right-0 translate-x-[50%] -translate-y-[50%] bg-red-500 rounded-full w-6 h-6 flex items-center justify-center text-white">X</button>
                    </div>
                    <div class="w-12 h-12 bg-gray-300 rounded mb-2 relative">
                        <img src="https://ffxivcollect.com/images/fashions/large/1.png" alt="Armor Piece"
                            class="w-full h-full object-cover">
                        <button
                            class="absolute top-0 right-0 translate-x-[50%] -translate-y-[50%] bg-red-500 rounded-full w-6 h-6 flex items-center justify-center text-white">X</button>
                    </div>
                    <div class="w-12 h-12 bg-gray-300 rounded mb-2 relative">
                        <img src="https://ffxivcollect.com/images/fashions/large/1.png" alt="Armor Piece"
                            class="w-full h-full object-cover">
                        <button
                            class="absolute top-0 right-0 translate-x-[50%] -translate-y-[50%] bg-red-500 rounded-full w-6 h-6 flex items-center justify-center text-white">X</button>
                    </div>
                    <div class="w-12 h-12 bg-gray-300 rounded mb-2 relative">
                        <img src="https://ffxivcollect.com/images/fashions/large/1.png" alt="Armor Piece"
                            class="w-full h-full object-cover">
                        <button
                            class="absolute top-0 right-0 translate-x-[50%] -translate-y-[50%] bg-red-500 rounded-full w-6 h-6 flex items-center justify-center text-white">X</button>
                    </div>
                </div>

                <!-- Balda 3 -->
                <div class="absolute w-full top-[45%] flex justify-around">
                    <!-- Repetir este div para cada elemento en la balda -->
                    <div class="w-12 h-12 bg-gray-300 rounded mb-2 relative">
                        <img src="https://ffxivcollect.com/images/fashions/large/1.png" alt="Armor Piece"
                            class="w-full h-full object-cover">
                        <button
                            class="absolute top-0 right-0 translate-x-[50%] -translate-y-[50%] bg-red-500 rounded-full w-6 h-6 flex items-center justify-center text-white">X</button>
                    </div>
                    <div class="w-12 h-12 bg-gray-300 rounded mb-2 relative">
                        <img src="https://ffxivcollect.com/images/fashions/large/1.png" alt="Armor Piece"
                            class="w-full h-full object-cover">
                        <button
                            class="absolute top-0 right-0 translate-x-[50%] -translate-y-[50%] bg-red-500 rounded-full w-6 h-6 flex items-center justify-center text-white">X</button>
                    </div>
                    <div class="w-12 h-12 bg-gray-300 rounded mb-2 relative">
                        <img src="https://ffxivcollect.com/images/fashions/large/1.png" alt="Armor Piece"
                            class="w-full h-full object-cover">
                        <button
                            class="absolute top-0 right-0 translate-x-[50%] -translate-y-[50%] bg-red-500 rounded-full w-6 h-6 flex items-center justify-center text-white">X</button>
                    </div>
                    <div class="w-12 h-12 bg-gray-300 rounded mb-2 relative">
                        <img src="https://ffxivcollect.com/images/fashions/large/1.png" alt="Armor Piece"
                            class="w-full h-full object-cover">
                        <button
                            class="absolute top-0 right-0 translate-x-[50%] -translate-y-[50%] bg-red-500 rounded-full w-6 h-6 flex items-center justify-center text-white">X</button>
                    </div>
                </div>

                <!-- Balda 4 -->
                <div class="absolute w-full top-[65%] flex justify-around">
                    <!-- Repetir este div para cada elemento en la balda -->
                    <div class="w-12 h-12 bg-gray-300 rounded mb-2 relative">
                        <img src="https://ffxivcollect.com/images/fashions/large/1.png" alt="Armor Piece"
                            class="w-full h-full object-cover">
                        <button
                            class="absolute top-0 right-0 translate-x-[50%] -translate-y-[50%] bg-red-500 rounded-full w-6 h-6 flex items-center justify-center text-white">X</button>
                    </div>
                    <div class="w-12 h-12 bg-gray-300 rounded mb-2 relative">
                        <img src="https://ffxivcollect.com/images/fashions/large/1.png" alt="Armor Piece"
                            class="w-full h-full object-cover">
                        <button
                            class="absolute top-0 right-0 translate-x-[50%] -translate-y-[50%] bg-red-500 rounded-full w-6 h-6 flex items-center justify-center text-white">X</button>
                    </div>
                    <div class="w-12 h-12 bg-gray-300 rounded mb-2 relative">
                        <img src="https://ffxivcollect.com/images/fashions/large/1.png" alt="Armor Piece"
                            class="w-full h-full object-cover">
                        <button
                            class="absolute top-0 right-0 translate-x-[50%] -translate-y-[50%] bg-red-500 rounded-full w-6 h-6 flex items-center justify-center text-white">X</button>
                    </div>
                    <div class="w-12 h-12 bg-gray-300 rounded mb-2 relative">
                        <img src="https://ffxivcollect.com/images/fashions/large/1.png" alt="Armor Piece"
                            class="w-full h-full object-cover">
                        <button
                            class="absolute top-0 right-0 translate-x-[50%] -translate-y-[50%] bg-red-500 rounded-full w-6 h-6 flex items-center justify-center text-white">X</button>
                    </div>
                    <!-- 3 divs adicionales para los elementos restantes -->
                </div>
            </div>

            <!-- Contenido de la segunda partición -->
            <div class="w-[60vw] h-[80vh] mx-2 bg-black flex flex-col justify-start items-center rounded">
                <!-- Área de Selección -->
                <div class="text-white w-full p-4">
                    <label for="clase" class="block mb-2">Selecciona el elemento que deseas agregar colección:</label>
                    <select v-model="selectedClass" id="clase" required
                        class="w-full md:w-auto rounded-lg bg-white text-black">
                        <option value="" disabled selected>Elige una opción</option>
                        <option value="mounts">Mounts</option>
                        <option value="minions">Minions</option>
                        <option value="orchestrions">Orchestrions</option>
                        <option value="frames">Frames</option>
                        <option value="spells">Spells</option>
                        <option value="emotes">Emotes</option>
                        <option value="bardings">Bardings</option>
                        <option value="hairstyles">Hairstyles</option>
                        <option value="armoires">Armoires</option>
                        <option value="fashions">Fashions</option>
                        <option value="triad">Triad</option>
                        <option value="records">Records</option>
                        <option value="levels">Levels</option>
                        <option value="relics">Relics</option>
                        <option value="tomestones">Tomestones</option>
                        <option value="characters">Characters</option>
                    </select>
                </div>

                <!-- Área de la Tabla -->
                <div class="w-full flex-grow overflow-auto">
                    <DataTable :value="products" class="w-full" paginator :rows="50">
                        <!-- Columna para Imagen o Icono -->
                        <Column header="Imagen">
                            <template #body="slotProps">
                            <img v-if="slotProps.data.image" :src="slotProps.data.image" :alt="slotProps.data.image" class="w-6rem border-round" />
                            <img v-else-if="slotProps.data.icon" :src="slotProps.data.icon" :alt="slotProps.data.icon" class="w-6rem border-round" />
                            </template>
                        </Column>

                        <!-- Columnas para ID, Nombre y Descripción -->
                        <Column field="id" header="Código"></Column>
                        <Column field="name" header="Nombre"></Column>
                        <Column field="description" header="Descripción" v-if="products.some(product => 'description' in product)"></Column>

                        <!-- Columna para Acciones (Botón) -->
                        <Column headerStyle="width: 5rem; text-align: center">
                            <template #body="slotProps">
                                <Button @click="addItem(slotProps.data)"
                                        type="button"
                                        icon="pi pi-plus"
                                        class="p-button-rounded p-button-success p-button-outlined custom-icon bg-purple-500 hover:bg-purple-700"
                                        style="border-radius: 20px; color: white;" />
                            </template>
                        </Column>
                        </DataTable>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
import { ref, computed, watch } from 'vue'
import { useAppStore } from '@/stores/AppStore';
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/AuthStore';
import { useUserControllerStore } from '@/stores/UserControllerStore.js'
import { useApiCollectControllerStore } from '@/stores/ApiCollectController.js'
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';

const appStore = useAppStore();
const authstore = useAuthStore();
const router = useRouter();
const userControllerStore = useUserControllerStore();
const userCollectControllerStore = useApiCollectControllerStore();

let clase = ref('');
let name = ref('');
let ready = ref(false);

const selectedClass = ref('');
const products = ref([]);

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

function dataItems(item) {

    appStore.setBusy();

    userCollectControllerStore.getData(item).then(success => {
        appStore.setIdle().then(function () {
            products.value = success.results;
        });
    }, error => {
        appStore.setIdle().then(function () {
            appStore.showAlert('error', '!Error!', error.data.message, 'Cerrar');
        });
    });

}

function addItem(slotProps) {
    /**
     * Aqui tengo todos los datos de cada item
     */
    console.log(slotProps);
}

watch(selectedClass, (newValue) => {
  if (newValue) {
    dataItems(newValue);
  }
});

dataUser();
</script>
<style scoped></style>