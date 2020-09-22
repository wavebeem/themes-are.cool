<template>
  <div class="min-h-100 pt3 pb3 fw4 br b--cool lh-title cool-sidebar">
    <div class="o-70 f5 pl3 mb2">Channels</div>
    <SidebarItem
      v-for="(channel, index) in channels"
      :key="index"
      :index="index"
      :name="channel"
      :theme="theme"
      type="channel"
    />
    <div class="o-70 f5 pl3 mb2 mt4">Direct Messages</div>
    <SidebarItem
      v-for="(name, index) in names"
      :key="index"
      :index="index"
      :name="name"
      :theme="theme"
      type="person"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SidebarItem from "./SidebarItem.vue";

const channels = [
  "general",
  "video-games",
  "running",
  "archery",
  "qa",
  "frontend",
  "backend",
  "announcements"
];

const names = [
  "Shanna Adras",
  "Xel Madine",
  "Auros Green",
  "Makon Covell",
  "Saubio Tobian",
  "Candurous Marr",
  "Surro Starr",
  "Rayf Mantisa"
];

export default defineComponent({
  name: "Sidebar",
  components: {
    SidebarItem
  },
  props: {
    // TODO: Better TS type?
    theme: { type: Object, required: true }
  },
  setup() {
    return {
      channels,
      names
    };
  }
});
</script>
