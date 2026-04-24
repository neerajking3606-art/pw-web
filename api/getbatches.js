export default async function handler(req, res) {
  const token = process.env.PW_TOKEN || '';  // Vercel env से
  const response = await fetch('https://api.penpencil.co/v3/user/batches', {
    headers: {
      'Authorization': token,
      'Origin': 'https://study.physicswallah.live',
      'User-Agent': 'Mozilla/5.0'
    }
  });
  const data = await response.json();
  res.json(data);
}
