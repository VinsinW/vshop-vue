import { defineComponent, h } from "vue";
import { Menu } from "/@/modules/types";
import { useRoute, useRouter } from "vue-router";
import { useBrowser } from "/@/hook/browser";
import { useStore } from "/@/store";

export default defineComponent({
    name: "b-menu",

    setup() {
        const router = useRouter();
        const { browser } = useBrowser();
        const route = useRoute();
        const { menu, app } = useStore();

        //获取菜单
        menu.get()

        // 页面跳转
        function toView(url: string) {
            if (url != route.path) {
                router.push(url);
            }

            // 小屏下点击收起左侧菜单
            if (browser.isMini) {
                app.fold(true);
            }
        }

        // 渲染子菜单
        function renderMenu() {
            function deep(list: Menu.Item[], index: number) {
                return list
                    .filter((e) => e.isShow)
                    .map((e) => {
                        let html = null;
                        const item = (e: Menu.Item) => {
                            const tag = h(resolveComponent(e.icon));
                            return (
                                <div class="wrap">
                                    <el-icon>
                                        <tag />
                                    </el-icon>
                                    <span v-show={!app.isFold || index != 1}>{e.name}</span>
                                </div>
                            );
                        };

                        if (e.type == 0) {
                            html = h(
                                <el-sub-menu />,
                                {
                                    index: String(e.id),
                                    key: e.id,
                                    popperClass: "app-slider__menu"
                                },
                                {
                                    title() {
                                        return item(e);
                                    },
                                    default() {
                                        return deep(e.children || [], index + 1);
                                    }
                                }
                            );
                        } else {
                            html = h(
                                <el-menu-item />,
                                {
                                    index: e.path,
                                    key: e.id
                                },
                                {
                                    default() {
                                        return item(e);
                                    }
                                }
                            );
                        }

                        return html;
                    });
            }

            return deep(menu.list, 1);
        }

        return () => {
            return (
                <div class="app-slider__menu">
                    <el-menu
                        default-active={route.path}
                        background-color="transparent"
                        collapse-transition={false}
                        collapse={browser.isMini ? false : app.isFold}
                        onSelect={toView}
                    >
                        {renderMenu()}
                    </el-menu>
                </div>
            );
        };
    }
});
