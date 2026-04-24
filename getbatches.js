export default async function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const token = process.env.PW_TOKEN;
  if (!token) return res.status(400).json({error: 'No token'});
  
  const data = await fetch('https://api.penpencil.co/v3/user/batches', {
    headers: {Authorization: token, Origin: 'https://study.physicswallah.live'}
  }).then(r=>r.json());
  res.json(data);
}
