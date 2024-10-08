import surah from "./utils/surah_data.js";
import pageData from "./utils/page_data.js";
import juz from "./utils/juz_data.js";
import quranText from "./utils/quran_text.js";
import sajdahVerses from "./utils/sajdah_verses.js";
import enSaheeh from "./utils/translations/en_saheeh.js";
import enClearQuran from "./utils/translations/en_clearQuran.js";
import trSaheeh from "./utils/translations/tr_saheeh.js";
import mlAbdulHameed from "./utils/translations/ml_abdulhameed.js";
import faHusseinDari from "./utils/translations/fa_husseinDari.js";
import bengali from "./utils/translations/bengali.js";
import spanish from "./utils/translations/spanish.js";
import frHamidullah from "./utils/translations/fr_hamidullah.js";
import indonesian from "./utils/translations/indonesian.js";
import urdu from "./utils/translations/urdu.js";
import swedish from "./utils/translations/swedish.js";
import portuguese from "./utils/translations/portuguese.js";
import ruKuliev from "./utils/translations/ru_kuliev.js";
import nlSiregar from "./utils/translations/nl_siregar.js";
import itPiccardo from "./utils/translations/it_piccardo.js";
import chinese from "./utils/translations/chinese.js";

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
			if (verseNumber >= j.verses[surahNumber][0] && verseNumber <= j.verses[surahNumber][1]) {
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

const getSurahNameBengali = (surahNumber) => {
	if (surahNumber > 114 || surahNumber <= 0) {
		throw "No Surah found with given surahNumber";
	}
	return surah[surahNumber - 1]["bengali"].toString();
};

const getSurahNameSpanish = (surahNumber) => {
	if (surahNumber > 114 || surahNumber <= 0) {
		throw "No Surah found with given surahNumber";
	}
	return surah[surahNumber - 1]["spanish"].toString();
};

const getSurahNameFrench = (surahNumber) => {
	if (surahNumber > 114 || surahNumber <= 0) {
		throw "No Surah found with given surahNumber";
	}
	return surah[surahNumber - 1]["french"].toString();
};

const getSurahNameIndonesian = (surahNumber) => {
	if (surahNumber > 114 || surahNumber <= 0) {
		throw "No Surah found with given surahNumber";
	}
	return surah[surahNumber - 1]["indonesian"].toString();
};

const getSurahNameUrdu = (surahNumber) => {
	if (surahNumber > 114 || surahNumber <= 0) {
		throw "No Surah found with given surahNumber";
	}
	return surah[surahNumber - 1]["urdu"].toString();
};

const getSurahNameSwedish = (surahNumber) => {
	if (surahNumber > 114 || surahNumber <= 0) {
		throw "No Surah found with given surahNumber";
	}
	return surah[surahNumber - 1]["swedish"].toString();
};

const getSurahNameRussian = (surahNumber) => {
	if (surahNumber > 114 || surahNumber <= 0) {
		throw "No Surah found with given surahNumber";
	}
	return surah[surahNumber - 1]["russian"].toString();
};

const getSurahNameFarsi = (surahNumber) => {
	if (surahNumber > 114 || surahNumber <= 0) {
		throw "No Surah found with given surahNumber";
	}
	return surah[surahNumber - 1]["farsi"].toString();
};

const getSurahNameDutch = (surahNumber) => {
	if (surahNumber > 114 || surahNumber <= 0) {
		throw "No Surah found with given surahNumber";
	}
	return surah[surahNumber - 1]["dutch"].toString();
};

const getSurahNameChinese = (surahNumber) => {
	if (surahNumber > 114 || surahNumber <= 0) {
		throw "No Surah found with given surahNumber";
	}
	return surah[surahNumber - 1]["chinese"].toString();
};

const getSurahNamePortuguese = (surahNumber) => {
	if (surahNumber > 114 || surahNumber <= 0) {
		throw "No Surah found with given surahNumber";
	}
	return surah[surahNumber - 1]["portuguese"].toString();
};

const getSurahNameClearQuran = (surahNumber) => {
	if (surahNumber > 114 || surahNumber <= 0) {
		throw "No Surah found with given surahNumber";
	}
	return surah[surahNumber - 1]["clearQuran"].toString();
};

const getSurahNameItalian = (surahNumber) => {
	if (surahNumber > 114 || surahNumber <= 0) {
		throw "No Surah found with given surahNumber";
	}
	return surah[surahNumber - 1]["italian"].toString();
};

const getPageNumber = (surahNumber, verseNumber) => {
	if (surahNumber > 114 || surahNumber <= 0) {
		throw "No Surah found with given surahNumber";
	}

	for (var pageIndex = 0; pageIndex < pageData.length; pageIndex++) {
		for (var surahIndexInPage = 0; surahIndexInPage < pageData[pageIndex].length; surahIndexInPage++) {
			const e = pageData[pageIndex][surahIndexInPage];
			if (e["surah"] == surahNumber && e["start"] <= verseNumber && e["end"] >= verseNumber) {
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
	surahNameBengali: 5,
	surahNameSpanish: 6,
	surahNameFrench: 7,
	surahNameIndonesian: 8,
	surahNameUrdu: 9,
	surahNameSwedish: 10,
	surahNameRussian: 11,
	surahNameFarsi: 12,
	surahNameDutch: 13,
	surahNameChinese: 14,
	surahNamePortuguese: 15,
	surahNameClearQuran: 16,
	surahNameItalian: 17,
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
		} else if (surahSeperator == SurahSeperator.surahNameBengali) {
			verses.push(getSurahNameBengali(data["surah"]));
		} else if (surahSeperator == SurahSeperator.surahNameSpanish) {
			verses.push(getSurahNameSpanish(data["surah"]));
		} else if (surahSeperator == SurahSeperator.surahNameFrench) {
			verses.push(getSurahNameFrench(data["surah"]));
		} else if (surahSeperator == SurahSeperator.surahNameIndonesian) {
			verses.push(getSurahNameIndonesian(data["surah"]));
		} else if (surahSeperator == SurahSeperator.surahNameUrdu) {
			verses.push(getSurahNameUrdu(data["surah"]));
		} else if (surahSeperator == SurahSeperator.surahNameSwedish) {
			verses.push(getSurahNameSwedish(data["surah"]));
		} else if (surahSeperator == SurahSeperator.surahNameRussian) {
			verses.push(getSurahNameRussian(data["surah"]));
		} else if (surahSeperator == SurahSeperator.surahNameFarsi) {
			verses.push(getSurahNameFarsi(data["surah"]));
		} else if (surahSeperator == SurahSeperator.surahNameDutch) {
			verses.push(getSurahNameDutch(data["surah"]));
		} else if (surahSeperator == SurahSeperator.surahNameChinese) {
			verses.push(getSurahNameChinese(data["surah"]));
		} else if (surahSeperator == SurahSeperator.surahNamePortuguese) {
			verses.push(getSurahNamePortuguese(data["surah"]));
		} else if (surahSeperator == SurahSeperator.surahNameClearQuran) {
			verses.push(getSurahNameClearQuran(data["surah"]));
		} else if (surahSeperator == SurahSeperator.surahNameItalian) {
			verses.push(getSurahNameItalian(data["surah"]));
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

const isSajdahVerse = (surahNumber, verseNumber) => sajdahVerses[surahNumber] === verseNumber;

const Translation = {
	enSaheeh: 0,
	enClearQuran: 1,
	trSaheeh: 3,
	mlAbdulHameed: 4,
	faHusseinDari: 5,
	bengali: 6,
	spanish: 7,
	frHamidullah: 8,
	indonesian: 9,
	urdu: 10,
	swedish: 11,
	portuguese: 12,
	ruKuliev: 13,
	nlSiregar: 14,
	itPiccardo: 15,
	chinese: 16,
};

const getVerseTranslation = (surahNumber, verseNumber, verseEndSymbol = false, translation = Translation.enSaheeh) => {
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
		case Translation.faHusseinDari:
			translationText = faHusseinDari;
			break;
		case Translation.bengali:
			translationText = bengali;
			break;
		case Translation.spanish:
			translationText = spanish;
			break;
		case Translation.frHamidullah:
			translationText = frHamidullah;
			break;
		case Translation.indonesian:
			translationText = indonesian;
			break;
		case Translation.urdu:
			translationText = urdu;
			break;
		case Translation.swedish:
			translationText = swedish;
			break;
		case Translation.portuguese:
			translationText = portuguese;
			break;
		case Translation.ruKuliev:
			translationText = ruKuliev;
			break;
		case Translation.nlSiregar:
			translationText = nlSiregar;
			break;
		case Translation.itPiccardo:
			translationText = itPiccardo;
			break;
		case Translation.chinese:
			translationText = chinese;
			break;
		case Translation.enClearQuran:
			translationText = enClearQuran;
			break;

		default:
			translationText = enSaheeh;
	}

	for (var i of translationText) {
		if (i.surah_number === surahNumber && i.verse_number === verseNumber) {
			verse = i["content"].toString();
			break;
		}
	}

	if (verse === "") {
		throw "No verse found with given surahNumber and verseNumber.\n\n";
	}

	return verse + (verseEndSymbol ? getVerseEndSymbol(verseNumber, false) : "");
};

const searchWordsInTranslation = (words, translation = Translation.enSaheeh) => {
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
		case Translation.faHusseinDari:
			translationText = faHusseinDari;
			break;
		case Translation.bengali:
			translationText = bengali;
			break;
		case Translation.spanish:
			translationText = spanish;
			break;
		case Translation.frHamidullah:
			translationText = frHamidullah;
			break;
		case Translation.indonesian:
			translationText = indonesian;
			break;
		case Translation.urdu:
			translationText = urdu;
			break;
		case Translation.swedish:
			translationText = swedish;
			break;
		case Translation.portuguese:
			translationText = portuguese;
			break;
		case Translation.ruKuliev:
			translationText = ruKuliev;
			break;
		case Translation.nlSiregar:
			translationText = nlSiregar;
			break;
		case Translation.itPiccardo:
			translationText = itPiccardo;
			break;
		case Translation.chinese:
			translationText = chinese;
			break;
		case Translation.enClearQuran:
			translationText = enClearQuran;
			break;

		default:
			translationText = enSaheeh;
	}

	var result = [];

	for (var i of translationText) {
		var exist = false;
		for (var word of words) {
			if (i["content"]?.toString().toLowerCase().includes(word.toString().toLowerCase())) {
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
			if (i["content"]?.toString().toLowerCase().includes(word.toString().toLowerCase())) {
				exist = true;
			}
		}
		if (exist) {
			result.push({ surah: i["surah_number"], verse: i["verse_number"] });
		}
	}

	return { occurences: result.length, result: result };
};

export default {
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
