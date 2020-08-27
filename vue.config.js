const webpack = require("webpack");
module.exports = {

    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery',
                Popper: ['popper.js', 'default']
            })
        ],
        externals:{
            'vue': 'Vue',
            'vue-router': 'VueRouter',
            'vuex':'Vuex',
            'element-ui':'ElementUI',
            'swiper':'Swiper',
            'axios':'axios',
            'video.js':'Video',
            'vue-i18n':'VueI18n',
            // 'vee-validate':'ValidationProvider',
            // 'vee-validate':'extend',
            // 'vee-validate':'localize',
        },
    },
    publicPath:'/',
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:8888',
                changeOrigin:"true",
                pathRewrite: {
                    '^/api': 'http://localhost:8888'
                }
            },
            '/loginapi':{
                target: 'http://localhost:8888/mylogin',
                changeOrigin: true,
                pathRewrite: {
                    '^/loginapi': ''
                }
            },
            '/registerapi':{
                target: 'http://localhost:8888/register/',
                changeOrigin: true,
                pathRewrite: {
                    '^/registerapi': ''
                }
            },
            '/getallterm':{
                target: 'http://localhost:8888/term/',
                changeOrigin: true,
            },
        },
    }
}
