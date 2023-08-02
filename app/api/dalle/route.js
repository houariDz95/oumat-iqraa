import { NextResponse } from "next/server"
import { Configuration, OpenAIApi } from 'openai';


const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuration);

export const POST = async (request) => {
  const { prompt } = await request.json();
    try {
        const aiResponse = await openai.createImage({
          prompt,
          n: 1,
          size: '1024x1024',
          response_format: 'b64_json',
        });
        const image = aiResponse.data.data[0].b64_json;
    
        return new NextResponse(JSON.stringify({photo: image}, {status: 200}))
      } catch (error) {
        console.log(error);
        res.status(500).send(error?.response.data.error.message)
      }
} 
