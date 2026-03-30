import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroGlowOne}></div>
        <div className={styles.heroGlowTwo}></div>

        <div className={styles.container}>
          <div className={styles.heroShell}>
            <div className={styles.heroTopLine}>
              <span className={styles.heroTopText}>Invite Love</span>
              <span className={styles.heroTopDot}></span>
              <span className={styles.heroTopText}>Անհատական հրավերի կայքեր</span>
            </div>

            <div className={styles.heroGrid}>
              <div className={styles.heroContent}>
                <h1 className={styles.heroTitle}>
                  Կայքեր
                  <br />
                  ձեր կարևոր
                  <br />
                  առիթների համար
                </h1>

                <p className={styles.heroText}>
                  Մինիմալիստական և էլեգանտ հրավերի կայքեր հարսանիքների,
                  ծննդյան օրերի, նշանադրությունների և այլ միջոցառումների համար։
                </p>

                <div className={styles.heroActions}>
                  <a href="/catalog" className={styles.primaryButton}>
                    Տեսնել տարբերակները
                  </a>
                  <a href="#contact" className={styles.secondaryButton}>
                    Պատվիրել կայք
                  </a>
                </div>
              </div>

              <div className={styles.heroVisual}>
                <div className={styles.heroFrame}>
                  <div className={styles.heroImageCard}>
                    <img
                      src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80"
                      alt="Հրավերի կայքի օրինակ"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.why}>
        <div className={styles.container}>
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>Ինչու կայք</p>
            <h2 className={styles.sectionTitle}>
              Ավելի ներկայանալի, ավելի հարմար և ավելի հիշվող ձևաչափ
            </h2>
          </div>

          <div className={styles.whyModernGrid}>
            <article className={styles.whyLeadCard}>
              <span className={styles.whyBadge}>01</span>
              <h3>Մեկ հղումով՝ ամբողջ տեղեկատվությունը</h3>
              <p>
                Հյուրերը միանգամից տեսնում են միջոցառման օրը, ժամը, վայրը,
                dress code-ը, ժամանակացույցը և RSVP-ն՝ առանց երկար բացատրությունների։
              </p>
            </article>

            <article className={styles.whyMiniCard}>
              <span className={styles.whyBadge}>02</span>
              <h3>Հեշտ RSVP</h3>
              <p>Հաստատումները հավաքվում են մաքուր և կազմակերպված ձևով։</p>
            </article>

            <article className={styles.whyMiniCard}>
              <span className={styles.whyBadge}>03</span>
              <h3>Ժամանակակից տեսք</h3>
              <p>Կայքը շատ ավելի ներկայանալի է, քան սովորական նկար-հրավերը։</p>
            </article>

            <article className={styles.whyMiniCard}>
              <span className={styles.whyBadge}>04</span>
              <h3>Հեշտ է ուղարկել</h3>
              <p>Պարզապես կիսվում եք մեկ հղումով բոլոր հյուրերի հետ։</p>
            </article>
          </div>
        </div>
      </section>

      <section id="events" className={styles.events}>
        <div className={styles.container}>
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>Միջոցառումների տեսակներ</p>
            <h2 className={styles.sectionTitle}>
              Կայքը հարմարեցվում է ձեր առիթի ձևաչափին
            </h2>
          </div>

          <div className={styles.eventsModernGrid}>
            <article className={styles.eventModernCard}>
              <div className={styles.eventModernImage}>
                <img
                  src="../assets/wedding.jpg"
                  alt="Հարսանիք"
                />
              </div>

              <div className={styles.eventModernBody}>
                <span className={styles.eventTag}>01</span>
                <h3>Հարսանիք</h3>
                <p>
                  Կայք պսակադրության  ամբողջ օրվա մանրամասներով։
                </p>
                <a href="/wedding/wd-2" className={styles.inlineLink}>
  Բացել օրինակը
