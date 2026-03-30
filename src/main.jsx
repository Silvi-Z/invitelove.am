import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/global.css";
import styles from "./pages/HomePage.module.css";

const Root = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.headerInner}>
            <a href="/">
              <img className={styles.logo} src="/assets/logo.png" alt="Invite Love" />
            </a>

            <button
              className={`${styles.burger} ${menuOpen ? styles.isOpen : ""}`}
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
              <a href="#events" onClick={() => setMenuOpen(false)}>
                Միջոցառումներ
              </a>
              <a href="#included" onClick={() => setMenuOpen(false)}>
                Ներառում է
              </a>
              <a href="#process" onClick={() => setMenuOpen(false)}>
                Ընթացք
              </a>
              <a href="#pricing" onClick={() => setMenuOpen(false)}>
                Գներ
              </a>
              <a href="#contact" onClick={() => setMenuOpen(false)}>
                Կապ
              </a>
               <a href="#" className={styles.primaryButton} onClick={() => setMenuOpen(false)}>
              Պատվիրել
            </a>
            </nav>

           
          </div>
        </div>
      </header>
      <App />
    </main>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);