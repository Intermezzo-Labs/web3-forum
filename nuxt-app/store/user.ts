import { defineStore, acceptHMRUpdate } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      user: null,
      token: null,
    };
  },
  actions: {
    async login(username: string, password: string) {
      try {
        const url = "http://localhost:5000/users/login";
        const { data, error, pending } = await useFetch<{
          user: string;
          token: string;
        }>(url, {
          method: "POST",
          body: {
            username,
            password,
          },
        });
        this.user = data.value.user;
        this.token = data.value.token;
        const router = useRouter();
        router.push("/");
      } catch (error) {
        console.log("login failed", error);
      }
    },
    async logout() {
      try {
        await useFetch("http://localhost:5000/users/logout");
        this.user = null;
        this.token = null;
      } catch (error) {
        console.log("logout failed", error);
      }
    },
    async register(username: string, password: string) {
      try {
        const { data, error, pending } = await useFetch<{
          user: string;
          token: string;
        }>("http://localhost:5000/users", {
          method: "POST",
          body: {
            username,
            password,
          },
        });
        console.log(data.value);
        this.user = data.value.user;
        this.token = data.value.token;
        const router = useRouter();
        router.push("/");
      } catch (error) {
        console.log("login failed", error);
      }
    },
  },
  getters: {
    getUser: (state) => state.user,
    isLoggedIn: (state) => state.token != null,
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
}
