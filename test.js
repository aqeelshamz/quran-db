import quran from "./app.js";

console.log("quran.totalPagesCount", quran.totalPagesCount);
console.log("quran.totalMakkiSurahs", quran.totalMakkiSurahs);
console.log("quran.totalMadaniSurahs", quran.totalMadaniSurahs);
console.log("quran.totalJuzCount", quran.totalJuzCount);
console.log("quran.totalSurahCount", quran.totalSurahCount);
console.log("quran.totalVerseCount", quran.totalVerseCount);
console.log("quran.basmala", quran.basmala);
console.log("quran.sajdah", quran.sajdah);
console.log("quran.getAudioURLBySurah(1)", quran.getAudioURLBySurah(1));
console.log("quran.getAudioURLByVerse(1, 1)", quran.getAudioURLByVerse(1, 1));
console.log(
  "quran.getAudioURLByVerseNumber(1)",
  quran.getAudioURLByVerseNumber(1)
);
console.log("quran.getJuzNumber(1, 1)", quran.getJuzNumber(1, 1));
console.log("quran.getJuzURL(20)", quran.getJuzURL(20));
console.log("quran.getPageData(604)", quran.getPageData(604));
console.log("quran.getPageNumber(112, 1)", quran.getPageNumber(112, 1));
console.log("quran.getPlaceOfRevelation(1)", quran.getPlaceOfRevelation(1));
console.log(
  "quran.getSurahAndVersesFromJuz(30)",
  quran.getSurahAndVersesFromJuz(30)
);
console.log("quran.getSurahCountByPage(604)", quran.getSurahCountByPage(604));
console.log("quran.getSurahName(112)", quran.getSurahName(112));
console.log("quran.getSurahNameArabic(112)", quran.getSurahNameArabic(112));
console.log("quran.getSurahNameEnglish(112)", quran.getSurahNameEnglish(112));
console.log("quran.getSurahNameTurkish(112)", quran.getSurahNameTurkish(112));
console.log("quran.getSurahPages(2)", quran.getSurahPages(2));
console.log("quran.getVersesTextByPage(604)", quran.getVersesTextByPage(604));
console.log("quran.getSurahURL(112)", quran.getSurahURL(112));
console.log("quran.getVerse(112, 1)", quran.getVerse(112, 1));
console.log("quran.getVerseCount(1)", quran.getVerseCount(1));
console.log("quran.getVerseCountByPage(1)", quran.getVerseCountByPage(1));
console.log("quran.getVerseEndSymbol(10)", quran.getVerseEndSymbol(10));
console.log(
  "quran.getVerseEndSymbol(10, false)",
  quran.getVerseEndSymbol(10, false)
);
console.log("quran.getVerseURL(1, 1)", quran.getVerseURL(1, 1));
console.log(
  "quran.searchWordsInTranslation(['Allah'])",
  quran.searchWordsInTranslation(["God"])
);
console.log("quran.searchWords('ا')", quran.searchWords("ا"));
console.log("quran.isSajdahVerse(1, 1)", quran.isSajdahVerse(1, 1));
console.log("quran.isSajdahVerse(7, 206)", quran.isSajdahVerse(7, 206));
console.log(
  "quran.getVerseTranslation(112, 1)",
  quran.getVerseTranslation(112, 1)
);
