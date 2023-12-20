import { defineStore } from "pinia";
import storage  from "/@/utils/storage";

const data = storage.info();
export const useUserStore = defineStore("user", function () {
    // 标识
    const token = ref<string>(data.token);

    // 设置标识
    function setToken(data: {
        token: string;
        expire: number;
        refreshToken: string;
        refreshExpire: number;
    }) {
        // 请求的唯一标识
        token.value = data.token;
        storage.set("token", data.token, data.expire);

        // 刷新 token 的唯一标识
        storage.set("refreshToken", data.refreshToken, data.refreshExpire);
    }

    // 刷新标识
    async function refreshToken(): Promise<string> {
        return new Promise((resolve, reject) => {
            service.base.open
                .refreshToken({
                    refreshToken: storage.get("refreshToken")
                })
                .then((res) => {
                    setToken(res);
                    resolve(res.token);
                })
                .catch((err) => {
                    logout();
                    reject(err);
                });
        });
    }

})