import type { NextApiRequest, NextApiResponse } from 'next';
import { getPlaiceholder } from 'plaiceholder';
import sharp from 'sharp';

const cache = new Map<string, string>();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { url } = req.query;

  if (typeof url !== 'string') {
    return res.status(400).json({ error: 'URL must be a string' });
  }

  if (cache.has(url)) {
    return res.status(200).json({ base64: cache.get(url) });
  }

  try {
    const response = await fetch(url);
    const buffer = await response.arrayBuffer();

    // Use sharp for image processing
    const processedImage = await sharp(Buffer.from(buffer))
      .resize(100) // Example transformation: resize to 100px width
      .toBuffer();

    const { base64 } = await getPlaiceholder(processedImage);
    cache.set(url, base64);
    res.status(200).json({ base64 });
  } catch (error) {
    if (error instanceof Error) res.status(500).json({ error: error.message });
    else res.status(500).json({ error: 'An unknown error occurred' });
  }
}
