import React from 'react';

import { More } from './More';


export default {
  title: 'Example/More',
  component: More,
  
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};


const Template = (args) => <More {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  label: 'Button',
};
