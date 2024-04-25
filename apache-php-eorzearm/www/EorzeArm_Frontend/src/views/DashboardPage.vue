<template>
    <div style="align-content: center;">


        <div class="flex mb-2 justify-between mr-3 shadow-2xl">

            <div class="flex items-center ml-3 shadow-2xl">
                <span class="text-[24px]">Usuario:</span><span class="ml-2 text-[24px] font-semibold text-purple-500">{{ name }}</span>
            </div>

            <button @click="openServerStatus()" class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded ">
                <div class="flex text-black font-bold text-[12px] items-center">
                    Server Status
                </div>
            </button>

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
                    <div v-for="(item, index) in items.slice(0, 4)" :key="index"
                        class="w-12 h-12 bg-gray-300 rounded mb-2 relative">
                        <img @click="openData(item)" :src="item.image_url" alt="Item"
                            class="w-full h-full object-cover">
                        <button @click="remove(item)"
                            :class="`absolute right-0 translate-x-[50%] -translate-y-[50%] bg-red-500 rounded-full w-6 h-6 flex items-center justify-center text-white`">X</button>
                    </div>
                </div>

                <!-- Balda 2 -->
                <div class="absolute w-full top-[28%] flex justify-around">
                    <div v-for="(item, index) in items.slice(4, 8)" :key="index"
                        class="w-12 h-12 bg-gray-300 rounded mb-2 relative">
                        <img @click="openData(item)" :src="item.image_url" alt="Item"
                            class="w-full h-full object-cover">
                        <button @click="remove(item)"
                            :class="`absolute right-0 translate-x-[50%] -translate-y-[50%] bg-red-500 rounded-full w-6 h-6 flex items-center justify-center text-white`">X</button>
                    </div>
                </div>

                <!-- Balda 3 -->
                <div class="absolute w-full top-[45%] flex justify-around">
                    <div v-for="(item, index) in items.slice(8, 12)" :key="index"
                        class="w-12 h-12 bg-gray-300 rounded mb-2 relative">
                        <img @click="openData(item)" :src="item.image_url" alt="Item"
                            class="w-full h-full object-cover">
                        <button @click="remove(item)"
                            :class="`absolute right-0 translate-x-[50%] -translate-y-[50%] bg-red-500 rounded-full w-6 h-6 flex items-center justify-center text-white`">X</button>
                    </div>
                </div>

                <!-- Balda 4 -->
                <div class="absolute w-full top-[65%] flex justify-around">
                    <div v-for="(item, index) in items.slice(12, 16)" :key="index"
                        class="w-12 h-12 bg-gray-300 rounded mb-2 relative">
                        <img @click="openData(item)" :src="item.image_url" alt="Item"
                            class="w-full h-full object-cover">
                        <button @click="remove(item)"
                            :class="`absolute right-0 translate-x-[50%] -translate-y-[50%] bg-red-500 rounded-full w-6 h-6 flex items-center justify-center text-white`">X</button>
                    </div>
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
                        <!-- <option value="triad">Triad</option> -->
                        <option value="records">Records</option>
                        <!-- <option value="levels">Levels</option> -->
                        <!-- <option value="relics">Relics</option> -->
                        <!-- <option value="tomestones">Tomestones</option> -->
                        <!-- <option value="characters">Characters</option> -->
                    </select>
                </div>

                <!-- Área de la Tabla -->
                <div class="w-full flex-grow overflow-auto" v-if="table">
                    <DataTable :value="products" class="w-full" paginator :rows="50">
                        <!-- Columna para Imagen o Icono -->
                        <Column header="Imagen">
                            <template #body="slotProps">
                                <img v-if="slotProps.data.image" :src="slotProps.data.image" :alt="slotProps.data.image"
                                    class="w-6rem border-round" />
                                <img v-else-if="slotProps.data.icon" :src="slotProps.data.icon"
                                    :alt="slotProps.data.icon" class="w-6rem border-round" />
                            </template>
                        </Column>

                        <!-- Columnas para ID, Nombre y Descripción -->
                        <Column field="id" header="Código"></Column>
                        <Column field="name" header="Nombre"></Column>
                        <Column field="description" header="Descripción"
                            v-if="products.some(product => 'description' in product)"></Column>

                        <!-- Columna para Acciones (Botón) -->
                        <Column headerStyle="width: 5rem; text-align: center">
                            <template #body="slotProps">
                                <Button @click="addItem(slotProps.data)" type="button" icon="pi pi-plus"
                                    class="p-button-rounded p-button-success p-button-outlined custom-icon bg-purple-500 hover:bg-purple-700"
                                    style="border-radius: 20px; color: white;" />
                            </template>
                        </Column>
                    </DataTable>
                </div>
            </div>
        </div>

        <Dialog v-model:visible="modal" modal header="Información Item" :style="{ width: '50rem' }"
            :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
            <template #header>
                <div class="inline-flex align-items-center justify-content-center gap-2">
                    <span class="font-bold white-space-nowrap">Información del item: {{ item_seleccionado.name }}</span>
                </div>
            </template>

            <div class="flex flex-col md:flex-row">
                <!-- Contenedor para imágenes -->
                <div class="flex-1 p-4">
                    <div v-for="(value, key) in item_seleccionado" :key="key">
                        <template v-if="key === 'image' || key === 'icon'">
                            <p class="mb-2">
                                <strong>{{ key }}:</strong>
                            </p>
                            <img :src="value" :alt="key" class="max-w-full h-auto mb-2">
                        </template>
                    </div>
                    <div v-for="(value, key) in item_seleccionado" :key="key">
                        <!-- Falta agregar el audio -->
                    </div>
                </div>
                <!-- Contenedor para texto e información -->
                <div class="flex-1 p-4">
                    <div v-for="(value, key) in item_seleccionado" :key="key">
                        <template v-if="key != 'image' && key != 'icon'">
                            <strong>{{ key }}:</strong> {{ value }}<br>
                        </template>
                        <!-- <template v-else-if="typeof value !== 'string'">
                            <strong>{{ key }}:</strong> <span>{{ JSON.stringify(value) }}</span><br>
                        </template> -->
                    </div>
                </div>
            </div>

            <template #footer>
            </template>
        </Dialog>

        <Dialog v-model:visible="serverStatus" modal header="Server Status" :style="{ width: '45rem' }"
            :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
            <template #header>
                <div class="inline-flex align-items-center justify-content-center gap-2">
                    <span class="font-bold white-space-nowrap">Información del servidor</span>
                </div>

            </template>

            <div class="flex flex-col text-purple-800">
                <div v-for="server in serverData" :key="server.id">
                    {{ server.status }}
                </div>
            </div>

            <template #footer>
            </template>
        </Dialog>

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
import Dialog from 'primevue/dialog';
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
let table = ref(false);
let modal = ref(false);

