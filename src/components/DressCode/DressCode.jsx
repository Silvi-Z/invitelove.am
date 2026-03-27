import styles from "./DressCode.module.css";

function DressCode({ data }) {
  return (
    <section className={styles.section}>
      <div className={`section-shell ${styles.container}`}>
        <div className={styles.heading}>
          <p className={styles.eyebrow}>Style direction</p>
          <h2 className={styles.title}>{data.title}</h2>
          <p className={styles.text}>{data.text}</p>
        </div>

        <div className={styles.palette}>
          {data.palette.map((color, index) => (
            <span
              key={index}
              className={styles.color}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>

        <div className={styles.looks}>
          {data.looks.map((look, index) => (
            <article key={index} className={styles.lookCard}>
              <div className={styles.lookPreview}>
                <div className={styles.mockFigure}>
                  <span
                    className={styles.mockTop}
                    style={{ backgroundColor: data.palette[index % data.palette.length] }}
                  />
                  <span
                    className={styles.mockBottom}
                    style={{
                      backgroundColor:
                        data.palette[(index + 1) % data.palette.length],
                    }}
                  />
                </div>
              </div>

              <div className={styles.lookContent}>
                <h3 className={styles.lookTitle}>{look.title}</h3>
                <p className={styles.lookDescription}>{look.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DressCode;