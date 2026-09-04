import { useEffect, useState } from 'react'
import {
  Activity,
  ArrowUpRight,
  Check,
  ChevronRight,
  CircleDot,
  ClipboardCheck,
  FileCheck,
  Mail,
  MapPin,
  Menu,
  MessagesSquare,
  Network,
  Radar,
  Send,
  ShieldCheck,
  Trash2,
  Upload,
  Waypoints,
  X,
} from 'lucide-react'

const tabs = ['Home', 'Services', 'About', 'Certifications', 'Contact']

const copy = {
  en: {
    language: 'العربية', tabs: { Home: 'Home', Services: 'Services', About: 'About', Contact: 'Contact' }, tagline: 'IT Project Management Consultancy', getInTouch: 'Get in touch',
    home: { eyebrow: 'Governance / Delivery / Confidence', title: <>Make complexity<br /><em>work for you.</em></>, intro: 'Quality Solution helps organizations move with confidence through governance, risk management, and project delivery that holds up under pressure.', start: 'Start a conversation', explore: 'Explore our services', years: <>years of<br />experience</>, sectors: <>core sectors<br />served</>, forward: <>clear way<br />forward</>, visualLabel: 'Quality Solution operating model', live: 'LIVE OPERATING VIEW', aligned: 'All systems aligned', governance: 'Governance', risk: 'Risk posture', delivery: 'Delivery health', low: 'LOW', onTrack: 'ON TRACK' },
    services: { eyebrow: 'What we do', title: <>Clarity is a<br /><em>delivery advantage.</em></>, intro: 'Focused expertise for organizations navigating change, accountability, and the demands of modern delivery.', items: [['Governance, Risk & Compliance', 'Build decision systems that make accountability visible and compliance practical.'], ['IT Project Management', 'Move complex technology initiatives from brief to delivery with calm, clear leadership.'], ['PMO Setup & Governance', 'Stand up lean PMOs, operating rhythms, and frameworks teams actually use.'], ['Risk Assessment & Mitigation', 'See around corners with structured risk discovery, prioritization, and response plans.'], ['Compliance Auditing', 'Turn audit preparation into a repeatable practice with evidence-led reviews.'], ['Program Management Advisory', 'Bring experienced perspective to portfolios where the stakes and dependencies are high.']] },
    about: { eyebrow: 'Why Quality Solution', title: <>The work behind<br /><em>the work.</em></>, intro: 'Quality Solution is an independent consultancy for leaders who need momentum without losing control. We connect the strategic view to the detail that makes delivery real.', cv: 'View my CV', tag: 'Founder / Principal Advisor', bio: 'With 13+ years across government and technology, Eyad Basabrain brings an IT-PMO leadership background to complex transformation, governance, and delivery challenges.', meta: ['Government & technology', 'IT-PMO leadership', 'GRC advisory'], stats: ['Years of experience', 'Operating environments', 'Room to improve'] },
    certifications: { eyebrow: 'Credentials', title: <>Keep your<br /><em>proof close.</em></>, intro: 'Add certificate files here to review them before placing them in the repository.', upload: 'Choose certificates', empty: 'No certificates selected yet.', note: 'Files selected here stay in this browser. To publish them permanently, add the files to the repository and redeploy the site.', repository: 'Upload to repository', remove: 'Remove', fileTypes: 'PDF, JPG, PNG up to 10 MB' },
    contact: { eyebrow: 'Let’s talk', title: <>Your next<br /><em>clear move.</em></>, intro: 'Tell us what you’re working through. We’ll bring a considered point of view and a practical next step.', location: '[City, Country]', name: 'Name', namePlaceholder: 'Your name', email: 'Email', emailPlaceholder: 'you@company.com', help: 'How can we help?', helpPlaceholder: 'A little context goes a long way...', send: 'Send enquiry', ready: 'Message ready', thanks: 'Thanks. This demo form is ready to connect to your preferred inbox.' },
  },
  ar: {
    language: 'English', tabs: { Home: 'الرئيسية', Services: 'الخدمات', About: 'من نحن', Contact: 'تواصل معنا' }, tagline: 'استشارات إدارة مشاريع تقنية المعلومات', getInTouch: 'تواصل معنا',
    home: { eyebrow: 'حوكمة / إنجاز / ثقة', title: <>حوّل التعقيد إلى<br /><em>قوة تدفعك للأمام.</em></>, intro: 'تساعد حلول الجودة الشاملة المؤسسات على التقدم بثقة من خلال حوكمة وإدارة مخاطر وتنفيذ مشاريع تصمد أمام التحديات.', start: 'ابدأ محادثة', explore: 'اكتشف خدماتنا', years: <>سنوات من<br />الخبرة</>, sectors: <>قطاعات<br />نخدمها</>, forward: <>طريق واضح<br />للمستقبل</>, visualLabel: 'نموذج عمل حلول الجودة الشاملة', live: 'نظرة تشغيلية مباشرة', aligned: 'جميع الأنظمة متوافقة', governance: 'الحوكمة', risk: 'مستوى المخاطر', delivery: 'حالة التنفيذ', low: 'منخفض', onTrack: 'على المسار' },
    services: { eyebrow: 'ماذا نقدم', title: <>الوضوح هو<br /><em>ميزة الإنجاز.</em></>, intro: 'خبرة متخصصة للمؤسسات التي تواجه التغيير والمسؤولية ومتطلبات التنفيذ الحديث.', items: [['الحوكمة والمخاطر والامتثال', 'نبني أنظمة قرار تجعل المسؤولية واضحة والامتثال عملياً.'], ['إدارة مشاريع تقنية المعلومات', 'ننقل المبادرات التقنية المعقدة من الفكرة إلى التنفيذ بقيادة هادئة وواضحة.'], ['تأسيس مكاتب إدارة المشاريع وحوكمتها', 'نؤسس مكاتب إدارة مشاريع وأطر عمل وإيقاعات تشغيلية تستخدمها الفرق فعلاً.'], ['تقييم المخاطر والتخفيف منها', 'نستشرف المخاطر باكتشاف منظم وترتيب الأولويات وخطط استجابة عملية.'], ['تدقيق الامتثال', 'نحوّل الاستعداد للتدقيق إلى ممارسة متكررة تعتمد على الأدلة.'], ['استشارات إدارة البرامج', 'نقدم منظوراً خبيراً للمحافظ التي تتعدد فيها الرهانات والاعتماديات.']] },
    about: { eyebrow: 'لماذا حلول الجودة الشاملة', title: <>العمل الذي يقف خلف<br /><em>كل إنجاز.</em></>, intro: 'حلول الجودة الشاملة استشارات مستقلة للقادة الذين يحتاجون إلى التقدم دون فقدان السيطرة. نربط الرؤية الاستراتيجية بالتفاصيل التي تجعل التنفيذ واقعاً.', cv: 'عرض سيرتي الذاتية', tag: 'المؤسس / المستشار الرئيسي', bio: 'بخبرة تتجاوز 13 عاماً في الحكومة والتقنية، يقدم إياد بصبرين خلفية قيادية في مكاتب إدارة مشاريع تقنية المعلومات لمواجهة تحديات التحول والحوكمة والتنفيذ المعقدة.', meta: ['الحكومة والتقنية', 'قيادة مكاتب المشاريع التقنية', 'استشارات الحوكمة والمخاطر والامتثال'], stats: ['سنوات من الخبرة', 'بيئات تشغيلية', 'مساحة لا نهائية للتحسين'] },
    certifications: { eyebrow: 'الاعتمادات', title: <>احتفظ<br /><em>بإثباتك.</em></>, intro: 'أضف ملفات الشهادات هنا لمراجعتها قبل وضعها في المستودع.', upload: 'اختيار الشهادات', empty: 'لم يتم اختيار شهادات بعد.', note: 'تبقى الملفات المختارة في هذا المتصفح. لنشرها بشكل دائم، أضف الملفات إلى المستودع ثم أعد نشر الموقع.', repository: 'رفع إلى المستودع', remove: 'إزالة', fileTypes: 'PDF أو JPG أو PNG حتى 10 ميجابايت' },
    contact: { eyebrow: 'لنتحدث', title: <>خطوتك التالية<br /><em>واضحة.</em></>, intro: 'أخبرنا بما تعمل عليه. سنقدم لك رأياً مدروساً وخطوة عملية تالية.', location: '[المدينة، الدولة]', name: 'الاسم', namePlaceholder: 'اسمك', email: 'البريد الإلكتروني', emailPlaceholder: 'you@company.com', help: 'كيف يمكننا مساعدتك؟', helpPlaceholder: 'كلما شاركتنا تفاصيل أكثر كان ذلك أفضل...', send: 'إرسال الاستفسار', ready: 'الرسالة جاهزة', thanks: 'شكراً. نموذج العرض هذا جاهز للربط مع بريدك المفضل.' },
  },
}

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

