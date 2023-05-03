<template>
    <div>
        <!-- profile top -->
        <div ref="profile" class="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
            <div class="flex flex-col justify-center items-center relative bg-black bg-opacity-60 lg:bg-transparent z-30 p-5  w-full h-full">
                <!-- navbar for index / home page -->
                <client-only>
                    <Navbar />
                </client-only>
                <!-- main headings -->
                <div class="grid grid-cols-1 lg:grid-cols-2 lg:px-5">
                    <div>
                    </div>
                    <div class="flex flex-col items-start mt-60 lg:mt-0 bg-none lg:bg-black lg:bg-opacity-70 px-4 py-6 rounded-lg">

                        <h2 class="font-oswald text-3xl lg:text-4xl text-gray-100 font-bold uppercase mb-1 lg:mb-2">
                            <span class="text-red-700">MUFTI AIMAH</span> NURUL ANAM
                        </h2>
                        <span class="w-10 pb-1 mb-2 border-b-4 border-red-700"></span>
                        <h3 class="text-sm lg:text-base text-gray-100 font-medium lg:pt-2">
                            Lahir di Banyuwangi, 24 Desember 1987. Mufti Anam, begitu Ia akrab disapa, menghabiskan masa kecilnya di desa Karangdoro, Banyuwangi.
                            Lulus dari SD, Anam melanjutkan belajar sekaligus nyantri di Pondok Pesantren Darus Sholah, Jember. Selepas SMP, Anam kembali ke kampung halamannya bersekolah di SMAN 1 Genteng, Banyuwangi.
                        </h3>
                        <h3 class="text-sm lg:text-base text-gray-100 font-medium pt-3">
                            Sambil Nyantri di KH. Agoes Ali Masyhuri Ponpes Bumi Sholawat Sidoarjo, Mufti Anam melanjutkan pendidikannya dengan menempuh kuliah Pendidikan Dokter di Universitas Wijaya Kusuma (UWK) Surabaya sejak 2007 hingga meraih gelar dokter pada tahun 2012.
                        </h3>
                        <button @click="scrollFromHero()" class="mt-7 lg:mt-10 tracking-wide font-semibold py-2 pl-3 pr-5 border-2 border-gray-100 text-gray-100 transition duration-300 ease-in-out hover:bg-gray-100 hover:font-bold hover:text-gray-700 text-base rounded-full">
                            <Icon name="ph:arrow-down-bold" class="text-xl" />
                            BERKENALAN LEBIH JAUH
                        </button>         
                    </div>
                </div>

            </div>
            <!-- overlay video -->
            <img src="/prof01.jpg" class="absolute z-10 ml-72 lg:ml-0 w-auto min-w-full min-h-full max-w-none" alt="" loading="lazy">
            
        </div>
        <div ref="stopper" class="absolute bottom-0"></div>

        <!-- social & organization -->
        <div class="relative px-4 lg:px-24 pb-12">
            <div class="absolute left-0 rounded-r-full py-3 pl-4 pr-8 lg:py-4 lg:pl-24 lg:pr-14 bg-red-700 text-gray-100">
                <h3 class="font-oswald text-2xl lg:text-3xl font-semibold">
                    Sosial dan Organisasi
                </h3>
            </div>
            <div class="grid grid-cols-1 gap-5 lg:grid-cols-2 pt-24">
                <div>
                    <table class="w-full">
                        <tr v-for="(item, index) in dataSocials" :key="index">
                            <td class="py-3 whitespace-nowrap hidden lg:block">
                                <Icon :name="item.icon" class="text-xl text-red-700" />
                            </td>
                            <td class="py-3 pr-3 whitespace-nowrap">
                                <span class="text-xs py-1 px-2 font-semibold bg-red-200 bg-opacity-30 text-red-600 rounded-md">
                                    {{ item.tahun }}
                                </span>
                            </td>
                            <td class="py-3 text-sm lg:text-base">
                                {{ item.jabatan }}
                            </td>
                        </tr>
                        
                    </table>
                </div>
                <div class="p-6 bg-red-50 mt-3 rounded-lg">
                    <p class="text-sm lg:text-base">
                        Bagi Mufti Anam, ilmu yang diperoleh barulah bermakna jika dapat memberikan banyak manfaat bagi orang lain. Karena itu, Ia rajin mengikuti dan menggelar bakti sosial pengobatan, baik di Pasuruan, Banyuwangi, Surabaya, Sidoarjo, maupun daerah lainnya. Ia juga memiliki antusiasme tinggi bergabung dengan komunitas-komunitas yang bergerak di bidang sosial.
                    </p>
                    <p class="text-sm lg:text-base pt-3">
                        Di bidang organisasi, visi kepemimpinan Mufti Anam terasah sejak bangku sekolah dengan aktif menjadi ketua umum OSIS dan pengurus Ikatan Pelajar Nahdlatul Ulama (IPNU). Mufti dipercaya mengemban amanah di sejumlah organisasi, di antaranya Ketua Umum Himpunan Pengusaha Muda Indonesia (HIPMI) Jatim, pengurus Palang Merah Indonesia (PMI), pengurus Lembaga Kesehatan Nahdlatul Ulama (LKNU). Dia juga aktif sebagai anggota WKKT Ekspor-Impor Kamar Dagang Industri (KADIN) Jatim dan Komite Medis Asprov PSSI Jatim. Mufti juga bergabung di Ikatan Sarjana Nahdlatul Ulama (ISNU) serta organisasi kepemudaan PBB Junior Chamber International (JCI).
                    </p>
                </div>
            </div>
        </div>

        <!-- jobs & carriers -->
        <div class="relative px-4 lg:px-24 pb-12">
            <div class="absolute left-0 rounded-r-full py-3 pl-4 pr-8 lg:py-4 lg:pl-24 lg:pr-14 bg-red-700 text-gray-100">
                <h3 class="font-oswald text-2xl lg:text-3xl font-semibold">
                    Karir dan Pekerjaan
                </h3>
            </div>
            <div class="flex flex-col pt-24 pb-12">
                <!-- first -->
                <div class="order-2 flex flex-col lg:flex-row gap-3 py-3 justify-evenly lg:order-1">
                    <div class="text-base py-5 px-7 font-semibold bg-red-200 bg-opacity-30 text-red-600 rounded-md">
                        <p class="text-center">
                            Direktur Utama 
                        </p>
                        <p class="text-center">
                            PT. Anam Capital Indonesia
                        </p>
                    </div>
                    <div class="text-base py-5 px-7 font-semibold bg-red-200 bg-opacity-30 text-red-600 rounded-md">
                        <p class="text-center">
                            Anggota Legislatif 
                        </p>
                        <p class="text-center">
                            DPR RI Periode 2019-2024
                        </p>
                    </div>
                </div>

                <!-- second -->
                <div class="flex flex-col lg:flex-row items-center justify-evenly lg:py-8 order-1 lg:order-2">
                    <!-- second left -->
                    <div class="flex flex-col w-full lg:w-auto order-2 lg:order-1 gap-3 py-3 lg:gap-y-8">
                        <div class="text-base py-5 px-7 font-semibold bg-red-200 bg-opacity-30 text-red-600 rounded-md">
                            <p class="text-center">
                                Dokter 
                            </p>
                            <p class="text-center">
                                Maxine Clinic
                            </p>
                        </div>
                        <div class="text-base py-5 px-7 font-semibold bg-red-200 bg-opacity-30 text-red-600 rounded-md">
                            <p class="text-center">
                                Direktur Utama 
                            </p>
                            <p class="text-center">
                                PT. Maxine Abdi Medika
                            </p>
                        </div>
                    </div>

                    <!-- second middle -->
                    <div class="order-1 lg:order-2">
                        <img src="/prof02.jpg" alt="" class="rounded-lg lg:rounded-full w-96 h-96 object-cover ring-4 ring-offset-4 ring-red-700 " loading="lazy">
                    </div>

                    <!-- second right -->
                    <div class="flex flex-col w-full lg:w-auto order-3 lg:order-3 gap-3 lg:gap-y-8">
                        <div class="text-base py-5 px-7 font-semibold bg-red-200 bg-opacity-30 text-red-600 rounded-md">
                            <p class="text-center">
                                Dokter Internship
                            </p>
                            <p class="text-center">
                                RS Siti Khodijah 2015-2017
                            </p>
                        </div>
                        <div class="text-base py-5 px-7 font-semibold bg-red-200 bg-opacity-30 text-red-600 rounded-md">
                            <p class="text-center">
                                Dokter Koas 
                            </p>
                            <p class="text-center">
                                RSUD Bangil 2012-2014
                            </p>
                        </div>
                    </div>
                </div>

                <!-- third -->
                <div class="flex flex-col lg:flex-row gap-3 justify-evenly order-3 lg:order-3">
                    <div class="text-base py-5 px-7 font-semibold bg-red-200 bg-opacity-30 text-red-600 rounded-md">
                        <p class="text-center">
                            Owner 
                        </p>
                        <p class="text-center">
                            Dokter Sarung Indonesia
                        </p>
                    </div>
                    <div class="text-base py-5 px-7 font-semibold bg-red-200 bg-opacity-30 text-red-600 rounded-md">
                        <p class="text-center">
                            Owner 
                        </p>
                        <p class="text-center">
                            Osingningrat Batik Galeries
                        </p>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-1 gap-5 lg:grid-cols-2">
                <p class="font-oswald text-lg lg:text-3xl lg:pr-20 pb-5">
                    Bagi putra KH. Achmad Musayyidi dan menantu KH. Idris Hamid ini, kewirausahaan bukan hanya tentang Materi semata, tetapi yang terpenting bermakna sosial. Dengan berwirausaha, Mufti Anam merasa bisa mempunyai jalan untuk memberi manfaat kepada sesama.
                </p>
                <div class="border-t-2 lg:border-t-0 lg:border-l-2 border-red-700 lg:p-6 pt-4 lg:pt-0">
                    <p class="text-sm lg:text-base ">
                        Selain dikenal sebagai dokter yang aktif berorganisasi, Mufti Anam juga merintis sejumlah bisnis. Kehidupan sulit di masa kecil membuat pribadi Anam tertempa sekaligus membawanya untuk memasuki dunia bisnis yang penuh dinamika. Membentuk jiwa wirausaha sejak bangku sekolah dengan berjualan es lilin. sarung, dan kaus, kini Ia mempunyai sejumlah bisnis.
                    </p>
                    <p class="text-sm lg:text-base pt-3">
                        Mufti Anam menjalankan usaha esterika medis melalui Maxine Clinic dan VZ Skincare yang berbasis di Surabaya, Pasuruan dan Banyuwangi. Selain itu, ia kerap dikenal sebagai Dokter Sarung karena bisnis sarung tenunnya yang berfokus ke sarung bermodel pesanan tertentu untuk pembelian partai besar dan pasar ekspor.
                    </p>
                    <p class="text-sm lg:text-base pt-3">
                        Pria berkaca mata ini juga menggarap bisnis A6Trans, perusahaan transportasi yang menjadi vendor utama taksi berbasis online Uber Indonesia di Surabaya. Bidang manufaktur juga tak luput dijalankan oleh peraih penghargaan peserta terbaik diklatnas LEMHANAS 2016 ini melalui perusahaan ZoeOtto yg telah 10 tahun lebih dirintisnya.
                    </p>
                    
                </div>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-2 pt-10">
                
            </div>
        </div>

        <!-- collage -->
        <div class="relative px-4 lg:px-24 pb-24">
            <div class="absolute left-0 rounded-r-full py-3 pl-4 pr-8 lg:py-4 lg:pl-24 lg:pr-14 bg-red-700 text-gray-100">
                <h3 class="font-oswald text-2xl lg:text-3xl font-semibold">
                    Pendidikan
                </h3>
            </div>
            <div class="flex flex-col lg:flex-row flex-wrap gap-5 pt-24">
                <div v-for="(item, index) in dataEdus" :key="index" class="flex flex-col px-8 py-6 border rounded-lg gap-4 border-red-700">
                    <h3 class="font-oswald flex flex-col text-center items-center text-lg">
                        {{ item.institusi }}
                        <span class="font-montserrat font-medium text-base text-gray-500">{{ item.tahun }}</span>
                    </h3>
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

    const profile = ref()
    const stopper = ref()
    const dataSocials = ref()
    const dataEdus = ref()


    const socials = ref([
        {
            icon : 'ph:seal-check-fill',
            tahun : '2018 - 2021',
            jabatan : 'Ketua HIPMI Jawa Timur'
        },
        {
            icon : 'ph:seal-check-fill',
            tahun : '2018 - 2023',
            jabatan : 'Dewan Ahli ISNU Jawa Timur'
        },
        {
            icon : 'ph:seal-check-fill',
            tahun : '2017 - 2020',
            jabatan : 'Wakil Bendahara REI Jawa Timur'
        },
        {
            icon : 'ph:seal-check-fill',
            tahun : '2017 - 2020',
            jabatan : 'Komite Medis Pengrov PSSI Jawa Timur'
        },
        {
            icon : 'ph:seal-check-fill',
            tahun : '2014 - 2019',
            jabatan : 'Anggota WKKT Ekspor Impor KADIN Jawa Timur'
        },
        {
            icon : 'ph:seal-check-fill',
            tahun : '2014 - 2017',
            jabatan : 'Wakil Sekretaris umum BPD HIPMI Jawa Timur'
        },
        {
            icon : 'ph:seal-check-fill',
            tahun : '2017',
            jabatan : 'Ketua Umum Palang Merah Indonesia Banyuwangi'
        },
        {
            icon : 'ph:seal-check-fill',
            tahun : '2009 - 2012',
            jabatan : 'Wasekjend PP IPPNU'
        },
        {
            icon : 'ph:seal-check-fill',
            tahun : '2004 - 2005',
            jabatan : 'Ketua Umum OSIS SMAN 1 Arjasa'
        },
    ])

    const educations = ref([
        {
            institusi : 'SDN Karangdoro Banyuwangi',
            tahun : '1994 - 2000' 
        },
        {
            institusi : 'SMP Darus Sholah Jember',
            tahun : '2000 - 2003' 
        },
        {
            institusi : 'SMAN 1 Genteng Banyuwangi',
            tahun : '2003 - 2006' 
        },
        {
            institusi : 'S1 Pendidikan Universitas Wijaya Kusuma Surabaya',
            tahun : '2007 - 2012' 
        },
        {
            institusi : 'Diploma American Academy of Aesthetic Medicine',
            tahun : '2017 - 2017' 
        },
        {
            institusi : 'Ponpes Bumi Sholawat',
            tahun : '2006 - 2012' 
        },
        {
            institusi : 'Ponpes Mabadiul Ihsan',
            tahun : '2004 - 2006' 
        },
        {
            institusi : 'Ponpes Darussholah',
            tahun : '2002 - 2003' 
        },
        {
            institusi : 'TMI Al-Amien Prenduan',
            tahun : '2000 - 2002' 
        },
    ])

    onMounted( async () => {
        dataSocials.value = await socials.value
        dataEdus.value = await educations.value
    })

    
    const scrollToTop = () => {
        profile.value.scrollIntoView({behavior : "smooth"})
    }

    const scrollFromHero = () => {
        stopper.value.scrollIntoView({behavior : "smooth"})
    }

    
</script>

<style scoped>

</style>