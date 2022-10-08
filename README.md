[![npm package](https://img.shields.io/npm/v/quran-db.svg)](https://www.npmjs.com/package/quran-db)
[![pub package](https://img.shields.io/pub/v/quran.svg)](https://pub.dev/packages/quran)

Quran text (Arabic), audio URLs, and details of pages, juz, surah, ayah, place of revelation etc.

**Constants:**

- **`totalPagesCount`** - The most standard and common copy of Arabic only Quran total pages count
- **`totalMakkiSurahs`** - The constant total of makki surahs
- **`totalMadaniSurahs`** - The constant total of madani surahs
- **`totalJuzCount`** - The constant total juz count
- **`totalSurahCount`** - The constant total surah count
- **`totalVerseCount`** - The constant total verse count
- **`basmala`** - The constant 'بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ'

**Functions:**

- **`getJuzNumber(int surahNumber, int verseNumber)`** - Takes [surahNumber] & [verseNumber] and returns Juz number
- **`getSurahAndVersesFromJuz(int juzNumber)`** - Takes [juzNumber] and returns a map containing Surah and Verse numbers

- **`getSurahName(int surahNumber)`** - Takes [surahNumber] and returns the Surah name
- **`getSurahNameEnglish(int surahNumber)`** - Takes [surahNumber] returns the Surah name in English
- **`getSurahNameArabic(int surahNumber)`** - Takes [surahNumber] returns the Surah name in Arabic

- **`getPlaceOfRevelation(int surahNumber)`** - Takes [surahNumber] and returns the Place of Revelation (Makkah / Madinah) of that Surah

- **`getVerseCount(int surahNumber)`** - Takes [surahNumber] and returns the count of total Verses in that Surah

- **`getVerse(int surahNumber, int verseNumber, {bool verseEndSymbol})`** - Takes [surahNumber], [verseNumber] & [verseEndSymbol] (optional) and returns the Verse in Arabic

- **`getVerseEndSymbol(int verseNumber)`** - Takes [verseNumber] and returns '۝' symbol with verse number

- **`getJuzURL(int juzNumber)`** - Takes [juzNumber] and returns Juz URL (from Quran.com)
- **`getSurahURL(int surahNumber)`** - Takes [surahNumber] and returns Surah URL (from Quran.com)
- **`getVerseURL(int surahNumber, int verseNumber)`** - Takes [surahNumber] & [verseNumber] and returns Verse URL (from Quran.com)

- **`getPageData(int pageNumber)`** - Takes [pageNumber] and returns a list containing Surahs and the starting and ending Verse numbers in that page

- **`getSurahCountByPage(int pageNumber)`** - Takes [pageNumber] and returns total surahs count in that page
- **`getVerseCountByPage(int pageNumber)`** - Takes [pageNumber] and returns total verses count in that page

- **`getSurahPages(int surahNumber)`** - Takes [surahNumber] and returns the list of page numbers of that surah
- **`getPageNumber(int surahNumber, int verseNumber)`** - Takes [surahNumber], [verseNumber] and returns the page number of the Quran

- **`getVersesTextByPage(int pageNumber, {bool verseEndSymbol, SurahSeperator surahSeperator, customSurahSeperator})`** - Takes [pageNumber], [verseEndSymbol], [surahSeperator] & [customSurahSeperator] and returns the list of verses in that page

- **`getAudioURLBySurah(int surahNumber)`** - Takes [surahNumber] and returns audio URL of that surah
- **`getAudioURLByVerse(int surahNumber, int verseNumber)`** - Takes [surahNumber] & [verseNumber] and returns audio URL of that verse
- **`getAudioURLByVerseNumber(int surahNumber)`** - Takes [verseNumber] and returns audio URL of that verse
