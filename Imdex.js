const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('🎵 Welcome to Chalah API');
});

app.get('/song', async (req, res) => {
  const query = req.query.query;
  if (!query) return res.json({ error: 'Please provide a song name using ?query=' });

  // Sample response (ඇත්තටම download link එකක් ඇතුළත් කරලා use කරන්න පුළුවන්)
  res.json({
    song: query,
    download: `https://example.com/download/${encodeURIComponent(query)}.mp3`
  });
});

app.listen(PORT, () => {
  console.log(`Chalah API running on port ${PORT}`);
});
