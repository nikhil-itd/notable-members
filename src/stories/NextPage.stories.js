
import React from 'react';
import { NextPage } from './components/NextPage';
import { action } from '@storybook/addon-actions';

export default {
  title: 'NextPage',
  component: NextPage,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    onClick: { action: 'clicked' },
  },
  tags: ['docsPage'],
  args: {
    onClick: action('NextPage clicked'),
  },
  enums: {
    ToastVariant: { FLYOUT: 'FLYOUT', BANNER: 'BANNER' },
    ToastAlertVariant: { SUCCESS: 'SUCCESS', INFO: 'INFO' }
  }
};

export const Default = () => <NextPage />;
