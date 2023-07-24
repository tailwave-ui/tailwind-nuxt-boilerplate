<template>
  <div  class="dark:bg-slate-900 bg-gray-50">
    <div class="flex justify-between">
      <modules-darkModeSwitcher/>
      <form class="pt-2 pr-2">
        <select v-model="locale">
          <option value="en">en</option>
          <option value="fr">fr</option>
        </select>
      </form>
    </div>
    <div>
    <div class="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12">
      <div class="relative bg-white dark:bg-slate-800 px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 dark:ring-gray-700 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
        <div class="mx-auto max-w-md">
          <!-- <img src="/img/logo.svg" class="h-6 dark:text-white text-gray-600" alt="Tailwind Play" /> -->
          <!-- logo -->
            <div class="h-8 w-8 bg-contain bg-[url('/svg/logo-dark.svg')] dark:bg-[url('/svg/logo-light.svg')]" />
          <!-- / logo -->
          <div class="divide-y divide-gray-300/50">
            <div class="space-y-6 py-8 text-base leading-7 text-gray-600 dark:text-white">
              <p>{{ $t('ul.text') }}</p>
              <ul class="space-y-4">
                <li class="flex items-center">
                  <svg class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="11" />
                    <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                  </svg>
                  <p class="ml-4">
                    {{ $t('ul.li1') }}
                    <code class="text-sm font-bold text-gray-900 dark:text-white">tailwind.config.js</code> {{ $t('ul.li1_1') }}
                  </p>
                </li>
                <li class="flex items-center">
                  <svg class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="11" />
                    <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                  </svg>
                  <p class="ml-4">
                    {{ $t('ul.li2') }}
                    <code class="text-sm font-bold text-gray-900 dark:text-white">@apply</code>
                  </p>
                </li>
                <li class="flex items-center">
                  <svg class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="11" />
                    <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                  </svg>
                  <p class="ml-4">{{ $t('ul.li3') }}</p>
                </li>
              </ul>
              <p>{{ $t('p') }}</p>
            </div>
            <div class="pt-8 text-base font-semibold leading-7">
              <p class="text-gray-900 dark:text-white">{{ $t('footer.p') }}</p>
              <p>
                <a href="https://tailwindcss.com/docs" class="text-primary-light hover:text-primary-light">{{ $t('footer.link') }} &rarr;</a>
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
const { locale } = useI18n()

</script>
<style lang="scss" scoped>
</style>
