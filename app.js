const surah = require("./utils/surah_data");
const pageData = require("./utils/page_data");
const juz = require("./utils/juz_data");
const quranText = require("./utils/quran_text");

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

const getVerseEndSymbol = (verseNumber) => {
  var arabicNumeric = "";
  var digits = verseNumber.toString().split("");

  for (var e in digits) {
    if (e == "0") {
      arabicNumeric += "٠";
    }
    if (e == "1") {
      arabicNumeric += "۱";
    }
    if (e == "2") {
      arabicNumeric += "۲";
    }
    if (e == "3") {
      arabicNumeric += "۳";
    }
    if (e == "4") {
      arabicNumeric += "۴";
    }
    if (e == "5") {
      arabicNumeric += "۵";
    }
    if (e == "6") {
      arabicNumeric += "۶";
    }
    if (e == "7") {
      arabicNumeric += "۷";
    }
    if (e == "8") {
      arabicNumeric += "۸";
    }
    if (e == "9") {
      arabicNumeric += "۹";
    }
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

module.exports = {
    totalPagesCount,
    totalMakkiSurahs,
    totalMadaniSurahs,
    totalJuzCount,
    totalSurahCount,
    totalVerseCount,
    basmala,
    getAudioURLBySurah,
    getAudioURLByVerse,
    getAudioURLByVerseNumber,
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
    getSurahPages,
    getSurahURL,
    getVerse,
    getVerseCount,
    getVerseCountByPage,
    getVerseEndSymbol,
    getVerseURL
};