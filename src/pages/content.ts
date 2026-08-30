// All site copy & links live here, so components stay purely presentational
// and the real client can hand you text edits without touching component code.

export const WHATSAPP_NUMBER = "972528746558" // 052-874-6558
export const SHOWS_SITE = "/comy/event/morat/"
export const whatsappLink = (text: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/profile.php?id=100086619635903",
  instagram: "https://www.instagram.com/morat_ruah/",
  podcast: "https://open.spotify.com/show/4o78awCe0On3zQ3hihZhgF",
  tiktok: "https://www.tiktok.com/@moratruah"
}

export const SCHEDULE_LINK = "https://comy.co.il/event/morat/"

export const NAV_LINKS = [
  { label: "טעימה מהמופע", href: "#trailer" },
  { label: "תגובות הצופים", href: "#comments" },
  { label: "מי אנחנו", href: "#about" },
  { label: "הקליפים שלנו", href: "#videos" },
  { label: "הפודקאסט \"שעת שהייה\"", href: SOCIAL_LINKS.podcast },
  { label: "\"מורת רוח\" בתקשורת", href: "#press" },
  { label: "לוח הופעות", href: "#schedule" },
  { label: "שאלות ותשובות", href: "#faq" },
  { label: "צרו קשר", href: "#contact" },
]

export const MEMBERS = [
  { name: "ברק גונן", role: "מורה לתיאטרון" },
  { name: "דורון בן עמי", role: "מורה להיסטוריה, מוזיקה ומזרחנות" },
  { name: "מיה שילון", role: "מורה ללשון" },
]

export const VIDEOS = {
  longing: "https://www.youtube.com/watch?v=uRNIZ_OTRZU", // קליפ הגעגועים
  shortage: "https://www.youtube.com/watch?v=NfV6kPLN0vU", // המחסור במורים
  overInclusion: "https://www.youtube.com/watch?v=P2vtrqhLT1Y", // הכלת-יתר
  pay: "https://www.youtube.com/watch?v=-LRYc33D8fw", // הפגיעה בשכר
  violence: "https://www.youtube.com/watch?v=ELWGX_kUaRc", // אלימות בבתי הספר
  strikes: "https://www.youtube.com/watch?v=LmSEaLqFQRo", // השביתות
  reforms: "https://www.youtube.com/watch?v=lrYy58DmzKk", // הרפורמות
  remoteLearning: "https://www.youtube.com/watch?v=oDaSSK9zvO4", // קשיי הלמידה מרחוק
  homeroom: "https://www.youtube.com/watch?v=6UEq-JLmz4o", // קליפ המחנכים
  october: "https://www.youtube.com/watch?v=d7xSa25kJE4", // קליפ ההצדעה לבוגרים
  lockdown: "https://www.youtube.com/watch?v=oDaSSK9zvO4",  //הסגר
  interview: "https://www.youtube.com/watch?v=aGKoF4UQ9KI", // ריאיון
  interview2: "https://www.youtube.com/watch?v=kX9auwKCu70" //ריאיון 2
} as const

export const CLIPS = [
  {href: VIDEOS.longing, title: "אולי בקיץ ניפגש"},
  {href: VIDEOS.shortage, title: "הם ייקחו אותך"},
  {href: VIDEOS.overInclusion, title: "שפת הפוליטיקלי קורקט"},
  {href: VIDEOS.reforms, title: "שוב ממציאים לנו רפורמה"},
  {href: VIDEOS.violence, title: "מסדרון המזכירות"},
  {href: VIDEOS.pay, title: "בלדה על שש שנים של ותק שעוד לא הוכר"},
  {href: VIDEOS.october, title: "המורים של חיילי אוקטובר עשרים ושלוש"},
  {href: VIDEOS.strikes, title: "עוד שביתה"},
  {href: VIDEOS.lockdown, title: "הסגר הששה-עשר"},
]

