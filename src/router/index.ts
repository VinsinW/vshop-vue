import {createRouter, createWebHistory, Router, RouteRecordRaw, RouterOptions} from "vue-router";
import Layout from '/@/layout'
import {useStore} from "/@/store";
import { Loading } from "../utils";


// 扫描文件
const files = import.meta.glob(["/src/modules/*/{views,pages}/**/*", "!**/template"]);

const routes:RouteRecordRaw[] = [
    {
        path: "/login",
        component: () => import("/@/pages/login/Login"),
    },
    {
        path: "/",
        component: Layout,
        children:[{
            name:'home',
            path:"/",
            component: () => import("/@/pages/home/Index"),
        },{
            name:'decorate',
            path:"/decorate/page",
            component: () => import("/@/pages/decorate/page"),
        },{
            name:'decorate',
            path:"/decorate/index",
            component: () => import("/@/pages/decorate/Index"),
        },{
            name:'/decorate',
            path:"/decorate/editor",
            component: () => import("/@/pages/decorate/editor"),
        },{
            name:'/3d',
            path:"/3d/index",
            component: () => import("/@/pages/3d"),
        },{
            name:'/finance',
            path:"/finance/index",
            component: () => import("/@/pages/finance"),
        }]
    }
];

// 创建路由器
const router = createRouter(<RouterOptions>{
    history: createWebHistory(),
    routes
}) as Router;


// 组件加载后
router.beforeResolve(() => {
    Loading.close();
});

let lock = false;

// 错误监听
router.onError((err: Error) => {
    if (!lock) {
        lock = true;

        ElMessage.error(`页面存在错误：${err.message}`);
        console.error(err);

        setTimeout(() => {
            lock = false;
        }, 0);
    }
});


// 添加试图，页面路由
router.append = function (data) {
    const list = isArray(data) ? data : [data];

    list.forEach((d) => {
        if (!d.meta) {
            d.meta = {};
        }

        // 组件路径
        if (!d.component) {
            const url = d.viewPath;

            if (url) {
                // if (url.indexOf("http") == 0) {
                //     if (d.meta) {
                //         d.meta.iframeUrl = url;
                //     }
                //
                //     d.component = () => import("/@/views/frame.vue");
                // } else {
                //     d.component = files["/src/" + url.replace("cool/", "")];
                // }
            } else {
                d.redirect = "/404";
            }
        }

        // 是否动态添加
        d.meta.dynamic = true;

        if (d.isPage) {
            router.addRoute(d as any);
        } else {
            router.addRoute("index", d as any);
        }
    });
};

// 清空路由
router.clear = function () {
    const rs = router.getRoutes();

    rs.forEach((e) => {
        if (e.name && e.meta?.dynamic) {
            router.removeRoute(e.name);
        }
    });
};

// 找路由
router.find = function (path: string) {
    return router.getRoutes().find((e) => {
        if (path == "/") {
            return e.path == path && e.name != "index";
        } else {
            return e.path == path;
        }
    });
};


// 注册
router.register = async function (path: string) {
    // 当前路由是否注册
    const isReg = Boolean(router.find(path));



    if (!isReg) {
        const { menu } = useStore();


        // 等待应用配置加载完
        await Loading.wait();

        // 待注册列表
        const list: any[] = [];

        console.log(menu)
        // 动态菜单数据
        menu.routes.find((e) => {
            list.push({
                ...e,
                isPage: e.viewPath?.includes("/pages")
            });
        });

        // 本地模块数据
        module.list.forEach((e) => {
            if (e.views) {
                list.push(...e.views);
            }

            if (e.pages) {
                list.push(
                    ...e.pages.map((d) => {
                        return {
                            ...d,
                            isPage: true
                        };
                    })
                );
            }
        });

        // 需要注册的路由
        const r = list.find((e) => e.path == path);

        if (r) {
            router.append(r);
        }
    }

    return { route: router.find(path), isReg };
};

// 路由守卫
router.beforeEach(async (to, from, next) => {
    // 数据缓存
    const { user, process } = useStore();

    // 预先注册路由
    const { isReg, route } = await router.register(to.path);

    // 组件不存在、路由不存在
    if (!route?.components) {
        next(user.token ? "/404" : "/login");
    } else {
        // 注册后重定向
        if (!isReg) {
            next({ ...to, ...route });
        } else {
            // 登录成功
            if (user.token) {
                // 在登录页
                if (to.path.includes("/login")) {
                    // Token 未过期
                    if (!storage.isExpired("token")) {
                        // 回到首页
                        return next("/");
                    }
                } else {
                    // 添加路由进程
                    process.add(to);
                }
            } else {
                // // 忽略部分 Token 验证
                // if (!config.ignore.token.find((e) => to.path == e)) {
                //     return next("/login");
                // }
            }

            next();
        }
    }
});



export { router }


