import styles from "./EventDetails.module.css";

function EventDetails({ data }) {
  return (
    <section id="details" className={styles.section}>
      <div className={`section-shell ${styles.container}`}>
        <div className={styles.heading}>
          <p className={styles.eyebrow}>Essential Information</p>
          <h2 className={styles.title}>{data.title}</h2>
          <p className={styles.intro}>{data.intro}</p>
        </div>

        <div className={styles.grid}>
          {data.items.map((item, index) => (
            <article key={index} className={styles.card}>
              <div className={styles.icon}>{item.icon}</div>

              <div className={styles.topRow}>
                <p className={styles.label}>{item.label}</p>
                <p className={styles.time}>{item.time}</p>
              </div>

              <h3 className={styles.place}>{item.place}</h3>
              <p className={styles.note}>{item.note}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EventDetails;