import type { ReactNode } from "react"
import { Link } from "@chakra-ui/react"
import { CLIPS } from "@/pages/content.ts"

function InlineLink({ href, children }: { href: string; children: ReactNode }) {
  const isSection = href.startsWith("#")

  return (
    <Link
      href={href}
      target={isSection ? undefined : "_blank"}
      rel={isSection ? undefined : "noreferrer"}
      variant="underline"
      color="accent.emphasis"
      fontWeight="600"
      textUnderlineOffset="3px"
      _hover={{ color: "accent.cta" }}
    >
      {children}
    </Link>
  )
}

export const ABOUT_PARAGRAPHS: ReactNode[] = [
  <>
    שלישיית 'מורת רוח' נולדה בשנת 2017 בחדר המורים של תיכון 'כצנלסון' בכפר סבא, כשחברנו יחד להפיק תוכנית אומנותית קצרה לאירוע סוף השנה. הקליק בינינו היה מיידי.
  </>,

  <>
    שלוש שנים לאחר מכן פרצה הקורונה ואנחנו הוצאנו את התסכול שלנו ב<InlineLink href={CLIPS.longing}>קליפ געגועים לבית הספר</InlineLink>, שהפך מהר מאוד לוויראלי. מאז הוצאנו עוד קליפים רבים, אשר מציגים בצורה קלילה ומצחיקה מציאות מורכבת ועגומה, והכול מנקודת מבטם של מורים.
  </>,

  <>
    הנושאים שעסקנו בהם היו בין היתר: <InlineLink href={CLIPS.shortage}>המחסור הכבד במורים</InlineLink>, <InlineLink href={CLIPS.overInclusion}>הכלת-יתר</InlineLink>, <InlineLink href={CLIPS.pay}>הפגיעה בשכר המורים</InlineLink>, <InlineLink href={CLIPS.violence}>האלימות בבתי הספר</InlineLink>, <InlineLink href={CLIPS.strikes}>השביתות</InlineLink>, <InlineLink href={CLIPS.reforms}>הרפורמות התכופות</InlineLink>, <InlineLink href={CLIPS.remoteLearning}>קשיי הלמידה מרחוק</InlineLink>, תופעת '<InlineLink href={CLIPS.homeroom}>קליפ המחנכים</InlineLink>', ועוד. קצת לאחר 7.10 הפקנו <InlineLink href={CLIPS.october}>קליפ הצדעה</InlineLink> לבוגרינו האהובים, שלחמו ב'חרבות ברזל', וחלקם לא שבו.
  </>,

  <>
    כל הקליפים זכו לתהודה רבה ברשתות החברתיות ובתקשורת, ואנחנו התחלנו לחלום על מופע-לייב באורך מלא.
  </>,

  <>
    בקיץ 2022 התחלנו לכתוב יחד את 'מורת רוח – המופע', תוכנית סאטירית-מוזיקלית באורך מלא. אחרי אין סוף שעות שבמהלכן כתבנו, מחקנו, דייקנו, התרגשנו ובעיקר צחקנו – עלינו למופע הבכורה בתיאטרון 'תמונע' במרץ 2023. המופע זכה להצלחה עצומה ולפרגון מצד <InlineLink href="#press">התקשורת</InlineLink>. חלפו למעלה משלוש שנים. מאז הופענו מעל 150 הופעות בכל רחבי הארץ מול עשרות אלפי אנשים. התגובה שאנחנו מקבלים הכי הרבה פעמים היא – "זה מופע שמתאים לכולם. לא רק למורים", ואנחנו מסכימים, כי בתכל'ס, אין אחד שלא קשור בדרך כזו או אחרת למערכת החינוך – כמורה, כהורה, כתלמיד או כבוגר.
  </>,
]
