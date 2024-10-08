const surah = require("./utils/surah_data");
const pageData = require("./utils/page_data");
const juz = require("./utils/juz_data");
const quranText = require("./utils/quran_text");
const sajdahVerses = require("./utils/sajdah_verses");
const enSaheeh = require("./utils/translations/en_saheeh");
const trSaheeh = require("./utils/translations/tr_saheeh");
const mlAbdulHameed = require("./utils/translations/ml_abdulhameed");

const getPageData = (pageNumber) => {
  if (pageNumber < 1 || pageNumber > 604) {
    throw "Invalid page number. Page number must be between 1 and 604";
  }
  return pageData[pageNumber - 1];
};

const totalPagesCount = 604;

const totalMakkiSurahs = 89;

const totalMadaniSurahs = 25;

const totalJuzCount = 30;

const totalSurahCount = 114;

const totalVerseCount = 6236;

const basmala = "بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ";

const sajdah = "سَجْدَةٌ";

const getSurahCountByPage = (pageNumber) => {
  if (pageNumber < 1 || pageNumber > 604) {
    throw "Invalid page number. Page number must be between 1 and 604";
  }
  return pageData[pageNumber - 1].length;
};

const getVerseCountByPage = (pageNumber) => {
  if (pageNumber < 1 || pageNumber > 604) {
    throw "Invalid page number. Page number must be between 1 and 604";
  }
  var totalVerseCount = 0;
  for (var i = 0; i < pageData[pageNumber - 1].length; i++) {
    totalVerseCount += parseInt(pageData[pageNumber - 1][i]["end"].toString());
  }
  return totalVerseCount;
};

const getJuzNumber = (surahNumber, verseNumber) => {
  for (const j of juz) {
    if (Object.keys(j.verses).includes(surahNumber.toString())) {
      if (
        verseNumber >= j.verses[surahNumber][0] &&
        verseNumber <= j.verses[surahNumber][1]
      ) {
        return parseInt(j.id.toString());
      }
    }
  }
  return -1;
};

const getSurahAndVersesFromJuz = (juzNumber) => {
  return juz[juzNumber - 1]["verses"];
};

const getSurahName = (surahNumber) => {
  if (surahNumber > 114 || surahNumber <= 0) {
    throw "No Surah found with given surahNumber";
  }
  return surah[surahNumber - 1]["name"].toString();
};

const getSurahNameEnglish = (surahNumber) => {
  if (surahNumber > 114 || surahNumber <= 0) {
    throw "No Surah found with given surahNumber";
  }
  return surah[surahNumber - 1]["english"].toString();
};

const getSurahNameTurkish = (surahNumber) => {
  if (surahNumber > 114 || surahNumber <= 0) {
    throw "No Surah found with given surahNumber";
  }
  return surah[surahNumber - 1]["turkish"].toString();
};

const getSurahNameArabic = (surahNumber) => {
  if (surahNumber > 114 || surahNumber <= 0) {
    throw "No Surah found with given surahNumber";
  }
  return surah[surahNumber - 1]["arabic"].toString();
};

const getPageNumber = (surahNumber, verseNumber) => {
  if (surahNumber > 114 || surahNumber <= 0) {
    throw "No Surah found with given surahNumber";
  }

  for (var pageIndex = 0; pageIndex < pageData.length; pageIndex++) {
    for (
      var surahIndexInPage = 0;
      surahIndexInPage < pageData[pageIndex].length;
      surahIndexInPage++
    ) {
      const e = pageData[pageIndex][surahIndexInPage];
      if (
        e["surah"] == surahNumber &&
        e["start"] <= verseNumber &&
        e["end"] >= verseNumber
      ) {
        return pageIndex + 1;
      }
    }
  }

  throw "Invalid verse number.";
};

const getPlaceOfRevelation = (surahNumber) => {
  if (surahNumber > 114 || surahNumber <= 0) {
    throw "No Surah found with given surahNumber";
  }
  return surah[surahNumber - 1]["place"].toString();
};