// Markdown, same as FAQ answers below. Rendered one <RichText> per paragraph,
// so the mobile "read more" toggle can still count them.
export const ABOUT_PARAGRAPHS = [
  `שלישיית 'מורת רוח' נולדה בשנת 2017 בחדר המורים של תיכון 'כצנלסון' בכפר סבא, כשחברנו יחד להפיק תוכנית אומנותית קצרה לאירוע סוף השנה. הקליק בינינו היה מיידי.`,

  `שלוש שנים לאחר מכן פרצה הקורונה ואנחנו הוצאנו את התסכול שלנו ב[קליפ געגועים לבית הספר](${VIDEOS.longing}), שהפך מהר מאוד לוויראלי. מאז הוצאנו עוד קליפים רבים, אשר מציגים בצורה קלילה ומצחיקה מציאות מורכבת ועגומה, והכול מנקודת מבטם של מורים.`,

  `הנושאים שעסקנו בהם היו בין היתר: [המחסור הכבד במורים](${VIDEOS.shortage}), [הכלת-יתר](${VIDEOS.overInclusion}), [הפגיעה בשכר המורים](${VIDEOS.pay}), [האלימות בבתי הספר](${VIDEOS.violence}), [השביתות](${VIDEOS.strikes}), [הרפורמות התכופות](${VIDEOS.reforms}), [קשיי הלמידה מרחוק](${VIDEOS.remoteLearning}), תופעת '[קליפ המחנכים](${VIDEOS.homeroom})', ועוד. קצת לאחר 7.10 הפקנו [קליפ הצדעה](${VIDEOS.october}) לבוגרינו האהובים, שלחמו ב'חרבות ברזל', וחלקם לא שבו.`,

  `כל הקליפים זכו לתהודה רבה ברשתות החברתיות ובתקשורת, ואנחנו התחלנו לחלום על מופע-לייב באורך מלא.`,

  `בקיץ 2022 התחלנו לכתוב יחד את 'מורת רוח – המופע', תוכנית סאטירית-מוזיקלית באורך מלא. אחרי אין סוף שעות שבמהלכן כתבנו, מחקנו, דייקנו, התרגשנו ובעיקר צחקנו – עלינו למופע הבכורה בתיאטרון 'תמונע' במרץ 2023. המופע זכה להצלחה עצומה ולפרגון מצד [התקשורת](#press). חלפו למעלה משלוש שנים. מאז הופענו מעל 150 הופעות בכל רחבי הארץ מול עשרות אלפי אנשים. התגובה שאנחנו מקבלים הכי הרבה פעמים היא – "זה מופע שמתאים לכולם. לא רק למורים", ואנחנו מסכימים, כי בתכל'ס, אין אחד שלא קשור בדרך כזו או אחרת למערכת החינוך – כמורה, כהורה, כתלמיד או כבוגר.`,
]

export const PODCAST_EPISODES = [
  {href: "https://www.youtube.com/watch?v=D7VWuykV0WI", title: "פרק 1 - כשאנחנו היינו בגילכם"},
  {href: "https://www.youtube.com/watch?v=RhaC7r3qxPc", title: "פרק 2 - טראומות"},
  {href: "https://www.youtube.com/watch?v=CzCuc7AgIIo", title: "פרק 3 - הכלה או השפלה?"},
  {href: "https://www.youtube.com/watch?v=9ETOZcnUKgE", title: "פרק 4 - קנאה של מורים בתלמידים"},
]

export const PRESS_MENTIONS = [
  { outlet: "כאן חדשות", href: "https://www.kan.org.il/content/kan-news/local/249419/" },
  { outlet: "Ynet", href: "https://www.ynet.co.il/news/article/s1qhgy27o" },
  { outlet: "מקור ראשון", href: "https://www.makorrishon.co.il/culture/article/300827" },
  { outlet: "הארץ", href: "https://www.haaretz.co.il/gallery/opinion/2022-04-28/ty-article/.premium/00000180-7ee6-d4b9-a5b8-fef7c4e80000" },
]

// `a` is Markdown: [text](url) links, **bold**, *italic*, numbered/bulleted lists.
// A single newline is a line break; a blank line starts a new paragraph.
export const FAQ_ITEMS = [
  {
    q: "האם המופע מתאים רק למורים?",
    a: "לא. המופע מתאים לכל מי שיש לו קשר למערכת החינוך – מורים, הורים, תלמידים ובוגרים.",
  },
  {
    q: "מה אורך המופע?",
    a: "אורך המופע 75 דק'. (ניתן גם לקצר על־פי הצורך)",
  },
  {
    q: "האם המופע מתאים גם לקהל הדתי?",
    a: "בהחלט כן. המופע מתאים לכל המגזרים, ואינו מכיל תכנים פוגעניים.",
  },
  {
    q: "למה להזמין אותנו לאירוע מורים?",
    a: "אין דבר מתאים יותר לאירוע אמצע/סוף שנה מאשר ליהנות משעה ורבע של צחוק בלתי פוסק משולב בדמעות התרגשות ובקריאות של – \"איזה כיף לדעת שכולם מרגישים כמונו!\"",
  },
  {
    q: "האם ניתן להזמין את המופע דרך גפ\"ן?",
    a: `בהחלט כן. לפרטים נוספים [כתבו](${whatsappLink("היי, נשמח לשמוע פרטים על הזמנת המופע!")}) למפיקה שלנו.`,
  },
  {
    q: "אנחנו ממש (ממש) רוצים לראות אתכם, אבל המופע חורג מהתקציב שלנו",
    a: `מבינים לגמרי. גם אנחנו היינו פעם בוועד :)

הנה כמה אפשרויות:

1. [סבסוד שנתי](https://www.igm.org.il/site/pg/igm_item,176546) מטעם העמותה הפדגוגית של ארגון המורים.
2. אירוע משותף עם בית ספר נוסף בתיאומכם.
3. רכישה מרוכזת בהנחה לאחת ההופעות הפתוחות שלנו.
4. גפ"ן.`,
  },
]
