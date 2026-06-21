import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import amosPortrait from "@/assets/amos-portrait.png";
import logo from "@/assets/logo.png";

// ---------------- i18n ----------------
type Lang = "en" | "he";

const dict = {
  en: {
    nav: {
      fitting: "Bike Fitting",
      events: "Events & Teams",
      about: "About Amos",
      contact: "Contact",
    },
    hero: {
      title1: "Ride",
      title2: "Engineered",
      title3: "For You.",
      body: "Master-level bike fitting and professional cycling event management. Two decades of precision dialing in power, comfort and posture for cyclists, teams and event organizers across Israel.",
      cta1: "Book a Fitting",
      cta2: "Explore Services",
      stats: [
        { k: "21", v: "Years in cycling" },
        { k: "2007", v: "Bike fitting since" },
        { k: "GURU", v: "platform" },
        { k: "TEAM IL", v: "National team coach" },
      ],
    },
    video: {
      eyebrow: "Watch",
      title: "Bike fitting, in motion.",
    },
    services: {
      eyebrow: "What I Do",
      title1: "One craft.",
      title2: "One obsession with precision.",
      list: [
        {
          tag: "01 / Fitting",
          title: "Bike Fitting",
          body: "Full-body biomechanical fit on the Guru platform. Real-time micro-adjustments to saddle, bars, cleats and pedals — eliminating pain and unlocking sustainable power.",
          bullets: [
            "Pre-purchase fit & sizing",
            "Full fit on existing bike",
            "Re-fit & injury recovery",
          ],
        },
      ],
    },
    process: {
      eyebrow: "The Process",
      title: "A fitting session, deconstructed.",
      steps: [
        { n: "01", t: "Interview", d: "Riding history, goals, injuries, current pain points." },
        { n: "02", t: "Measure", d: "Body geometry & flexibility captured on the Guru rig." },
        { n: "03", t: "Dial in", d: "Live adjustments while you pedal — until it disappears." },
        { n: "04", t: "Report", d: "Full spec sheet to replicate the fit on any frame." },
      ],
    },
    about: {
      eyebrow: "About",
      title1: "Amos Wolff.",
      title2: "Bike fitter. Rider. Master.",
      paragraphs: [
        "A certified cycling coach who turned his hobby into a profession. Amos has lived and breathed cycling since age 13, when he started riding with a Tel Aviv cycling club. Over 21 years of riding he raced across Europe, and between 1999–2005 represented the Israeli national team in various championships.",
        "Over the years Amos learned from the field's leading experts about training programs, riding techniques and bike fitting.",
        "Between 2008–2010 he coached the Israeli national road cycling team. Since 2007 he has been among the first in Israel to work in bike ergonomics — bike fitting.",
        "In these years Amos has fitted thousands of riders across disciplines — road, time trial (TT), triathlon, mountain, gravel and sport city bikes. He also provides professional management and consulting across cycling fields, including advising bike importers, sports companies, municipalities and other commercial bodies.",
      ],
      columns: [
        {
          title: "Professional Training",
          items: [
            "Graduate of the Israel Cycling Federation coaches & instructors course, 2006/07",
            "Trained under Belgian expert Luc Piron in BIKE FITTING",
            "Trained at SPECIALIZED in the BG FIT department, specializing in bike fitting",
            "In 2015, the first (and only to date) in Israel to introduce electronic measurement bikes — making the workflow accessible, precise, versatile and professional, independent of the rider's own bike. This required completing several trainings and exams with the American company GURU.",
          ],
        },
        {
          title: "Race Results in Israel",
          items: [
            "Israel road & mountain vice-champion, 2000",
            "Third place, Israel mountain bike championship, 2002–03",
            "Israel road vice-champion in 2005, 2007 and 2008",
            "Neviot road league champion, 2006",
            "Second place, opening stage of the Lactic Acid Tour, 2013",
            "Tour of Beit Shemesh, 2009",
          ],
        },
        {
          title: "Industry Roles",
          items: [
            "Co-founder of Ozone 11 — professional manager, 2010–12",
            "Personal bike fitting services — from 2007 to today",
            "Israel national road team coach, 2008–10",
            'Rider with the TACC Tel Aviv cycling team — 1997 to 2014',
            "Professional management of Gran Fondo and Kochav HaDarom, 2012–13",
            "Cycling consultant for the Kiryat Ono municipality — shared bikes",
          ],
        },
      ],
    },
    contact: {
      eyebrow: "Get In Touch",
      title1: "Let's build",
      title2: "your perfect fit.",
      body: "Book a session, ask a question, or talk events and team support.",
      address: "HaArava 4, Tel-Mond, Israel",
      whatsapp: "WhatsApp",
      facebook: "Facebook",
      maps: "Google Maps",
      waze: "Waze",
      name: "Name",
      phone: "Phone",
      email: "Email",
      selectDefault: "I'm interested in...",
      options: [
        "Full bike fitting",
        "Pre-purchase fit consultation",
        "Re-fit / injury recovery",
        "Event management",
        "Team / club services",
      ],
      message: "Tell me about your riding and what you're looking for...",
      submit: "Send Request →",
      subject: "New inquiry from the website",
      interestLabel: "Interested in",
      opening: "Opening WhatsApp…",
      copied: "Copied!",
    },
    footer: {
      rights: "All rights reserved",
      links: { fitting: "Fitting", events: "Events", contact: "Contact" },
    },
    a11y: {
      skip: "Skip to main content",
      open: "Accessibility menu",
      title: "Accessibility",
      textSize: "Text size",
      increase: "Increase text size",
      decrease: "Decrease text size",
      contrastDark: "High contrast (dark)",
      contrastLight: "High contrast (light)",
      grayscale: "Grayscale",
      readableFont: "Readable font",
      highlightLinks: "Highlight links",
      highlightHeadings: "Highlight titles",
      bigCursor: "Big cursor",
      stopMotion: "Stop animations",
      reset: "Reset accessibility",
      statement: "Accessibility statement",
      close: "Close",
      doc: {
        title: "Accessibility Statement",
        updated: "Last updated: June 2026",
        intro:
          "We are committed to making this website usable for everyone, including people with disabilities, in accordance with the Equal Rights for Persons with Disabilities Law and its regulations and the Israeli Standard IS 5568, which is based on the WCAG 2.0 guidelines at level AA.",
        standardTitle: "Conformance level",
        standard:
          "The site has been made accessible to level AA under WCAG 2.0 and Israeli Standard 5568, and tested across common browsers and devices.",
        doneTitle: "What has been done",
        done: [
          "Full keyboard navigation with clear focus indicators",
          "Semantic structure, hierarchical headings and alternative text for images",
          "An accessibility menu for text size, contrast, readable font, link highlighting, stopping animations and more",
          "Screen-reader compatibility and saving of accessibility preferences between visits",
          "Full Hebrew and right-to-left (RTL) support",
        ],
        limitsTitle: "Known limitations",
        limits:
          "Some third-party components (such as YouTube videos and maps) are not fully under our control. We continuously work to improve the site's accessibility.",
        contactTitle: "Accessibility feedback",
        contact:
          "Did you encounter an accessibility problem? We'd be glad to help. You can contact Amos Wolff:",
      },
    },
  },
  he: {
    nav: {
      fitting: "התאמת אופניים",
      events: "אירועים וקבוצות",
      about: "אודות עמוס",
      contact: "צור קשר",
    },
    hero: {
      title1: "רכיבה",
      title2: "מהונדסת",
      title3: "עבורך.",
      body: "התאמת אופניים ברמת מאסטר וניהול אירועי רכיבה מקצועיים. שני עשורים של דיוק בכוונון כוח, נוחות ויציבה לרוכבים, קבוצות ומארגני אירועים ברחבי ישראל.",
      cta1: "קבע התאמה",
      cta2: "השירותים שלי",
      stats: [
        { k: "21", v: "שנים ברכיבה" },
        { k: "2007", v: "מתאים מאז" },
        { k: "GURU", v: "פלטפורמת Guru" },
        { k: "נבחרת", v: "מאמן נבחרת ישראל" },
      ],
    },
    video: {
      eyebrow: "צפו",
      title: "התאמת אופניים, בתנועה.",
    },
    services: {
      eyebrow: "מה אני עושה",
      title1: "מקצוע אחד.",
      title2: "אובססיה אחת לדיוק.",
      list: [
        {
          tag: "01 / התאמה",
          title: "התאמת אופניים",
          body: "התאמה ביומכאנית מלאה על מערכת ה‑Guru. כיוונים מדויקים בזמן אמת לאוכף, כידון, פדלים וקליטים — להעלמת כאבים ושחרור כוח לאורך זמן.",
          bullets: [
            "ייעוץ ומידות לפני רכישה",
            "התאמה מלאה לאופניים קיימים",
            "התאמה חוזרת ושיקום פציעות",
          ],
        },
      ],
    },
    process: {
      eyebrow: "התהליך",
      title: "פגישת התאמה, צעד אחר צעד.",
      steps: [
        { n: "01", t: "ראיון", d: "היסטוריית רכיבה, יעדים, פציעות וכאבים נוכחיים." },
        { n: "02", t: "מדידה", d: "גיאומטריית גוף וגמישות נמדדים על מערכת Guru." },
        { n: "03", t: "כיוון", d: "כיוונים חיים בזמן הרכיבה — עד שהאופניים נעלמים מתחתיך." },
        { n: "04", t: "דוח", d: "מפרט מלא כדי לשחזר את ההתאמה על כל שלדה." },
      ],
    },
    about: {
      eyebrow: "אודות",
      title1: "עמוס וולף.",
      title2: "מתאים אופניים. רוכב. מאסטר.",
      paragraphs: [
        "מאמן אופניים מוסמך שהפך את התחביב למקצוע. עמוס חי ונושם את ענף האופניים כבר מגיל 13, עוד כאשר התחיל לרכוב במועדון אופניים בתל אביב. במהלך 21 שנות רכיבה הספיק להתחרות באירופה, ובין השנים 1999–2005 ייצג את נבחרת ישראל באליפויות שונות.",
        "לאורך השנים למד עמוס מטובי המומחים העוסקים בתחום על תוכניות אימונים שונות, טכניקות רכיבה והתאמת אופניים.",
        "בין השנים 2008–2010 אימן את נבחרת ישראל באופני כביש. משנת 2007 היה עמוס מהראשונים לעסוק בתחום הארגונומיה של האופניים — התאמת אופניים.",
        "בשנים אלה התאים עמוס אלפי רוכבים בענפים השונים בתחום, כמו אופני כביש, נגד-השעון (TT), טריאתלון, הרים, גראבל ואופני עיר ספורטיביים. בנוסף נותן עמוס שירותי ניהול וייעוץ מקצועי בתחומי האופניים השונים, ביניהם ייעוץ ליבואני אופניים, חברות העוסקות בתחום הספורט, עיריות וגופים מסחריים נוספים.",
      ],
      columns: [
        {
          title: "הכשרה מקצועית",
          items: [
            "בוגר קורס מאמנים ומדריכים של איגוד האופניים 2006/07",
            "התמחות אצל מומחה בלגי בשם Luc Piron בתחום ה‑BIKE FITTING",
            "הכשרה בחברת SPECIALIZED במחלקת ה‑BG FIT המתמחה בהתאמת אופניים",
            "בשנת 2015 הראשון (והיחיד עד היום) להביא לארץ אופני מדידה חשמליים ששינו את שיטת העבודה לנגישה, מדויקת, ורסטילית ומקצועית, בלתי תלויה באופני הרוכב. לשם כך נדרש עמוס לעבור מספר הכשרות ומבחנים של חברת GURU האמריקאית.",
          ],
        },
        {
          title: "תוצאות מרוצים בארץ",
          items: [
            "סגן אלוף ישראל בכביש ובהרים בשנת 2000",
            "מקום שלישי באליפות ישראל לאופני הרים לשנים 2002–03",
            "סגן אלוף ישראל בכביש לשנים 2005, 2007 ו-2008",
            "אלוף ליגת נביעות בכביש לשנת 2006",
            "מקום שני בקטע הראשון של טור חומצת חלב לשנת 2013",
            "מצעד טור בית שמש 2009",
          ],
        },
        {
          title: "עיסוקים בענף",
          items: [
            "ממקימי אזון 11 — מנהל מקצועי 2010–12",
            "שירותי התאמת אופניים לרוכב — משנת 2007 עד היום",
            "מאמן נבחרת ישראל בכביש 2008–10",
            'רוכב בקבוצת רוכבי ת"א TACC — משנת 1997 עד 2014',
            "ניהול מקצועי גראן פונדו וכוכב הדרום 2012–13",
            "ייעוץ מקצועי בתחום אופניים לעיריית קריית אונו — אופניים שיתופיים",
          ],
        },
      ],
    },
    contact: {
      eyebrow: "יצירת קשר",
      title1: "בוא נבנה",
      title2: "את ההתאמה המושלמת שלך.",
      body: "קבע פגישה, שאל שאלה, או דבר איתי על אירועים ותמיכה לקבוצות.",
      address: "הערבה 4, תל מונד, ישראל",
      whatsapp: "whatsapp",
      facebook: "facebook",
      maps: "גוגל מפות",
      waze: "וייז",
      name: "שם",
      phone: "טלפון",
      email: "אימייל",
      selectDefault: "אני מתעניין ב...",
      options: [
        "התאמת אופניים מלאה",
        "ייעוץ התאמה לפני רכישה",
        "התאמה חוזרת / שיקום פציעות",
        "ניהול אירועים",
        "שירותי קבוצות ומועדונים",
      ],
      message: "ספר לי על הרכיבה שלך ומה אתה מחפש...",
      submit: "שלח הודעה →",
      subject: "פנייה חדשה מהאתר",
      interestLabel: "מתעניין/ת ב",
      opening: "פותח את וואטסאפ…",
      copied: "הועתק!",
    },
    footer: {
      rights: "כל הזכויות שמורות",
      links: { fitting: "התאמה", events: "אירועים", contact: "צור קשר" },
    },
    a11y: {
      skip: "דלג לתוכן המרכזי",
      open: "תפריט נגישות",
      title: "נגישות",
      textSize: "גודל טקסט",
      increase: "הגדלת טקסט",
      decrease: "הקטנת טקסט",
      contrastDark: "ניגודיות גבוהה (כהה)",
      contrastLight: "ניגודיות גבוהה (בהיר)",
      grayscale: "גווני אפור",
      readableFont: "גופן קריא",
      highlightLinks: "הדגשת קישורים",
      highlightHeadings: "הדגשת כותרות",
      bigCursor: "סמן מוגדל",
      stopMotion: "עצירת אנימציות",
      reset: "איפוס נגישות",
      statement: "הצהרת נגישות",
      close: "סגירה",
      doc: {
        title: "הצהרת נגישות",
        updated: "עודכן לאחרונה: יוני 2026",
        intro:
          'אנו מחויבים לאפשר שימוש נוח ושוויוני באתר זה לכלל הגולשים, לרבות אנשים עם מוגבלות, בהתאם לחוק שוויון זכויות לאנשים עם מוגבלות ותקנותיו ולתקן הישראלי ת"י 5568 המבוסס על הנחיות WCAG 2.0 ברמה AA.',
        standardTitle: "רמת הנגישות",
        standard:
          "האתר הונגש לרמה AA לפי הנחיות WCAG 2.0 ותקן ישראלי 5568, ונבדק בדפדפנים ובמכשירים נפוצים.",
        doneTitle: "מה הונגש באתר",
        done: [
          "ניווט מלא באמצעות מקלדת ומחווני פוקוס ברורים",
          "מבנה סמנטי, כותרות היררכיות וטקסט חלופי לתמונות",
          "תפריט נגישות לשינוי גודל טקסט, ניגודיות, גופן קריא, הדגשת קישורים, עצירת אנימציות ועוד",
          "תאימות לקוראי מסך ושמירת העדפות הנגישות בין הביקורים",
          "תמיכה מלאה בעברית ובכיוון מימין לשמאל (RTL)",
        ],
        limitsTitle: "מגבלות ידועות",
        limits:
          "ייתכנו רכיבים של צד שלישי (כגון סרטוני יוטיוב ומפות) שאינם בשליטתנו המלאה. אנו פועלים באופן שוטף לשיפור נגישות האתר.",
        contactTitle: "פנייה בנושא נגישות",
        contact: "נתקלתם בבעיית נגישות? נשמח לעזור. ניתן לפנות לעמוס וולף:",
      },
    },
  },
} as const;

