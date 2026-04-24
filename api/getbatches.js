export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const token = process.env.PW_TOKEN || 'EMPTY_TOKEN';
  
  if (!token || token === 'EMPTY_TOKEN') {
    return res.status(400).json({error: 'Token not set in env vars'});
  }
  
  try {
    const apiRes = await fetch('https://api.penpencil.co/v3/user/batches', {
      headers: {
        'Authorization': token,
        'Origin': 'https://study.physicswallah.live',
        'User-Agent': 'Mozilla/5.0'
      }
    });
    const data = await apiRes.json();
    res.json(data);
  } catch(e) {
    res.status(500).json({error: e.message});
  }
}
