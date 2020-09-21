import { ref, watchEffect } from "vue";

const mediaQuery = matchMedia("(prefers-color-scheme: dark)");

export default function useDarkMode() {
  const isDarkMode = ref(mediaQuery.matches);

  function fn(event: MediaQueryListEvent) {
    isDarkMode.value = event.matches;
  }

  watchEffect(() => {
    // 2020-04-03
    // Safari still doesn't support addEventListener("change", fn) for this API.
    mediaQuery.addListener(fn);
    return () => {
      mediaQuery.removeListener(fn);
    };
  });

  return isDarkMode;
}
