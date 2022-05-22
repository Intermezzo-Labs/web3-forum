import { defineStore, acceptHMRUpdate } from "pinia";

export interface ISubreddit {
  name: string;
  id: number;
}
export interface ISubredditInput {
  body?: string;
  subreddit: string;
  title: string;
  type: string;
}

export const useSubredditStore = defineStore("subreddits", {
  state: () => {
    return {
      subreddits: [] as ISubreddit[],
    };
  },
  actions: {
    async getSubreddits() {
      try {
        const { data } = await useFetch<ISubreddit[]>(
          "http://localhost:5000/subreddits"
        );
        this.$patch({ subreddits: data.value });
      } catch (error) {
        console.log("get subreddit failed", error);
      }
    },
    async createSubreddit(payload: ISubredditInput) {
      try {
        const { data } = await useFetch<ISubreddit>(
          "http://localhost:5000/subreddits",
          {
            method: "POST",
            body: payload,
          }
        );
        this.subreddits.push(data);
      } catch (error) {
        console.log("save subreddit failed", error);
      }
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSubredditStore, import.meta.hot));
}
