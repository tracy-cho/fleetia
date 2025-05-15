import { ComponentMeta, ComponentStory } from "@storybook/react";

import { PrivacyPolicy } from ".";

export default {
  title: "texts/PrivacyPolicy",
  component: PrivacyPolicy,
  argTypes: {}
} as ComponentMeta<typeof PrivacyPolicy>;

const Template: ComponentStory<typeof PrivacyPolicy> = args => (
  <PrivacyPolicy {...args} />
);

export const DefaultPrivacyPolicy = Template.bind({});

DefaultPrivacyPolicy.args = {};
