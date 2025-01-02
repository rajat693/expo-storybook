// import { withBackgrounds } from "@storybook/addon-ondevice-backgrounds";
// import type { Preview } from "@storybook/react";

// const preview: Preview = {
//   decorators: [withBackgrounds],

//   parameters: {
//     backgrounds: {
//       default: "plain",
//       values: [
//         { name: "plain", value: "white" },
//         { name: "warm", value: "hotpink" },
//         { name: "cool", value: "deepskyblue" },
//       ],
//     },
//     actions: { argTypesRegex: "^on[A-Z].*" },
//     controls: {
//       matchers: {
//         color: /(background|color)$/i,
//         date: /Date$/,
//       },
//     },
//   },
// };

// export default preview;

import React from "react";
import type { Preview } from "@storybook/react";
import { GluestackUIProvider } from "../components/ui/gluestack-ui-provider";
import { View } from "react-native";

const preview: Preview = {
  decorators: [
    (Story) => (
      <GluestackUIProvider>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Story />
        </View>
      </GluestackUIProvider>
    ),
  ],

  parameters: {
    backgrounds: {
      default: "plain",
      values: [
        { name: "plain", value: "white" },
        { name: "warm", value: "hotpink" },
        { name: "cool", value: "deepskyblue" },
      ],
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
