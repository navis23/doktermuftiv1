<template>
    <div>
        <!-- navbar for news page -->
        <client-only>
            <NavbarTwo />
        </client-only>

        <!-- news content -->
        <div ref="news" class="pt-24">
            <div class="relative px-4 md:px-24 pb-24">
                <div class="absolute left-0 rounded-r-full py-3 pl-4 pr-8 md:py-4 md:pl-24 md:pr-14 bg-red-700 text-gray-100">
                    <h3 class="font-oswald text-2xl md:text-3xl font-semibold">
                        Berita & Info
                    </h3>
                </div>
                <!-- news -->
                <div class="pt-24 pb-12">
                    <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
                        <div v-for="(item, index) in dataArticles" :key="index" class="relative flex flex-col lg:flex-row gap-x-3 border lg:h-56 rounded-lg bg-emerald-800 text-gray-100 px-3 py-3">
                            <img :src="item.gambar" alt="" class="object-cover lg:aspect-square rounded" loading="lazy">
                            <div class="flex flex-col mt-5 mb-20 lg:mb-0 lg:mt-0">
                                <div class="flex items-center gap-x-2 pb-4">
                                    <Icon name="ph:clock-bold" class="text-sm lg:text-base" />
                                    <p class="text-sm">{{ item.tanggal }}</p>
                                </div>
                                <p class="font-semibold text-sm lg:text-base">
                                    {{ item.judul }}
                                </p>
                            </div>
                            <button class="bg-gray-100 font-semibold text-sm absolute right-0 mr-3 bottom-0 mb-3 px-3 py-2 rounded text-gray-800 transition duration-200 hover:bg-red-700 hover:text-gray-100">
                                Baca Selengkapnya
                            </button>
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
    
    const news = ref()
    const dataArticles = ref()

        
    const articles = ref([
        {
            judul: 'Kerja Bantu Rakyat, Legislator Mufti Anam Bagikan 40.000 Paket Sembako',
            tanggal: '09/04/2023',
            gambar: '/sembako01.png',
            isi: 'lorem ipsum de lahoya captain tsubasa ichigo nat=ruto one piece llakat matatag',
        },
        {
            judul: 'Dihadiri Ribuan Warga, Dokter Mufti Bersholawat Berjalan Khidmat dan Meriah',
            tanggal: '01/01/2023',
            gambar: '/pengajian01.jpg',
            isi: 'lorem ipsum de lahoya captain tsubasa ichigo nat=ruto one piece llakat matatag',
        },
        {
            judul: 'Ayo Bersholawat Bareng Syubbanul Muslimin dan Dokter Mufti Anam di Pasuruan',
            tanggal: '30/03/2023',
            gambar: '/pengajian02.jpg',
            isi: 'lorem ipsum de lahoya captain tsubasa ichigo nat=ruto one piece llakat matatag',
        },
        {
            judul: 'Dokter Mufti Pimpin Repnas Jatim Galang Suara untuk Jokowi',
            tanggal: '22/02/2023',
            gambar: '/rapim01.jpeg',
            isi: 'lorem ipsum de lahoya captain tsubasa ichigo nat=ruto one piece llakat matatag',
        },
    ])

    onMounted( async () => {
        
        dataArticles.value = await articles.value
    })

    const scrollToTop = () => {
        news.value.scrollIntoView({behavior : "smooth"})
    }

</script>

<style scoped>

</style>