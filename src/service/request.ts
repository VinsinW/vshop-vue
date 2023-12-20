import axios from "axios";
import NProgress from 'nprogress'

export const request = axios.create({
    withCredentials: true, // 跨域请求时发送Cookie
    timeout: 60000, // 请求超时
    headers: {
        "Content-Type": "application/json; charset=UTF-8;"
    }
});

NProgress.configure({
    showSpinner: true
});

//请求队列
let queue:Array<(token:string)=>void> = [];

//是否刷新中
let isRefreshing =false;

request.interceptors.request.use(
    (req:any)=>{
        if (req.url) {
            // 请求进度条
            NProgress.start();

            //请求记录
            console.group(req.url);
            console.log("method:", req.method);
            console.table("data:", req.method == "get" ? req.params : req.data);
            console.groupEnd();
        }
        return req;
    }
)

request.interceptors.response.use(
    (res) => {
        NProgress.done();

        console.log(res.data);
        if (!res?.data) {
            return res;
        }
    }
)