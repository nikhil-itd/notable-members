
import React from 'react';
import { DataProvider } from './components/DataProvider';
import { action } from '@storybook/addon-actions';

export default {
  title: 'DataProvider',
  component: DataProvider,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    onClick: { action: 'clicked' },
  },
  tags: ['docsPage'],
  args: {
    onClick: action('DataProvider clicked'),
  },
  enums: {
    ToastVariant: { FLYOUT: 'FLYOUT', BANNER: 'BANNER' },
    ToastAlertVariant: { SUCCESS: 'SUCCESS', INFO: 'INFO' }
  }
};

export const Default = () => <DataProvider />;
