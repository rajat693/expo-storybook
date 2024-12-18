const { withNativeWind } = require("nativewind/metro");
const path = require("path");
const { getDefaultConfig } = require("expo/metro-config");

const defaultConfig = getDefaultConfig(__dirname);
const withStorybook = require("@storybook/react-native/metro/withStorybook");

module.exports = withNativeWind(
  withStorybook(defaultConfig, {
    enabled: process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === "true",
    configPath: path.resolve(__dirname, "./.ondevice"),
    onDisabledRemoveStorybook: true,
  }),
  { input: "./global.css" }
);
