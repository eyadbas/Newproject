import { useState } from 'react'
import {
  Activity,
  ArrowUpRight,
  Check,
  ChevronRight,
  CircleDot,
  ClipboardCheck,
  Mail,
  MapPin,
  Menu,
  MessagesSquare,
  Network,
  Radar,
  Send,
  ShieldCheck,
  Waypoints,
  X,
} from 'lucide-react'

const tabs = ['Home', 'Services', 'About', 'Contact']

const services = [
  { icon: ShieldCheck, number: '01', title: 'Governance, Risk & Compliance', description: 'Build decision systems that make accountability visible and compliance practical.' },
  { icon: Waypoints, number: '02', title: 'IT Project Management', description: 'Move complex technology initiatives from brief to delivery with calm, clear leadership.' },
  { icon: Network, number: '03', title: 'PMO Setup & Governance', description: 'Stand up lean PMOs, operating rhythms, and frameworks teams actually use.' },
  { icon: Radar, number: '04', title: 'Risk Assessment & Mitigation', description: 'See around corners with structured risk discovery, prioritization, and response plans.' },
  { icon: ClipboardCheck, number: '05', title: 'Compliance Auditing', description: 'Turn audit preparation into a repeatable practice with evidence-led reviews.' },
  { icon: MessagesSquare, number: '06', title: 'Program Management Advisory', description: 'Bring experienced perspective to portfolios where the stakes and dependencies are high.' },
]



function LogoMark() {
  return (
    <div className="logo-mark" aria-hidden="true">
      <span className="logo-node node-top" />
      <span className="logo-node node-left" />
      <span className="logo-node node-right" />
      <span className="logo-node node-bottom" />
      <span className="logo-core" />
    </div>
  )
}

function SectionEyebrow({ children }) {
  return <p className="eyebrow"><span className="eyebrow-line" />{children}</p>
}

function Home({ setActiveTab }) {
  return (
    <section id="home" className="page-section hero-section page-enter" aria-labelledby="hero-title">
      <div className="hero-copy">
        <SectionEyebrow>Governance / Delivery / Confidence</SectionEyebrow>
        <h1 id="hero-title">Make complexity<br /><em>work for you.</em></h1>
        <p className="hero-intro">Quality Solution helps organizations move with confidence through governance, risk management, and project delivery that holds up under pressure.</p>
        <div className="hero-actions">
          <button className="button button-primary" onClick={() => setActiveTab('Contact')}>Start a conversation <ArrowUpRight size={17} /></button>
          <button className="text-link" onClick={() => setActiveTab('Services')}>Explore our services <ChevronRight size={16} /></button>
        </div>
        <div className="hero-proof">
          <div><strong>13+</strong><span>years of<br />experience</span></div>
          <div><strong>03</strong><span>core sectors<br />served</span></div>
          <div><strong>01</strong><span>clear way<br />forward</span></div>
        </div>
      </div>
      <div className="hero-visual" aria-label="Quality Solution operating model">
        <div className="visual-topline"><span><CircleDot size={12} /> LIVE OPERATING VIEW</span><span className="status"><i />All systems aligned</span></div>
        <div className="system-orbit orbit-one" /><div className="system-orbit orbit-two" />
        <div className="system-center"><LogoMark /><span>QUALITY<br /><b>SOLUTION</b></span></div>
        <div className="signal-card signal-governance"><ShieldCheck size={17} /><span>Governance</span><b>96%</b></div>
        <div className="signal-card signal-risk"><Radar size={17} /><span>Risk posture</span><b>LOW</b></div>
        <div className="signal-card signal-delivery"><Activity size={17} /><span>Delivery health</span><b>ON TRACK</b></div>
        <div className="visual-footer"><span>GRC</span><span>PMO</span><span>IT DELIVERY</span><span>ADVISORY</span></div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section className="page-section page-enter" aria-labelledby="services-title">
      <div className="section-heading"><div><SectionEyebrow>What we do</SectionEyebrow><h2 id="services-title">Clarity is a<br /><em>delivery advantage.</em></h2></div><p>Focused expertise for organizations navigating change, accountability, and the demands of modern delivery.</p></div>
      <div className="service-grid">{services.map(({ icon: Icon, number, title, description }) => <article className="service-card" key={title}><div className="card-top"><span className="service-icon"><Icon size={19} /></span><span className="card-number">{number}</span></div><h3>{title}</h3><p>{description}</p><span className="card-arrow"><ArrowUpRight size={17} /></span></article>)}</div>
    </section>
  )
}


