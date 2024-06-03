export const proxy = {
    "/dev/": {
        target: "https://zb-test.jslife.net/",
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/dev/, "")
    },

    "/prod/": {
        target: "https://zb-test.jslife.net/",
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/prod/, "/api")
    }
};
