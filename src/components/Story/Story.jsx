import styles from "./Story.module.css";

function Story({ data }) {
  return (
    <section id="story" className={styles.section}>
      <div className={`section-shell ${styles.container}`}>
        <div className={styles.layout}>
          <div className={styles.imageWrap}>
            <img src={data.image} alt={data.title} className={styles.image} />
            <div className={styles.quoteCard}>{data.quote}</div>
          </div>

          <div className={styles.content}>
            <p className={styles.eyebrow}>A little about us</p>
            <h2 className={styles.title}>{data.title}</h2>
            <p className={styles.text}>{data.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Story;