function About() {
  return (
    <section className="page-section page-enter about-section" aria-labelledby="about-title">
      <div className="about-lead"><SectionEyebrow>Why Quality Solution</SectionEyebrow><h2 id="about-title">The work behind<br /><em>the work.</em></h2><p>Quality Solution is an independent consultancy for leaders who need momentum without losing control. We connect the strategic view to the detail that makes delivery real.</p></div>
      <div className="founder-panel"><div className="founder-initials">EA</div><div className="founder-copy"><span className="tag">Founder / Principal Advisor</span><h3>Eyad Basabrain</h3><p className="founder-bio">With 13+ years across government and technology, Eyad Basabrain brings an IT-PMO leadership background to complex transformation, governance, and delivery challenges.</p><div className="founder-meta"><span><Check size={15} />Government & technology</span><span><Check size={15} />IT-PMO leadership</span><span><Check size={15} />GRC advisory</span></div></div></div>
      <div className="about-stat-row"><div><strong>13+</strong><span>Years of experience</span></div><div><strong>3</strong><span>Operating environments</span></div><div><strong>∞</strong><span>Room to improve</span></div></div>
    </section>
  )
}

function Contact() {
  const [submitted, setSubmitted] = useState(false)
  return (
    <section className="page-section page-enter contact-section" aria-labelledby="contact-title">
      <div className="contact-intro"><SectionEyebrow>Let’s talk</SectionEyebrow><h2 id="contact-title">Your next<br /><em>clear move.</em></h2><p>Tell us what you’re working through. We’ll bring a considered point of view and a practical next step.</p><div className="contact-details"><a href="mailto:eyad.emb@gmail.com"><Mail size={17} />eyad.emb@gmail.com</a><a href="https://www.linkedin.com/in/eyad-mohammad-basabrain-82798b46" target="_blank" rel="noreferrer"><ArrowUpRight size={17} />LinkedIn / Eyad Basabrain</a><span><MapPin size={17} />[City, Country]</span></div></div>
      <form className="contact-form" onSubmit={(event) => { event.preventDefault(); setSubmitted(true) }}>
        <label>Name<input required type="text" placeholder="Your name" /></label><label>Email<input required type="email" placeholder="you@company.com" /></label><label>How can we help?<textarea required rows="5" placeholder="A little context goes a long way..." /></label><button className="button button-primary" type="submit">{submitted ? <>Message ready <Check size={17} /></> : <>Send enquiry <Send size={16} /></>}</button>{submitted && <p className="form-note">Thanks. This demo form is ready to connect to your preferred inbox.</p>}
      </form>
    </section>
  )
}

function App() {
  const [activeTab, setActiveTab] = useState('Home')
  const [menuOpen, setMenuOpen] = useState(false)
  const selectTab = (tab) => { setActiveTab(tab); setMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }) }
  return (
    <div className="app-shell">
      <header className="site-header"><a className="brand" href="#home" onClick={() => selectTab('Home')}><LogoMark /><span><strong>Quality Solution</strong><small>حلول الجودة الشاملة</small></span></a><p className="header-tagline">GRC <b>&</b> IT Project Management Consultancy</p><button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={22} /> : <Menu size={22} />}</button><nav className={menuOpen ? 'nav-open' : ''} aria-label="Main navigation">{tabs.map((tab, index) => <button key={tab} className={activeTab === tab ? 'nav-item active' : 'nav-item'} onClick={() => selectTab(tab)}><span>0{index + 1}</span>{tab}</button>)}</nav><a className="header-contact" href="mailto:eyad.emb@gmail.com">Get in touch <ArrowUpRight size={15} /></a></header>
      <main>{activeTab === 'Home' && <Home setActiveTab={selectTab} />}{activeTab === 'Services' && <Services />}{activeTab === 'About' && <About />}{activeTab === 'Contact' && <Contact />}</main>
      <footer><span>© {new Date().getFullYear()} Quality Solution</span><span>حلول الجودة الشاملة</span><span>GRC / PMO / IT DELIVERY</span></footer>
    </div>
  )
}

export default App
