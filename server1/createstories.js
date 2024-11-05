import { azure } from '@ai-sdk/azure';
import { generateText } from 'ai';

// Configure Azure SDK with required parameters directly
const azureModel = azure({
  resourceName: "italent-dev", // Your Azure OpenAI resource name
  apiKey: "d260fca347a14f40aa9bd0a8df2b3fbb", // Your Azure OpenAI API key
  deploymentName: 'gpt-4' // Your Azure OpenAI deployment name
});

try {
  const { text } = await generateText({
    model: azureModel,
    prompt: 'Write a vegetarian lasagna recipe for 4 people.',
  });

  console.log(text);
} catch (error) {
  console.error('Error generating text:', error);
}