function Home({ setActiveTab, t }) {
  return (
    <section id="home" className="page-section hero-section page-enter" aria-labelledby="hero-title">
      <div className="hero-copy">
        <SectionEyebrow>{t.home.eyebrow}</SectionEyebrow><h1 id="hero-title">{t.home.title}</h1><p className="hero-intro">{t.home.intro}</p>
        <div className="hero-actions">
          <button className="button button-primary" onClick={() => setActiveTab('Contact')}>{t.home.start} <ArrowUpRight className="directional-icon" size={17} /></button><button className="text-link" onClick={() => setActiveTab('Services')}>{t.home.explore} <ChevronRight className="directional-icon" size={16} /></button>
        </div>
        <div className="hero-proof">
          <div><strong>13+</strong><span>{t.home.years}</span></div><div><strong>03</strong><span>{t.home.sectors}</span></div><div><strong>01</strong><span>{t.home.forward}</span></div>
        </div>
      </div>
      <div className="hero-visual" aria-label={t.home.visualLabel}>
        <div className="visual-topline"><span><CircleDot size={12} /> {t.home.live}</span><span className="status"><i />{t.home.aligned}</span></div>
        <div className="system-orbit orbit-one" /><div className="system-orbit orbit-two" />
        <div className="system-center"><LogoMark /><span>QUALITY<br /><b>SOLUTION</b></span></div>
        <div className="signal-card signal-governance"><ShieldCheck size={17} /><span>{t.home.governance}</span><b>96%</b></div><div className="signal-card signal-risk"><Radar size={17} /><span>{t.home.risk}</span><b>{t.home.low}</b></div><div className="signal-card signal-delivery"><Activity size={17} /><span>{t.home.delivery}</span><b>{t.home.onTrack}</b></div>
        <div className="visual-footer"><span>GRC</span><span>PMO</span><span>IT DELIVERY</span><span>ADVISORY</span></div>
      </div>
    </section>
  )
}

