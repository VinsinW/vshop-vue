import { Module } from "../types";
import { hmr } from "../hook/hmr";
import { dirs } from "virtual:module";

// 模块列表
const list: Module[] = hmr.getData("modules", []);

// 模块对象
const module = {
    list,
    dirs,
    req: Promise.resolve(),
    get(name: string): Module {
        return this.list.find((e) => e.name == name)!;
    },
    add(data: Module) {
        this.list.push(data);
    },
    wait() {
        return this.req;
    }
};

export { module };
