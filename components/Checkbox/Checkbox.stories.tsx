import CheckboxBasic from "./Checkbox";

const meta = {
  title: "MyCheckbox",
  component: CheckboxBasic,
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    isDisabled: {
      control: "boolean",
      options: [true, false],
    },
    isInvalid: {
      control: "boolean",
      options: [true, false],
    },
    isFocusVisible: {
      control: "boolean",
      options: [true, false],
    },
    isHovered: {
      control: "boolean",
      options: [true, false],
    },
  },
};
export default meta;

export const Basic = {
  args: {
    size: "md",
    isDisabled: false,
    isInvalid: false,
    isFocusVisible: false,
    isHovered: false,
  },
};
