import React from "react";

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      
      {/* Header */}
      <header style={{ 
        backgroundColor: "#387ed1", 
        padding: "20px", 
        color: "white",
        textAlign: "center" 
      }}>
        <h1>Zerodha Apps</h1>
        <p>India’s largest stock broker ecosystem</p>
      </header>

      {/* Kite Section */}
      <section style={{ padding: "40px", textAlign: "center" }}>
        <h2>Kite</h2>
        <p>
          Kite is Zerodha’s flagship trading platform.
          It offers advanced charts, live market data,
          and fast order execution.
        </p>
      </section>

      {/* Coin Section */}
      <section style={{ background: "#f5f5f5", padding: "40px", textAlign: "center" }}>
        <h2>Coin</h2>
        <p>
          Coin lets you invest in direct mutual funds
          without commission charges.
        </p>
      </section>

      {/* Console Section */}
      <section style={{ padding: "40px", textAlign: "center" }}>
        <h2>Console</h2>
        <p>
          Console is the back-office dashboard where you
          can track your portfolio, P&L, and tax reports.
        </p>
      </section>

      {/* Varsity Section */}
      <section style={{ background: "#f5f5f5", padding: "40px", textAlign: "center" }}>
        <h2>Varsity</h2>
        <p>
          Varsity is Zerodha’s free learning platform
          to understand stock market basics and advanced concepts.
        </p>
      </section>

      {/* Footer */}
      <footer style={{ 
        backgroundColor: "#222", 
        color: "white", 
        padding: "20px", 
        textAlign: "center" 
      }}>
        <p>© 2026 Zerodha Clone Project</p>
      </footer>

    </div>
  );
}

export default App;