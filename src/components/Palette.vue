<template>
  <div className="cool-palette">
    <button
      v-for="(color, index) in colors"
      :key="index"
      :style="{ background: color }"
      :class="[
        themeType === 'dark' ? 'white' : 'black',
        'bn br0',
        'code ttl',
        'w-100 h1 border-box',
        'cool-palette-item'
      ]"
      @click="$emit('primary-color-changed', color)"
    ></button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MaterialColors from "material-colors";

const weights = ["100", "200", "700", "800"] as const;
const names = [
  "red",
  "pink",
  "purple",
  "deepPurple",
  "indigo",
  "blue",
  "lightBlue",
  "cyan",
  "teal",
  "green",
  "lightGreen",
  "lime",
  "yellow",
  "amber",
  "orange",
  "deepOrange",
  "brown",
  "blueGrey",
  "grey"
] as const;
const groupedColors = names.map(c => weights.map(w => MaterialColors[c][w]));
const colors = groupedColors.reduce((a, b) => [...a, ...b], []);

export default defineComponent({
  props: {
    // TODO: TS Types
    themeType: { type: String, required: true }
  },
  setup() {
    return { colors };
  }
});
</script>
