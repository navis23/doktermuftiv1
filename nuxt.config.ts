// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            charset: 'utf-16',
            viewport: 'width=device-width, initial-scale=1',
            title: 'Dokter Mufti Anam',
            meta: [
            // <meta name="description" content="My amazing site">
                { name: 'description', content: 'Jelajahi profil dan kegiatan Dokter Mufti Anam' }
            ],
        },
        pageTransition: { name: 'slide-fade', mode: 'out-in' }
    },
    css: ['~/assets/css/main.css'],
    modules: [
        'nuxt-icon',
        '@nuxtjs/google-fonts'
    ],
    build: {
        transpile: ['gsap'],
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    googleFonts: {
        preload: true,
        download: true,
        families: {
            Montserrat : [300, 400, 500, 600, 700, 800, 900],
            Oswald : [300, 400, 500, 600, 700],
            Alegreya : [400, 500, 600, 700, 800, 900],

        }
    }
})
