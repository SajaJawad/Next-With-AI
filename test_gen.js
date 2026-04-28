const { generateText, generateImage } = require('ai');
const { createOpenAI } = require('@ai-sdk/openai');
require('dotenv').config();

async function test() {
  const openai = createOpenAI({ apiKey: process.env.OPEN_AI_API_KEY });
  
  try {
    console.log('Testing gpt-4o-mini...');
    const textRes = await generateText({
      model: openai.chatModel('gpt-4o-mini'),
      messages: [{ role: 'user', content: 'Say hello' }],
    });
    console.log('GPT Success:', textRes.text);

    console.log('Testing dall-e-3...');
    const imgRes = await generateImage({
      model: openai.imageModel('dall-e-3'),
      prompt: 'A simple red apple',
    });
    console.log('DALL-E Success!');
  } catch (error) {
    console.error('FAILED!');
    console.error(error.message);
    if (error.data) console.error('Data:', JSON.stringify(error.data));
  }
}

test();
