import {createRouter, createWebHistory, RouteRecordRaw, RouterOptions} from "vue-router";
import Layout from '/@/layout'

const routes = [
    {
        path: "/login",
        component: () => import("/@/pages/Login"),
    },
    {
        path: "/",
        component: Layout,
        children:[{
            name:'home',
            path:"/",
            component: () => import("/@/pages/Index"),
        }]
    }
];

// 创建路由器
const router = createRouter(<RouterOptions>{
    history: createWebHistory(),
    routes
});



// 路由守卫
router.beforeEach(async (to, from, next) => {
    // 数据缓存
    const { user, process } = useBase();

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
                // 忽略部分 Token 验证
                if (!config.ignore.token.find((e) => to.path == e)) {
                    return next("/login");
                }
            }

            next();
        }
    }
});


export { router }


