import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Logo } from ".";

export default {
  title: "common/Logo",
  component: Logo,
  argTypes: {}
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = args => <Logo {...args} />;

export const DefaultLogo = Template.bind({});

DefaultLogo.args = {};