type T = (typeof dict)["en"];

const LangCtx = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
  t: T;
}>({
  lang: "en",
  setLang: () => {},
  t: dict.en,
});

const useLang = () => useContext(LangCtx);

function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("he");
  return (
    <LangCtx.Provider value={{ lang, setLang, t: dict[lang] as T }}>
      {children}
    </LangCtx.Provider>
  );
}

// ---------------- UI ----------------
function FacebookLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.49-3.91 3.78-3.91 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94z" />
    </svg>
  );
}

function WhatsAppLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.97L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 1.67c2.2 0 4.27.86 5.83 2.42a8.2 8.2 0 0 1 2.41 5.82c0 4.54-3.7 8.24-8.25 8.24a8.2 8.2 0 0 1-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24zm4.52 10.41c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.16.25-.64.81-.79.98-.14.16-.29.18-.54.06-.25-.12-1.05-.39-2-1.23a7.5 7.5 0 0 1-1.38-1.72c-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.42l-.48-.01c-.16 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.16 1.75 2.67 4.25 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28z" />
    </svg>
  );
}

function GoogleMapsLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M12 2a7 7 0 0 1 7 7c0 4.7-4.4 9.9-6.4 12.4a.8.8 0 0 1-1.2 0C9.4 18.9 5 13.7 5 9a7 7 0 0 1 7-7z"
        fill="#EA4335"
      />
      <circle cx="12" cy="9" r="2.6" fill="#fff" />
    </svg>
  );
}

function WazeLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M12 3c4.4 0 8 3.2 8 7.2 0 4.2-3.7 7.3-8.3 7.3-.9 0-1.7-.1-2.5-.3-.6.6-1.6 1.2-2.9 1.3-.3 0-.5-.3-.3-.6.4-.6.6-1.2.6-1.8C3.7 14.9 3 12.9 3 10.9 3 6.6 6.9 3 12 3z"
        fill="#33CCFF"
      />
      <circle cx="9" cy="10" r="1.1" fill="#0a0a0a" />
      <circle cx="15" cy="10" r="1.1" fill="#0a0a0a" />
      <path d="M8.5 13.2c.7 1 1.9 1.6 3.3 1.6s2.6-.6 3.3-1.6" fill="none" stroke="#0a0a0a" strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  );
}

function LangToggle() {
  const { lang, setLang } = useLang();
  return (
    <div className="inline-flex items-center border border-border text-xs font-semibold tracking-wider overflow-hidden">
      <button
        type="button"
        onClick={() => setLang("en")}
        className={
          lang === "en"
            ? "px-3 py-2 bg-primary text-primary-foreground"
            : "px-3 py-2 text-foreground/70 hover:text-primary transition-colors"
        }
        aria-pressed={lang === "en"}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLang("he")}
        className={
          lang === "he"
            ? "px-3 py-2 bg-primary text-primary-foreground border-l border-border"
            : "px-3 py-2 text-foreground/70 hover:text-primary transition-colors border-l border-border"
        }
        aria-pressed={lang === "he"}
      >
        עב
      </button>
    </div>
  );
}

