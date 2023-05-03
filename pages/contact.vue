<template>
    <div class="h-screen">
        <!-- navbar for index / home page -->
        <client-only>
            <Navbar />
        </client-only>
        <!-- contacts -->
        <div class="pt-16 px-4 md:px-24 bg-red-700 text-gray-100">
            <div class="grid grid-cols-1 md:justify-items-center py-14">
                <h2 class="font-oswald font-semibold text-5xl md:text-7xl tracking-wide uppercase pb-9">
                    get in touch
                </h2>
                <!-- address -->
                <div class="group">
                    <a href="https://goo.gl/maps/ZW3RXvLcY9RtaEvx5" target="_blank" class="font-semibold text-sm md:text-xl flex items-center justify-center gap-x-4 tracking-wide pb-3">
                        <Icon name="ph:map-pin-line-fill" class="text-7xl md:text-4xl transition duration-200 ease-in-out group-hover:scale-125" />
                        <span>Rumah Aspirasi Perum Pondok Surya Kencana II Blok E No 5 Pasuruan, Jawa Timur</span>
                    </a>
                </div>

                <!-- sosmed -->
                <div class="flex flex-col md:flex-row gap-3 md:gap-x-6 md:mt-6 justify-start md:justify-between">
                    <div class="group">
                        <a href="https://www.instagram.com/mufti.anam/" target="_blank" class="flex gap-x-4 items-center md:flex-col md:gap-y-2 md:text-center md:px-3">
                            <Icon name="ph:instagram-logo-fill" class="text-4xl transition duration-200 ease-in-out group-hover:scale-125"/>
                            <p class="text-sm md:text-lg font-semibold">mufti.anam</p>
                        </a>
                    </div>
                    <div class="group">
                        <a href="mailto: doktermufti33@gmail.com" target="_blank" class="flex gap-x-4 items-center md:flex-col md:gap-y-2 md:text-center md:px-3">
                            <Icon name="ph:envelope-simple-open-fill" class="text-4xl transition duration-200 ease-in-out group-hover:scale-125"/>
                            <p class="text-sm md:text-lg font-semibold">doktermufti33@gmail.com</p>
                        </a>
                    </div>
                    <div class="group">
                        <a href="https://www.linkedin.com/in/muftianam/" target="_blank" class="flex gap-x-4 items-center md:flex-col md:gap-y-2 md:text-center md:px-3">
                            <Icon name="ph:linkedin-logo-fill" class="text-4xl transition duration-200 ease-in-out group-hover:scale-125"/>
                            <p class="text-sm md:text-lg font-semibold">muftianam</p>
                        </a>
                    </div>
                </div>

                <div class="mt-8 mb-3 flex items-center gap-x-3">
                    <Icon name="ph:link-simple-bold" class="text-4xl"/>
                    <h3 class="font-semibold text-sm md:text-lg">Terhubung langsung</h3>
                </div>
                <div class="flex flex-col md:flex-row justify-center gap-5 md:items-end border-2 rounded-lg px-5 py-6">
                    <div class="flex flex-col gap-y-1">
                        <label for="nama" class="">Nama</label>
                        <input type="text" name="nama" id="" class="rounded text-gray-800 px-2 py-2 text-sm md:w-60" placeholder="Isi nama anda">
                    </div>
                    <div class="flex flex-col gap-y-1">
                        <label for="telepon" class="">Telepon</label>
                        <input type="number" name="telepon" id="" class="rounded text-gray-800 px-2 py-2 text-sm md:w-60" placeholder="Isi nomor anda">
                    </div>
                    <div class="flex flex-col gap-y-1">
                        <label for="email" class="">email</label>
                        <input type="text" name="email" id="" class="rounded text-gray-800 px-2 py-2 text-sm md:w-60" placeholder="Isi email anda">
                    </div>
                    <button class="bg-gray-800 pl-5 pr-6 py-2 text-sm rounded flex items-center justify-center gap-x-2">
                        <Icon name="ph:arrow-square-out-bold" class="text-2xl"/>
                        kirim
                    </button>
                </div>
                <!-- website -->
                <h3 class="font-bold text-lg md:text-2xl flex items-end gap-x-4 tracking-wide py-4 mt-4">
                    <Icon name="ph:globe-simple-bold" size="32"/>
                    <span class="underline underline-offset-1">
                        www.doktermufti.com
                    </span>
                </h3>
            </div>
            
        </div>
        <!-- footer -->
        <Footer />

       
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>