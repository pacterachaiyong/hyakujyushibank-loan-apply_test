const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    // publicPath: '/chibabank/cbapp',
    lintOnSave: true,
    productionSourceMap: false,
    devServer: {
        port: 9000, // 端口号
        host: '0.0.0.0',
        https: false, //
        open: false, //配置自动启动浏览器
        // 配置跨域处理,只有一个代理
        proxy: {
            '/pc-service-core': {
                target: 'http://127.0.0.1:9000/',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/pc-service-core': '/pc-service-core'
                }
            },
            '/mock': {
                target: 'https://hyakujyushibank-api-stg.api.minefocus.jp/', // 组件服务
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/mock': ''
                }
            },
            '/map': {
              target: 'https://map.yahooapis.jp', // 组件服务
              ws: true,
              changeOrigin: true,
              pathRewrite: {
                '^/map': ''
              }
            }
        }
    },

    // css: {
    //     loaderOptions: {
    //         sass: {
    //             data: '@import "@/assets/scss/variable.scss";'
    //         }
    //     },
    //     extract: false
    // },

    //从@vue/cli-service/lib/config/prod.js拷贝,进行自定义
    chainWebpack: webpackConfig => {
        if (process.env.NODE_ENV === 'production') {
            const Version = new Date().getTime()
            const isLegacyBundle = process.env.VUE_CLI_MODERN_MODE && !process.env.VUE_CLI_MODERN_BUILD
            const getAssetPath = require('./src/libs/vueUtils/getAssetPath')
            const filename = getAssetPath({}, `js/[name]${isLegacyBundle ? `-legacy` : ``}${'.[contenthash:8]'}-${Version}.js`)

            webpackConfig
                .mode('production')
                .devtool(false)
                .output.filename(filename)
                .chunkFilename(filename)

            //自动切换cdn.html模板
            webpackConfig
                .mode('production')
                .plugin('html')
                .tap(args => {
                    args[0].template = resolve('/public/index.cdn.html')
                    return args
                })
        }
        //eslint自动格式化
        webpackConfig.module
            .rule('eslint')
            .use('eslint-loader')
            .tap(options => {
                options.fix = true
                return options
            })
    },

    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            // config.plugins.push(new BundleAnalyzerPlugin())
            config.entry = {
                app: ['./src/main.cdn.ts']
            }
            config.externals = {
                lodash: '_',
                vue: 'Vue',
                'vue-router': 'VueRouter',
                vuex: 'Vuex',
                'element-ui': 'ELEMENT',
                axios: 'axios',
                // highcharts: 'Highcharts',
                // // echarts: 'echarts',
                // // 'v-charts': 'VeIndex',
                sortablejs: 'Sortable'
            }

            //去除console
            config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
            config.optimization.minimizer[0].options.terserOptions.compress.drop_debugger = true
            config.optimization.minimizer[0].options.terserOptions.compress.pure_funcs = ['console.log']
        } else {
            config.plugins.push(
                new HardSourceWebpackPlugin({
                    cacheDirectory: '../.cache/hard-source/[confighash]'
                })
            )
        }
    }
}
