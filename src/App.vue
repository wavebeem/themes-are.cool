<template>
  <div className="sans-serif flex flex-column flex-auto min-vh-100">
    <div
      className="pa2 tc bb b--cool cool-top-nav flex items-center"
      style='cursor: "default"; userSelect: "none"'
    >
      <div className="flex-auto"></div>
      <div className="ph2">&larr;</div>
      <div className="ph2 o-50">&rarr;</div>
      <div className="ph2"></div>
      <div className="pa1 br3 cool-search" style="width: 400px">
        Themes Are Cool
      </div>
      <div className="ph2"></div>
      <div className="ph2 o-0">&larr;</div>
      <div className="ph2 o-0">&rarr;</div>
      <div className="flex-auto"></div>
    </div>
    <div className="flex flex-auto">
      <Sidebar :theme="theme"></Sidebar>
      <Configurator
        :theme="theme"
        :themeType="themeType"
        :primaryColor="primaryColor"
      ></Configurator>
      <!-- TODO: Update primaryColor from Configurator -->
      <!-- TODO: Update themeType from Configurator -->
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watchEffect } from "vue";
import tinycolor from "tinycolor2";
import { lch } from "d3-color";
import "tachyons/css/tachyons.css";
import useDarkMode from "./useDarkMode";

type ThemeType = "light" | "dark";

interface Theme {
  themeType: string;
  bg: string;
  fg: string;
  border: string;
  searchBorder: string;
  searchBG: string;
  columnBG: string;
  primaryColor: string;
  activeItemText: string;
  hoverItem: string;
  textColor: string;
  activePresence: string;
  mentionBadge: string;
  topNavBG: string;
  topNavText: string;
}

function makeHoverColor(color: string, themeType: ThemeType): string {
  const x = lch(color);
  if (themeType === "dark") {
    x.c += 10;
    x.l += 10;
  } else {
    x.c += 5;
    x.l -= 5;
  }
  return x.hex();
}

function makeColumnBGColor(color: string, themeType: ThemeType): string {
  const x = lch(color);
  if (themeType === "dark") {
    x.c = 20;
    x.l = 15;
  } else {
    x.c = 10;
    x.l = 95;
  }
  return x.hex();
}

function pickReadableColor(color: string, light: string, dark: string): string {
  // 1 means both colors are identical. 21 means maximum contrast.
  const contrast = tinycolor.readability(color, light);
  return contrast >= 3 ? light : dark;
}

