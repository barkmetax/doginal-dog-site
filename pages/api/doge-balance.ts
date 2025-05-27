
export default async function handler(req, res) {
  try {
    const response = await fetch('https://sochain.com/api/v2/get_address_balance/DOGE/DK8n5G1Xyo5PSRowdUFSR3JoqyqqiRPWE3');
    const data = await response.json();
    const doge = parseFloat(data.data.confirmed_balance);
    res.status(200).json({ doge });
  } catch (error) {
    res.status(500).json({ error: 'DOGE fetch failed' });
  }
}
