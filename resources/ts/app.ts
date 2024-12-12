import './bootstrap';
import '../css/app.sass';
import "@quasar/extras/material-icons/material-icons.css";
import "@quasar/extras/mdi-v6/mdi-v6.css";
import "quasar/src/css/index.sass";
import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import MainLayout from "@/layouts/MainLayout.vue";
import {ZiggyVue} from 'ziggy-js';
import {Dialog, LoadingBar, Notify, Quasar} from "quasar";
import quasarIconSet from "quasar/icon-set/svg-mdi-v7";

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'TAGH FLEET';
createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: name => {
        const pages = import.meta.glob('./pages/**/*.vue', { eager: true })
        let page = pages[`./pages/${name}.vue`]
        page.default.layout = page?.default?.layout || MainLayout
        return page
    },
    setup({ el, App, props, plugin }) {
        const app = createApp({render: () => h(App, props)})
        app.use(Quasar, {
            plugins: {
                LoadingBar,
                Dialog,
                Notify,
            }, // import Quasar plugins and add here
            iconSet: quasarIconSet,
        })
            .use(plugin)
            .use(ZiggyVue, (window as any).Ziggy)
        app.mount(el);
    },
    progress: false
})
