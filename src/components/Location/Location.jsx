import styles from "./Location.module.css";

function Location({ data }) {
  return (
    <section className={styles.section}>
      <div className={`section-shell ${styles.container}`}>
        <div className={styles.layout}>
          <div className={styles.mapCard}>
            <div className={styles.mapFrame}>
              <div className={styles.mapGlow}></div>
              <div className={styles.mapContent}>
                <p className={styles.mapEyebrow}>Venue Preview</p>
                <h3 className={styles.mapVenue}>{data.venue}</h3>
                <p className={styles.mapAddress}>{data.address}</p>

                <a
                  className={styles.mapButton}
                  href={data.mapLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open Map
                </a>
              </div>
            </div>
          </div>

          <div className={styles.infoCard}>
            <p className={styles.eyebrow}>Where to find us</p>
            <h2 className={styles.title}>{data.title}</h2>
            <h3 className={styles.venue}>{data.venue}</h3>
            <p className={styles.address}>{data.address}</p>
            <p className={styles.note}>{data.note}</p>

            <div className={styles.list}>
              {data.directions.map((item, index) => (
                <div key={index} className={styles.listItem}>
                  <span className={styles.bullet}></span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Location;