function Services({ t }) {
  return (
    <section className="page-section page-enter" aria-labelledby="services-title">
      <div className="section-heading"><div><SectionEyebrow>{t.services.eyebrow}</SectionEyebrow><h2 id="services-title">{t.services.title}</h2></div><p>{t.services.intro}</p></div><div className="service-grid">{services.map(({ icon: Icon, number }, index) => <article className="service-card" key={number}><div className="card-top"><span className="service-icon"><Icon size={19} /></span><span className="card-number">{number}</span></div><h3>{t.services.items[index][0]}</h3><p>{t.services.items[index][1]}</p><span className="card-arrow"><ArrowUpRight className="directional-icon" size={17} /></span></article>)}</div>
    </section>
  )
}


function About({ t, language }) {
  return (
    <section className="page-section page-enter about-section" aria-labelledby="about-title">
      <div className="about-lead"><SectionEyebrow>{t.about.eyebrow}</SectionEyebrow><h2 id="about-title">{t.about.title}</h2><p>{t.about.intro}</p><a className="button button-primary about-cv" href={language === 'ar' ? '/Newproject/cv-ar.html' : '/Newproject/cv-en.html'} target="_blank" rel="noreferrer">{t.about.cv} <ArrowUpRight className="directional-icon" size={17} /></a></div><div className="founder-panel"><div className="founder-initials">EA</div><div className="founder-copy"><span className="tag">{t.about.tag}</span><h3>Eyad Basabrain</h3><p className="founder-bio">{t.about.bio}</p><div className="founder-meta">{t.about.meta.map((item) => <span key={item}><Check size={15} />{item}</span>)}</div></div></div><div className="about-stat-row"><div><strong>13+</strong><span>{t.about.stats[0]}</span></div><div><strong>3</strong><span>{t.about.stats[1]}</span></div><div><strong>∞</strong><span>{t.about.stats[2]}</span></div></div>
    </section>
  )
}

function Certifications({ t }) {
  const [files, setFiles] = useState([])
  const addFiles = (event) => {
    const selected = Array.from(event.target.files || []).filter((file) => (file.type === 'application/pdf' || file.type.startsWith('image/')) && file.size <= 10 * 1024 * 1024)
    setFiles((current) => [...current, ...selected.map((file) => ({ file, url: URL.createObjectURL(file) }))])
    event.target.value = ''
  }
  const removeFile = (url) => {
    URL.revokeObjectURL(url)
    setFiles((current) => current.filter((item) => item.url !== url))
  }
  return (
    <section className="page-section page-enter certifications-section" aria-labelledby="certifications-title">
      <div className="section-heading"><div><SectionEyebrow>{t.certifications.eyebrow}</SectionEyebrow><h2 id="certifications-title">{t.certifications.title}</h2></div><p>{t.certifications.intro}</p></div>
      <label className="certificate-dropzone" htmlFor="certificate-upload"><Upload size={28} /><strong>{t.certifications.upload}</strong><span>{t.certifications.fileTypes}</span><input id="certificate-upload" type="file" accept="application/pdf,image/jpeg,image/png" multiple onChange={addFiles} /></label>
      <p className="upload-note">{t.certifications.note} <a className="text-link" href="https://github.com/eyadbas/Newproject/upload/main/public/certifications" target="_blank" rel="noreferrer">{t.certifications.repository} <ArrowUpRight size={13} /></a></p>
      <div className="certificate-list">{files.length === 0 ? <div className="certificate-empty"><FileCheck size={20} />{t.certifications.empty}</div> : files.map(({ file, url }) => <article className="certificate-item" key={url}><FileCheck size={20} /><div><strong>{file.name}</strong><span>{(file.size / 1024 / 1024).toFixed(2)} MB</span></div><a href={url} target="_blank" rel="noreferrer" aria-label={file.name}>Open</a><button type="button" onClick={() => removeFile(url)} aria-label={`${t.certifications.remove} ${file.name}`}><Trash2 size={17} /></button></article>)}</div>
    </section>
  )
}

