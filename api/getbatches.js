export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  const token = process.env.PW_TOKEN;
  if (!token) {
    return res.status(400).json({ success: false, error: 'PW_TOKEN not set' });
  }

  try {
    const r = await fetch('https://api.penpencil.co/v3/user/batches', {
      headers: {
        Authorization: token,
        Origin: 'https://study.physicswallah.live',
        'User-Agent': 'Mozilla/5.0'
      }
    });

    const data = await r.json();
    return res.status(r.status).json(data);
  } catch (e) {
    return res.status(500).json({ success: false, error: e.message });
  }
}
