export default function HomePage() {
  return (
    <>
      {/* Navigation */}
      <nav className="nav">
        <div className="logo">GLOBEHAVEN CONSULTING</div>
        <ul className="nav-links">
          <li>
            <a href="#szolgaltatasok">SZOLGÁLTATÁSOK</a>
          </li>
          <li>
            <a href="#helyzetek">TIPIKUS HELYZETEK</a>
          </li>
          <li>
            <a href="#rolunk">RÓLUNK</a>
          </li>
          <li>
            <a href="#contact">KAPCSOLAT</a>
          </li>
        </ul>
      </nav>

      <main>
        {/* Hero with diagnostic card */}
        <section className="hero">
          <div className="hero-bg-overlay" />
          <div className="hero-inner">
            <div className="hero-left">
              <div className="hero-subtitle">SEGÍTÜNK TISZTÁN LÁTNI</div>
              <h1>Stratégiai adó- és pénzügyi tanácsadás KKV-knak</h1>
              <p>
                GlobeHaven Consulting: adótanácsadás, könyvelés és adatvezérelt
                növekedési megoldások magyar kis- és középvállalkozásoknak.
              </p>
              <div className="hero-cta-row">
                <a href="#contact" className="cta-button">
                  IDŐPONTOT KÉREK
                </a>
                <span className="hero-cta-note">
                  Első rövid egyeztetés díjmentes, online.
                </span>
              </div>
            </div>

            <div className="hero-right">
              <div className="diagnostic-card">
                <h3>Tisztán lát a pénzügyeiben?</h3>
                <ul className="diagnostic-list">
                  <li>Túl magasnak érzi az adóterhet?</li>
                  <li>Nincs átlátható cash-flow riport?</li>
                  <li>Nem használja ki az adatait?</li>
                </ul>
                <a href="#szolgaltatasok" className="diagnostic-link">
                  Nézze meg, miben segítünk →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Scenarios */}
        <section className="scenarios" id="helyzetek">
          <div className="section-intro">
            <h2>Tipikus helyzetek, amelyekben segítünk</h2>
            <p>
              Gyorsan növő, stagnáló vagy digitalizálódó vállalkozások – mindegyiknek
              más a kihívása. Mi a megoldást hozzuk.
            </p>
          </div>

          <div className="scenarios-list">
            <div className="scenario-card">
              <div className="scenario-number">01</div>
              <h3>Gyorsan növő KKV, aki nem látja át az adóterheit</h3>
              <p>
                A vállalkozás növekszik, de az adótervezés nem követi a tempót.
                Strukturális változások és optimalizálás szükséges.
              </p>
              <a href="#szolgaltatasok" className="scenario-link">
                Lásd a megoldást
              </a>
            </div>

            <div className="scenario-card">
              <div className="scenario-number">02</div>
              <h3>Stagnáló cég, aki jobb cash-flow-t szeretne</h3>
              <p>
                A bevétel stagnál, a likviditás szűkös. Elemzés és konkrét
                lépések a cash-flow javítására, ügyfélszerzési stratégiák.
              </p>
              <a href="#szolgaltatasok" className="scenario-link">
                Lásd a megoldást
              </a>
            </div>

            <div className="scenario-card">
              <div className="scenario-number">03</div>
              <h3>Digitalizálódó cég, aki adatot gyűjt, de nem használja ki</h3>
              <p>
                Van adat, de nincs elemzés. AI-alapú modellek és riportok,
                amelyek segítenek dönteni és növekedni.
              </p>
              <a href="#szolgaltatasok" className="scenario-link">
                Lásd a megoldást
              </a>
            </div>
          </div>
        </section>

        {/* Services 2x2 Grid */}
        <section className="services-grid-section" id="szolgaltatasok">
          <div className="section-intro">
            <h2>Szolgáltatásaink</h2>
            <p>
              Adó, könyvelés és adatalapú döntéstámogatás egy kézben – hogy
              Ön a növekedésre fókuszálhasson.
            </p>
          </div>

          <div className="services-grid-2x2">
            <div className="service-card">
              <div className="service-icon service-icon-1"></div>
              <h3>Adóstratégia és adótervezés</h3>
              <ul className="service-features">
                <li>Adóoptimalizálás szabályos keretek között</li>
                <li>NAV-kockázatok feltérképezése</li>
                <li>Optimális cégstruktúra tervezése</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon service-icon-2"></div>
              <h3>Könyvelés és riporting</h3>
              <ul className="service-features">
                <li>Naprakész könyvelés és számlázás</li>
                <li>Érthető havi vezetői riportok</li>
                <li>Cash-flow és eredménykimutatások</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon service-icon-3"></div>
              <h3>Likviditás- és cash-flow menedzsment</h3>
              <ul className="service-features">
                <li>Likviditási tervezés és előrejelzés</li>
                <li>Optimalizálási lehetőségek azonosítása</li>
                <li>Rizikókezelés és puffertervezés</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon service-icon-4"></div>
              <h3>AI és adatalapú elemzések</h3>
              <ul className="service-features">
                <li>Ügyfélszegmentáció és előrejelzések</li>
                <li>Saját algoritmusokkal támogatott elemzések</li>
                <li>Döntéstámogató riportok és ajánlások</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Scorecard / Dashboard preview */}
        <section className="scorecard-section">
          <div className="scorecard-inner">
            <div className="scorecard-left">
              <h2>Hogyan néz ki egy GlobeHaven riport?</h2>
              <p>
                Átlátható, vizuális mutatók, amelyek segítenek dönteni. Nem csak
                számok, hanem konkrét ajánlások és következő lépések.
              </p>
            </div>

            <div className="scorecard-right">
              <div className="scorecard-item">
                <div className="scorecard-label">Adóteher mutató</div>
                <div className="scorecard-bar">
                  <div className="scorecard-bar-fill" style={{ width: "68%" }}></div>
                </div>
                <div className="scorecard-note">Átlag alatt</div>
              </div>

              <div className="scorecard-item">
                <div className="scorecard-label">Likviditási puffer</div>
                <div className="scorecard-bar">
                  <div className="scorecard-bar-fill" style={{ width: "45%" }}></div>
                </div>
                <div className="scorecard-note">Javításra szorul</div>
              </div>

              <div className="scorecard-item">
                <div className="scorecard-label">Riportolási érettség</div>
                <div className="scorecard-stars">
                  <span className="star filled">★</span>
                  <span className="star filled">★</span>
                  <span className="star filled">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                </div>
                <div className="scorecard-note">3/5</div>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="about-section" id="rolunk">
          <div className="about-content">
            <h2>Rólunk röviden</h2>
            <p>
              GlobeHaven Consulting magyar kis- és középvállalkozásokra specializálódott
              tanácsadó cég. Kombináljuk a hagyományos adó- és könyvelési szakértelmet
              modern, AI-alapú elemzésekkel, hogy ügyfeleink átláthatóan lássák a
              pénzügyeiket és növekedhetnek.
            </p>
            <div className="about-tags">
              <span className="tag">Adótanácsadás</span>
              <span className="tag">Könyvelés</span>
              <span className="tag">AI & Analitika</span>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="contact-section" id="contact">
          <div className="contact-inner">
            <div className="contact-left">
              <h2>Kapcsolat</h2>
              <p>
                Kérjen időpontot egy rövid, díjmentes online konzultációra.
                Írjon nekünk, és 1 munkanapon belül visszajelzünk.
              </p>
              <a href="mailto:info@globehaven.hu" className="cta-button">
                IDŐPONTOT KÉREK
              </a>
            </div>

            <div className="contact-right">
              <div className="contact-info">
                <div className="contact-item">
                  <div className="contact-label">Email</div>
                  <a href="mailto:info@globehaven.hu" className="contact-value">
                    info@globehaven.hu
                  </a>
                </div>
                <div className="contact-item">
                  <div className="contact-label">Válaszidő</div>
                  <div className="contact-value">1 munkanapon belül</div>
                </div>
                <div className="contact-item">
                  <div className="contact-label">Szolgáltatási terület</div>
                  <div className="contact-value">Magyarország</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2026 GlobeHaven Consulting — Segítünk tisztán látni</p>
      </footer>
    </>
  );
}
