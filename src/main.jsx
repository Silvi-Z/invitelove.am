import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/global.css";
import styles from "./pages/HomePage.module.css";
import { Link } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';

const Root = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <BrowserRouter>
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.headerInner}>
            <Link to="/">
              <img className={styles.logo} src="/assets/logo.png" alt="Invite Love" />
            </Link>

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
              <Link to="#events" onClick={() => setMenuOpen(false)}>
                Միջոցառումներ
              </Link>
              <Link to="#included" onClick={() => setMenuOpen(false)}>
                Ներառում է
              </Link>
              <Link to="#process" onClick={() => setMenuOpen(false)}>
                Ընթացք
              </Link>
              <Link to="#pricing" onClick={() => setMenuOpen(false)}>
                Գներ
              </Link>
              <Link to="#contact" onClick={() => setMenuOpen(false)}>
                Կապ
              </Link>
               <Link to="#" className={styles.primaryButton} onClick={() => setMenuOpen(false)}>
              Պատվիրել
            </Link>
            </nav>

           
          </div>
        </div>
      </header>
      <App />
    </main>
        </BrowserRouter>

  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);