const getVerseCount = (surahNumber) => {
  if (surahNumber > 114 || surahNumber <= 0) {
    throw "No verse found with given surahNumber";
  }
  return parseInt(surah[surahNumber - 1]["aya"].toString());
};

const getVerse = (surahNumber, verseNumber, verseEndSymbol = false) => {
  var verse = "";
  for (const i of quranText) {
    if (i.surah_number === surahNumber && i.verse_number === verseNumber) {
      verse = i.content.toString();
      break;
    }
  }

  if (verse === "") {
    throw "No verse found with given surahNumber and verseNumber.\n\n";
  }

  return verse + (verseEndSymbol ? getVerseEndSymbol(verseNumber) : "");
};

const getJuzURL = (juzNumber) => {
  return `https://quran.com/juz/${juzNumber}`;
};

const getSurahURL = (surahNumber) => {
  return `https://quran.com/${surahNumber}`;
};

const getVerseURL = (surahNumber, verseNumber) => {
  return `https://quran.com/${surahNumber}/${verseNumber}`;
};

const getVerseEndSymbol = (verseNumber, arabicNumeral = true) => {
  var arabicNumeric = "";
  var digits = verseNumber.toString().split("");

  if (!arabicNumeral) return `\u06dd${verseNumber.toString()}`;

  const arabicNumbers = {
    0: "٠",
    1: "۱",
    2: "۲",
    3: "۳",
    4: "٤",
    5: "٥",
    6: "٦",
    7: "۷",
    8: "۸",
    9: "۹",
  };

  for (const e of digits) {
    arabicNumeric += arabicNumbers[e];
  }

  return `\u06dd${arabicNumeric}`;
};

const getSurahPages = (surahNumber) => {
  if (surahNumber > 114 || surahNumber <= 0) {
    throw "Invalid surahNumber";
  }

  const pagesCount = totalPagesCount;
  var pages = [];
  for (var currentPage = 1; currentPage <= pagesCount; currentPage++) {
    const pageData = getPageData(currentPage);
    for (var j = 0; j < pageData.length; j++) {
      const currentSurahNum = pageData[j]["surah"];
      if (currentSurahNum == surahNumber) {
        pages.push(currentPage);
        break;
      }
    }
  }
  return pages;
};

const SurahSeperator = {
  none: 0,
  surahName: 1,
  surahNameArabic: 2,
  surahNameEnglish: 3,
  surahNameTurkish: 4,
};

const getVersesTextByPage = (
  pageNumber,
  verseEndSymbol = false,
  surahSeperator = SurahSeperator.none,
  customSurahSeperator = ""
) => {
  if (pageNumber > 604 || pageNumber <= 0) {
    throw "Invalid pageNumber";
  }

  var verses = [];
  const pageData = getPageData(pageNumber);
  for (var data of pageData) {
    if (customSurahSeperator != "") {
      verses.push(customSurahSeperator);
    } else if (surahSeperator == SurahSeperator.surahName) {
      verses.push(getSurahName(data["surah"]));
    } else if (surahSeperator == SurahSeperator.surahNameArabic) {
      verses.push(getSurahNameArabic(data["surah"]));
    } else if (surahSeperator == SurahSeperator.surahNameEnglish) {
      verses.push(getSurahNameEnglish(data["surah"]));
    } else if (surahSeperator == SurahSeperator.surahNameTurkish) {
      verses.push(getSurahNameTurkish(data["surah"]));
    }
    for (var j = data["start"]; j <= data["end"]; j++) {
      verses.push(getVerse(data["surah"], j, verseEndSymbol));
    }
  }
  return verses;
};

const getAudioURLBySurah = (surahNumber) => {
  return `https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/${surahNumber}.mp3`;
};

