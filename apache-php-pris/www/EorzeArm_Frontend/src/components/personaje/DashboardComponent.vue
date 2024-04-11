<template>
    <div style="align-content: center;">
        <div class="flex justify-center items-center w-full h-full">
            <div class="w-[80%] h-[80vh] mx-2 flex justify-center items-center rounded" style="background-color: #1D0D1E;">

                <!-- Armadura -->
                <!-- Sidebar Left with smaller squares -->
                <div class="w-1/6 h-full flex flex-col justify-between p-2 rounded-l">
                    <div class="w-full h-1/6 bg-gray-300 rounded mb-2"> 
                        <img src="https://ffxivcollect.com/images/fashions/large/1.png" alt="Main Armor" class="w-[100%] h-auto">    
                    </div>
                    <div class="w-full h-1/6 bg-gray-300 rounded mb-2">
                        <img src="https://ffxivcollect.com/images/fashions/large/1.png" alt="Main Armor" class="w-[100%] h-auto">    
                    </div>
                    <div class="w-full h-1/6 bg-gray-300 rounded mb-2"> 
                        <img src="https://ffxivcollect.com/images/fashions/large/1.png" alt="Main Armor" class="w-[100%] h-auto">        
                    </div>
                    <div class="w-full h-1/6 bg-gray-300 rounded mb-2"> 
                        <img src="https://ffxivcollect.com/images/fashions/large/1.png" alt="Main Armor" class="w-[100%] h-auto">        
                    </div>
                    <div class="w-full h-1/6 bg-gray-300 rounded mb-2">
                        <img src="https://ffxivcollect.com/images/fashions/large/1.png" alt="Main Armor" class="w-[100%] h-auto">    
                    </div>
                    <div class="w-full h-1/6 bg-gray-300 rounded">
                        <img src="https://ffxivcollect.com/images/fashions/large/1.png" alt="Main Armor" class="w-[100%] h-auto">    
                    </div>
                </div>

                <!-- Main Content Area for the big picture -->
                <div class="w-4/6 h-full flex justify-center items-center p-2 rounded">
                    <!-- Main content goes here -->
                    <img src="@/assets/pictures/dra3.png" alt="Main Armor" class="w-[100%] h-auto">
                    <!-- This is where you would put your main armor image -->
                </div>

                <!-- Sidebar Right with smaller squares -->
                <div class="w-1/6 h-full flex flex-col justify-between p-2 rounded-r">
                    <div class="w-full h-1/6 bg-gray-300 rounded mb-2">
                        <img src="https://ffxivcollect.com/images/armoires/large/1.png" alt="Main Armor" class="w-[100%] h-auto"> 
                    </div>
                    <div class="w-full h-1/6 bg-gray-300 rounded mb-2">
                        <img src="https://ffxivcollect.com/images/armoires/1.png" alt="Main Armor" class="w-[100%] h-auto"> 
                    </div>
                    <div class="w-full h-1/6 bg-gray-300 rounded mb-2">
                        <img src="https://ffxivcollect.com/images/armoires/1.png" alt="Main Armor" class="w-[100%] h-auto"> 
                    </div>
                    <div class="w-full h-1/6 bg-gray-300 rounded mb-2">
                        <img src="https://ffxivcollect.com/images/armoires/1.png" alt="Main Armor" class="w-[100%] h-auto"> 
                    </div>
                    <div class="w-full h-1/6 bg-gray-300 rounded mb-2">
                        <img src="https://ffxivcollect.com/images/armoires/1.png" alt="Main Armor" class="w-[100%] h-auto"> 
                    </div>
                    <div class="w-full h-1/6 bg-gray-300 rounded">
                        <img src="https://ffxivcollect.com/images/armoires/1.png" alt="Main Armor" class="w-[100%] h-auto"> 
                    </div>
                </div>

            </div>
            <div class="w-[50vw] h-[80vh] mx-2 bg-black flex justify-center items-center rounded">
                <!-- Contenido de la segunda partición -->
                Cuadrado 2
            </div>
        </div>
    </div>

</template>

<script setup>
import { ref } from 'vue'
import { useUserControllerStore } from '@/stores/UserControllerStore.js'

const userControllerStore = useUserControllerStore()

function dataUser()
{
    userControllerStore.user();
}


dataUser();
</script>
<style scoped></style>