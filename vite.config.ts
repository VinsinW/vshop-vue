import  path from "path"
import { ConfigEnv,UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import {viteCreateSvg} from "/@/utils/svg";
import {proxy} from "./src/config/proxy";

function _resolve(dir:string){
    return path.resolve(__dirname,'.',dir)
}

export default ({mode}:ConfigEnv):UserConfig=>{
 return {
     plugins: [
         vue(),
         viteCreateSvg(),
         AutoImport({
             imports: ['vue','vue-router'],
             resolvers:[ElementPlusResolver()]
         }),
         Components({
             resolvers:[ElementPlusResolver()]
         })
     ],
     base: "/",
     server: {
         host:'172.16.100.6',
         port: 9000,
         proxy,
         hmr: {
             overlay: true
         }
     },
     css: {
         preprocessorOptions: {
             scss: {
                 charset: false
             }
         }
     },
     resolve: {
         alias: {
             "/@": _resolve("src"),
             "/#": _resolve("types"),
             "/$": _resolve("src/modules")
         },
         extensions:['.vue','.ts']
     },
 }
}
