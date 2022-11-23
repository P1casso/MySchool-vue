const {defineConfig} = require('@vue/cli-service')
const {VantResolver} = require('unplugin-vue-components/resolvers')
const ComponentsPlugin = require('unplugin-vue-components/webpack')
module.exports = defineConfig({
    transpileDependencies: true,

    pluginOptions: {
      vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
    }
})

module.exports = {
    configureWebpack: {
        plugins: [
            ComponentsPlugin({
                resolvers: [VantResolver()],
            }),
        ],
    },

    devServer: {
        port: 8087
    },

    pluginOptions: {
      vuetify: {}
    }
};
