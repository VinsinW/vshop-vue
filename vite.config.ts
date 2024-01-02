import  path from "path"
import { ConfigEnv,UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
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
             resolvers:[
                 ElementPlusResolver(),
                 // 自动导入图标组件
                 IconsResolver({
                     prefix: 'Icon',
                 }),
             ],
         }),
         Components({
             resolvers:[
                 // 自动注册图标组件
                 IconsResolver({
                     enabledCollections: ['ep'],
                 }),
                 ElementPlusResolver(),
             ]
         }),
         Icons({
             compiler: 'vue3',
             autoInstall: true,
         }),
     ],
     base: "/",
     server: {
         host:'127.0.0.1',
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