const getAudioURLByVerse = (surahNumber, verseNumber) => {
  var verseNum = 0;
  for (const i of quranText) {
    if (i.surah_number == surahNumber && i.verse_number == verseNumber) {
      verseNum = quranText.indexOf(i) + 1;
      break;
    }
  }
  return `https://cdn.islamic.network/quran/audio/128/ar.alafasy/${verseNum}.mp3`;
};

const getAudioURLByVerseNumber = (verseNumber) => {
  return `https://cdn.islamic.network/quran/audio/128/ar.alafasy/${verseNumber}.mp3`;
};

const isSajdahVerse = (surahNumber, verseNumber) =>
  sajdahVerses[surahNumber] === verseNumber;

const Translation = { enSaheeh: 0, trSaheeh: 1, mlAbdulHameed: 2 };

const getVerseTranslation = (
  surahNumber,
  verseNumber,
  verseEndSymbol = false,
  translation = Translation.enSaheeh
) => {
  var verse = "";

  var translationText = enSaheeh;

  switch (translation) {
    case Translation.enSaheeh:
      translationText = enSaheeh;
      break;
    case Translation.trSaheeh:
      translationText = trSaheeh;
      break;
    case Translation.mlAbdulHameed:
      translationText = mlAbdulHameed;
      break;
    default:
      translationText = enSaheeh;
  }

  for (var i of translationText) {
    if (
      i.surah_number === surahNumber &&
      i.verse_number === verseNumber
    ) {
      verse = i["content"].toString();
      break;
    }
  }

  if (verse === "") {
    throw "No verse found with given surahNumber and verseNumber.\n\n";
  }

  return verse + (verseEndSymbol ? getVerseEndSymbol(verseNumber, false) : "");
};

const searchWordsInTranslation = (
  words,
  translation = Translation.enSaheeh
) => {
  var translationText = enSaheeh;

  switch (translation) {
    case Translation.enSaheeh:
      translationText = enSaheeh;
      break;
    case Translation.trSaheeh:
      translationText = trSaheeh;
      break;
    case Translation.mlAbdulHameed:
      translationText = mlAbdulHameed;
      break;
    default:
      translationText = enSaheeh;
  }

  var result = [];

  for (var i of translationText) {
    var exist = false;
    for (var word of words) {
      if (
        i["content"]?.toString()
          .toLowerCase()
          .includes(word.toString().toLowerCase())
      ) {
        exist = true;
      }
    }
    if (exist) {
      result.push({ surah: i["surah_number"], verse: i["verse_number"] });
    }
  }

  return { occurences: result.length, result: result };
};

const searchWords = (words) => {
  var result = [];

  for (var i of quranText) {
    var exist = false;
    for (var word of words) {
      if (
        i["content"]?.toString()
          .toLowerCase()
          .includes(word.toString().toLowerCase())
      ) {
        exist = true;
      }
    }
    if (exist) {
      result.push({ surah: i["surah_number"], verse: i["verse_number"] });
    }
  }

  return { occurences: result.length, result: result };
};

module.exports = {
  Translation,
  SurahSeperator,
  totalPagesCount,
  totalMakkiSurahs,
  totalMadaniSurahs,
  totalJuzCount,
  totalSurahCount,
  totalVerseCount,
  basmala,
  sajdah,
  getAudioURLBySurah,
  getAudioURLByVerse,
  getAudioURLByVerseNumber,
  isSajdahVerse,
  getVerseTranslation,
  getJuzNumber,
  getJuzURL,
  getPageData,
  getPageNumber,
  getPlaceOfRevelation,
  getSurahAndVersesFromJuz,
  getSurahCountByPage,
  getSurahName,
  getSurahNameArabic,
  getSurahNameEnglish,
  getSurahNameTurkish,
  getSurahPages,
  getVersesTextByPage,
  getSurahURL,
  getVerse,
  getVerseCount,
  getVerseCountByPage,
  getVerseEndSymbol,
  getVerseURL,
  searchWordsInTranslation,
  searchWords,
};
