import styles from "./Hero.module.css";

function Hero({ data }) {
  return (
    <section className={styles.hero}>
      <div className={styles.bgImage}></div>
      <div className={styles.noise}></div>

      <div className={`section-shell ${styles.inner}`}>
        <header className={styles.topbar}>
          <div className={styles.brand}>Invite Love</div>

          <nav className={styles.nav}>
            <a href="#details">Details</a>
            <a href="#story">Story</a>
            <a href="#schedule">Schedule</a>
            <a href="#rsvp">RSVP</a>
          </nav>
        </header>

        <div className={styles.grid}>
          <div className={styles.left}>
            <p className={styles.kicker}>{data.tagline}</p>
            <h1 className={styles.names}>{data.names}</h1>
            <p className={styles.subtitle}>{data.subtitle}</p>

            <div className={styles.actions}>
              <a href="#rsvp" className={styles.primaryButton}>
                Confirm Attendance
              </a>
              <a href="#details" className={styles.secondaryButton}>
                Explore Details
              </a>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.floatingCard}>
              <div className={styles.cardRow}>
                <span className={styles.cardLabel}>Date</span>
                <span className={styles.cardValue}>{data.date}</span>
              </div>

              <div className={styles.cardDivider}></div>

              <div className={styles.cardRow}>
                <span className={styles.cardLabel}>Location</span>
                <span className={styles.cardValue}>{data.location}</span>
              </div>

              <div className={styles.cardDivider}></div>

              <p className={styles.cardText}>
                A modern invitation website with RSVP, event details, schedule,
                and a polished mobile-first experience.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.scrollHint}>
          <span className={styles.scrollLine}></span>
          <span className={styles.scrollText}>Scroll</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;