function Contact({ t }) {
  const [submitted, setSubmitted] = useState(false)
  return (
    <section className="page-section page-enter contact-section" aria-labelledby="contact-title">
      <div className="contact-intro"><SectionEyebrow>{t.contact.eyebrow}</SectionEyebrow><h2 id="contact-title">{t.contact.title}</h2><p>{t.contact.intro}</p><div className="contact-details"><a href="mailto:eyad.emb@gmail.com"><Mail size={17} />eyad.emb@gmail.com</a><a href="https://www.linkedin.com/in/eyadbas" target="_blank" rel="noreferrer"><ArrowUpRight className="directional-icon" size={17} />LinkedIn / Eyad Basabrain</a><span><MapPin size={17} />{t.contact.location}</span></div></div>
      <form className="contact-form" onSubmit={(event) => { event.preventDefault(); setSubmitted(true) }}>
        <label>{t.contact.name}<input required type="text" placeholder={t.contact.namePlaceholder} /></label><label>{t.contact.email}<input required type="email" placeholder={t.contact.emailPlaceholder} /></label><label>{t.contact.help}<textarea required rows="5" placeholder={t.contact.helpPlaceholder} /></label><button className="button button-primary" type="submit">{submitted ? <>{t.contact.ready} <Check size={17} /></> : <>{t.contact.send} <Send size={16} /></>}</button>{submitted && <p className="form-note">{t.contact.thanks}</p>}
      </form>
    </section>
  )
}

function App() {
  const [language, setLanguage] = useState(() => localStorage.getItem('quality-solution-language') || 'en')
  const [activeTab, setActiveTab] = useState('Home')
  const [menuOpen, setMenuOpen] = useState(false)
  const t = copy[language]
  useEffect(() => { localStorage.setItem('quality-solution-language', language); document.documentElement.lang = language; document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'; document.title = language === 'ar' ? 'حلول الجودة الشاملة | الحوكمة وإدارة المشاريع' : 'Quality Solution | GRC & IT Project Management' }, [language])
  const selectTab = (tab) => { setActiveTab(tab); setMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }) }
  return (
    <div className="app-shell" dir={language === 'ar' ? 'rtl' : 'ltr'} lang={language}>
      <header className="site-header"><a className="brand" href="#home" onClick={() => selectTab('Home')}><LogoMark /><span><strong>Quality Solution</strong><small>حلول الجودة الشاملة</small></span></a><p className="header-tagline">GRC <b>&</b> {t.tagline}</p><button className="language-toggle" onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')} aria-label={`Switch language to ${t.language}`}>{t.language}</button><button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={22} /> : <Menu size={22} />}</button><nav className={menuOpen ? 'nav-open' : ''} aria-label="Main navigation">{tabs.map((tab, index) => <button key={tab} className={activeTab === tab ? 'nav-item active' : 'nav-item'} onClick={() => selectTab(tab)}><span>0{index + 1}</span>{t.tabs[tab]}</button>)}</nav><a className="header-contact" href="mailto:eyad.emb@gmail.com">{t.getInTouch} <ArrowUpRight className="directional-icon" size={15} /></a></header>
      <main>{activeTab === 'Home' && <Home setActiveTab={selectTab} t={t} />}{activeTab === 'Services' && <Services t={t} />}{activeTab === 'About' && <About t={t} language={language} />}{activeTab === 'Certifications' && <Certifications t={t} />}{activeTab === 'Contact' && <Contact t={t} />}</main>
      <footer><span>© {new Date().getFullYear()} Quality Solution</span><span>حلول الجودة الشاملة</span><span>GRC / PMO / IT DELIVERY</span></footer>
    </div>
  )
}

export default App
