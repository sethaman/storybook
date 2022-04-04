import React from 'react';

import { Breadcrumb } from './Breadcrumb';


export default {
  title: 'Example/Breadcrumb',
  component: Breadcrumb,
  
  argTypes: {
    Color: { control: 'color' },
  },
};


const Template = (args) => <Breadcrumb {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  label: 'Link',
};
