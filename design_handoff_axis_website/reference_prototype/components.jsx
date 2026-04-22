/* global React */
const { useState, useEffect, useMemo } = React;

// ---------- Icon ------------------------------------------------------------
const Icon = ({ name, size = 18, className = '', ...rest }) => {
  const [svg, setSvg] = useState(null);
  useEffect(() => {
    let alive = true;
    fetch(`../../assets/icons/${name}.svg`).then(r => r.text()).then(t => { if (alive) setSvg(t); });
    return () => { alive = false; };
  }, [name]);
  if (!svg) return <span className={className} style={{ display:'inline-block', width: size, height: size }} />;
  return <span className={className} style={{ display:'inline-flex', width: size, height: size }}
    dangerouslySetInnerHTML={{ __html: svg.replace(/width="\d+"/, `width="${size}"`).replace(/height="\d+"/, `height="${size}"`) }} {...rest} />;
};

// ---------- Button ----------------------------------------------------------
const Button = ({ variant = 'primary', onDark = false, children, trailingIcon, onClick, href }) => {
  const cls = `btn btn--${variant}${onDark ? ' btn--on-dark' : ''}`;
  const content = <>{children}{trailingIcon && <Icon name={trailingIcon} size={16} />}</>;
  if (href) return <a href={href} className={cls} onClick={onClick}>{content}</a>;
  return <button className={cls} onClick={onClick}>{content}</button>;
};

// ---------- Container -------------------------------------------------------
const Container = ({ children, className = '' }) => (
  <div className={`container ${className}`}>{children}</div>
);

// ---------- Logo ------------------------------------------------------------
// Fetches the source SVG inline and stamps fill on every shape at render time.
// This bypasses CSS class / caching quirks — the logo renders correctly on
// every background without relying on per-variant files.
const Logo = ({ color = '#ffffff', height = 22 }) => {
  const ref = React.useRef(null);
  React.useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch('../../assets/axis-logo.svg');
        const text = await res.text();
        if (cancelled || !ref.current) return;
        ref.current.innerHTML = text;
        const svg = ref.current.querySelector('svg');
        if (svg) {
          svg.setAttribute('height', height);
          svg.removeAttribute('width');
          svg.style.height = height + 'px';
          svg.style.width = 'auto';
          svg.style.display = 'block';
          svg.querySelectorAll('path, polygon, polyline, rect, circle, ellipse').forEach(s => {
            s.setAttribute('fill', color);
            s.removeAttribute('class');
          });
          const defs = svg.querySelector('defs');
          if (defs) defs.remove();
        }
      } catch (e) {}
    })();
    return () => { cancelled = true; };
  }, [color, height]);
  return <span ref={ref} style={{ display: 'inline-flex', height, lineHeight: 0 }} aria-label="Axis Brands" />;
};

// ---------- Nav -------------------------------------------------------------
const Nav = ({ activePage, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const links = ['How We Work', 'Results', 'Team'];
  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <Container className="nav__inner">
        <a className="nav__logo" onClick={() => onNavigate('home')}><Logo color="#ffffff" height={22} /></a>
        <div className="nav__links">
          {links.map(l => (
            <a key={l} className={`nav__link ${activePage === l ? 'is-active' : ''}`}
               onClick={() => onNavigate(l)}>{l}</a>
          ))}
        </div>
        <Button variant="primary" onClick={() => onNavigate('book')}>Book a Call</Button>
        <button className="nav__menu-btn" aria-label="Menu"><Icon name="menu" size={22} /></button>
      </Container>
    </nav>
  );
};

