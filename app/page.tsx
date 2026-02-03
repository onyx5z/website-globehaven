import React from 'react';

export default function HomePage() {
  return (
    <>
      {/* Navigation */}
      <nav className="nav">
        <div className="logo">GLOBEHAVEN CONSULTING</div>
        <ul className="nav-links">
          <li>
            <a href="#megoldasok">MEGOLDÁSOK</a>
          </li>
          <li>
            <a href="#infrastruktura">INFRASTRUKTÚRA</a>
          </li>
          <li>
            <a href="#helyzetek">KINEK SEGÍTÜNK?</a>
          </li>
          <li>
            <a href="#contact">KAPCSOLAT</a>
          </li>
        </ul>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-bg-overlay" />
          <div className="hero-inner">
            <div className="hero-left">
              <div className="hero-subtitle">NEM CSAK KÖNYVELÉS: PÉNZÜGYI OPERÁCIÓS RENDSZER</div>
              <h1>A vállalkozása pénzügyi infrastruktúráját építjük</h1>
              <p>
                A GlobeHaven egyesíti a <strong>NAV-biztos adótervezést</strong> a modern 
                <strong> AI-vezérelt vállalatirányítással</strong>. Kiszámíthatóságot és automatizációt adunk 
                magyar KKV-knak, hogy Ön a növekedésre fókuszálhasson.
              </p>
              <div className="hero-cta-row">
                <a href="#contact" className="cta-button">
                  KONZULTÁCIÓT KÉREK
                </a>
                <span className="hero-cta-note">
                  Középvállalati fókusz | Dedikált szakértők
                </span>
              </div>
            </div>

            <div className="hero-right">
              <div className="diagnostic-card">
                <h3>Biztonságban van a vagyona?</h3>
                <ul className="diagnostic-list">
                  <li>NAV-álló a jelenlegi struktúrája?</li>
                  <li>Globális ERP-t használ, ami nem érti a magyar adót?</li>
                  <li>Kézi munkaerőtől függ a riportolása?</li>
                </ul>
                <a href="#megoldasok" className="diagnostic-link">
                  Így építünk rendszert →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* The "Why Infrastructure" Section - Translating Strategy to Customer Benefit */}
        <section className="infrastructure-section" id="infrastruktura">
          <div className="section-intro">
            <h2>Miért nem elég ma már egy "sima" könyvelő?</h2>
            <p>
              A magyar jogszabályi környezet komplexitása és a technológiai fejlődés új megközelítést kíván. 
              Mi nem óradíjas szolgáltatást nyújtunk, hanem <strong>stabil rendszert</strong>.
            </p>
          </div>
          
          <div className="infra-grid">
            <div className="infra-item">
              <h3>Biztonsági "Vizesárok"</h3>
              <p>
                A magyar adójogszabályok (NAV, ÁFA, helyi iparűzési adó) folyamatosan változnak. 
                Rendszereinket "Audit-kész" állapotra tervezzük, így a jogszabályi súrlódás nem kockázat, hanem versenyelőny.
              </p>
            </div>
            <div className="infra-item">
              <h3>Automatizáció és AI</h3>
              <p>
                A munkaerő drága, az algoritmus olcsó. Kiváltjuk a manuális adatrögzítést 
                automatizált ERP integrációkkal, így a könyvelés nem utólagos adminisztráció, 
                hanem valós idejű adatforrás.
              </p>
            </div>
            <div className="infra-item">
              <h3>Döntési Központ</h3>
              <p>
                Aki a pénzügyi adatokat birtokolja, az irányít. Nem csak bevallásokat küldünk, 
                hanem a cégtulajdonos stratégiai partnereként felügyeljük a cash-flow-t és a profitabilitást.
              </p>
            </div>
          </div>
        </section>

        {/* Target Audience Scenarios */}
        <section className="scenarios" id="helyzetek">
          <div className="section-intro">
            <h2>Kinek térül meg a velünk való munka?</h2>
            <p>
              Főként olyan középvállalkozásokkal dolgozunk, ahol a hibázás költsége már magas, 
              és az automatizáció komoly profitot termel.
            </p>
          </div>

          <div className="scenarios-list">
            <div className="scenario-card">
              <div className="scenario-number">01</div>
              <h3>A növekvő "Scale-up"</h3>
              <p>
                <strong>A probléma:</strong> A cég kinőtte a sarki könyvelőt. A tranzakciószámok nőttek, 
                de a folyamatok kéziek maradtak.
                <br/><br/>
                <strong>A megoldásunk:</strong> Skálázható, AI-támogatott könyvelési infrastruktúra kiépítése.
              </p>
            </div>

            <div className="scenario-card">
              <div className="scenario-number">02</div>
              <h3>A nemzetközi ERP csapdája</h3>
              <p>
                <strong>A probléma:</strong> A cég drága külföldi szoftvert (SAP, Oracle, Odoo) használ, 
                ami nem kezeli jól a magyar NAV és ÁFA sajátosságokat.
                <br/><br/>
                <strong>A megoldásunk:</strong> Helyi megfelelésre optimalizált integráció és adatharmonizáció.
              </p>
            </div>

            <div className="scenario-card">
              <div className="scenario-number">03</div>
              <h3>A tulajdonosi kontroll hiánya</h3>
              <p>
                <strong>A probléma:</strong> Van forgalom, de nincs készpénz. A tulajdonos nem látja át, 
                hogy melyik üzletág viszi el a profitot.
                <br/><br/>
                <strong>A megoldásunk:</strong> Vezetői műszerfal és szigorú cash-flow menedzsment.
              </p>
            </div>
          </div>
        </section>

        {/* Services / Solutions - Updated with ERP & Compliance */}
        <section className="services-grid-section" id="megoldasok">
          <div className="section-intro">
            <h2>Termékesített Megoldásaink</h2>
            <p>
              Csomagjaink nem óradíjas tanácsadást, hanem kiszámítható, havidíjas 
              pénzügyi platformot kínálnak.
            </p>
          </div>

          <div className="services-grid-2x2">
            <div className="service-card">
              <div className="service-icon service-icon-1"></div>
              <h3>NAV-Biztos Compliance</h3>
              <ul className="service-features">
                <li>"Audit-ready" könyvelési folyamatok</li>
                <li>Folyamatos adókockázat-figyelés</li>
                <li>Teljes körű hatósági képviselet</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon service-icon-2"></div>
              <h3>AI ERP & Integráció</h3>
              <ul className="service-features">
                <li>Magyar jogszabályokra szabott rendszerek</li>
                <li>API alapú banki és számlázó összekötés</li>
                <li>Automatikus adategyeztetés (Reconciliation)</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon service-icon-3"></div>
              <h3>Virtuális Pénzügyi Igazgató</h3>
              <ul className="service-features">
                <li>Havi stratégiai felülvizsgálat</li>
                <li>Likviditási és beruházási tervezés</li>
                <li>Banki finanszírozás előkészítése</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon service-icon-4"></div>
              <h3>Adatvezérelt Optimalizálás</h3>
              <ul className="service-features">
                <li>Profitabilitás elemzése üzletáganként</li>
                <li>Költségcsökkentési potenciál feltárása</li>
                <li>Prediktív (előrejelző) modellezés</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Scorecard Example */}
        <section className="scorecard-section">
          <div className="scorecard-inner">
            <div className="scorecard-left">
              <h2>Az Ön Vezérlőpultja</h2>
              <p>
                Ügyfeleink nem főkönyvi kivonatokat kapnak, hanem döntéstámogató riportokat. 
                Lássa át cége helyzetét egyetlen képernyőn.
              </p>
            </div>

            <div className="scorecard-right">
              <div className="scorecard-item">
                <div className="scorecard-label">Automatizáltsági szint</div>
                <div className="scorecard-bar">
                  <div className="scorecard-bar-fill" style={{ width: "85%" }}></div>
                </div>
                <div className="scorecard-note">Kiváló (Papírmentes)</div>
              </div>

              <div className="scorecard-item">
                <div className="scorecard-label">Adóhatékonyság</div>
                <div className="scorecard-bar">
                  <div className="scorecard-bar-fill" style={{ width: "92%" }}></div>
                </div>
                <div className="scorecard-note">Optimalizált</div>
              </div>

              <div className="scorecard-item">
                <div className="scorecard-label">Cash-Flow Stabilitás</div>
                <div className="scorecard-stars">
                  <span className="star filled">★</span>
                  <span className="star filled">★</span>
                  <span className="star filled">★</span>
                  <span className="star filled">★</span>
                  <span className="star">★</span>
                </div>
                <div className="scorecard-note">Biztonságos</div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="contact-section" id="contact">
          <div className="contact-inner">
            <div className="contact-left">
              <h2>Lépjen szintet pénzügyeiben</h2>
              <p>
                Kizárólag olyan cégekkel dolgozunk együtt, ahol mérhető értéket tudunk teremteni 
                az automatizáció és a stratégiai tervezés révén.
                <br/><br/>
                Kérjen egy rövid, stratégiai egyeztetést.
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
                  <div className="contact-label">Célcsoport</div>
                  <div className="contact-value">50M+ HUF éves árbevételtől</div>
                </div>
                <div className="contact-item">
                  <div className="contact-label">Szolgáltatási terület</div>
                  <div className="contact-value">Magyarország & CEE Régió</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2026 GlobeHaven Consulting — Pénzügyi Infrastruktúra és Tanácsadás</p>
      </footer>
    </>
  );
}
