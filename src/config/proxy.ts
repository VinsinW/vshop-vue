export const proxy = {
    "/dev/": {
        target: "https://student.hnmy0736.com/",
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/dev/, "")
    },

    "/prod/": {
        target: "https://oa.hnmy0736.com/",
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/prod/, "/api")
    }
};
