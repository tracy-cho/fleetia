import { ComponentMeta, ComponentStory } from "@storybook/react";

import { TermsOfUse } from ".";

export default {
  title: "texts/TermsOfUse",
  component: TermsOfUse,
  argTypes: {}
} as ComponentMeta<typeof TermsOfUse>;

const Template: ComponentStory<typeof TermsOfUse> = args => (
  <TermsOfUse {...args} />
);

export const DefaultTermsOfUse = Template.bind({});

DefaultTermsOfUse.args = {};
