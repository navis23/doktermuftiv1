<template>
    <div>
        <!-- hero -->
        <div ref="hero" class="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
            <div v-show="heroLive" class="hero2 flex flex-col justify-center items-center relative z-30 p-5 bg-black bg-opacity-50 w-full h-full">
                <!-- navbar for index / home page -->
                <client-only>
                    <Navbar />
                </client-only>
                <!-- main headings -->
                <h2 class="hero1 font-oswald text-3xl lg:text-4xl text-gray-100 font-medium tracking-wide uppercase">
                    dokter
                </h2>
                <h1 ref="heroBtn" class="font-oswald px-4 text-7xl sm:text-8xl lg:text-[12rem] text-gray-100 font-bold uppercase tracking-tight">
                    <span class="text-red-700">mufti</span>anam
                </h1>
                <h2 class="hero3 font-oswald text-lg lg:text-2xl text-gray-100 font-medium uppercase tracking-wide pt-3">
                    santri <span class="text-red-700 font-bold">mandiri</span> berbakti
                </h2>

                <button @click="scrollFromHero()" class="absolute bottom-0 mb-32 tracking-wide font-semibold py-2 pl-3 pr-5 border-2 border-gray-100 text-gray-100 transition duration-300 ease-in-out hover:bg-gray-100 hover:font-bold hover:text-gray-700 text-base rounded-full">
                    <Icon name="ph:arrow-down-bold" class="text-xl" />
                    BERKENALAN LEBIH JAUH
                </button>         
            </div>
            <!-- overlay video -->
            <video autoplay loop muted class="absolute z-10 w-auto min-w-full min-h-full max-w-none">
                <source src="~/assets/img/herovid.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            
        </div>
        <div ref="stopper" class="absolute bottom-0"></div>
        <!-- about us -->

        <div ref="about" class="w-full grid grid-cols-1 gap-4 lg:grid-cols-2 px-4 lg:px-30">
            <div class="flex flex-col justify-center lg:pl-20 lg:pr-5">
               
                <div class="note overflow-hidden flex flex-col items-center text-center">
                    <Icon name="ph:quotes-fill" class="mb-2 text-lg lg:text-2xl" />
                    <h3 class="font-oswald text-2xl lg:text-5xl">
                        Berikhtiar mengabdikan ilmu untuk masyarakat, bersilaturahmi menghimpun sahabat.
                    </h3>
                    <Icon name="ph:quotes-fill" class="mt-3 text-lg lg:text-2xl" />
                    <p class="mt-2 text-sm lg:text-base text-gray-500 italic font-medium">
                        dr. H. Mufti A. N. Anam Dipl. AAM
                    </p>
                </div>
            </div>
            <div class="box">
                <img src="/profile01.jpg" alt="" class="w-[30rem]" loading="lazy">
            </div>
        </div>

        <!-- latest videos -->
        <div class="lg:px-24 pb-16 lg:pb-24">
            <div class="px-4 py-8 bg-stone-100 lg:rounded-lg w-full">
                <div class="flex flex-col">
                    <h3 class=" font-oswald text-3xl pb-2 font-semibold"> 
                    Kegiatan Terkini
                    </h3>
                    <span class="w-10 pb-1 mb-2 border-b-4 border-red-700"></span>
                </div>
                <div class="grid grid-cols-1 pt-8 gap-x-6 gap-y-10  lg:grid-cols-3 ">
                    <div v-for="(item, index) in dataVideos" :key="index" class="group">
                        <div class="flex flex-col gap-y-2 cursor-pointer transition duration-300 ease-in-out group-hover:scale-105">
                            <video controls class="w-full rounded-lg">
                                <source :src="item.video" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <div class="flex justify-start items-start gap-x-2">
                                <span class="w-5 pb-1 mb-2 border-b-4 border-red-700"></span><p class="text-sm transition duration-500 ease-in-out group-hover:font-semibold">{{ item.judul }}</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>

        <!-- the testimonies -->
        <div class="px-4 lg:px-24 pb-12">
            <div class="grid grid-cols-1  gap-5 lg:grid-cols-2">
                <div class="flex border-b-4 border-red-700 place-self-start">
                    <div class="flex flex-col justify-start">
                        <Icon name="ph:quotes-fill" class="mb-1 text-base lg:text-lg" />
                        <h3 class="font-oswald text-base font-light lg:text-2xl">
                            Mufti Anam adalah anak muda yang ulet. Setiap ketemu dengan saya, dia selalu bilang untuk datang ke Pasuruan meresmikan Pesantrenpreneur. Sukses untuk para pegiat Pesantrenpreneur.
                        </h3>
                        <Icon name="ph:quotes-fill" class="mt-2 text-base lg:text-lg" />
                        <p class="mt-2 text-xs lg:text-base text-gray-700 italic font-medium">
                            Ir. H. Joko Widodo (Jokowi)
                        </p>
                        <p class="mb-5 text-xs lg:text-sm text-gray-500 italic font-medium">
                            Presiden Republik Indonesia ke-7
                        </p>
                    </div>

                    <div class="flex justify-end">
                        <img src="/pakjokowi.png" alt="" class="w-[38rem] object-scale-down object-bottom lg:max-w-xs" loading="lazy">
                    </div>
                </div>

                <div class="flex flex-col gap-2">
                    <div v-for="(item, index) in dataTestimonies" :key="index" class="flex flex-col border rounded-lg gap-2 border-gray-200 transition duration-200 ease-in-out hover:border-red-600 hover:border-2 p-2">
                        <div class="flex items-center gap-x-3">
                            <div class="w-14">
                                <img :src="item.foto" alt="" class="object-cover border-red-700 border-2 rounded-full" loading="lazy">
                            </div>
                            <h3 class="font-oswald flex flex-col text-base">
                                {{ item.nama }}
                                <span class="font-montserrat font-medium text-xs text-gray-400">{{ item.jabatan }}</span>
                            </h3>
                        </div>
                        <p class="text-xs">
                            {{ item.testi }}
                        </p>
                    </div>
                   
                </div>
            </div>
        </div>

        <!-- news -->
        <div class="px-4 lg:px-24 pt-6 pb-12">
            <div class="flex flex-col pb-6">
                <h3 class=" font-oswald text-3xl pb-2 font-semibold"> 
                    Ragam Artikel
                </h3>
                <span class="w-10 pb-1 mb-2 border-b-4 border-red-700"></span>
            </div>
            <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <div v-for="(item, index) in dataArticlesHome" :key="index" class="relative flex flex-col lg:flex-row gap-x-3 border lg:h-56 rounded-lg bg-emerald-800 text-gray-100 px-3 py-3">
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

        <!-- contacts -->
        <div class="px-4 lg:px-24 bg-red-700 text-gray-100">
            <div class="grid grid-cols-1 lg:justify-items-center py-14">
                <h2 class="font-oswald font-semibold text-5xl lg:text-7xl tracking-wide uppercase pb-9">
                    get in touch
                </h2>
                <!-- address -->
                <div class="group">
                    <a href="https://goo.gl/maps/ZW3RXvLcY9RtaEvx5" target="_blank" class="font-semibold text-sm lg:text-xl flex items-center justify-center gap-x-4 tracking-wide pb-3">
                        <Icon name="ph:map-pin-line-fill" class="text-7xl lg:text-4xl transition duration-200 ease-in-out group-hover:scale-125" />
                        <span>Rumah Aspirasi Perum Pondok Surya Kencana II Blok E No 5 Pasuruan, Jawa Timur</span>
                    </a>
                </div>

                <!-- sosmed -->
                <div class="flex flex-col lg:flex-row gap-3 lg:gap-x-6 lg:mt-6 justify-start lg:justify-between">
                    <div class="group">
                        <a href="https://www.instagram.com/mufti.anam/" target="_blank" class="flex gap-x-4 items-center lg:flex-col lg:gap-y-2 lg:text-center lg:px-3">
                            <Icon name="ph:instagram-logo-fill" class="text-4xl transition duration-200 ease-in-out group-hover:scale-125"/>
                            <p class="text-sm lg:text-lg font-semibold">mufti.anam</p>
                        </a>
                    </div>
                    <div class="group">
                        <a href="mailto: doktermufti33@gmail.com" target="_blank" class="flex gap-x-4 items-center lg:flex-col lg:gap-y-2 lg:text-center lg:px-3">
                            <Icon name="ph:envelope-simple-open-fill" class="text-4xl transition duration-200 ease-in-out group-hover:scale-125"/>
                            <p class="text-sm lg:text-lg font-semibold">doktermufti33@gmail.com</p>
                        </a>
                    </div>
                    <div class="group">
                        <a href="https://www.linkedin.com/in/muftianam/" target="_blank" class="flex gap-x-4 items-center lg:flex-col lg:gap-y-2 lg:text-center lg:px-3">
                            <Icon name="ph:linkedin-logo-fill" class="text-4xl transition duration-200 ease-in-out group-hover:scale-125"/>
                            <p class="text-sm lg:text-lg font-semibold">muftianam</p>
                        </a>
                    </div>
                </div>

                <div class="mt-8 mb-3 flex items-center gap-x-3">
                    <Icon name="ph:link-simple-bold" class="text-4xl"/>
                    <h3 class="font-semibold text-sm lg:text-lg">Terhubung langsung</h3>
                </div>
                <div class="flex flex-col lg:flex-row justify-center gap-5 lg:items-end border-2 rounded-lg px-5 py-6">
                    <div class="flex flex-col gap-y-1">
                        <label for="nama" class="">Nama</label>
                        <input type="text" name="nama" id="" class="rounded text-gray-800 px-2 py-2 text-sm lg:w-60" placeholder="Isi nama anda">
                    </div>
                    <div class="flex flex-col gap-y-1">
                        <label for="telepon" class="">Telepon</label>
                        <input type="number" name="telepon" id="" class="rounded text-gray-800 px-2 py-2 text-sm lg:w-60" placeholder="Isi nomor anda">
                    </div>
                    <div class="flex flex-col gap-y-1">
                        <label for="email" class="">email</label>
                        <input type="text" name="email" id="" class="rounded text-gray-800 px-2 py-2 text-sm lg:w-60" placeholder="Isi email anda">
                    </div>
                    <button class="bg-emerald-800 pl-5 pr-6 py-2 text-sm rounded flex items-center justify-center gap-x-2">
                        <Icon name="ph:arrow-square-out-bold" class="text-2xl"/>
                        kirim
                    </button>
                </div>
                <!-- website -->
                <h3 class="font-bold text-lg lg:text-2xl flex items-end gap-x-4 tracking-wide py-4 mt-4">
                    <Icon name="ph:globe-simple-bold" size="32"/>
                    <span class="underline underline-offset-1">
                        www.doktermufti.com
                    </span>
                </h3>
            </div>
            
        </div>
        <!-- footer -->
        <Footer />

        <!-- scroll to top -->
        <ScrollTop  @click="scrollToHero()"/>
    </div>
  </template>
  
  
