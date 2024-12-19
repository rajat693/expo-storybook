// import "@/global.css";
// // import "../styles/globals.scss";
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



import React from "react";
import "@/global.css";
import type { Preview } from "@storybook/react";
import { GluestackUIProvider } from "../components/ui/gluestack-ui-provider";

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
      <GluestackUIProvider>
        <Story />
      </GluestackUIProvider>
    ),
  ],
  tags: ["autodocs"],
};

export default preview;
