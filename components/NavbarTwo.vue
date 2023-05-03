<template>
    <div class="fixed z-[99] top-0 flex justify-between items-center w-full h-18 px-4 md:px-10 py-2 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 transition duration-200 ease-in-out" :class="!glassBackground ? 'backdrop-blur-none bg-transparent backdrop-filter-none bg-opacity-0' : 'bg-gray-400'">
        <img src="/Logo.png" alt="" class="h-12" loading="lazy">
        <div @click="openMenu()" class="border-2 p-1 transition duration-300 ease-in-out hover:bg-red-700 hover:font-bold hover:text-gray-100 cursor-pointer rounded-lg" :class=" !glassBackground ? 'text-gray-700 border-gray-700 hover:border-red-700' : ' text-red-700 border-red-700 hover:border-red-700' ">
            <Icon name="ph:list-bullets-bold" size="24" />
        </div>
        <div class="fixed scale-x-0 transition duration-300 ease-in-out z-[999] top-0 left-0 w-full h-screen overflow-hidden bg-gray-800 text-gray-100" 
        :class="navMenu == true ? 'scale-x-100' : 'scale-x-0'">
            <div class="flex items-center justify-between py-6 px-4 md:px-24">
                <img src="/Logo.png" alt="" class="h-24 md:h-32" loading="lazy">
                <div @click="closeMenu()" class="transition duration-300 ease-in-out hover:text-red-700 hover:font-bold cursor-pointer" >
                    <Icon name="ph:x-circle-bold" size="60" />
                </div>
            </div>
            <div class="flex flex-col gap-y-5 items-center justify-center w-full mt-12 md:mt-2">
                <nuxt-link to="/" class="cursor-pointer mb-6 md:mb-4">
                    <h3 class="font-oswald font-bold tracking-wide transition-all duration-200 ease-in-out text-6xl md:text-7xl hover:text-red-700">
                        Home
                    </h3>
                </nuxt-link>
                <nuxt-link to="profile" class="cursor-pointer mb-6 md:mb-4">
                    <h3 class="font-oswald font-bold tracking-wide transition-all duration-200 ease-in-out text-6xl md:text-7xl hover:text-red-700">
                        Profil
                    </h3>
                </nuxt-link>
                <nuxt-link to="news" class="cursor-pointer mb-6 md:mb-4">
                    <h3 class="font-oswald font-bold tracking-wide transition-all duration-200 ease-in-out text-6xl md:text-7xl hover:text-red-700">
                        Berita
                    </h3>
                </nuxt-link>
                <nuxt-link to="gallery" class="cursor-pointer mb-6 md:mb-4">
                    <h3 class="font-oswald font-bold tracking-wide transition-all duration-200 ease-in-out text-6xl md:text-7xl hover:text-red-700">
                        Galeri
                    </h3>
                </nuxt-link>
                <nuxt-link to="contact" class="cursor-pointer mb-6 md:mb-4">
                    <h3 class="font-oswald font-bold tracking-wide transition-all duration-200 ease-in-out text-6xl md:text-7xl hover:text-red-700">
                        Kontak
                    </h3>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const glassBackground = ref(false)
const navMenu = ref(false)

onMounted(() => {
    document.addEventListener('scroll', function() {
        let bodyTopPosition = document.body.getBoundingClientRect().top;

        if( bodyTopPosition < -200 ){
            glassBackground.value = true
        } else {
            glassBackground.value = false
        }
    })
})

const openMenu = () => {
    navMenu.value = true
}
const closeMenu = () => {
    navMenu.value = false
}

</script>

<style scoped>

</style>