export default defineComponent({
  name: "App",
  components: {},
  setup(/* props */) {
    const primaryColor = ref("#1565c0");
    const isDarkMode = useDarkMode();
    const themeType = computed<ThemeType>(() => {
      return isDarkMode.value ? "dark" : "light";
    });
    const bg = computed(() => {
      return themeType.value === "dark" ? "#1a1d21" : "#ffffff";
    });
    const fg = computed(() => {
      return themeType.value === "dark" ? "#d1d2d3" : "#1d1c1d";
    });
    const border = computed(() => {
      return themeType.value === "dark"
        ? "rgba(255, 255, 255, 0.1)"
        : "rgba(0, 0, 0, 0.1)";
    });
    const columnBG = computed(() => {
      return makeColumnBGColor(primaryColor.value, themeType.value);
    });
    const activeItemText = computed(() => {
      return pickReadableColor(primaryColor.value, "#ffffff", "#000000");
    });
    const hoverItem = computed(() => {
      return makeHoverColor(columnBG.value, themeType.value);
    });
    const textColor = fg;
    const activePresence = textColor;
    const mentionBadge = "#cd2553";
    const topNavBG = primaryColor;
    const topNavText = activeItemText;
    const searchBorder = computed(() => {
      return pickReadableColor(
        primaryColor.value,
        "rgba(255, 255, 255, 0.2)",
        "rgba(0, 0, 0, 0.2)"
      );
    });
    const searchBG = computed(() => {
      return pickReadableColor(
        primaryColor.value,
        "rgba(255, 255, 255, 0.1)",
        "rgba(0, 0, 0, 0.05)"
      );
    });
    const theme = computed<Theme>(() => {
      return {
        themeType: themeType.value,
        bg: bg.value,
        fg: fg.value,
        border: border.value,
        searchBorder: searchBorder.value,
        searchBG: searchBG.value,
        columnBG: columnBG.value,
        primaryColor: primaryColor.value,
        activeItemText: activeItemText.value,
        hoverItem: hoverItem.value,
        textColor: textColor.value,
        activePresence: activePresence.value,
        mentionBadge: mentionBadge,
        topNavBG: topNavBG.value,
        topNavText: topNavText.value
      };
    });
    watchEffect(() => {
      const style = document.documentElement.style;
      style.setProperty("--cool-bg", bg.value);
      style.setProperty("--cool-fg", fg.value);
      style.setProperty("--cool-border", border.value);
      style.setProperty("--cool-search-border", searchBorder.value);
      style.setProperty("--cool-search-bg", searchBG.value);
      style.setProperty("--cool-column-bg", columnBG.value);
      style.setProperty("--cool-active-item", primaryColor.value);
      style.setProperty("--cool-active-item-text", activeItemText.value);
      style.setProperty("--cool-hover-item", hoverItem.value);
      style.setProperty("--cool-text-color", textColor.value);
      style.setProperty("--cool-active-presence", activePresence.value);
      style.setProperty("--cool-mention-badge", mentionBadge);
      style.setProperty("--cool-top-nav-bg", topNavBG.value);
      style.setProperty("--cool-top-nav-text", topNavText.value);
    });
    return {
      theme,
      themeType,
      primaryColor
    };
  }
});
</script>

<style>
body {
  min-width: 800px;
  overflow-x: auto;
}

:root {
  --cool-bg: #eeeeee;
  --cool-fg: #000000;
  --cool-border: rgba(0, 0, 0, 0.1);
  --cool-column-bg: #eeeeee;
  --cool-active-item: #444444;
  --cool-active-item-text: #444444;
  --cool-hover-item: #cccccc;
  --cool-text-color: #222222;
  --cool-active-presence: #002200;
  --cool-mention-badge: #cccccc;
  --cool-top-nav-bg: #cccccc;
  --cool-top-nav-text: #cccccc;

  background: var(--cool-bg);
  color: var(--cool-fg);
  scrollbar-color: var(--cool-fg) var(--cool-bg);
}

.cool-search {
  border: 1px solid var(--cool-search-border);
  background: var(--cool-search-bg);
}

.cool-sidebar {
  background: var(--cool-column-bg);
  color: var(--cool-fg);
  cursor: default;
  user-select: none;
}

.cool-example {
  border-radius: 8px;
  padding: 1px 3px;
  border: 1px solid var(--cool-border);
}

.cool-sidebar-item:hover {
  background: var(--cool-hover-item);
}

.cool-sidebar-item[data-active] {
  background: var(--cool-active-item);
  color: var(--cool-active-item-text);
}

.cool-top-nav {
  background: var(--cool-top-nav-bg);
  color: var(--cool-top-nav-text);
}

.cool-badge {
  background: var(--cool-mention-badge);
  color: white;
}

.classic-link {
  color: var(--cool-mention-badge);
}

.cool-textarea {
  background: var(--cool-bg);
  color: var(--cool-fg);
  border-color: currentColor;
  resize: none;
}

.cool-textarea::selection {
  background: var(--cool-active-item);
  color: var(--cool-active-item-text);
}

.b--cool {
  border-color: var(--cool-border);
}

.bg-cool {
  background: var(--cool-bg);
}

:focus {
  outline: 0;
  box-shadow: 0 0 0 3px black, 0 0 0 4px white;
}

.cool-grid {
  display: grid;
  grid-template-columns: 150px 225px 1fr;
  grid-gap: 2rem;
  padding: 2rem;
}

.cool-palette {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1px;
  align-content: start;
}

.cool-palette-item {
  height: 24px;
}

.chrome-picker {
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1) !important;
}
</style>
