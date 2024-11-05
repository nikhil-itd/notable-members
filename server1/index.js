import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Define __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to components directory
const componentsPath = path.resolve(__dirname, '../src/components');

// Check if the components directory exists
if (!fs.existsSync(componentsPath)) {
  console.error('Components directory does not exist:', componentsPath);
  process.exit(1);
}

// Read all items in the components directory
const items = fs.readdirSync(componentsPath);

items.forEach((item) => {
  const itemPath = path.resolve(componentsPath, item);
  const isDirectory = fs.statSync(itemPath).isDirectory();

  // Process files directly under components directory
  if (!isDirectory && item.endsWith('.js')) {
    console.log('Processing component file:', item);

    const componentName = item.replace('.js', '');
    const storyContent = fs.readFileSync(itemPath, 'utf8');

    // Define the destination folder for the stories
    const storiesFolder = path.resolve(__dirname, '../src/stories');
    if (!fs.existsSync(storiesFolder)) {
      console.log('Creating stories folder:', storiesFolder);
      fs.mkdirSync(storiesFolder, { recursive: true });
    }

    // Define the story file path
    const storyFilePath = path.resolve(storiesFolder, `${componentName}.stories.js`);

    // Create Storybook story content
    const storyTemplate = `
import React from 'react';
import { ${componentName} } from './components/${componentName}';
import { action } from '@storybook/addon-actions';

export default {
  title: '${componentName}',
  component: ${componentName},
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    onClick: { action: 'clicked' },
  },
  tags: ['docsPage'],
  args: {
    onClick: action('${componentName} clicked'),
  },
  enums: {
    ToastVariant: { FLYOUT: 'FLYOUT', BANNER: 'BANNER' },
    ToastAlertVariant: { SUCCESS: 'SUCCESS', INFO: 'INFO' }
  }
};

export const Default = () => <${componentName} />;
`;

    console.log('Writing story to file:', storyFilePath);
    fs.writeFileSync(storyFilePath, storyTemplate);
  } else if (isDirectory) {
    console.log('Skipping directory:', item);
  } else {
    console.log('Skipping non-JSX file:', item);
  }
});