// ---------- Hero ------------------------------------------------------------
const Hero = ({ onBook, onSeeResults }) => (
  <section className="hero on-dark" data-screen-label="Hero">
    <div className="hero__glow" aria-hidden="true" />
    <Container className="hero__inner">
      <span className="eyebrow hero__eyebrow">Amazon · Walmart · Global marketplaces</span>
      <h1 className="hero__headline">Your Amazon Partner.<br/><span className="hero__headline-alt">Not Your Amazon Agency.</span></h1>
      <p className="hero__sub">
        Axis Brands is run by operators and investors in consumer product companies.
        We manage Amazon and Walmart with your P&amp;L in mind — flat monthly fee,
        no percentage of ad spend, no lock-in contracts.
      </p>
      <div className="hero__ctas">
        <Button variant="primary" trailingIcon="arrow-right" onClick={onBook}>Book a 15-Minute Call</Button>
        <a className="hero__secondary" onClick={onSeeResults}>See Our Results <Icon name="chevron-down" size={16}/></a>
      </div>
    </Container>
  </section>
);

// ---------- Stats Bar -------------------------------------------------------
const StatsBar = () => (
  <section className="stats-section" id="stats" data-screen-label="Stats">
    <Container>
      <div className="stats">
        <Stat n="20" suffix="+" label="Brands Managed" />
        <Stat n="+40%" label="Avg. Sales Growth" />
        <Stat n="−12%" label="Avg. Ad Spend" />
        <Stat n="−33%" label="Avg. TACoS" />
      </div>
      <div className="stats__footnote">Average client results after the first 3 months.</div>
    </Container>
  </section>
);

const Stat = ({ n, suffix, label }) => (
  <div className="stat">
    <div className="stat__n">{n}{suffix && <span className="stat__suffix">{suffix}</span>}</div>
    <div className="stat__l">{label}</div>
  </div>
);

