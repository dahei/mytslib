import React, { ComponentProps } from 'react';
import { Meta, Story } from '@storybook/react';
import { Button } from '../src';

type Props = ComponentProps<typeof Button>;

const meta: Meta<Props> = {
  title: 'Button',
  component: Button,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<Props> = args => <Button {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
