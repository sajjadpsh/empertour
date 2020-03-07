const builtAt = new Date().toISOString()
const path = require('path')

const { I18N } = require('./locales/i18n-nuxt-config')
import fs from 'fs'
import Mode from "frontmatter-markdown-loader/mode"
import MarkdownIt from 'markdown-it'
import mip from 'markdown-it-prism'

function getPaths(lang, type) {
    let initial = lang
    if (lang === 'en') { initial = '' }
    return fs.readdirSync(path.resolve(__dirname, 'contents', `${lang}/${type}`))
        .filter(filename => path.extname(filename) === '.md')
        .map(filename => `${initial}/${type}/${path.parse(filename).name}`)
}

const md = new MarkdownIt({
    html: true,
    typographer: true
})
md.use(mip)

const productionUrl = {
    en: "/en",
    es: "/es"
};
const baseUrl = 'http://blogapi.empertour.ir';

module.exports = {
    env: {
        baseUrl,
        productionUrl
    },
    head: {
        title: 'Marina Aisa | Product Designer & Front-end Developer',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no' },
            { name: 'msapplication-TileColor', content: '#ffffff' },
            { name: 'msapplication-TileImage', content: '/favicons/mstile-144x144.png' },
            { name: 'theme-color', content: '#c1c1c1' },
            { name: 'robots', content: 'index, follow' },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:site', content: '@marinaaisa' },
            { property: 'og:type', content: 'profile' },
            { property: 'og:updated_time', content: builtAt }
        ],
        link: [
            { rel: 'icon', type: 'image/png', href: '/favicons/favicon-16x16.png', sizes: '16x16' },
            { rel: 'icon', type: 'image/png', href: '/favicons/favicon-32x32.png', sizes: '32x32' },
            { rel: 'icon', type: 'image/png', href: '/favicons/android-chrome-96x96.png', sizes: '96x96' },
            { rel: 'icon', type: 'image/png', href: '/favicons/android-chrome-192x192.png', sizes: '192x192' },
            { rel: 'apple-touch-icon', href: '/favicons/apple-touch-icon-57x57.png', sizes: '57x57' },
            { rel: 'apple-touch-icon', href: '/favicons/apple-touch-icon-60x60.png', sizes: '60x60' },
            { rel: 'apple-touch-icon', href: '/favicons/apple-touch-icon-72x72.png', sizes: '72x72' },
            { rel: 'apple-touch-icon', href: '/favicons/apple-touch-icon-76x76.png', sizes: '76x76' },
            { rel: 'apple-touch-icon', href: '/favicons/apple-touch-icon-114x114.png', sizes: '114x114' },
            { rel: 'apple-touch-icon', href: '/favicons/apple-touch-icon-120x120.png', sizes: '120x120' },
            { rel: 'apple-touch-icon', href: '/favicons/apple-touch-icon-144x144.png', sizes: '144x144' },
            { rel: 'apple-touch-icon', href: '/favicons/apple-touch-icon-152x152.png', sizes: '152x152' },
            { rel: 'apple-touch-icon', href: '/favicons/apple-touch-icon-180x180.png', sizes: '180x180' },
            { rel: 'mask-icon', type: 'image/png', href: '/favicons/safari-pinned-tab.svg', color: '#c1c1c1' },
            {
                href: 'http://www.fontonline.ir/css/BYekan.css',
                rel: 'stylesheet',
                type: 'text/css'
            },
            {
                rel: "stylesheet",
                href: "/css/animate.css"
            },
            {
                rel: "stylesheet",
                href: "/css/bootstrap.min.css"
            },
            {
                rel: "stylesheet",
                href: "/css/font-awesome.min.css"
            },
            {
                rel: "stylesheet",
                href: "/css/jquery-ui.css"
            },
            {
                rel: "stylesheet",
                href: "/css/owl.carousel.min.css"
            },
            {
                rel: "stylesheet",
                href: "/css/owl.theme.default.min.css"
            },
            {
                rel: "stylesheet",
                href: "/css/responsive.css"
            },
            {
                rel: "stylesheet",
                href: "/css/style.css"
            },
        ],
    },
    script: [
        // { src: 'js/jquery-3.2.0.min.js', type: "text/javascript" },
        { src: 'https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js' },
        { src: 'https://code.jquery.com/jquery-3.4.1.slim.min.js' },
        { src: 'js/jquery-ui.js', type: "text/javascript" },
        { src: 'js/owl.carousel.min.js', type: "text/javascript" },
        { src: 'js/jquery.counterup.min.js', type: "text/javascript" },
        { src: 'js/jquery.scrollUp.js', type: "text/javascript" },
        { src: 'js/jquery.waypoints.min.js', type: "text/javascript" },
        // { src: 'js/bootstrap.min.js', type: "text/javascript" },
        { src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js' },
        { src: 'js/theme.js', type: "text/javascript" },
        { src: 'js/gmaps.js', type: "text/javascript" },
    ],
    /*
     ** Customize the progress-bar color
     */
    loading: {
        color: '#5a46ff',
        height: '3px'
    },
    /*
     ** Build configuration
     */
    css: [
        'normalize.css/normalize.css',
        '@/assets/css/prism-material-light.css',
    ],

    plugins: ['plugins/lazyload',
        'plugins/globalComponents',
        {
            src: '~plugins/ga.js',
            ssr: false
        },
        "~plugins/bootstrap.js",
        '~/plugins/axios'
        // { src: '~plugins/jquery-3.2.0.min.js', ssr: false },
        // "~plugins/owl.carousel.min.js"
    ],

    build: {
        extend(config) {
            const rule = config.module.rules.find(r => r.test.toString() === '/\\.(png|jpe?g|gif|svg|webp)$/i')
            config.module.rules.splice(config.module.rules.indexOf(rule), 1)
            config.module.rules.push({
                test: /\.md$/,
                loader: 'frontmatter-markdown-loader',
                include: path.resolve(__dirname, 'contents'),
                options: {
                    mode: [Mode.VUE_RENDER_FUNCTIONS, Mode.VUE_COMPONENT],
                    vue: {
                        root: "dynamicMarkdown"
                    },
                    markdown(body) {
                        return md.render(body)
                    }
                }
            }, {
                test: /\.(jpe?g|png)$/i,
                loader: 'responsive-loader',
                options: {
                    placeholder: true,
                    quality: 60,
                    size: 1400,
                    adapter: require('responsive-loader/sharp')
                }
            }, {
                test: /\.(gif|svg)$/,
                loader: 'url-loader',
                query: {
                    limit: 1000,
                    name: 'img/[name].[hash:7].[ext]'
                }
            }, );
        }
    },

    modules: [
        '@nuxtjs/style-resources', ['nuxt-i18n', I18N],
        'nuxt-webfontloader', ['@nuxtjs/axios', { debug: true }],
        '@nuxtjs/auth'
    ],

    auth: {
        // Options
    },

    axios: {
        proxyHeaders: false
            // proxy: 'http://localhost:3000'
    },

    // router: {
    //     middleware: ['auth']
    // },

    styleResources: {
        scss: [
            '@/assets/css/utilities/_variables.scss',
            '@/assets/css/utilities/_helpers.scss',
            '@/assets/css/base/_grid.scss',
            '@/assets/css/base/_buttons.scss'
        ],
        // css: [
        //     '/css/bootstrap.min.css',
        //     '/css/animate.css',
        //     '/css/font-awesome.min.css',
        //     '/css/jquery-ui.css',
        //     '/css/owl.carousel.min.css',
        //     '/css/owl.theme.default.min.css',
        //     '/css/responsive.css',
        //     '/css/style.css'
        // ]
    },

    webfontloader: {
        custom: {
            families: ['Graphik', 'Tiempos Headline'],
            urls: ['/fonts/fonts.css']
        }
    },

    generate: {
        routes: [
                '/es', '404'
            ]
            .concat(getPaths('es', 'blog'))
            .concat(getPaths('en', 'blog'))
    }
}