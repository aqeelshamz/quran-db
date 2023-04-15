[![npm package](https://img.shields.io/npm/v/quran-db.svg)](https://www.npmjs.com/package/quran-db)
[![pub package](https://img.shields.io/pub/v/quran.svg)](https://pub.dev/packages/quran)

Quran text, translation, audio URLs, and details of pages, juz, surah, ayah, place of revelation etc.

**Constants:**

- **`basmala`** - The constant 'بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ'
- **`sajdah`** - The constant 'سَجْدَةٌ'
- **`totalJuzCount`** - The constant total juz count
- **`totalMadaniSurahs`** - The constant total of madani surahs
- **`totalMakkiSurahs`** - The constant total of makki surahs
- **`totalPagesCount`** - The most standard and common copy of Arabic only Quran total pages count
- **`totalSurahCount`** - The constant total surah count
- **`totalVerseCount`** - The constant total verse count

**Functions:**

**_Juz:_**

- **`getJuzNumber(surahNumber, verseNumber)`** - Takes [surahNumber] & [verseNumber] and returns Juz number
- **`getSurahAndVersesFromJuz(juzNumber)`** - Takes [juzNumber] and returns a map containing Surah and Verse numbers

**_Surah:_**

- **`getSurahName(surahNumber)`** - Takes [surahNumber] and returns the Surah name
- **`getSurahNameArabic(surahNumber)`** - Takes [surahNumber] returns the Surah name in Arabic
- **`getSurahNameEnglish(surahNumber)`** - Takes [surahNumber] returns the Surah name in English
- **`getSurahNameTurkish(surahNumber)`** - Takes [surahNumber] returns the Surah name in Turkish
- **`getPlaceOfRevelation(surahNumber)`** - Takes [surahNumber] and returns the Place of Revelation (Makkah / Madinah) of that Surah
- **`getVerseCount(surahNumber)`** - Takes [surahNumber] and returns the count of total Verses in that Surah

**_Verse:_**

- **`getVerse(surahNumber, verseNumber, {verseEndSymbol})`** - Takes [surahNumber], [verseNumber] & [verseEndSymbol] (optional) and returns the Verse in Arabic
- **`getVerseEndSymbol(verseNumber, {arabicNumeral})`** - Takes [verseNumber], [arabicNumeral] (optional) and returns '۝' symbol with verse number
- **`isSajdahVerse(surahNumber, verseNumber)`** - Takes [surahNumber], [verseNumber] and returns true if verse is sajdah verse
- **`getVerseTranslation(surahNumber, verseNumber, {verseEndSymbol, translation})`** - Takes [surahNumber], [verseNumber], [verseEndSymbol] (optional) & [translation] (optional) and returns verse translation

**_Page:_**

- **`getPageData(pageNumber)`** - Takes [pageNumber] and returns a list containing Surahs and the starting and ending Verse numbers in that page
- **`getPageNumber(surahNumber, verseNumber)`** - Takes [surahNumber], [verseNumber] and returns the page number of the Quran
- **`getSurahCountByPage(pageNumber)`** - Takes [pageNumber] and returns total surahs count in that page
- **`getSurahPages(surahNumber)`** - Takes [surahNumber] and returns the list of page numbers of that surah
- **`getVerseCountByPage(pageNumber)`** - Takes [pageNumber] and returns total verses count in that page
- **`getVersesTextByPage(pageNumber, {verseEndSymbol, surahSeperator, customSurahSeperator})`** - Takes [pageNumber], [verseEndSymbol], [surahSeperator] & [customSurahSeperator] and returns the list of verses in that page

**_URLs:_**

- **`getAudioURLBySurah(surahNumber)`** - Takes [surahNumber] and returns audio URL of that surah
- **`getAudioURLByVerse(surahNumber, verseNumber)`** - Takes [surahNumber] & [verseNumber] and returns audio URL of that verse
- **`getAudioURLByVerseNumber(surahNumber)`** - Takes [verseNumber] and returns audio URL of that verse
- **`getJuzURL(juzNumber)`** - Takes [juzNumber] and returns Juz URL (from Quran.com)
- **`getSurahURL(surahNumber)`** - Takes [surahNumber] and returns Surah URL (from Quran.com)
- **`getVerseURL(surahNumber, verseNumber)`** - Takes [surahNumber] & [verseNumber] and returns Verse URL (from Quran.com)

**_Search:_**

- **`searchWords(words)`** - Takes an array of words [words] and returns a map containing no. of occurences and result of the word search in the arabic quran text
- **`searchWordsInTranslation(words, {translation})`** - Takes an array of words [words] and [translation] (optional) and returns a map containing no. of occurences and result of the word search in the traslation

**Translations:**

- English (Saheeh International) - **`Translation.enSaheeh`**
- Turkish - **`Translation.trSaheeh`**
- Malayalam (Cheriyamundam Abdul Hameed and Kunhi Mohammed Parappoor) - **`Translation.mlAbdulHameed`**

**SurahSeperators:**

- **`SurahSeperator.none`**
- **`SurahSeperator.surahName`**
- **`SurahSeperator.surahNameArabic`**
- **`SurahSeperator.surahNameEnglish`**
- **`SurahSeperator.surahNameTurkish`**