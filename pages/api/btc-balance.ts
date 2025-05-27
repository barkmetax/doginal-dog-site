export default async function handler(req, res) {
  try {
    const wallet = '39mS67GHiLbZZYR4RhewiEhBVc65hUjskc';
    const response = await fetch(`https://blockstream.info/api/address/${wallet}`);
    const data = await response.json();
    const btc = (data.chain_stats.funded_txo_sum - data.chain_stats.spent_txo_sum) / 1e8;
    res.status(200).json({ btc });
  } catch (err) {
    res.status(500).json({ error: 'BTC fetch failed' });
  }
}
