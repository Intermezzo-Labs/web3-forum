import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin((nuxtApp) => {
  console.log("cool");
  nuxtApp.hook("page:finish", () => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 300);
  });
});
