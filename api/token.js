// api/token.js
const fetch = require('node-fetch');

let TOKEN = '';  // Bot से update होगा

module.exports = async (req, res) => {
  const batches = await fetch('https://api.penpencil.co/v3/user/batches', {
    headers: {
      'Authorization': TOKEN || 'YOUR_DEFAULT_TOKEN',
      'Origin': 'https://study.physicswallah.live'
    }
  }).then(r => r.json());
  
  res.json(batches);
};