<script setup lang="ts">
import gsap from 'gsap';

const hero = ref()
const about = ref()
const stopper = ref()
const heroBtn = ref(null)
const heroLive = ref(false)

let ctx:any;

const dataTestimonies = ref()
const dataVideos = ref()
const dataArticlesHome = ref()

const testimonies = ref([
    {
        nama: 'Pramono Anung',
        jabatan: 'Sekretaris Kabinet Pemerintah Indonesia',
        testi : 'Mufti Anam adalah sosok anak muda yang berpikiran maju, selalu terbuka pada masukan, dan punya semangat tinggi untuk memberi manfaat ke orang lain. Cita-citanya adalah berguna bagi banyak orang, dan itu diterjemahkannya dalam beragam aktivitas kewirausahaan sosial.',
        foto: '/testi-pramono.jpg'
    },
    {
        nama: 'Bahlil Lahadalia',
        jabatan: 'Ketua umum Badan Pengurus Pusat HIPMI',
        testi : 'Saya kenal Mufti Anam sekitar tiga tahun ini. Dia sosok yang tidak hanya energik khas anak muda, tapi juga punya keinginan untuk berkembang yang luar biasa. Dia tidak segan belajar. Rajin menimba pengalaman dari para senior yang sudah sukses.',
        foto: '/testi-bahlil.jpg'
    },
    {
        nama: 'KH Agoes Ali Masyhuri',
        jabatan: 'Pengasuh Ponpes Progresif Bumi Sholawat',
        testi : 'Mufti Anam ini saya bilang orang yang tidak kenal malu kalau mau belajar. Pengajian sering datang. Yang lain pulang, dia masih saja tanya-tanya ke saya.',
        foto: '/testi-agoes.jpg'
    },
    {
        nama: 'Lussy Agustin',
        jabatan: 'HIPMI Perguruan Tinggi',
        testi : 'Mas Mufti Anam senang melibatkan anak-anak muda untuk mendukung bisnisnya. Dia tidak mau maju sendirian. Kalau sukses, kita harus sukses bersama.',
        foto: '/testi-lussy.jpg'
    },
])