// ---------- Why Brands Choose Axis -----------------------------------------
const Difference = () => {
  const cols = [
    { h: 'No Percentage of Ad Spend', b: 'Most Amazon agencies charge a percentage of your advertising budget. That means they make more money when you spend more — not when you grow more. We charge a flat monthly fee. Your ad budget stays with your brand, where it belongs.' },
    { h: 'No Lock-In Contracts', b: 'We earn your business every month. No long-term contracts, no exit penalties, no notice periods. If we\u2019re not delivering results, you should be free to walk. We\u2019re confident you won\u2019t want to.' },
    { h: 'Operators, Not Account Managers', b: 'Our team has built, scaled, and invested in consumer brands. We think about your margins, your cash flow, and your channel strategy — not just your campaign metrics. That\u2019s a fundamentally different conversation than you\u2019ll get from a traditional agency.' },
  ];
  return (
    <section className="section" data-screen-label="Why Axis">
      <Container>
        <header className="section__head">
          <span className="eyebrow">The Axis Difference</span>
          <h2>Why Brands Choose Axis</h2>
          <p className="lead">We built this model because we were frustrated by the same agencies our clients were frustrated by. So we did it differently.</p>
        </header>
        <div className="diff-grid">
          {cols.map((c, i) => (
            <article key={i} className="diff-card">
              <div className="diff-card__num">0{i+1}</div>
              <h3>{c.h}</h3>
              <p>{c.b}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

// ---------- Client Logos (placeholder — awaiting real SVGs) -----------------
const ClientLogos = () => {
  const clients = [
    { slug: 'whoosh', name: 'Whoosh!' },
    { slug: 'hairclub', name: 'HairClub' },
    { slug: 'sleep-country', name: 'Sleep Country' },
    { slug: 'endy', name: 'Endy' },
  ];
  const markets = [
    { slug: 'amazon', name: 'Amazon' },
    { slug: 'walmart', name: 'Walmart' },
    { slug: 'shopify', name: 'Shopify' },
  ];
  const containerRef = React.useRef(null);
  React.useEffect(() => {
    let cancelled = false;
    (async () => {
      const root = containerRef.current;
      if (!root) return;
      const cells = root.querySelectorAll('[data-logo-slug]');
      for (const cell of cells) {
        const slug = cell.getAttribute('data-logo-slug');
        try {
          const res = await fetch(`../../assets/clients/${slug}.svg`);
          const text = await res.text();
          if (cancelled) return;
          cell.innerHTML = text;
          const svg = cell.querySelector('svg');
          if (svg) {
            svg.querySelectorAll('path, polygon, polyline, rect, circle, ellipse').forEach(s => {
              s.setAttribute('fill', 'currentColor');
              s.removeAttribute('class');
            });
            const defs = svg.querySelector('defs');
            if (defs) defs.remove();
          }
        } catch (e) {}
      }
    })();
    return () => { cancelled = true; };
  }, []);
  const Row = ({ label, items, cols }) => (
    <div className="clients__block">
      <div className="clients__label">{label}</div>
      <div className="clients__row" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
        {items.map(l => (
          <div
            key={l.slug}
            className="clients__logo-cell"
            data-logo-slug={l.slug}
            aria-label={l.name}
            title={l.name}
          />
        ))}
      </div>
    </div>
  );
  return (
    <section className="clients" data-screen-label="Clients" ref={containerRef}>
      <Container>
        <div className="clients__stack">
          <Row label="Brands we operate" items={clients} cols={4} />
          <div className="clients__divider" aria-hidden="true" />
          <Row label="Marketplaces we sell on" items={markets} cols={3} />
        </div>
      </Container>
    </section>
  );
};

// ---------- Services --------------------------------------------------------
const Services = () => {
  const services = [
    { h: 'Amazon & Walmart Management', b: 'Full-service management across the channels that move product. Listings, PPC, catalog management, inventory, brand protection, and compliance — one team, one fee. No percentage of your ad spend. Ever.' },
    { h: 'International Expansion', b: 'Most brands leave significant revenue on the table by staying in one market. We manage entry into Europe, Australia, and Latin America — navigating the complexity of each marketplace so you capture the opportunity without the overhead.' },
    { h: 'Brand Acquisition & Investment', b: 'For the right brands, we go beyond management. We acquire consumer product companies with strong fundamentals and scale them aggressively on Amazon. If you\u2019re looking for a partner with genuine skin in the game, this is what that looks like.' },
  ];
  return (
    <section className="section section--alt" data-screen-label="Services">
      <Container>
        <header className="section__head">
          <span className="eyebrow">What We Do</span>
          <h2>A focused number of brands at a time.</h2>
          <p className="lead">Quality over volume — always.</p>
        </header>
        <div className="services-grid">
          {services.map((s, i) => (
            <article key={i} className="service-card">
              <div className="service-card__num">{String(i+1).padStart(2,'0')}</div>
              <h3>{s.h}</h3>
              <p>{s.b}</p>
              <a className="service-card__link">Learn more <Icon name="arrow-right" size={14}/></a>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

// ---------- TACoS Calculator CTA -------------------------------------------
const TACoSCalculator = () => {
  const [price, setPrice] = useState(29.99);
  const [conv, setConv] = useState(12);
  const [cpc, setCpc] = useState(1.40);
  const tacos = useMemo(() => {
    if (!price || !conv || !cpc) return 0;
    const adSpendPerSale = (cpc * 100) / conv;
    return (adSpendPerSale / price) * 100;
  }, [price, conv, cpc]);
  const healthy = tacos > 0 && tacos < 20;
  return (
    <section className="tacos on-dark" data-screen-label="TACoS">
      <div className="tacos__glow" aria-hidden="true" />
      <Container>
        <div className="tacos__grid">
          <div className="tacos__copy">
            <span className="eyebrow">Tools</span>
            <h2>Not sure if Amazon is right for your brand?</h2>
            <p>Use our free TACoS calculator to validate your product economics before you invest. Enter your price, conversion, and cost-per-click — we'll tell you if the numbers work.</p>
            <Button variant="primary" trailingIcon="arrow-right">Try the full calculator</Button>
          </div>
          <div className="tacos__calc">
            <div className="tacos__row">
              <label>Selling price</label>
              <div className="tacos__input">
                <span className="tacos__prefix">$</span>
                <input type="number" step="0.01" value={price} onChange={e => setPrice(+e.target.value || 0)} />
              </div>
            </div>
            <div className="tacos__row">
              <label>Conversion rate (%)</label>
              <div className="tacos__input"><input type="number" step="0.1" value={conv} onChange={e => setConv(+e.target.value || 0)} /></div>
            </div>
            <div className="tacos__row">
              <label>Cost per click</label>
              <div className="tacos__input"><span className="tacos__prefix">$</span><input type="number" step="0.01" value={cpc} onChange={e => setCpc(+e.target.value || 0)} /></div>
            </div>
            <div className="tacos__result">
              <div className="tacos__result-label">Estimated TACoS</div>
              <div className={`tacos__result-n ${healthy ? 'is-good' : 'is-high'}`}>{tacos.toFixed(1)}%</div>
              <div className="tacos__result-note">{healthy ? 'Healthy. The channel math works.' : 'Above target — margin at risk.'}</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

// ---------- Testimonials ----------------------------------------------------
const Testimonials = () => {
  const items = [
    { q: 'Partnering with Axis has transformed our business. Our Amazon sales grew by 40% in year one, while our TACoS dropped 30%.', name: 'Mitch Krakower', title: 'CEO, Whoosh!', photo: '../../assets/testimonials/mitch-krakower.webp' },
    { q: 'Adam and his team have been a key strategic partner in navigating an increasingly challenging digital landscape.', name: 'John Chalson', title: 'SVP, HairClub', photo: '../../assets/testimonials/john-chalson.webp' },
    { q: 'I strongly recommend Adam and the entire team. They are the best in the business.', name: 'Phil Besner', title: 'SVP, Hush & Sleep Country Canada', photo: '../../assets/testimonials/phil-besner.jpeg' },
  ];
  return (
    <section className="section" data-screen-label="Testimonials">
      <Container>
        <header className="section__head">
          <span className="eyebrow">Proof</span>
          <h2>What Our Clients Say</h2>
        </header>
        <div className="testimonials">
          {items.map((t, i) => (
            <figure key={i} className="testimonial">
              <Icon name="quote" size={22} className="testimonial__mark" />
              <blockquote>{t.q}</blockquote>
              <figcaption>
                <div className="testimonial__avatar"><img src={t.photo} alt="" /></div>
                <div>
                  <div className="testimonial__name">{t.name}</div>
                  <div className="testimonial__title">{t.title}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
};

// ---------- Team ------------------------------------------------------------
const Team = () => {
  const members = [
    { name: 'Adam Levinter', title: 'Co-Founder', photo: '../../assets/team/adam-levinter.jpg',
      bio: 'Operator and investor in consumer product companies. Author of The Subscription Boom — featured in The New York Times, Washington Post, Forbes, and Axios.' },
    { name: 'Anshuman Chhabra', title: 'Amazon Operations Lead', photo: '../../assets/team/anshuman-chhabra.jpg',
      bio: 'Seasoned ecommerce operator. Former Amazon Vendor Manager; previously at Sport Chek, Best Buy Canada.' },
    { name: 'Jeffrey Talajic', title: 'Brand Growth Lead', photo: '../../assets/team/jeffrey-talajic.jpg',
      bio: 'Ecommerce specialist with a track record of scaling consumer brands to over $10M in annual sales.' },
  ];
  return (
    <section className="section section--alt" data-screen-label="Team">
      <Container>
        <header className="section__head">
          <span className="eyebrow">Team</span>
          <h2>The Team Behind the Work</h2>
          <p className="lead">We're a small, senior team — by design. Every brand we work with gets direct access to the people who actually know what they're doing.</p>
        </header>
        <div className="team-grid">
          {members.map(m => (
            <article key={m.name} className="team-card">
              <div className="team-card__photo"><img src={m.photo} alt={m.name} /></div>
              <h3>{m.name}</h3>
              <div className="team-card__title">{m.title}</div>
              <p>{m.bio}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

// ---------- Final CTA -------------------------------------------------------
const FinalCTA = () => (
  <section className="final-cta on-dark" data-screen-label="Final CTA">
    <div className="final-cta__glow" aria-hidden="true" />
    <Container>
      <h2>Is Axis the Right Fit for Your Brand?</h2>
      <p>Most brands we work with already know their Amazon performance could be better. We'll tell you honestly in 15 minutes whether we can move the needle — and what that would look like.</p>
      <Button variant="primary" trailingIcon="arrow-right">Book a 15-Minute Call</Button>
    </Container>
  </section>
);

// ---------- Footer ----------------------------------------------------------
const Footer = () => (
  <footer className="footer on-dark">
    <Container className="footer__inner">
      <div className="footer__brand">
        <Logo color="#ffffff" height={20} />
        <p className="footer__tag">Your Amazon Partner. Not Your Amazon Agency.</p>
      </div>
      <div className="footer__cols">
        <div><div className="footer__col-label">Company</div><a>How We Work</a><a>Results</a><a>Team</a><a>Contact</a></div>
        <div><div className="footer__col-label">Contact</div><a>hello@axisbrandsgroup.com</a><a className="footer__social"><Icon name="linkedin" size={16}/> LinkedIn</a></div>
      </div>
    </Container>
    <div className="footer__legal">
      <Container><small>© 2026 Axis Brands Group. All rights reserved.</small></Container>
    </div>
  </footer>
);

// ---------- Book Modal ------------------------------------------------------
const BookModal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal__panel" onClick={e => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose} aria-label="Close"><Icon name="x" size={20}/></button>
        <span className="eyebrow">15-Minute Call</span>
        <h3 style={{marginTop:8, marginBottom:8}}>Pick a time that works.</h3>
        <p style={{marginBottom:20}}>This would normally be the Calendly / HubSpot embed. Placeholder shown.</p>
        <div className="modal__calendar">
          <div className="modal__cal-head"><Icon name="calendar" size={16}/> April 2026</div>
          <div className="modal__cal-grid">
            {Array.from({length: 30}, (_, i) => i + 1).map(d => (
              <button key={d} className={`modal__day ${d === 24 ? 'is-selected' : ''} ${d < 22 ? 'is-past' : ''}`}>{d}</button>
            ))}
          </div>
          <div className="modal__slots">
            {['9:00 AM','10:30 AM','1:00 PM','2:30 PM','4:00 PM'].map((t,i) => (
              <button key={t} className={`modal__slot ${i===2 ? 'is-selected' : ''}`}>{t}</button>
            ))}
          </div>
          <Button variant="primary" trailingIcon="arrow-right">Confirm &amp; book</Button>
        </div>
      </div>
    </div>
  );
};

// ---------- App Shell -------------------------------------------------------
const App = () => {
  const [activePage, setActivePage] = useState('How We Work');
  const [bookOpen, setBookOpen] = useState(false);
  const onNavigate = (target) => {
    if (target === 'book' || target === 'home') {
      if (target === 'book') setBookOpen(true);
      return;
    }
    setActivePage(target);
    const map = { 'How We Work': 'stats', 'Results': 'stats', 'Team': 'team' };
    const id = map[target];
    if (id) document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return (
    <>
      <Nav activePage={activePage} onNavigate={onNavigate} />
      <main>
        <Hero onBook={() => setBookOpen(true)} onSeeResults={() => document.getElementById('stats')?.scrollIntoView({behavior:'smooth'})} />
        <StatsBar />
        <Difference />
        <ClientLogos />
        <Services />
        <TACoSCalculator />
        <Testimonials />
        <div id="team"><Team /></div>
        <FinalCTA />
      </main>
      <Footer />
      <BookModal open={bookOpen} onClose={() => setBookOpen(false)} />
    </>
  );
};

Object.assign(window, { App, Nav, Hero, StatsBar, Difference, ClientLogos, Services, TACoSCalculator, Testimonials, Team, FinalCTA, Footer, Button, Icon, Logo, Container });
