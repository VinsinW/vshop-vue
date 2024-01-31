import { defineStore } from "pinia";
import {service} from "/@/service";
import {isEmpty} from "lodash-es";

export const useDiyPageStore = defineStore('diyPage', {
    state: () => ({
        basicPage:''
    }),
    getters:{
       getBasicPage(){
           return this.basicPage
       }
    },
    actions:{
        async setBasicPage(){
            const that = this
            function next(res){
                that.basicPage = res
            }
            if(isEmpty(this.basicPage)){
                await service.request('http://127.0.0.1:9000/src/json/1392.json').then(next)
            } else {
                next(this.basicPage)
            }
        }
    }
})