const videos = ref([
    {
        judul : 'Profil Dokter Mufti Anam',
        video : '/herovid.mp4'
    },
    {
        judul : 'Bersholawat bersama Dokter Mufti',
        video : '/thumb1.mp4'
    },
    {
        judul : 'Safari Ramadhan bersama Dokter Mufti',
        video : '/thumb2.mp4'
    },
    
])

const articlesHome = ref([
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
    dataTestimonies.value = await testimonies.value
    dataVideos.value = await videos.value
    dataArticlesHome.value = await articlesHome.value
    await aboutGsap()
})

// onUnmounted(() => {
//     ctx.revert();
// })

const aboutGsap = async () => {
    heroLive.value = true
    // ctx = gsap.context((self) => {
    //     const boxes = self.selector('.box');
    //     boxes.forEach((box : any) => {
    //     gsap.to(box, {
    //         x: 150,
    //         scrollTrigger: {
    //         trigger: box,
    //         start: 'bottom bottom',
    //         end: 'top 20%',
    //         scrub: true,
    //         },
    //     });
    //     });
    // }, about.value);

    ctx = gsap.context(() => {

        // animate hero
        const tl = gsap.timeline()
        tl.from('.hero2', {
            scaleX: 0,
            duration: 1,
            ease: 'Power2.easeOut'
        }).from(heroBtn.value, {
            duration: 1,
            x: '+300',
            autoAlpha: 0,
            ease: 'back.out(1.7)'
        }).from('.hero1', {
            autoAlpha: 0,
            duration: 1
        }).from('.hero3', {
            scale: 0,
            duration: 0.5
        })

        // animate about
        gsap.from('.note', {
            x: -150,
            opacity: 0,
            duration: 1,
            stagger: 0.3,
            scrollTrigger: {
                trigger: '.note',
                start: 'bottom bottom',
                end: 'top 20%',
                // scrub: true,
                // markers: true
            },
        })
    
        gsap.from('.box', {
            scale: 0,
            duration: 1,
            stagger: 0.3,
            scrollTrigger: {
                trigger: '.box',
                start: 'bottom bottom',
                end: 'top 20%',
                // scrub: true,
                // markers: true
            },
        })
    })

}

const scrollToHero = () => {
    hero.value.scrollIntoView({behavior : "smooth"})
}

const scrollFromHero = () => {
    stopper.value.scrollIntoView({behavior : "smooth"})
}

</script>

<style scoped>

</style>