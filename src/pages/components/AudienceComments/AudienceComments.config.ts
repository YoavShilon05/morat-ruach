// Audience quotes shown in the AudienceComments carousel.
// Kept here so the client can edit wording without touching component code.

import type { SystemStyleObject } from "@chakra-ui/react"

export type AudienceComment = {
  text: string
  /**
   * Font size for this quote, set by hand so each card reads well.
   * Any Chakra size value: a token ("md"), a px string ("18px"), or a
   * responsive object ({ base: "16px", md: "20px" }).
   * Omit to fall back to DEFAULT_COMMENT_FONT_SIZE.
   */
  fontSize?: SystemStyleObject["fontSize"]
}

// Used for any quote that doesn't set its own fontSize.
export const DEFAULT_COMMENT_FONT_SIZE: SystemStyleObject["fontSize"] = {
  base: "16px",
  md: "18px",
}

export const AUDIENCE_COMMENTS: AudienceComment[] = [
  {
    text: "היינו אתמול בהופעה בבית נגלר. אחת ההופעות המצחיקות בחיי. הופעה מדויקת, אינטליגנטית, בחירת שירים (בשינוי מילים) קולעת, משחק ושירה מעולים! שמתם לנו מראה מול הפנים - ואנחנו נהנינו מזה! תודה על ערב משובח ומחכים. מומלץ מכל הלב.",
    fontSize: { base: "16px", md: "18px" },
  },
  {
    text: "קומדיה קורעת מצחוק של טעויות טרגיות עד כדי שבא לבכות על מערכת החינוך. יפה, מצחיק, עצוב, מדויק, מבריק, רגיש ומרגש עד דמעות. איזה כיף לתלמידים ולתלמידות שלה ושלהם. כל כך כיף ונדיר בימינו לצאת עם תחושה שהייתי עדה כרגע למשהו שלם. תודה על שיקוף מושלם של חוויית חיים שליוותה, עיצבה והייתה חלק בלתי נפרד מחוויית החיים שלי כבת למורה, לא נגלה כבר כמה עשורים. מומלץ ביותר!",
    fontSize: { base: "13px", md: "14px" },
  },
  {
    text: "אמש התמוגגנו בהופעה שלכם. המוזיקה, השילוב הקולי, התכנים ונוכחותכם על הבמה מרשימים ביותר. מזמן לא צחקנו ככה. תודה רבה לכם על הערב הנפלא. ",
    fontSize: { base: "18px", md: "22px" },
  },
  {
    text: "איזה מעולים הם!!! ואיזו הופעה מעולה הייתה אמש!!! חבורת כוכבים זורחים עם ערימות של כישרון. החיוך לא ירד לשנייה, והצחוק התגלגל בלי שליטה. מופע פשוט מעולה. זורם וקולח, גם מצחיק וגם נוגע ללב. תודה על זה ותודה עליכם. ולמי שטרם צפה - אל תפספסו! הנאה מובטחת! (ממש לא למורים בלבד, כי אם לכל אדם ששלח ילדים לביה\"ס או היה תלמיד בעצמו). ",
    fontSize: { base: "14px", md: "16px" },
  },
  {
    text: "וואווווווווווווו!!! איזה מופע. צחקתי ובכיתי כל הדרך. צחקתי כי צחקו עם המורים. בכיתי כי ריגשתם. בדיוק.מופע חובההההה לכל מורה במערכת. כמה כישרון ושנינות. בועט ומדויק. תודה. מילאתם לי את המצברים.",
    fontSize: { base: "17px", md: "20px" },
  },
  {
    text: "חזרתי עכשיו מהמופע המהמם והמצוין שלכם. אברך אתכם בברכה מורית: עבדתם קשה והגעתם להישגים מרשימים! המשיכו כך!",
    fontSize: { base: "19px", md: "24px" },
  },
]
