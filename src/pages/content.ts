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

export const CLIPS = {
  longing:        "https://www.youtube.com/watch?v=uRNIZ_OTRZU", // קליפ הגעגועים
  shortage:       "https://www.youtube.com/watch?v=NfV6kPLN0vU", // המחסור במורים
  overInclusion:  "https://www.youtube.com/watch?v=P2vtrqhLT1Y", // הכלת-יתר
  pay:            "https://www.youtube.com/watch?v=-LRYc33D8fw", // הפגיעה בשכר
  violence:       "https://www.youtube.com/watch?v=ELWGX_kUaRc", // אלימות בבתי הספר
  strikes:        "https://www.youtube.com/watch?v=LmSEaLqFQRo", // השביתות
  reforms:        "https://www.youtube.com/watch?v=lrYy58DmzKk", // הרפורמות
  remoteLearning: "https://www.youtube.com/watch?v=oDaSSK9zvO4", // קשיי הלמידה מרחוק
  homeroom:       "https://www.youtube.com/watch?v=6UEq-JLmz4o", // קליפ המחנכים
  october:        "https://www.youtube.com/watch?v=d7xSa25kJE4", // קליפ ההצדעה לבוגרים
  interview:      "https://www.youtube.com/watch?v=aGKoF4UQ9KI", // ריאיון
} as const

export const VIDEOS = [
  {href: CLIPS.longing, title: "אולי בקיץ ניפגש"},
  {href: CLIPS.shortage, title: "הם ייקחו אותך"},
  {href: CLIPS.overInclusion, title: "שפת הפוליטיקלי קורקט"},
  {href: CLIPS.reforms, title: "שוב ממציאים לנו רפור"},
  {href: CLIPS.violence, title: "מסדרון המזכירות"},
  {href: CLIPS.pay, title: "בלדה על שש שנים של ותק שעוד לא הוכר"},
  {href: CLIPS.october, title: "המורים של חיילי אוקטובר עשרים ושלוש"},
  {href: CLIPS.strikes, title: "עוד שביתה"},
  {href: CLIPS.interview, title: "שלושה מורים עלו על הבמה עם אמת כואבת - ועשו מזה סאטירה"},
]

export const PRESS_MENTIONS = [
  { outlet: "כאן חדשות", href: "https://www.kan.org.il/content/kan-news/local/249419/" },
  { outlet: "Ynet", href: "https://www.ynet.co.il/news/article/s1qhgy27o" },
  { outlet: "מקור ראשון", href: "https://www.makorrishon.co.il/culture/article/300827" },
  { outlet: "הארץ", href: "https://www.haaretz.co.il/gallery/opinion/2022-04-28/ty-article/.premium/00000180-7ee6-d4b9-a5b8-fef7c4e80000" },
]

export const FAQ_ITEMS = [
  {
    q: "למי המופע מתאים?",
    a: "אלפים רבים של אנשים ראו את המופע, הרבה מהם גם לא מורים, אבל אם אתם רוצים ללכת על בטוח – מורים. אנחנו מגיעים לחדרי מורים בכל רחבי הארץ.",
  },
  {
    q: "מה אורך המופע?",
    a: "אורך המופע 75 דק'. ניתן גם לקצר על־פי הצורך.",
  },
  {
    q: "האם המופע מתאים גם לקהל הדתי?",
    a: "בהחלט. אין בו תכנים בלתי הולמים.",
  },
  {
    q: "למה להזמין אותנו לאירוע מורים?",
    a: "אם אתם רוצים לפנק את המורים שלכם בשעה של צחוק בלתי פוסק משולב בדמעות התרגשות ובקריאות של – \"איזה כיף לדעת שכולם מרגישים כמונו!\" – אנחנו המופע הנכון עבורכם.",
  },
  {
    q: "האם ניתן להזמין את המופע דרך גפ\"ן?",
    a: "כן, יש אופציה כזאת. דברו על כך עם המפיקה שלנו.",
  },
  {
    q: "אנחנו ממש (ממש) רוצים לראות אתכם, אבל המופע חורג מהתקציב שלנו",
    a: "מבינים לגמרי, גם אנחנו היינו בוועד. כמה אפשרויות: יש סבסוד שנתי מטעם העמותה הפדגוגית של ארגון המורים, אפשר להתאחד עם בית ספר נוסף לאירוע משותף, או להגיע לאחת ההופעות הפתוחות שלנו ולקבל הנחה על רכישה מרוכזת.",
  },
  {
    q: "אנחנו לא רוצים לקחת סיכון. איך נדע שאתם טובים?",
    a: "שאלה טובה! אנחנו מעודדים חשיבה ביקורתית 😊 קראו את תגובות הקהל, ואם עדיין לא השתכנעתם – תוכלו להגיע לאחת ההופעות הפתוחות שלנו ולהתרשם בעצמכם.",
  },
]