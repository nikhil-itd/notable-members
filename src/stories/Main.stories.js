
import React from 'react';
import { Main } from './components/Main';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Main',
  component: Main,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    onClick: { action: 'clicked' },
  },
  tags: ['docsPage'],
  args: {
    onClick: action('Main clicked'),
  },
  enums: {
    ToastVariant: { FLYOUT: 'FLYOUT', BANNER: 'BANNER' },
    ToastAlertVariant: { SUCCESS: 'SUCCESS', INFO: 'INFO' }
  }
};

export const Default = () => <Main />;
