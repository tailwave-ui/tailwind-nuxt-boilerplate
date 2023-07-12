<template>
    <div>
      <div class="bg-blue-400">
        <svg v-if="colorMode.value == 'light'" @click="toggle"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="#fff"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-moon ml-4"
                            ><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
                            <svg v-else @click="toggle"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="#fff"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-sun text-white"
                            ><circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg>
                            
      </div>
      <div class="bg-gray-100">
      <div class="bg-gray-500 dark:hover:bg-orange-500 h-24 w-24 rounded shadow">
        <p class="text-gray-800 dark:text-white">Light Mode</p>
      </div>
    </div>
    <NuxtWelcome />
    </div>
</template>
<script setup lang="ts">
const colorMode = useColorMode()
function toggle() {
    colorMode.preference = colorMode.value == "light" ? "dark" : "light";
}
</script>
<style lang="scss" scoped>
</style>
