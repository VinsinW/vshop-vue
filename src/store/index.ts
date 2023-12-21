import {useUserStore} from "/@/store/user";
import {useProcessStore} from "/@/store/process";

export function useStore(){
    const user = useUserStore();
    const process = useProcessStore();

    return {
        user,
        process
    }
}