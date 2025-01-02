import AlertBasic from "./Alert";

const meta = {
  title: "MyAlert",
  component: AlertBasic,
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
};
export default meta;

//you can give argTypes for individual examples below.
export const Basic = {
  args: {
    action: "success",
    variant: "solid",
  },
};

export const Basic2 = {
  args: {
    action: "error",
    variant: "solid",
  },
};
