import styles from "./RSVP.module.css";

function RSVP({ data }) {
  return (
    <section id="rsvp" className={styles.section}>
      <div className={`section-shell ${styles.container}`}>
        <div className={styles.card}>
          <div className={styles.left}>
            <p className={styles.eyebrow}>Guest confirmation</p>
            <h2 className={styles.title}>{data.title}</h2>
            <p className={styles.text}>{data.text}</p>
          </div>

          <div className={styles.right}>
            <div className={styles.deadlineCard}>
              <span className={styles.deadlineLabel}>{data.deadlineLabel}</span>
              <span className={styles.deadlineValue}>{data.deadlineValue}</span>
            </div>

            <a
              className={styles.button}
              href={data.formLink}
              target="_blank"
              rel="noreferrer"
            >
              {data.buttonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RSVP;