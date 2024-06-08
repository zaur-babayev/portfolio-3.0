const path = require("path")
const { library } = require("webpack")

module.exports = {
    mode: "production",
    entry: {
        ["global"]: "./src/index.js",
    },

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
        library: "[name]",
        libraryTarget: "umd",
        globalObject: "this",
        umdNamedDefine: true,
        clean: true,
    },
}