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
  { label: "תגובות הצופים", href: "#comments" }, //todo: add comments section
  { label: "מי אנחנו", href: "#about" },
  { label: "הקליפים שלנו", href: "#videos" },
  { label: "הפודקאסט \"שעת שהייה\"", href: SOCIAL_LINKS.podcast },
  { label: "\"מורת רוח\" בתקשורת", href: "#press" },
  { label: "לוח הופעות", href: "#schedule" },
  { label: "שאלות ותשובות", href: "#faq" },
  { label: "צרו קשר", href: "#contact" },
]

export const ABOUT_TEXT = `שלישיית 'מורת רוח' נולדה בשנת 2017 בחדר המורים של תיכון 'כצנלסון' בכפר סבא. לכבוד אירוע סוף שנה חגיגי במיוחד הוועד ביקש תוכנית אומנותית, וחברנו יחד.

שלוש שנים לאחר מכן פרצה הקורונה ואנחנו הוצאנו את התסכול שלנו בקליפ געגועים לבית הספר, שהפך מהר מאוד לוויראלי. מאז הוצאנו עוד קליפים רבים, אשר מציגים בצורה קלילה ומצחיקה מציאות מורכבת ועגומה, והכול מנקודת מבטם של מורים.

בין הנושאים: המחסור הכבד במורים, הכלת־היתר שמורים נאלצים לנקוט בלית ברירה, הבירוקרטיה האין־סופית מול משרד החינוך, אוזלת היד מול אלימות של תלמידים, השביתות והשלכותיהן, הרפורמות התכופות, למידה מרחוק בקורונה, התופעה המטרידה המכונה 'קליפ מחנכים' וכן שיר הצדעה לבוגרינו האהובים, שלחמו ב'חרבות ברזל', וחלקם לא שבו.

הקליפים זכו לתהודה רבה בקרב הקהל והתקשורת, מה שהוביל אותנו לחשוב שאולי יהיה נחמד אם נעלה גם מופע סאטירי-מוזיקלי. בחופש הגדול של 2022 ישבנו בחדר המורים הריק, שתינו קפה נמס וכתבנו את המופע. קיווינו שיהיו כמה מורים וקרובי משפחה שימצאו בו עניין.

חלפו למעלה משלוש שנים. מאז הופענו מעל 150 הופעות ברחבי הארץ מול עשרות אלפי אנשים. התגובה שאנחנו מקבלים הכי הרבה פעמים היא – "זה מופע לכולם. לא רק למורים". כי בתכל'ס, אין אחד שלא קשור בדרך זו או אחרת למערכת החינוך – כמורה, כהורה או כתלמיד (גם אם סיים ללמוד לפני 30 שנה).`

export const MEMBERS = [
  { name: "ברק גונן", role: "מורה לתיאטרון" },
  { name: "דורון בן עמי", role: "מורה להיסטוריה, מוזיקה ומזרחנות" },
  { name: "מיה שילון", role: "מורה ללשון" },
]

// Real links kept for future wiring, but rendered as placeholder tiles for now.
export const VIDEOS = [
  {href: "https://www.youtube.com/watch?v=uRNIZ_OTRZU", title: "אולי בקיץ ניפגש"},
  {href: "https://www.youtube.com/watch?v=NfV6kPLN0vU", title: "הם ייקחו אותך"},
  {href: "https://www.youtube.com/watch?v=P2vtrqhLT1Y", title: "שפת הפוליטיקלי קורקט"},
  {href: "https://www.youtube.com/watch?v=lrYy58DmzKk", title: "שוב ממציאים לנו רפור"},
  {href: "https://www.youtube.com/watch?v=ELWGX_kUaRc", title: "מסדרון המזכירות"},
  {href: "https://www.youtube.com/watch?v=-LRYc33D8fw", title: "בלדה על שש שנים של ותק שעוד לא הוכר"},
  {href: "https://www.youtube.com/watch?v=d7xSa25kJE4", title: "המורים של חיילי אוקטובר עשרים ושלוש"},
  {href: "https://www.youtube.com/watch?v=LmSEaLqFQRo", title: "עוד שביתה"},
  {href: "https://www.youtube.com/watch?v=aGKoF4UQ9KI", title: "שלושה מורים עלו על הבמה עם אמת כואבת - ועשו מזה סאטירה"},
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