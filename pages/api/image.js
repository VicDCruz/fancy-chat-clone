import fs from 'fs';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { random } = req.query;
    const response = await fetch(`https://picsum.photos/300?random=${random}`);
    if (!response.ok)
      res.status(response.status).json({ error: response.statusText });
    else {
      // https://stackoverflow.com/a/67579901
      // https://stackoverflow.com/a/64240948
      const blob = await response.blob();
      const tmpBuffer = await blob.arrayBuffer();
      const buffer = Buffer.from(tmpBuffer, 'binary');
      res.status(response.status);
      res.setHeader('Content-Type', 'image/jpg');
      res.send(buffer);
    }
  } else {
    res.status(403).send('Method not allowed');
  }
}
