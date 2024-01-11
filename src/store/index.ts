import { useAppStore } from "/@/store/app";
import { useMenuStore } from "/@/store/menu";
import { useUserStore } from "/@/store/user";
import { useProcessStore } from "/@/store/process";

export function useStore(){
    const app = useAppStore();
    const menu = useMenuStore();
    const user = useUserStore();
    const process = useProcessStore();

    return {
        app,
        menu,
        user,
        process
    }
}