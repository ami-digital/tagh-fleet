import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from "@vitejs/plugin-vue";
import path from 'path';
import { quasar, transformAssetUrls } from "@quasar/vite-plugin";
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
export default defineConfig({
    resolve: {
        alias: {
            "@": "/resources/ts",
            "@css": "/resources/css",
            "@img": "/resources/img",
            "@images": "/resources/assets/images",
            "@svg": "/resources/svg",
            "@components": "/resources/ts/core/components",
            "@layouts": "/resources/ts/layouts",
            "@pages": "/resources/ts/pages",
            "@plugins": "/resources/ts/plugins",
            "@router": "/resources/ts/router",
            "@store": "/resources/ts/store",
            "@types": "/resources/ts/types",
            "@utils": "/resources/ts/core/utils",
            'ziggy-js': path.resolve('vendor/tightenco/ziggy'),
        },
    },
    plugins: [
        laravel({
            input: ['resources/ts/app.ts'],
            refresh: true,
        }),
        vue({
            template: { transformAssetUrls },
        }),
        quasar({
            autoImportComponentCase: "combined",
            sassVariables: "@css/quasar-variables.sass",
        }),
        AutoImport({
            imports: [
                "vue",
                "@vueuse/core",
                "@vueuse/math",
                "pinia",

            ],
            vueTemplate: true,
            dts: true,
            dirs: ["resources/ts/core/composable"],
        }),
        Components({
            dirs: [
                "./resources/ts/core/components",
                "./resources/ts/core/components",
                "./resources/ts/layouts",
            ],
            extensions: ["vue", "md"],
            include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
            dts: true,
        }),
    ],
});
