
export default async function handler(req, res) {
  try {
    const response = await fetch('https://blockchain.info/q/addressbalance/39mS67GHiLbZZYR4RhewiEhBVc65hUjskc');
    const sats = await response.text();
    const btc = parseFloat(sats) / 1e8;
    res.status(200).json({ btc });
  } catch (error) {
    res.status(500).json({ error: 'BTC fetch failed' });
  }
}
