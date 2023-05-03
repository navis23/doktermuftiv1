<template>
    <div>
        <!-- navbar for index / home page -->
        <client-only>
            <NavbarTwo />
        </client-only>

        <!-- content gallery -->
        <div ref="galleries" class="pt-24">
            <div class="relative px-4 md:px-24 pb-24">
                <div class="absolute left-0 rounded-r-full py-3 pl-4 pr-8 md:py-4 md:pl-24 md:pr-14 bg-red-700 text-gray-100">
                    <h3 class="font-oswald text-2xl md:text-3xl font-semibold">
                        Galeri Video & Gambar
                    </h3>
                </div>
                <div class="columns-1 md:columns-3 pt-24">
                    <div v-for="(item, index) in dataFiles" :key="index">
                        <div v-if="item.tipe === 'gambar'" class="mb-4">
                            <div class="w-full h-full overflow-hidden">
                                <img :src="item.source" alt="" class="opacity-90 object-cover rounded-lg object-center" loading="lazy">
                                <div class="flex gap-2 py-2 items-start">
                                    <p>
                                        <span class="text-xs py-1 px-2 font-semibold bg-red-200 bg-opacity-30 text-red-600 rounded-md">
                                            {{ item.tipe }}
                                        </span>
                                    </p>
                                    <h3 class="text-sm ">{{ item.judul }}</h3>
                                </div>
                            </div>
                        </div>
                        <div v-if="item.tipe === 'video'" class="mb-4">
                            <div class="w-full h-full overflow-hidden">

                                <video controls class="opacity-90 object-cover rounded-lg object-center">
                                    <source :src="item.source" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <div class="flex gap-2 py-2 items-start">
                                    <p>
                                        <span class="text-xs py-1 px-2 font-semibold bg-emerald-200 bg-opacity-30 text-emerald-600 rounded-md">
                                            {{ item.tipe }}
                                        </span>
                                    </p>
                                    <h3 class="text-sm">{{ item.judul }}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- footer -->
        <Footer />

        <!-- scroll to top -->
        <ScrollTop  @click="scrollToTop()"/>
    </div>
</template>

<script setup lang="ts">

const galleries = ref()
const dataFiles = ref()
const files = ref([
    {
        tipe : 'gambar',
        source : '/prof02.jpg',
        judul : 'lorem ipsum testingo kajal galadin sadako 1'
    },
    {
        tipe : 'video',
        source : '/thumb2.mp4',
        judul : 'lorem ipsum testingo kajal galadin sadako 2'
    },
    {
        tipe : 'gambar',
        source : '/bg01.jpg',
        judul : 'lorem ipsum testingo kajal galadin sadako 3'
    },
    {
        tipe : 'gambar',
        source : '/rapim01.jpeg',
        judul : 'lorem ipsum testingo kajal galadin sadako 4'
    },
    {
        tipe : 'video',
        source : '/herovid.mp4',
        judul : 'lorem ipsum testingo kajal galadin sadako 5'
    },
    {
        tipe : 'gambar',
        source : '/sembako01.png',
        judul : 'lorem ipsum testingo kajal galadin sadako 6'
    },
    {
        tipe : 'gambar',
        source : '/prof01.jpg',
        judul : 'lorem ipsum testingo kajal galadin sadako 7'
    },
    {
        tipe : 'gambar',
        source : '/pengajian01.jpg',
        judul : 'lorem ipsum testingo kajal galadin sadako 8'
    },
    {
        tipe : 'video',
        source : '/thumb1.mp4',
        judul : 'lorem ipsum testingo kajal galadin sadako 9'
    },
])

onMounted( async () => {
        dataFiles.value = await files.value
    })

    
    const scrollToTop = () => {
        galleries.value.scrollIntoView({behavior : "smooth"})
    }
</script>

<style scoped>

</style>