</a>
              </div>
            </article>

            <article className={styles.eventModernCard}>
              <div className={styles.eventModernImage}>
                <img
                  src="/assets/birthday.jpg"
                  alt="Ծննդյան օր"
                />
              </div>

              <div className={styles.eventModernBody}>
                <span className={styles.eventTag}>02</span>
                <h3>Ծննդյան օր</h3>
                <p>
                  Ժամանակակից invitation page՝ երեկույթի մանրամասներով։
                </p>
                <a href="#" className={styles.inlineLink}>
                  Բացել օրինակը
                </a>
              </div>
            </article>

            <article className={styles.eventModernCard}>
              <div className={styles.eventModernImage}>
                <img
                  src="../assets/other.jpg"
                  alt="Այլ միջոցառումներ"
                />
              </div>

              <div className={styles.eventModernBody}>
                <span className={styles.eventTag}>03</span>
                <h3>Այլ միջոցառումներ</h3>
                <p>
                  Նշանադրություն, տարեդարձ, baby shower, փակ ընթրիք կամ այլ
                  հատուկ առիթներ։
                </p>
                <a href="#" className={styles.inlineLink}>
                  Բացել օրինակը
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="included" className={styles.included}>
        <div className={styles.container}>
          <div className={styles.includedModern}>
            <div className={styles.sectionIntroLeft}>
              <p className={styles.eyebrow}>Ինչ է ներառված</p>
              <h2 className={styles.sectionTitle}>
                Ամեն ինչ, ինչ պետք է գեղեցիկ ու ամբողջական հրավերի կայքի համար
              </h2>
            </div>

            <div className={styles.includedColumns}>
              <div className={styles.includedColumn}>
                <div className={styles.includedRow}>Միջոցառման ամսաթիվ և ժամ</div>
                <div className={styles.includedRow}>Վայրի տվյալներ</div>
                <div className={styles.includedRow}>RSVP ձև կամ հղում</div>
                <div className={styles.includedRow}>Dress code բաժին</div>
                <div className={styles.includedRow}>Ժամանակացույց</div>
              </div>

              <div className={styles.includedColumn}>
                <div className={styles.includedRow}>Քարտեզ կամ location հղում</div>
                <div className={styles.includedRow}>Welcome text կամ story</div>
                <div className={styles.includedRow}>Mobile-friendly տարբերակ</div>
                <div className={styles.includedRow}>Անհատական տեսողական լուծում</div>
                <div className={styles.includedRow}>Պատրաստի հղում՝ ուղարկելու համար</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className={styles.process}>
        <div className={styles.container}>
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>Ինչպես է աշխատում</p>
            <h2 className={styles.sectionTitle}>Պարզ, արագ և հասկանալի ընթացք</h2>
          </div>

          <div className={styles.processModern}>
            <article className={styles.processRow}>
              <span className={styles.processNumber}>01</span>
              <div className={styles.processBody}>
                <h3>Դուք ուղարկում եք տվյալները</h3>
                <p>
                  Անուններ, ամսաթիվ, վայր, տեքստեր, միջոցառման տեսակը և ցանկալի
                  տրամադրությունը։
                </p>
              </div>
            </article>

            <article className={styles.processRow}>
              <span className={styles.processNumber}>02</span>
              <div className={styles.processBody}>
                <h3>Կառուցվածքը պատրաստվում է</h3>
                <p>
                  Ես դասավորում եմ բովանդակությունը և ընտրում էջի ընդհանուր
                  ուղղությունը։
                </p>
              </div>
            </article>

            <article className={styles.processRow}>
              <span className={styles.processNumber}>03</span>
              <div className={styles.processBody}>
                <h3>Կայքը հավաքվում է</h3>
                <p>
                  Դուք ստանում եք պատրաստի տարբերակը՝ նայելու և անհրաժեշտ շտկումներ
                  անելու համար։
                </p>
              </div>
            </article>

            <article className={styles.processRow}>
              <span className={styles.processNumber}>04</span>
              <div className={styles.processBody}>
                <h3>Ստանում եք վերջնական հղումը</h3>
                <p>
                  Հաստատումից հետո կայքը պատրաստ է ուղարկելու հյուրերին։
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="pricing" className={styles.pricing}>
        <div className={styles.container}>
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>Գնային փաթեթներ</p>
            <h2 className={styles.sectionTitle}>
              Պարզ և հասկանալի տարբերակներ տարբեր պահանջների համար
            </h2>
          </div>

          <div className={styles.pricingModernGrid}>
            <article className={styles.pricingModernCard}>
              <div className={styles.pricingTop}>
                <span className={styles.packageBadge}>Սկիզբ</span>
                <div className={styles.priceModern}>15 000 դր.</div>
              </div>

              <h3>Պարզ հրավերի էջ</h3>
              <p className={styles.pricingDescription}>
                Փոքր ու մաքուր էջ, երբ պետք է գեղեցիկ ձևով ներկայացնել հիմնական
                տեղեկությունները։
              </p>

              <ul className={styles.modernPriceList}>
                <li>Ամսաթիվ և ժամ</li>
                <li>Վայրի տվյալներ</li>
                <li>Dress code</li>
                <li>Պատրաստի հղում</li>
              </ul>
            </article>

            <article
              className={`${styles.pricingModernCard} ${styles.pricingFeatured}`}
            >
              <div className={styles.pricingTop}>
                <span className={styles.packageBadge}>Հիմնական</span>
                <div className={styles.priceModern}>25 000 դր.</div>
              </div>

              <h3>Ամենապահանջված տարբերակ</h3>
              <p className={styles.pricingDescription}>
                Լիարժեք կայք հարսանիքների և այլ միջոցառումների համար՝ ավելի
                ամբողջական կառուցվածքով։
              </p>

              <ul className={styles.modernPriceList}>
                <li>Միջոցառման կառուցվածք</li>
                <li>RSVP</li>
                <li>Ժամանակացույց</li>
                <li>Dress code</li>
                <li>Location</li>
                <li>Ավելի անհատական տեսք</li>
              </ul>
            </article>

            <article className={styles.pricingModernCard}>
              <div className={styles.pricingTop}>
                <span className={styles.packageBadge}>Անհատական</span>
                <div className={styles.priceModern}>40 000 դր. +</div>
              </div>

              <h3>Ավելի հատուկ պատվերների համար</h3>
              <p className={styles.pricingDescription}>
                Երբ պետք է ավելի անհատական կառուցվածք, լրացուցիչ բաժիններ կամ
                երկլեզու տարբերակ։
              </p>

              <ul className={styles.modernPriceList}>
                <li>Անհատական կառուցվածք</li>
                <li>Լրացուցիչ բաժիններ</li>
                <li>Երկու լեզու</li>
                <li>Ավելի յուրահատուկ լուծում</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.faq}>
        <div className={styles.container}>
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>Հաճախ տրվող հարցեր</p>
            <h2 className={styles.sectionTitle}>Կարճ պատասխաններ կարևոր հարցերին</h2>
          </div>

          <div className={styles.faqGrid}>
            <article className={styles.faqItem}>
              <h3>Որքա՞ն ժամանակ է պետք</h3>
              <p>Սովորաբար 1-ից 3 օր՝ կախված բովանդակությունից և փաթեթից։</p>
            </article>

            <article className={styles.faqItem}>
              <h3>Կարո՞ղ է լինել անհատական</h3>
              <p>Այո, կայքը հարմարեցվում է հենց ձեր միջոցառման ձևաչափին։</p>
            </article>

            <article className={styles.faqItem}>
              <h3>Կարո՞ղ է ներառվել RSVP</h3>
              <p>Այո, RSVP-ն կարող է լինել կայքի հիմնական բաժիններից մեկը։</p>
            </article>

            <article className={styles.faqItem}>
              <h3>Կարո՞ղ է լինել երկու լեզվով</h3>
              <p>Այո, անհրաժեշտության դեպքում պատրաստվում է երկլեզու տարբերակ։</p>
            </article>
          </div>
        </div>
      </section>

      <section id="contact" className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.ctaBox}>
            <div className={styles.ctaCopy}>
              <p className={styles.eyebrow}>Կապ</p>
              <h2 className={styles.ctaTitle}>
                Պատվիրեք ձեր միջոցառման անհատական կայքը
              </h2>
              <p className={styles.ctaText}>
                Եթե ուզում եք հյուրերին հրավիրելու ավելի ներկայանալի,
                ժամանակակից և հիշվող տարբերակ, կարող եմ ստեղծել անհատական կայք
                հենց ձեր միջոցառման համար։
              </p>
            </div>

            <div className={styles.ctaActions}>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className={styles.primaryButtonLight}
              >
                Կապ Instagram-ով
              </a>

              <a href="#events" className={styles.secondaryButtonLight}>
                Տեսնել միջոցառումների տեսակները
              </a>
            </div>
          </div>
        </div>
      </section>
      </>
  );
}

export default HomePage;