import React, { ComponentProps } from 'react';
import { Meta, Story } from '@storybook/react';
import { Panel } from '../src';

type Props = ComponentProps<typeof Panel>;

const meta: Meta<Props> = {
  title: 'Panel',
  component: Panel,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<Props> = args => (
  <div {...args}>
    <Panel title={'Title goes here'}>
      <div>I am a child</div>
    </Panel>
  </div>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
