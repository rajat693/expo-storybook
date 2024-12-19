import AlertBasic from "./Alert";

const meta = {
  title: "MyAlert",
  component: AlertBasic,
};

export default meta;

export const Basic = {
  argTypes: {
    variant: {
      control: "select",
      options: ["solid", "outline"],
    },
    action: {
      control: "select",
      options: ["info", "error", "warning", "muted", "success"],
    },
  },
  args: {
    action: "success",
    variant: "solid",
  },
};
