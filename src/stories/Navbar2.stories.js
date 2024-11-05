
import React from 'react';
import { Navbar2 } from './components/Navbar2';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Navbar2',
  component: Navbar2,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    onClick: { action: 'clicked' },
  },
  tags: ['docsPage'],
  args: {
    onClick: action('Navbar2 clicked'),
  },
  enums: {
    ToastVariant: { FLYOUT: 'FLYOUT', BANNER: 'BANNER' },
    ToastAlertVariant: { SUCCESS: 'SUCCESS', INFO: 'INFO' }
  }
};

export const Default = () => <Navbar2 />;
