// import type { Preview } from "@storybook/react";

// const preview: Preview = {
//   parameters: {
//     // actions: { argTypesRegex: "^on[A-Z].*" },
//     controls: {
//       matchers: {
//         color: /(background|color)$/i,
//         date: /Date$/,
//       },
//     },
//   },

//   tags: ["autodocs"],
// };

// export default preview;
//the above one is default

//wrapped with gluestack-ui-provider
import React from "react";
import type { Preview } from "@storybook/react";
import { GluestackUIProvider } from "../components/ui/gluestack-ui-provider";
import { View } from "react-native";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <GluestackUIProvider mode="dark">
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
  tags: ["autodocs"],
};

export default preview;
