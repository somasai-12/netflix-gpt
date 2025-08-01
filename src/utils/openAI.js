import OpenAI from 'openai';
import { OPENAI_KEY } from './constants';

const client = new OpenAI({
    apiKey: OPENAI_KEY,
    dangerouslyAllowBrowser: true, 
  //apiKey: process.env['OPENAI_API_KEY'], // This is the default and can be omitted
});

export default client;