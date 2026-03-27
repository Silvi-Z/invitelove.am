import styles from "./DemoWedding.module.css";

function DemoWedding() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroImage}></div>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroGlow}></div>

        <div className={styles.heroInner}>
          <div className={styles.heroTop}>
            <span className={styles.heroTopText}>Wedding Invitation</span>
            <span className={styles.heroTopDivider}></span>
            <span className={styles.heroTopText}>Yerevan • 2026</span>
          </div>

          <div className={styles.heroCard}>
            <p className={styles.date}>15 Սեպտեմբեր, 2026</p>

            <h1 className={styles.title}>
              Armen
              <span>&</span>
              Anna
            </h1>

            <p className={styles.subtitle}>
              Սիրով հրավիրում ենք ձեզ կիսելու մեր կյանքի ամենակարևոր օրը
            </p>

            <div className={styles.heroActions}>
              <a href="#details" className={styles.primaryButton}>
                Տեսնել մանրամասները
              </a>
              <a href="#rsvp" className={styles.secondaryButton}>
                RSVP
              </a>
            </div>
          </div>

          <div className={styles.scrollHint}>
            <span className={styles.scrollLine}></span>
            <span>scroll</span>
          </div>
        </div>
      </section>

      <section id="details" className={styles.section}>
        <div className={styles.sectionIntro}>
          <p className={styles.eyebrow}>Մեր օրվա մասին</p>
          <h2 className={styles.sectionTitle}>Ջերմ, գեղեցիկ և հիշվող օր</h2>
        </div>

        <div className={styles.storyLayout}>
          <div className={styles.storyTextCard}>
            <p>
              Սիրով հրավիրում ենք ձեզ ներկա գտնվելու մեր հարսանեկան օրվան և
              կիսելու մեզ հետ այդ առանձնահատուկ պահը՝ լի սիրով, ուրախությամբ
              և անմոռանալի հիշողություններով։
            </p>

            <p>
              Մեզ համար մեծ ուրախություն կլինի այս օրը նշել ձեր ներկայությամբ,
              ջերմությամբ և բարեմաղթանքներով։
            </p>
          </div>

          <div className={styles.storyImageCard}>
            <img
              src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1400&q=80"
              alt="Wedding mood"
            />
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionIntro}>
          <p className={styles.eyebrow}>Օրվա կառուցվածքը</p>
          <h2 className={styles.sectionTitle}>Ժամանակացույց</h2>
        </div>

        <div className={styles.timeline}>
          <article className={styles.timelineItem}>
            <span className={styles.timelineTime}>14:00</span>
            <div className={styles.timelineBody}>
              <h3>Պսակադրություն</h3>
              <p>Սուրբ եկեղեցում՝ ընտանիքի և ամենամտերիմների ներկայությամբ։</p>
            </div>
          </article>

          <article className={styles.timelineItem}>
            <span className={styles.timelineTime}>17:00</span>
            <div className={styles.timelineBody}>
              <h3>Խնջույք</h3>
              <p>Ընդունելություն, ընթրիք և երեկոյի գեղեցիկ սկիզբ։</p>
            </div>
          </article>

          <article className={styles.timelineItem}>
            <span className={styles.timelineTime}>19:00</span>
            <div className={styles.timelineBody}>
              <h3>Երեկույթ</h3>
              <p>Երաժշտություն, պարեր և տոնական մթնոլորտ։</p>
            </div>
          </article>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionIntro}>
          <p className={styles.eyebrow}>Տեսքի ուղղություն</p>
          <h2 className={styles.sectionTitle}>Dress Code</h2>
        </div>

        <div className={styles.dressCodeBox}>
          <div className={styles.dressText}>
            Խնդրում ենք ընտրել էլեգանտ և նուրբ երանգներ՝ մեղմ, մաքուր ու
            զուսպ տեսքով։
          </div>

          <div className={styles.colors}>
            <span style={{ background: "#efe3e5" }}></span>
            <span style={{ background: "#d8c0c7" }}></span>
            <span style={{ background: "#b78d96" }}></span>
            <span style={{ background: "#7f2235" }}></span>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionIntro}>
          <p className={styles.eyebrow}>Վայրը</p>
          <h2 className={styles.sectionTitle}>Միջոցառման հասցեն</h2>
        </div>

        <div className={styles.locationCard}>
          <div>
            <h3>Florence Restaurant</h3>
            <p>Yerevan, Armenia</p>
          </div>

          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noreferrer"
            className={styles.secondaryButton}
          >
            Բացել քարտեզը
          </a>
        </div>
      </section>

      <section id="rsvp" className={styles.section}>
        <div className={styles.rsvpBox}>
          <div className={styles.rsvpCopy}>
            <p className={styles.eyebrow}>RSVP</p>
            <h2 className={styles.sectionTitle}>Խնդրում ենք հաստատել մասնակցությունը</h2>
            <p className={styles.rsvpText}>
              Ձեր պատասխանը մեզ կօգնի նախապես կազմակերպել օրվա բոլոր կարևոր
              մանրամասները։
            </p>
          </div>

          <div className={styles.rsvpAction}>
            <button className={styles.primaryButton}>
              Հաստատել մասնակցությունը
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default DemoWedding;