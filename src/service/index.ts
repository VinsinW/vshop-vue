import { BaseService } from "./base";
import { hmr } from "../hook/hmr";

export const service = hmr.getData("service", {
    request: new BaseService().request
});


export * from "./base";
