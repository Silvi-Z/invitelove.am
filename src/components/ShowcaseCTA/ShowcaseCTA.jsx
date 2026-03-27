import styles from "./ShowcaseCTA.module.css";

function ShowcaseCTA({ data }) {
  return (
    <section className={styles.section}>
      <div className={`section-shell ${styles.container}`}>
        <div className={styles.shell}>
          <div className={styles.top}>
            <div className={styles.copy}>
              <p className={styles.eyebrow}>For future clients</p>
              <h2 className={styles.title}>{data.title}</h2>
              <p className={styles.text}>{data.text}</p>
            </div>

            <div className={styles.actionCard}>
              <p className={styles.contactText}>{data.contactText}</p>
              <a
                className={styles.button}
                href={data.contactLink}
                target="_blank"
                rel="noreferrer"
              >
                {data.contactButton}
              </a>
            </div>
          </div>

          <div className={styles.features}>
            {data.features.map((feature, index) => (
              <div key={index} className={styles.feature}>
                <span className={styles.featureMark}>•</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShowcaseCTA;