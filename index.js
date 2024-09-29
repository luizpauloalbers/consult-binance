const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;

app.get('/price', async (req, res) => {
  const symbol = req.query.symbol || 'BTCUSDT';
  try {
    const response = await axios.get(`https://api.binance.com/api/v3/ticker/price?symbol=${symbol}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error fetching price from Binance');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
