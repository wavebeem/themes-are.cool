<template>
  <div class="flex-auto min-h-100">
    <header class="ph3 bb b--cool pv2">
      <h1 class="db mt0 mb1 f5">#legal-notice</h1>
      <h2 class="db ma0 f5 normal">
        <span class="o-80">
          This product is not endorsed by, affiliated with, or supported by
          Slack Technologies, Inc.
        </span>
        <span role="img" aria-label="judge emoji">
          👨‍⚖️
        </span>
      </h2>
    </header>
    <div class="cool-grid flex-auto">
      <Palette
        :theme-type="themeType"
        @primary-color-changed="$emit('primary-color-changed', $event)"
      />
      <div>
        <!-- TODO: Color picker -->
        <!-- <ChromePicker
          :color="primaryColor"
          :disableAlpha="true"
          @change="onColorPickerChange"
        /> -->
        <div class="db pv3">
          <h2 class="b f5 mv1">Appearance</h2>
          <label class="ph2 pv1 br2 db lh-copy">
            <input
              type="radio"
              name="theme-type"
              value="light"
              :checked="themeType === 'light'"
              @change="$emit('theme-type-changed', $event.target.value)"
            />
            <span
              class="ml2 br2 ph1 dib ba b--black-10 bg-near-white dark-gray"
            >
              Light
            </span>
          </label>
          <label class="ph2 pv1 br2 db lh-copy">
            <input
              type="radio"
              name="theme-type"
              value="dark"
              :checked="themeType === 'dark'"
              @change="$emit('theme-type-changed', $event.target.value)"
            />
            <span
              class="ml2 br2 ph1 dib ba b--white-30 bg-near-black light-gray"
            >
              Dark
            </span>
          </label>
        </div>
      </div>
      <div class="flex flex-column">
        <label class="db">
          <h2 class="b f5 mt0 mb1">Theme</h2>
          <textarea
            readonly
            @focus="selectAll"
            :value="slackTheme"
            :rows="4"
            spellcheck="false"
            class="border-box w-100 cool-textarea bw1 ba br2 pa2 code"
          />
        </label>
        <div class="flex-auto">
          <ul class="lh-copy pl3">
            <li>Copy the theme above.</li>
            <li>Send it as a message.</li>
            <li>Click <q>Switch sidebar theme</q>.</li>
          </ul>
          <p>Tip: Direct message yourself to store your favorite themes.</p>
          <p>
            <a
              href="https://classic.themes-are.cool"
              class="cool-badge f5 pv1 ph2 br2 no-underline"
            >
              Switch to classic layout
            </a>
          </p>
          <footer>
            &copy; {{ year }}
            <a class="color-inherit b" href="https://www.mockbrian.com">
              Brian Mock
            </a>
            <span role="img" aria-label="nerd face emoji">
              🤓
            </span>
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
// import { ChromePicker } from "react-color";
import Palette from "./Palette.vue";

export default defineComponent({
  name: "Configurators",
  components: {
    Palette
  },
  props: {
    // TODO: Better TS type?
    theme: { type: Object, required: true },
    themeType: { type: String, required: true },
    primaryColor: { type: String, required: true }
  },
  setup(props) {
    const year = new Date().getFullYear();
    const slackTheme = computed(() => {
      const {
        columnBG,
        activeItem,
        activeItemText,
        hoverItem,
        textColor,
        activePresence,
        mentionBadge,
        topNavBG,
        topNavText
      } = props.theme;
      return [
        columnBG,
        // Per a support request with Slack, the 2nd item in the theme array is no
        // longer used. It used to represent the color of the area in the sidebar
        // that says the name of the workspace you're in. The support person said
        // for the near future, Slack themes will continue to be 10 colors with only
        // 9 used, just to avoid breaking themes too much.
        //
        // https://twitter.com/wavebeem/status/1243741888944857088
        columnBG,
        activeItem,
        activeItemText,
        hoverItem,
        textColor,
        activePresence,
        mentionBadge,
        topNavBG,
        topNavText
      ].join(",");
    });
    const selectAll = (event: Event) => {
      if (event.target instanceof HTMLTextAreaElement) {
        event.target.focus();
        event.target.select();
      }
    };
    // function updateThemeType(event: Event) {
    //   const input = event.target as HTMLInputElement;
    //   emit("theme-type-changed", input.value);
    // }
    return { year, slackTheme, selectAll };
  }
});
</script>
