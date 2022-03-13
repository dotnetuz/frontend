module.exports = {
    presets: [
        "@babel/preset-env",
        '@vue/cli-plugin-babel/preset',
    ],
    plugins: [
        "@babel/plugin-transform-runtime",
        "@babel/plugin-transform-classes",
        "@babel/plugin-transform-async-to-generator",
        "@babel/plugin-transform-spread",
    ]
}
