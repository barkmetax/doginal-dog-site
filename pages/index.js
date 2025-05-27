
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Doginal Dog Foundation</title>
      </Head>
      <main style={{ fontFamily: "'Press Start 2P', cursive", backgroundColor: '#000', color: '#adff2f', padding: '2rem' }}>
        <h1 style={{ textAlign: 'center' }}>Doginal Dog Foundation</h1>
        <p style={{ textAlign: 'center' }}>
          A collaborative treasury established to fund Doginal Dog initiatives and expand the ecosystem.
        </p>
        <section>
          <h2>Treasury</h2>
          <p><strong>BTC:</strong> <span id="btcUsd">Loading...</span></p>
          <p><strong>DOGE:</strong> <span id="dogeUsd">Loading...</span></p>
          <p><strong>Doginal Dogs:</strong> <span id="dogValue">Loading...</span></p>
          <p><strong>Total Assets:</strong> <span id="totalUsd">Loading...</span></p>
          <div id="errorDisplay" style={{ color: 'red' }}></div>
        </section>
      </main>
    </>
  );
}
