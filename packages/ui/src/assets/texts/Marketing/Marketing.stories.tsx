import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Marketing } from ".";

export default {
  title: "texts/Marketing",
  component: Marketing,
  argTypes: {}
} as ComponentMeta<typeof Marketing>;

const Template: ComponentStory<typeof Marketing> = args => (
  <Marketing {...args} />
);

export const DefaultMarketing = Template.bind({});

DefaultMarketing.args = {};
