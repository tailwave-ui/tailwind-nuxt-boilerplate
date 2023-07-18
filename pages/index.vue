<template>
  <div  class="dark:bg-slate-900 bg-gray-50">
    <div>
      <modules-darkModeSwitcher/>
    </div>
    <div>
    <div class="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12">
      <div class="relative bg-white dark:bg-slate-800 px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 dark:ring-gray-700 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
        <div class="mx-auto max-w-md">
          <!-- <img src="/img/logo.svg" class="h-6 dark:text-white text-gray-600" alt="Tailwind Play" /> -->
          <!-- logo -->
            <div class="h-8 w-8 bg-contain bg-[url('../assets/svg/logo-dark.svg')] dark:bg-[url('../assets/svg/logo-light.svg')]" />
          <!-- / logo -->
          <div class="divide-y divide-gray-300/50">
            <div class="space-y-6 py-8 text-base leading-7 text-gray-600 dark:text-white">
              <p>An advanced online playground for Tailwind CSS, including support for things like:</p>
              <ul class="space-y-4">
                <li class="flex items-center">
                  <svg class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="11" />
                    <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                  </svg>
                  <p class="ml-4">
                    Customizing your
                    <code class="text-sm font-bold text-gray-900 dark:text-white">tailwind.config.js</code> file
                  </p>
                </li>
                <li class="flex items-center">
                  <svg class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="11" />
                    <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                  </svg>
                  <p class="ml-4">
                    Extracting classes with
                    <code class="text-sm font-bold text-gray-900 dark:text-white">@apply</code>
                  </p>
                </li>
                <li class="flex items-center">
                  <svg class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="11" />
                    <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                  </svg>
                  <p class="ml-4">Code completion with instant preview</p>
                </li>
              </ul>
              <p>Perfect for learning how the framework works, prototyping a new idea, or creating a demo to share online.</p>
            </div>
            <div class="pt-8 text-base font-semibold leading-7">
              <p class="text-gray-900 dark:text-white">Want to dig deeper into Tailwind?</p>
              <p>
                <a href="https://tailwindcss.com/docs" class="text-primary-light hover:text-primary-light">Read the docs &rarr;</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>
<style lang="scss" scoped>
</style>
