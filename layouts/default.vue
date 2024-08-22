<template>
    <nav class="bg-white border-gray-200 dark:bg-gray-900 ">
      <a href="" style="width: 100%!important;display: block;margin: 0;padding: 0;line-height: 0;">
<img width="100%" height="auto" src="https://asset.kitapsepeti.com/Data/EditorFiles/450-tl-uzeri-siparislerde-gecerli-ve-iyzico-ile-ode-yonteminde-kargo-bedava-kampanyasi-top-desktop-banner-v2.jpg" title="İyzico Ücretsiz Kargo Kampanyası" alt="İyzico Ücretsiz Kargo Kampanyası" decoding="async" fetchpriority="high" srcset="https://asset.kitapsepeti.com/Data/EditorFiles/450-tl-uzeri-siparislerde-gecerli-ve-iyzico-ile-ode-yonteminde-kargo-bedava-kampanyasi-top-desktop-banner-v2.jpg 1920w,
https://asset.kitapsepeti.com/Data/EditorFiles/450-tl-uzeri-siparislerde-gecerli-ve-iyzico-ile-ode-yonteminde-kargo-bedava-kampanyasi-top-mobile-banner-v2.jpg 400w" sizes="(max-width: 1920px) 100vw, 1920px" style="max-height:50px;">
</a>
      <div class="flex items-center justify-between mr-20 ml-20 p-4 h-28">
        <!-- Logo ve Arama Çubuğu -->
        <div class="flex items-center space-x-3 rtl:space-x-reverse">
          <a href="/" class="flex items-center">
            <img src="/assets/img/logo.png" class="h-16" alt="Site Logo" />
          </a>
        </div>
        <form class="flex items-center max-w-lg mx-auto">   
    <label for="voice-search" class="sr-only">Search</label>
    <div class="relative w-full">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg class="w-4 h-4 me-2" style="color: orangered;" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        </div>
        
        <input type="text" id="voice-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-lg focus:ring-purple-800 focus:border-purple-500 block w-64 ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500" placeholder="Aradığınız ürünün adını yazınız." required />
    </div>
    <button type="submit" class="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-purple-700 rounded-r-lg border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800" style="margin: 0;">
        Ara
    </button>
</form>
        <!-- Sağdaki Butonlar -->
        <div class="flex space-x-4 rtl:space-x-reverse">
          <!-- E-posta ile giriş ol veya kayıt ol butonu -->
           
          <span  class="flex justify-center items-center text-white bg-purple-600 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800 px-4 py-2">
          <nuxt-link 
      to="/login" 
     class="flex justify-start mr-1"
    >
      <!-- Person Icon -->
      <svg 
        class="w-5 h-5 mr-2" 
        aria-hidden="true" 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path 
          stroke-linecap="round" 
          stroke-linejoin="round" 
          stroke-width="2" 
          d="M5.121 17.804A10.992 10.992 0 0112 15a10.992 10.992 0 016.879 2.804M12 12a4 4 0 100-8 4 4 0 000 8z" 
        />
      </svg>
      <span class="flex items-center hover:underline">
        E-posta ile giriş yap
      </span>
    </nuxt-link>ya da
          <nuxt-link 
      to="/register" 
      class="ml-1"
    >
      <span class="flex items-center hover:underline">
       kayıt ol
      </span>
    </nuxt-link>
  </span>
   
          <!-- Sepetim Butonu -->
          <a href="#" class="flex items-center px-4 py-2 text-white bg-[#FF8000] rounded-lg hover:bg-[#DD6F00] focus:outline-none focus:ring-4 focus:ring-[#FF8000] dark:focus:ring-[#DD6F00]">
            <svg class="w-5 h-5 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l1 5h11l1-5h2M6 8h12l1 11H5L6 8zm1 0h1m8 0h1m-5 4h6M8 8l1 11m5-11l1 11m-5 0h1m-1-8h2m-2 2h2m-2 2h2m-2 2h2" />
            </svg>
            Sepetim
            <span class="ml-2 inline-flex items-center justify-center w-4 h-4 text-xs font-medium text-white bg-red-600 rounded-full">0</span>
          </a>
        </div>
      </div>
    </nav>
    
    <nav class="bg-purple-600 text-white">
    <div class="max-w-screen-xl flex items-center justify-between mx-auto p-4">
      <div class="flex items-center space-x-4">
        <!-- Menü İkonu -->
        <div class="relative">
          <button id="nav-icon" class="text-white focus:outline-none">
            <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
          <!-- Dropdown Menü -->
          <div id="dropdown-menu" class="absolute hidden mt-2 bg-white text-purple-600 rounded shadow-lg">
            <a href="#" class="block px-4 py-2 hover:bg-purple-600 hover:text-white">Edebiyat Kitapları</a>
            <a href="#" class="block px-4 py-2 hover:bg-purple-600 hover:text-white">Eğitim Kitapları</a>
            <a href="#" class="block px-4 py-2 hover:bg-purple-600 hover:text-white">Felsefe Kitapları</a>
          </div>
        </div>
        <!-- Kategoriler -->
        <a href="#" class="hover:text-gray-300">ROMAN</a>
        <a href="#" class="hover:text-gray-300">BİLİM KURGU</a>
        <a href="#" class="hover:text-gray-300">ÇOCUK KİTAPLARI</a>
        <a href="#" class="hover:text-gray-300">ÇİZGİ ROMAN</a>
        <a href="#" class="hover:text-gray-300">SINAV KİTAPLARI</a>
      </div>

      <!-- Çok Satanlar Butonu -->
      <div>
        <a href="#" class="px-4 py-2 bg-white text-purple-600 rounded-lg hover:bg-gray-200">ÇOK SATANLAR</a>
      </div>
    </div>
  </nav>
  <NuxtPage/>
  </template>
  
  <script setup>
  import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})

import { useRouter } from 'vue-router'

const router = useRouter()

const navigate = (event) => {
  const target = event.target
  const linkType = target.getAttribute('data-link')

  if (linkType === 'login') {
    router.push('/login')
  } else if (linkType === 'register') {
    router.push('/register')
  }
}
  </script>
  
  <style>
  /* Global stiller veya özel düzen stilleri burada */
  </style>
  