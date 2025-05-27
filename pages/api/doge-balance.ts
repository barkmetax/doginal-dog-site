export default async function handler(req, res) {
  try {
    const wallet = 'DK8n5G1Xyo5PSRowdUFSR3JoqyqqiRPWE3';
    const response = await fetch(`https://dogechain.info/api/v1/address/balance/${wallet}`);
    const data = await response.json();
    if (!data.success) throw new Error('DOGE fetch failed');
    const doge = parseFloat(data.balance);
    res.status(200).json({ doge });
  } catch (err) {
    res.status(500).json({ error: 'DOGE fetch failed' });
  }
}
