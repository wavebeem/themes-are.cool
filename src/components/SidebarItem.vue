<template>
  <div
    v-if="type === 'person'"
    :style="style"
    class="pv1 ph3 o-70 cool-sidebar-item"
  >
    {{ icon }} {{ name }}
  </div>
  <div
    v-if="type === 'channel'"
    :style="style"
    class="pv1 ph3 flex cool-sidebar-item"
    :data-mode="index === 3 ? 'active' : 'inactive'"
  >
    <div class="flex-auto">
      <b v-if="index % 4 === 0 || index % 6 === 0" class="fw6"># {{ name }}</b>
      <span v-else># {{ name }}</span>
    </div>
    <div
      v-if="index % 6 === 0"
      style="minWidth: 25px"
      class="normal tc br-pill white mr1 f6 cool-badge"
    >
      3
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "SidebarItem",
  props: {
    type: { type: String, required: true },
    index: { type: Number, required: true },
    name: { type: String, required: true },
    theme: { type: Object, required: true }
  },
  setup(props) {
    const OFFLINE = "\u25CB";
    const ONLINE = "\u25CF";
    const WIDTH = "220px";
    const icon = computed(() => (props.index % 5 <= 2 ? ONLINE : OFFLINE));
    const style = computed(() => {
      const decls: string[] = [`width: ${WIDTH}`];
      if (
        props.type === "channel" &&
        (props.index === 3 || props.index % 4 === 0 || props.index % 6 === 0)
      ) {
        decls.push(`opacity: 0.7`);
      }
      return decls.join(";\n");
    });
    return {
      icon,
      style
    };
  }
});
</script>
