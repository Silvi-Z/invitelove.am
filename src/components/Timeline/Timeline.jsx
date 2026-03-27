import styles from "./Timeline.module.css";

function Timeline({ data }) {
  return (
    <section id="schedule" className={styles.section}>
      <div className={`section-shell ${styles.container}`}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Flow of the day</p>
          <h2 className={styles.title}>{data.title}</h2>
          <p className={styles.intro}>{data.intro}</p>
        </div>

        <div className={styles.grid}>
          {data.items.map((item, index) => (
            <article key={index} className={styles.card}>
              <div className={styles.top}>
                <span className={styles.index}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className={styles.time}>{item.time}</span>
              </div>

              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.description}>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Timeline;