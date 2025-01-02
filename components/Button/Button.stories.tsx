import { MyButton } from "./Button";

const meta = {
  title: "MyButton",
  component: MyButton,
  args: {
    text: "Hello world",
  },
};
export default meta;

export const Basic = {
  args: {
    onPress: console.log("button1 pressed"),
  },
};

export const Basic2 = {
  args: {
    onPress: console.log("button2 pressed"),
  },
};