function Nav() {
  const { t } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { href: "#fitting", label: t.nav.fitting },
    { href: "#about", label: t.nav.about },
    { href: "#contact", label: t.nav.contact },
  ];
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center">
          <img
            src={logo}
            alt="Amos Wolff Bike Master"
            className="h-11 w-auto"
          />
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <LangToggle />
          <a
            href="https://wa.me/972508463983"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 border border-border bg-background/40 px-5 py-2.5 text-sm font-semibold hover:border-[#25D366] hover:text-[#25D366] transition-colors"
          >
            <WhatsAppLogo className="w-4 h-4 text-[#25D366]" />
            050-846-3983
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 border border-border hover:border-primary hover:text-primary transition-colors"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {menuOpen ? (
                <path d="M18 6 6 18M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden border-t border-border bg-background/95 backdrop-blur-md transition-all duration-300 ease-out ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="py-3 text-sm font-medium border-b border-border/60 last:border-0 text-foreground/80 hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/972508463983"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mt-3 mb-2 inline-flex items-center justify-center gap-2 border border-border bg-background/40 px-5 py-3 text-sm font-semibold hover:border-[#25D366] hover:text-[#25D366] transition-colors"
          >
            <WhatsAppLogo className="w-4 h-4 text-[#25D366]" />
            050-846-3983
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  const { t } = useLang();
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-card/40 via-background to-background" />

      <div className="relative max-w-7xl mx-auto px-6 w-full space-y-12">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-8">
            <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tighter">
              {t.hero.title1}
              <br />
              <span className="text-primary">{t.hero.title2}</span>
              <br />
              {t.hero.title3}
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              {t.hero.body}
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-7 py-4 font-semibold tracking-wide hover:bg-primary/90 transition-all"
              >
                {t.hero.cta1}
                <span className="transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1">→</span>
              </a>
              <a
                href="#fitting"
                className="inline-flex items-center gap-3 border border-border bg-background/40 backdrop-blur px-7 py-4 font-semibold tracking-wide hover:border-primary hover:text-primary transition-all"
              >
                {t.hero.cta2}
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative aspect-video border border-border bg-card overflow-hidden shadow-2xl shadow-black/50">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube-nocookie.com/embed/9wkwK9Cpggs?rel=0"
                title="Amos Wolff — Bike Fitting"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border">
          {t.hero.stats.map((s) => (
            <div key={s.v} className="bg-background p-6">
              <div className="font-display text-3xl font-bold text-primary">
                {s.k}
              </div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-2">
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const { t } = useLang();

  return (
    <section className="relative py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-20 flex-wrap gap-6">
          <div>
            <div className="text-xs tracking-[0.4em] uppercase text-primary mb-4">
              {t.services.eyebrow}
            </div>
            <h2 className="font-display font-bold text-4xl md:text-6xl tracking-tighter max-w-2xl">
              {t.services.title1}
              <br />
              {t.services.title2}
            </h2>
          </div>
        </div>

        <div className="space-y-px">
          {t.services.list.map((s) => (
            <article
              key={s.tag}
              id="fitting"
              className="grid lg:grid-cols-12 gap-12 bg-card border border-border p-8 md:p-12 items-center"
            >
              <div className="lg:col-span-6">
                <div className="relative aspect-[4/3] border border-border bg-card overflow-hidden">
                  <iframe
                    className="absolute inset-0 h-full w-full"
                    src="https://www.youtube-nocookie.com/embed/wcOUiDtBnz0?rel=0"
                    title={s.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </div>
              <div className="lg:col-span-6 space-y-6">
                <div className="text-sm font-semibold tracking-wide text-primary">
                  {s.tag}
                </div>
                <h3 className="font-display text-4xl md:text-5xl font-bold tracking-tighter">
                  {s.title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {s.body}
                </p>
                <ul className="space-y-3 pt-2 border-t border-border">
                  {s.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-center gap-3 text-sm tracking-wide pt-3"
                    >
                      <span className="w-8 h-px bg-primary" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const { t } = useLang();
  return (
    <section className="py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-xs tracking-[0.4em] uppercase text-primary mb-4">
          {t.process.eyebrow}
        </div>
        <h2 className="font-display font-bold text-4xl md:text-6xl tracking-tighter mb-16 max-w-3xl">
          {t.process.title}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
          {t.process.steps.map((s) => (
            <div
              key={s.n}
              className="bg-background p-8 hover:bg-card transition-colors group"
            >
              <div className="font-display text-5xl font-bold text-primary/30 group-hover:text-primary transition-colors">
                {s.n}
              </div>
              <div className="font-display text-xl font-semibold mt-6">{s.t}</div>
              <div className="text-sm text-muted-foreground mt-2 leading-relaxed">
                {s.d}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  const { t } = useLang();
  return (
    <section id="about" className="py-32 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-5">
            <img
              src={amosPortrait}
              alt="Amos Wolff in his bike fitting studio"
              loading="lazy"
              className="w-full h-auto object-contain border border-border"
            />
          </div>
          <div className="lg:col-span-7 space-y-6">
            <div className="text-sm font-bold tracking-widest uppercase text-primary">
              {t.about.eyebrow}
            </div>
            <h2 className="font-display font-bold text-4xl md:text-6xl tracking-tighter">
              {t.about.title1}
              <br />
              <span className="text-muted-foreground">{t.about.title2}</span>
            </h2>
          </div>
        </div>

        <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
          {t.about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
          {t.about.columns.map((c) => (
            <div key={c.title} className="bg-background p-8 space-y-5">
              <div className="font-display text-lg font-bold text-primary">
                {c.title}
              </div>
              <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                {c.items.map((it, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-2 w-1.5 h-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AddressMenu() {
  const { t, lang } = useLang();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const links = [
    {
      key: "maps",
      label: t.contact.maps,
      href: "https://www.google.com/maps/search/?api=1&query=Amos+Wolff+Bike+Master",
      icon: <GoogleMapsLogo className="w-6 h-6" />,
    },
    {
      key: "waze",
      label: t.contact.waze,
      href: "https://waze.com/ul?q=Amos%20Wolff%20Bike%20Master",
      icon: <WazeLogo className="w-6 h-6" />,
    },
  ];

  return (
    <div ref={ref} dir="ltr" className="relative flex items-center gap-4">
      <span className="w-10 h-10 shrink-0 border border-border flex items-center justify-center text-primary">
        ◉
      </span>
      <div className="relative flex-1">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="group flex w-full items-center gap-3 hover:text-primary transition-colors"
        >
          <span dir={lang === "he" ? "rtl" : "ltr"} className="text-start">
            {t.contact.address}
          </span>
          <svg
            viewBox="0 0 24 24"
            className={`ms-auto w-4 h-4 shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>

        <div
          className={`absolute top-full left-0 right-0 z-20 mt-3 origin-top transition-all duration-300 ease-out ${
            open
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          <div className="overflow-hidden">
            <div className="border border-border bg-background/95 backdrop-blur divide-y divide-border shadow-xl shadow-black/40">
              {links.map((l) => (
                <a
                  key={l.key}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 px-4 py-3.5 hover:bg-primary/10 transition-colors"
                >
                  <span className="flex h-10 w-10 items-center justify-center border border-border bg-card group-hover:border-primary transition-colors">
                    {l.icon}
                  </span>
                  <span className="text-sm font-semibold tracking-wide">{l.label}</span>
                  <span className="ms-auto text-muted-foreground transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1">
                    →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const AMOS_EMAIL = "amos@amoswolff.co.il";
const WHATSAPP_NUMBER = "972508463983";

function Contact() {
  const { t, lang } = useLang();
  const dir = lang === "he" ? "rtl" : "ltr";
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    interest: "",
    message: "",
  });

  const [opening, setOpening] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard?.writeText(AMOS_EMAIL).then(
      () => {
        setCopied(true);
        window.setTimeout(() => setCopied(false), 2000);
      },
      () => {},
    );
  };

  const update =
    (key: keyof typeof form) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = [
      t.contact.subject,
      "",
      `${t.contact.name}: ${form.name}`,
      `${t.contact.phone}: ${form.phone || "-"}`,
      `${t.contact.email}: ${form.email}`,
      `${t.contact.interestLabel}: ${form.interest || "-"}`,
      "",
      form.message,
    ].join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    setOpening(true);
    window.setTimeout(() => setOpening(false), 2000);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="pt-32 pb-48 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5 space-y-6">
          <div className="text-xs tracking-[0.4em] uppercase text-primary">
            {t.contact.eyebrow}
          </div>
          <h2 className="font-display font-bold text-4xl md:text-6xl tracking-tighter">
            {t.contact.title1}
            <br />
            {t.contact.title2}
          </h2>
          <p className="text-muted-foreground text-lg">{t.contact.body}</p>
          <div className="pt-6 space-y-4 text-sm">
            <a
              href="tel:+972508463983"
              className="flex items-center gap-4 hover:text-primary transition-colors"
              dir="ltr"
            >
              <span className="w-10 h-10 border border-border flex items-center justify-center text-primary">
                ☎
              </span>
              050-846-3983
            </a>
            <a
              href="https://wa.me/972508463983"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 hover:text-primary transition-colors"
              dir="ltr"
            >
              <span className="w-10 h-10 shrink-0 border border-border flex items-center justify-center text-[#25D366]">
                <WhatsAppLogo className="w-5 h-5" />
              </span>
              {t.contact.whatsapp}
            </a>
            <a
              href="https://www.facebook.com/wolffamos"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 hover:text-primary transition-colors"
              dir="ltr"
            >
              <span className="w-10 h-10 shrink-0 border border-border flex items-center justify-center text-[#1877F2]">
                <FacebookLogo className="w-5 h-5" />
              </span>
              {t.contact.facebook}
            </a>
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${AMOS_EMAIL}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={copyEmail}
              className="flex items-center gap-4 hover:text-primary transition-colors"
              dir="ltr"
            >
              <span className="w-10 h-10 border border-border flex items-center justify-center text-primary">
                @
              </span>
              {AMOS_EMAIL}
              <span
                className={`text-xs font-semibold text-[#25D366] transition-opacity duration-200 ${
                  copied ? "opacity-100" : "opacity-0"
                }`}
              >
                {t.contact.copied}
              </span>
            </a>
            <AddressMenu />
          </div>
        </div>

        <form
          className="lg:col-span-7 space-y-px bg-card border border-border p-8 md:p-10"
          onSubmit={handleSubmit}
        >
          <div className="grid md:grid-cols-2 gap-px bg-border">
            <input
              dir={dir}
              className="bg-background px-5 py-4 outline-none focus:ring-1 focus:ring-inset focus:ring-primary text-sm text-start"
              placeholder={t.contact.name}
              aria-label={t.contact.name}
              value={form.name}
              onChange={update("name")}
              required
            />
            <input
              dir={dir}
              className="bg-background px-5 py-4 outline-none focus:ring-1 focus:ring-inset focus:ring-primary text-sm text-start"
              placeholder={t.contact.phone}
              aria-label={t.contact.phone}
              type="tel"
              value={form.phone}
              onChange={update("phone")}
            />
          </div>
          <input
            className="w-full bg-background px-5 py-4 outline-none focus:ring-1 focus:ring-inset focus:ring-primary text-sm"
            placeholder={t.contact.email}
            aria-label={t.contact.email}
            type="email"
            value={form.email}
            onChange={update("email")}
            required
          />
          <select
            className="w-full bg-background px-5 py-4 outline-none focus:ring-1 focus:ring-inset focus:ring-primary text-sm border-t border-border"
            aria-label={t.contact.selectDefault}
            value={form.interest}
            onChange={update("interest")}
          >
            <option value="">{t.contact.selectDefault}</option>
            {t.contact.options.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
          <textarea
            className="w-full bg-background px-5 py-4 outline-none focus:ring-1 focus:ring-inset focus:ring-primary text-sm border-t border-border min-h-[140px] resize-none"
            placeholder={t.contact.message}
            aria-label={t.contact.message}
            value={form.message}
            onChange={update("message")}
          />
          <button
            type="submit"
            className={`group w-full inline-flex items-center justify-center gap-2 py-5 font-semibold tracking-widest uppercase text-sm transition-all duration-200 ease-out transform-gpu hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#25D366]/30 active:translate-y-0 active:scale-[0.97] active:shadow-none ${
              opening
                ? "bg-[#25D366] text-black scale-[0.99]"
                : "bg-primary text-primary-foreground hover:bg-[#25D366] hover:text-black"
            }`}
          >
            <WhatsAppLogo
              className={`w-4 h-4 transition-transform duration-200 ${
                opening ? "scale-110" : "group-hover:scale-110 group-active:scale-90"
              }`}
            />
            {opening ? t.contact.opening : t.contact.submit}
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer({ onOpenStatement }: { onOpenStatement: () => void }) {
  const { t } = useLang();
  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center">
          <img src={logo} alt="Amos Wolff Bike Master" className="h-9 w-auto" />
        </div>
        <div className="text-xs text-muted-foreground tracking-wider">
          © {new Date().getFullYear()} Amos Wolff Bike Master · {t.footer.rights}
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-xs uppercase tracking-widest text-muted-foreground">
          <a href="#fitting" className="hover:text-primary">{t.footer.links.fitting}</a>
          <a href="#contact" className="hover:text-primary">{t.footer.links.contact}</a>
          <button
            type="button"
            onClick={onOpenStatement}
            className="uppercase tracking-widest hover:text-primary"
          >
            {t.a11y.statement}
          </button>
        </div>
      </div>
    </footer>
  );
}

// ---------------- Accessibility ----------------
type A11yState = {
  textStep: number;
  contrast: "none" | "dark" | "light";
  grayscale: boolean;
  readableFont: boolean;
  highlightLinks: boolean;
  highlightHeadings: boolean;
  bigCursor: boolean;
  noMotion: boolean;
};

const A11Y_KEY = "amos-a11y";
const A11Y_DEFAULT: A11yState = {
  textStep: 0,
  contrast: "none",
  grayscale: false,
  readableFont: false,
  highlightLinks: false,
  highlightHeadings: false,
  bigCursor: false,
  noMotion: false,
};

function applyA11y(s: A11yState) {
  if (typeof document === "undefined") return;
  const el = document.documentElement;
  el.classList.remove("a11y-text-1", "a11y-text-2", "a11y-text-3");
  if (s.textStep > 0) el.classList.add(`a11y-text-${s.textStep}`);
  el.classList.toggle("a11y-contrast-dark", s.contrast === "dark");
  el.classList.toggle("a11y-contrast-light", s.contrast === "light");
  el.classList.toggle("a11y-grayscale", s.grayscale);
  el.classList.toggle("a11y-readable-font", s.readableFont);
  el.classList.toggle("a11y-highlight-links", s.highlightLinks);
  el.classList.toggle("a11y-highlight-headings", s.highlightHeadings);
  el.classList.toggle("a11y-big-cursor", s.bigCursor);
  el.classList.toggle("a11y-no-motion", s.noMotion);
}

function AccessibilityIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <circle cx="12" cy="3.6" r="2" />
      <path d="M20 7.7c0 .5-.4.9-.9.9-.07 0-2.35-.36-3.16-.5-.84-.15-1.04.1-1.04.86v2.66c0 .5.06.86.24 1.43l1.74 5.55c.16.5-.12 1.03-.62 1.19-.5.16-1.03-.12-1.19-.62l-1.55-4.96c-.08-.27-.2-.42-.47-.42h-.04c-.27 0-.39.15-.47.42l-1.55 4.96c-.16.5-.69.78-1.19.62-.5-.16-.78-.69-.62-1.19l1.74-5.55c.18-.57.24-.93.24-1.43V8.96c0-.76-.2-1.01-1.04-.86-.81.14-3.09.5-3.16.5-.5 0-.9-.4-.9-.9s.36-.88.86-.95c.07-.01 2.45-.42 4.39-.55.78-.05 1.34-.06 1.91-.06s1.13.01 1.91.06c1.94.13 4.32.54 4.39.55.5.07.86.45.86.95z" />
    </svg>
  );
}

function A11yToggle({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`flex items-center justify-between gap-3 px-4 py-3 text-sm font-medium border text-start transition-colors ${
        active
          ? "border-primary bg-primary/15 text-primary"
          : "border-border bg-background text-foreground hover:border-primary/60"
      }`}
    >
      <span>{label}</span>
      <span aria-hidden="true" className={active ? "opacity-100" : "opacity-30"}>
        {active ? "✓" : "○"}
      </span>
    </button>
  );
}

function AccessibilityWidget({ onOpenStatement }: { onOpenStatement: () => void }) {
  const { t } = useLang();
  const a = t.a11y;
  const [open, setOpen] = useState(false);
  const [state, setState] = useState<A11yState>(A11Y_DEFAULT);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(A11Y_KEY);
      if (saved) {
        const parsed = { ...A11Y_DEFAULT, ...JSON.parse(saved) } as A11yState;
        setState(parsed);
      }
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    applyA11y(state);
    try {
      localStorage.setItem(A11Y_KEY, JSON.stringify(state));
    } catch {
      /* ignore */
    }
  }, [state]);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const update = (patch: Partial<A11yState>) =>
    setState((s) => ({ ...s, ...patch }));

  return (
    <div ref={ref} className="fixed bottom-4 start-4 z-[60]">
      {open && (
        <div
          role="dialog"
          aria-label={a.title}
          className="absolute bottom-full start-0 mb-3 w-[18rem] max-h-[70vh] overflow-y-auto border border-border bg-background/95 backdrop-blur-md shadow-2xl shadow-black/50"
        >
          <div className="flex items-center justify-between px-4 py-3 border-b border-border">
            <span className="font-display font-bold tracking-tight">{a.title}</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={a.close}
              className="w-8 h-8 inline-flex items-center justify-center hover:text-primary"
            >
              ✕
            </button>
          </div>

          <div className="p-3 space-y-3">
            <div className="flex items-center justify-between border border-border">
              <button
                type="button"
                onClick={() => update({ textStep: Math.max(0, state.textStep - 1) })}
                aria-label={a.decrease}
                className="px-4 py-3 text-lg font-bold hover:bg-primary/15 hover:text-primary transition-colors"
              >
                A−
              </button>
              <span className="text-xs uppercase tracking-widest text-muted-foreground">
                {a.textSize}
              </span>
              <button
                type="button"
                onClick={() => update({ textStep: Math.min(3, state.textStep + 1) })}
                aria-label={a.increase}
                className="px-4 py-3 text-lg font-bold hover:bg-primary/15 hover:text-primary transition-colors"
              >
                A+
              </button>
            </div>

            <div className="grid gap-2">
              <A11yToggle
                active={state.contrast === "dark"}
                onClick={() =>
                  update({ contrast: state.contrast === "dark" ? "none" : "dark" })
                }
                label={a.contrastDark}
              />
              <A11yToggle
                active={state.contrast === "light"}
                onClick={() =>
                  update({ contrast: state.contrast === "light" ? "none" : "light" })
                }
                label={a.contrastLight}
              />
              <A11yToggle
                active={state.grayscale}
                onClick={() => update({ grayscale: !state.grayscale })}
                label={a.grayscale}
              />
              <A11yToggle
                active={state.readableFont}
                onClick={() => update({ readableFont: !state.readableFont })}
                label={a.readableFont}
              />
              <A11yToggle
                active={state.highlightLinks}
                onClick={() => update({ highlightLinks: !state.highlightLinks })}
                label={a.highlightLinks}
              />
              <A11yToggle
                active={state.highlightHeadings}
                onClick={() => update({ highlightHeadings: !state.highlightHeadings })}
                label={a.highlightHeadings}
              />
              <A11yToggle
                active={state.bigCursor}
                onClick={() => update({ bigCursor: !state.bigCursor })}
                label={a.bigCursor}
              />
              <A11yToggle
                active={state.noMotion}
                onClick={() => update({ noMotion: !state.noMotion })}
                label={a.stopMotion}
              />
            </div>

            <button
              type="button"
              onClick={() => setState(A11Y_DEFAULT)}
              className="w-full px-4 py-3 text-sm font-semibold border border-border hover:border-primary hover:text-primary transition-colors"
            >
              {a.reset}
            </button>
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                onOpenStatement();
              }}
              className="w-full px-4 py-3 text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              {a.statement}
            </button>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={a.open}
        aria-expanded={open}
        aria-haspopup="dialog"
        className="w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg shadow-black/40 flex items-center justify-center hover:bg-primary/90 transition-colors"
      >
        <AccessibilityIcon className="w-8 h-8" />
      </button>
    </div>
  );
}

function AccessibilityStatement({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const { t, lang } = useLang();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;
  const d = t.a11y.doc;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="a11y-stmt-title"
    >
      <button
        type="button"
        aria-label={t.a11y.close}
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
      />
      <div
        dir={lang === "he" ? "rtl" : "ltr"}
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto border border-border bg-card p-8 md:p-10 shadow-2xl text-start"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label={t.a11y.close}
          className="absolute top-4 end-4 w-10 h-10 inline-flex items-center justify-center border border-border hover:border-primary hover:text-primary transition-colors"
        >
          ✕
        </button>
        <h2
          id="a11y-stmt-title"
          className="font-display text-3xl font-bold tracking-tighter pe-12"
        >
          {d.title}
        </h2>
        <p className="text-xs text-muted-foreground mt-2">{d.updated}</p>

        <div className="space-y-6 mt-6 text-muted-foreground leading-relaxed">
          <p>{d.intro}</p>
          <div>
            <h3 className="font-display text-lg font-bold text-foreground mb-2">
              {d.standardTitle}
            </h3>
            <p>{d.standard}</p>
          </div>
          <div>
            <h3 className="font-display text-lg font-bold text-foreground mb-2">
              {d.doneTitle}
            </h3>
            <ul className="space-y-2">
              {d.done.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-2 w-1.5 h-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-lg font-bold text-foreground mb-2">
              {d.limitsTitle}
            </h3>
            <p>{d.limits}</p>
          </div>
          <div>
            <h3 className="font-display text-lg font-bold text-foreground mb-2">
              {d.contactTitle}
            </h3>
            <p>{d.contact}</p>
            <div className="mt-3 flex flex-col gap-2 text-sm" dir="ltr">
              <a href="tel:+972508463983" className="hover:text-primary transition-colors">
                050-846-3983
              </a>
              <a
                href={`mailto:${AMOS_EMAIL}`}
                className="hover:text-primary transition-colors"
              >
                {AMOS_EMAIL}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Shell() {
  const { lang, t } = useLang();
  const [stmtOpen, setStmtOpen] = useState(false);
  return (
    <div
      dir={lang === "he" ? "rtl" : "ltr"}
      lang={lang}
      className="min-h-screen bg-background text-foreground antialiased"
    >
      <a href="#main-content" className="a11y-skip-link">
        {t.a11y.skip}
      </a>
      <Nav />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Services />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer onOpenStatement={() => setStmtOpen(true)} />
      <AccessibilityWidget onOpenStatement={() => setStmtOpen(true)} />
      <AccessibilityStatement open={stmtOpen} onClose={() => setStmtOpen(false)} />
    </div>
  );
}

export function Index() {
  return (
    <LangProvider>
      <Shell />
    </LangProvider>
  );
}
