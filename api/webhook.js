export default async function handler(req, res) {
  const { message } = req.body;
  if (message?.text) {
    console.log('New token:', message.text);
    // Vercel env update नहीं, file में save या alert
    res.json({ ok: true });
  }
  res.status(200).end('OK');
}