const selectedClass = ref('');
const products = ref([]);
const items = ref([]);
const item_seleccionado = ref('');
const serverStatus = ref(false);
const serverData = ref([]);

function dataUser() {

    userControllerStore.user().then(success => {
        appStore.setIdle().then(function () {
            name.value = success.name;
            clase.value = success.clase;
            items.value = success.items;
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
    appStore.setBusy();

    userControllerStore.setItem(slotProps, selectedClass).then(success => {
        appStore.setIdle().then(function () {
            appStore.showAlert('success', '', '¡Se ha agregado el elemento a tu colección!', 'Cerrar');
            dataUser();
        });
    }, error => {
        appStore.setIdle().then(function () {
            appStore.showAlert('error', '!Error!', error.data.message, 'Cerrar');
        });
    });

}

function remove(item) {
    appStore.setBusy();

    userControllerStore.remove(item).then(success => {
        appStore.setIdle().then(function () {
            appStore.showAlert('success', '', '¡Se ha eliminado el elemento de tu colección!', 'Cerrar');
            dataUser();
        });
    }, error => {
        appStore.setIdle().then(function () {
            appStore.showAlert('error', '!Error!', error.data.message, 'Cerrar');
        });
    });
}

function openData(item) {

    appStore.setBusy();

    userCollectControllerStore.getItem(item).then(success => {
        appStore.setIdle().then(function () {

            item_seleccionado.value = success.results[0];
            // console.log(item_seleccionado.value);

        });
    }, error => {
        appStore.setIdle().then(function () {
            appStore.showAlert('error', '!Error!', error.data.message, 'Cerrar');
        });
    });



    modal.value = !modal.value;
}

function openServerStatus() {

    appStore.setBusy();

    userControllerStore.serverData().then(success => {
        appStore.setIdle().then(function () {

            serverData.value = success['status'];
            // console.log(success['status']);

        });
    }, error => {
        appStore.setIdle().then(function () {
            appStore.showAlert('error', '!Error!', error.data.message, 'Cerrar');
        });
    });

    serverStatus.value = !serverStatus.value;
}

watch(selectedClass, (newValue) => {
    if (newValue) {
        dataItems(newValue);
        table = true;
    }
});

dataUser();
</script>
<style scoped></style>