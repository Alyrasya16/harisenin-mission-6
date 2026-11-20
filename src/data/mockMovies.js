import dontLookUp from "../assets/poster-horizontal/poster-horizontal-dont-look-up.png";
import blueLockLandscape from "../assets/poster-horizontal/poster-horizontal-bluelock.png";
import aManCalledOttoLandscape from "../assets/poster-horizontal/poster-horizontal-a-man-called-otto.png";
import dutyAfterSchoolLandscape from "../assets/poster-horizontal/poster-horizontal-duty-after.png";
import allOfUsAreDeadLandscape from "../assets/poster-horizontal/poster-all-of-us-are-dead.png";
import suzumePreview from "../assets/poster-horizontal/poster-horizontal-suzume.png";
import jurassicWorldPreview from "../assets/poster-horizontal/poster-horizontal-jurassic-world.png";
import sonicPreview from "../assets/poster-horizontal/poster-horizontal-sonic-2.png";
import bigHeroSixPreview from "../assets/poster-horizontal/poster-horizontal-big-hero-6.png";
import quantumaniaPreview from "../assets/poster-horizontal/poster-horizontal-quantumania.png";
import guardiansPreview from "../assets/poster-horizontal/poster-horizontal--guardians-of-galaxy.png";
import littleMermaidPreview from "../assets/poster-horizontal/poster-horizontal-little-mermaid.png";
import missingPreview from "../assets/poster-horizontal/poster-horizontal-missing.png";
import tomorrowWarPreview from "../assets/poster-horizontal/poster-horizontal-the-tommorow-war.png";
import avatarPreview from "../assets/poster-horizontal/poster-horizontal-avatar.png";
import blackAdamPreview from "../assets/poster-horizontal/poster-horizontal-black-adam.png";
import spiderManMilesPreview from "../assets/poster-horizontal/poster-horizontal-spiderman-miles.png";
import fastXPreview from "../assets/poster-horizontal/poster-horizontal-fast-x.png";
import shazamPreview from "../assets/poster-horizontal/poster-horizontal-shazam.png";
import meganPreview from "../assets/poster-horizontal/poster-horizontal-megan.png";
import aliceInBorderlandPreview from "../assets/poster-horizontal/poster-alice-in-borderland.png";
import koreaPreview from "../assets/poster-horizontal/poster-horizontal-korea.png";
import tedLassoPreview from "../assets/poster-horizontal/poster-horizontal-ted-lasso.png";
import happinessPreview from "../assets/poster-horizontal/poster-horizontal-happiness.png";
import dilanPreview from "../assets/poster-horizontal/poster-horizontal-dilan-1991.png";
import batmanPreview from "../assets/poster-horizontal/poster-horizontal-the-batman.png";
import baymaxPreview from "../assets/poster-horizontal/poster-horizontal-baymax.png";
import myHeroAcademiaPreview from "../assets/poster-horizontal/poster-horizontal-my-hero-academia.png";
import suzume from "../assets/poster-vertikal/poster-vertikal-suzume.png";
import jurassicWorld from "../assets/poster-vertikal/poster-vertikal-jurassic-world.png";
import sonic from "../assets/poster-vertikal/poster-vertikal-sonic-2.png";
import allOfUsAreDead from "../assets/poster-vertikal/poster-vertikal-all-of-us-are-dead.png";
import bigHeroSix from "../assets/poster-vertikal/poster-vertikal-big-hero-6.png";
import quantumania from "../assets/poster-vertikal/poster-vertikal-quantumania.png";
import guardians from "../assets/poster-vertikal/poster-vertikal-guardians-of-the-galaxy.png";
import littleMermaid from "../assets/poster-vertikal/poster-vertikal-little-mermaid.png";
import missing from "../assets/poster-vertikal/poster-vertikal-missing.png";
import tomorrowWar from "../assets/poster-vertikal/poster-vertikal-the-tomorrow-war.png";
import dutyAfterSchool from "../assets/poster-vertikal/poster-vertikal-duty-after-school.png";
import blueLockPortrait from "../assets/poster-vertikal/poster-vertikal-bluelock.png";
import avatar from "../assets/poster-vertikal/poster-vertikal-avatar.png";
import blackAdam from "../assets/poster-vertikal/poster-vertikal-black-adam.png";
import spiderManMiles from "../assets/poster-vertikal/poster-vertikal-spiderman-miles.png";
import fastX from "../assets/poster-vertikal/poster-vertikal-fast-x.png";
import shazam from "../assets/poster-vertikal/poster-vertikal-shazam.png";
import megan from "../assets/poster-vertikal/poster-vertikal-megan.png";
import aliceInBorderland from "../assets/poster-vertikal/poster-vertikal-alice-in-borderland.png";
import korea from "../assets/poster-vertikal/poster-vertikal-korea.png";
import tedLasso from "../assets/poster-vertikal/poster-vertikal-ted-lasso.png";
import happiness from "../assets/poster-vertikal/poster-vertikal-happiness.png";
import dilan from "../assets/poster-vertikal/poster-vertikal-dilan-1991.png";
import baymax from "../assets/poster-vertikal/poster-vertikal-baymax.png";
import myHeroAcademia from "../assets/poster-vertikal/poster-vertikal-my-hero-academia.png";

export const HERO_DATA = {
  title: "Duty After School",
  description:
    "Setelah benda tak dikenal muncul di langit, para siswa harus menjalani pelatihan militer untuk menghadapi ancaman yang semakin dekat.",
  ageRating: "18+",
  backdropImage: dutyAfterSchoolLandscape,
};

export const CONTINUE_WATCHING = [
  {
    id: "dont-look-up",
    title: "Don't Look Up",
    image: dontLookUp,
    rating: "4.5",
    badge: "Episode Baru",
  },
  {
    id: "the-batman",
    title: "The Batman",
    image: batmanPreview,
    rating: "4.8",
  },
  {
    id: "blue-lock",
    title: "Blue Lock",
    image: blueLockLandscape,
    rating: "4.7",
  },
  {
    id: "a-man-called-otto",
    title: "A Man Called Otto",
    image: aManCalledOttoLandscape,
    rating: "4.6",
  },
  { id: "avatar", title: "Avatar", image: avatarPreview, rating: "4.7" },
  { id: "fast-x", title: "Fast X", image: fastXPreview, rating: "4.5" },
];

export const TOP_RATING = [
  {
    id: "suzume",
    title: "Suzume",
    image: suzume,
    previewImage: suzumePreview,
    rating: "4.8",
    ageRating: "13+",
    duration: "2j 2m",
    genres: ["Adventure", "Fantasy"],
  },
  {
    id: "jurassic-world",
    title: "Jurassic World Dominion",
    image: jurassicWorld,
    previewImage: jurassicWorldPreview,
    rating: "4.7",
    ageRating: "13+",
    duration: "2j 27m",
    genres: ["Action", "Sci-Fi"],
  },
  {
    id: "sonic-2",
    title: "Sonic the Hedgehog 2",
    image: sonic,
    previewImage: sonicPreview,
    rating: "4.6",
    ageRating: "SU",
    duration: "2j 2m",
    genres: ["Action", "Adventure"],
  },
  {
    id: "all-of-us-are-dead",
    title: "All of Us Are Dead",
    image: allOfUsAreDead,
    previewImage: allOfUsAreDeadLandscape,
    rating: "4.5",
    ageRating: "18+",
    duration: "12 Episode",
    genres: ["Action", "Drama"],
  },
  {
    id: "big-hero-6",
    title: "Big Hero 6",
    image: bigHeroSix,
    previewImage: bigHeroSixPreview,
    rating: "4.5",
    ageRating: "SU",
    duration: "1j 42m",
    genres: ["Animation", "Action"],
  },
  {
    id: "avatar-top",
    title: "Avatar",
    image: avatar,
    previewImage: avatarPreview,
    rating: "4.7",
    ageRating: "13+",
    duration: "2j 42m",
    genres: ["Action", "Fantasy"],
  },
  {
    id: "black-adam",
    title: "Black Adam",
    image: blackAdam,
    previewImage: blackAdamPreview,
    rating: "4.5",
    ageRating: "13+",
    duration: "2j 5m",
    genres: ["Action", "Fantasy"],
  },
  {
    id: "spider-man-miles",
    title: "Spider-Man: Across the Spider-Verse",
    image: spiderManMiles,
    previewImage: spiderManMilesPreview,
    rating: "4.8",
    ageRating: "13+",
    duration: "2j 20m",
    genres: ["Animation", "Action"],
  },
];

export const TRENDING_MOVIES = [
  {
    id: "quantumania",
    title: "Ant-Man and The Wasp: Quantumania",
    image: quantumania,
    previewImage: quantumaniaPreview,
    rating: "4.4",
    ageRating: "13+",
    duration: "2j 5m",
    genres: ["Action", "Adventure"],
    badge: "Top 10",
  },
  {
    id: "guardians",
    title: "Guardians of the Galaxy",
    image: guardians,
    previewImage: guardiansPreview,
    rating: "4.7",
    ageRating: "13+",
    duration: "2j 1m",
    genres: ["Action", "Sci-Fi"],
    badge: "Top 10",
  },
  {
    id: "little-mermaid",
    title: "The Little Mermaid",
    image: littleMermaid,
    previewImage: littleMermaidPreview,
    rating: "4.3",
    ageRating: "SU",
    duration: "2j 15m",
    genres: ["Adventure", "Family"],
    badge: "Top 10",
  },
  {
    id: "missing",
    title: "Missing",
    image: missing,
    previewImage: missingPreview,
    rating: "4.4",
    ageRating: "13+",
    duration: "1j 51m",
    genres: ["Mystery", "Thriller"],
    badge: "Top 10",
  },
  {
    id: "tomorrow-war",
    title: "The Tomorrow War",
    image: tomorrowWar,
    previewImage: tomorrowWarPreview,
    rating: "4.5",
    ageRating: "18+",
    duration: "2j 18m",
    genres: ["Action", "Sci-Fi"],
    badge: "Top 10",
  },
  {
    id: "fast-x-trending",
    title: "Fast X",
    image: fastX,
    previewImage: fastXPreview,
    rating: "4.5",
    ageRating: "13+",
    duration: "2j 21m",
    genres: ["Action", "Crime"],
    badge: "Top 10",
  },
  {
    id: "shazam-trending",
    title: "Shazam! Fury of the Gods",
    image: shazam,
    previewImage: shazamPreview,
    rating: "4.2",
    ageRating: "13+",
    duration: "2j 10m",
    genres: ["Action", "Fantasy"],
    badge: "Top 10",
  },
  {
    id: "megan-trending",
    title: "M3GAN",
    image: megan,
    previewImage: meganPreview,
    rating: "4.3",
    ageRating: "18+",
    duration: "1j 42m",
    genres: ["Horror", "Sci-Fi"],
    badge: "Top 10",
  },
];

export const NEW_RELEASES = [
  {
    id: "duty-after-school",
    title: "Duty After School",
    image: dutyAfterSchool,
    previewImage: dutyAfterSchoolLandscape,
    rating: "4.8",
    ageRating: "18+",
    duration: "10 Episode",
    genres: ["Action", "Sci-Fi"],
    badge: "Episode Baru",
  },
  {
    id: "blue-lock-new",
    title: "Blue Lock",
    image: blueLockPortrait,
    previewImage: blueLockLandscape,
    rating: "4.7",
    ageRating: "13+",
    duration: "24 Episode",
    genres: ["Anime", "Sport"],
    badge: "Episode Baru",
  },
  {
    id: "suzume-new",
    title: "Suzume",
    image: suzume,
    previewImage: suzumePreview,
    rating: "4.8",
    ageRating: "13+",
    duration: "2j 2m",
    genres: ["Adventure", "Fantasy"],
    badge: "Top 10",
  },
  {
    id: "jurassic-new",
    title: "Jurassic World Dominion",
    image: jurassicWorld,
    previewImage: jurassicWorldPreview,
    rating: "4.7",
    ageRating: "13+",
    duration: "2j 27m",
    genres: ["Action", "Sci-Fi"],
    badge: "Top 10",
  },
  {
    id: "sonic-new",
    title: "Sonic the Hedgehog 2",
    image: sonic,
    previewImage: sonicPreview,
    rating: "4.6",
    ageRating: "SU",
    duration: "2j 2m",
    genres: ["Action", "Adventure"],
    badge: "Episode Baru",
  },
  {
    id: "alice-new",
    title: "Alice in Borderland",
    image: aliceInBorderland,
    previewImage: aliceInBorderlandPreview,
    rating: "4.6",
    ageRating: "18+",
    duration: "8 Episode",
    genres: ["Action", "Thriller"],
    badge: "Episode Baru",
  },
  {
    id: "happiness-new",
    title: "Happiness",
    image: happiness,
    previewImage: happinessPreview,
    rating: "4.5",
    ageRating: "18+",
    duration: "12 Episode",
    genres: ["Drama", "Thriller"],
    badge: "Episode Baru",
  },
  {
    id: "dilan-new",
    title: "Dilan 1991",
    image: dilan,
    previewImage: dilanPreview,
    rating: "4.4",
    ageRating: "13+",
    duration: "2j 1m",
    genres: ["Drama", "Romance"],
    badge: "Top 10",
  },
  {
    id: "all-of-us-new",
    title: "All of Us Are Dead",
    image: allOfUsAreDead,
    previewImage: allOfUsAreDeadLandscape,
    rating: "4.5",
    ageRating: "18+",
    duration: "12 Episode",
    genres: ["Action", "Drama"],
    badge: "Episode Baru",
  },
  {
    id: "ted-lasso-new",
    title: "Ted Lasso",
    image: tedLasso,
    previewImage: tedLassoPreview,
    rating: "4.4",
    ageRating: "13+",
    duration: "12 Episode",
    genres: ["Comedy", "Drama", "Britania"],
    badge: "Episode Baru",
  },
  {
    id: "my-perfect-stranger-new",
    title: "My Perfect Stranger",
    image: korea,
    previewImage: koreaPreview,
    rating: "4.6",
    ageRating: "13+",
    duration: "16 Episode",
    genres: ["Drama", "Mystery", "KDrama"],
    badge: "Episode Baru",
  },
  {
    id: "my-hero-academia-new",
    title: "My Hero Academia",
    image: myHeroAcademia,
    previewImage: myHeroAcademiaPreview,
    rating: "4.7",
    ageRating: "13+",
    duration: "25 Episode",
    genres: ["Anime", "Action"],
    badge: "Episode Baru",
  },
  {
    id: "baymax-new",
    title: "Baymax!",
    image: baymax,
    previewImage: baymaxPreview,
    rating: "4.6",
    ageRating: "SU",
    duration: "6 Episode",
    genres: ["Animation", "Family", "Anime"],
    badge: "Episode Baru",
  },
  {
    id: "avatar-new",
    title: "Avatar",
    image: avatar,
    previewImage: avatarPreview,
    rating: "4.7",
    ageRating: "13+",
    duration: "2j 42m",
    genres: ["Action", "Fantasy"],
    badge: "Top 10",
  },
  {
    id: "black-adam-new",
    title: "Black Adam",
    image: blackAdam,
    previewImage: blackAdamPreview,
    rating: "4.5",
    ageRating: "13+",
    duration: "2j 5m",
    genres: ["Action", "Fantasy"],
    badge: "Top 10",
  },
  {
    id: "spider-man-miles-new",
    title: "Spider-Man: Across the Spider-Verse",
    image: spiderManMiles,
    previewImage: spiderManMilesPreview,
    rating: "4.8",
    ageRating: "13+",
    duration: "2j 20m",
    genres: ["Animation", "Action"],
    badge: "Top 10",
  },
  {
    id: "shazam-new",
    title: "Shazam! Fury of the Gods",
    image: shazam,
    previewImage: shazamPreview,
    rating: "4.2",
    ageRating: "13+",
    duration: "2j 10m",
    genres: ["Action", "Fantasy"],
    badge: "Top 10",
  },
  {
    id: "megan-new",
    title: "M3GAN",
    image: megan,
    previewImage: meganPreview,
    rating: "4.3",
    ageRating: "18+",
    duration: "1j 42m",
    genres: ["Horror", "Sci-Fi"],
    badge: "Top 10",
  },
];

const SERIES_IDS = new Set([
  "alice-in-borderland",
  "all-of-us-are-dead",
  "blue-lock",
  "duty-after-school",
  "happiness",
  "my-perfect-stranger",
  "ted-lasso",
  "baymax",
  "my-hero-academia",
]);

const ADDITIONAL_SERIES = [
  {
    title: "My Perfect Stranger",
    image: korea,
    previewImage: koreaPreview,
    rating: "4.6",
    ageRating: "13+",
    duration: "16 Episode",
    genres: ["Drama", "Mystery", "KDrama"],
    badge: "Episode Baru",
  },
  {
    title: "Ted Lasso",
    image: tedLasso,
    previewImage: tedLassoPreview,
    rating: "4.4",
    ageRating: "13+",
    duration: "12 Episode",
    genres: ["Comedy", "Drama", "Britania"],
    badge: "Episode Baru",
  },
];

export const getCatalogId = (movie) =>
  movie.catalogId ??
  movie.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export const getCatalogType = (movie) =>
  SERIES_IDS.has(getCatalogId(movie)) ? "series" : "film";

const catalogById = new Map();

[
  ...NEW_RELEASES,
  ...TOP_RATING,
  ...TRENDING_MOVIES,
  ...CONTINUE_WATCHING,
  ...ADDITIONAL_SERIES,
].forEach((movie) => {
  const id = getCatalogId(movie);
  if (!catalogById.has(id)) {
    catalogById.set(id, { ...movie, id, type: getCatalogType(movie) });
  }
});

export const CATALOG = Array.from(catalogById.values());
export const SERIES = CATALOG.filter((movie) => movie.type === "series");
export const FILMS = CATALOG.filter((movie) => movie.type === "film");

export const GENRES = [
  "Aksi",
  "Anak-anak",
  "Anime",
  "Britania",
  "Drama",
  "Fantasi Ilmiah & Fantasi",
  "Kejahatan",
  "KDrama",
  "Komedi",
  "Petualangan",
  "Perang",
  "Romantis",
  "Sains & Alam",
  "Thriller",
];

const GENRE_MATCHERS = {
  Aksi: ["action"],
  "Anak-anak": ["family", "animation"],
  Anime: ["anime", "animation"],
  Britania: ["britain", "british"],
  Drama: ["drama"],
  "Fantasi Ilmiah & Fantasi": ["sci-fi", "fantasy"],
  Kejahatan: ["crime"],
  KDrama: ["kdrama", "korea"],
  Komedi: ["comedy"],
  Petualangan: ["adventure"],
  Perang: ["war"],
  Romantis: ["romance"],
  "Sains & Alam": ["science", "nature"],
  Thriller: ["thriller"],
  Misteri: ["mystery"],
};

export const filterMoviesByGenre = (movies, genre) => {
  if (!genre) return movies;
  const matchers = GENRE_MATCHERS[genre] ?? [genre.toLowerCase()];
  return movies.filter((movie) =>
    movie.genres?.some((movieGenre) =>
      matchers.some((matcher) => movieGenre.toLowerCase().includes(matcher)),
    ),
  );
};

export const getMovieDetails = (movie) => {
  if (getCatalogId(movie) === "guardians-of-the-galaxy") {
    return {
      ...movie,
      displayTitle: "Guardians of the Galaxy Vol. 3",
      releaseYear: "2023",
      duration: "2j 29m",
      description:
        "Masih goyah karena kehilangan Gamora, Peter Quill mengumpulkan timnya untuk mempertahankan alam semesta dan salah satu dari mereka - sebuah misi yang bisa berarti akhir dari Penjaga jika tidak berhasil.",
      cast: "Chris Pratt, Chukwudi Iwuji, Bradley Cooper, dan lain-lain",
      filmmaker: "James Gunn",
    };
  }

  if (getCatalogType(movie) === "series") {
    return {
      ...movie,
      releaseYear: movie.releaseYear ?? "2023",
      description:
        movie.description ??
        `Ikuti kisah ${movie.title} dalam series pilihan CHILL yang penuh kejutan.`,
      cast: movie.cast ?? "Informasi pemeran belum tersedia",
      filmmaker: movie.filmmaker ?? "Informasi pembuat belum tersedia",
    };
  }

  return {
    ...movie,
    releaseYear: movie.releaseYear ?? "2023",
    description:
      movie.description ??
      `Nikmati ${movie.title}, salah satu film pilihan yang tersedia di katalog CHILL.`,
    cast: movie.cast ?? "Informasi pemeran belum tersedia",
    filmmaker: movie.filmmaker ?? "Informasi pembuat belum tersedia",
  };
};

export const SERIES_HERO = {
  title: "Happiness",
  description:
    "Hidup untuk bertahan hidup di dalam sebuah apartemen yang dipenuhi zombie. Virus hanya terdapat di dalam area apartemen tersebut dan tidak menyebar ke luar kawasan.",
  ageRating: "18+",
  backdropImage: happinessPreview,
};

export const FILM_HERO = {
  title: "Avatar: The Way of Water",
  catalogId: "avatar",
  description:
    "Jake Sully dan keluarganya menghadapi ancaman baru di Pandora. Bersama bangsa Na'vi, mereka berjuang melindungi rumah dan orang-orang yang mereka cintai.",
  ageRating: "18+",
  backdropImage: avatarPreview,
};

const findCatalogMovie = (title) =>
  CATALOG.find((movie) => getCatalogId(movie) === title);

const landscapeMovies = (titles) =>
  titles.map((title) => {
    const movie = findCatalogMovie(title);
    return { ...movie, image: movie.previewImage ?? movie.image };
  });

export const SERIES_CONTINUE_WATCHING = landscapeMovies([
  "alice-in-borderland",
  "my-perfect-stranger",
  "all-of-us-are-dead",
  "ted-lasso",
  "duty-after-school",
  "blue-lock",
  "happiness",
]);
export const SERIES_PROMOTED = SERIES;
export const SERIES_TOP_RATING = SERIES.slice().sort(
  (first, second) => Number(second.rating) - Number(first.rating),
);
export const SERIES_TRENDING = SERIES.slice().reverse();
export const SERIES_NEW_RELEASES = NEW_RELEASES.filter(
  (movie) => getCatalogType(movie) === "series",
);

export const FILM_CONTINUE_WATCHING = landscapeMovies([
  "don-t-look-up",
  "avatar",
  "missing",
  "a-man-called-otto",
  "suzume",
  "jurassic-world-dominion",
  "sonic-the-hedgehog-2",
  "dilan-1991",
]);
export const FILM_PROMOTED = FILMS.slice(0, 8);
export const FILM_TOP_RATING = TOP_RATING.filter(
  (movie) => getCatalogType(movie) === "film",
);
export const FILM_TRENDING = TRENDING_MOVIES.filter(
  (movie) => getCatalogType(movie) === "film",
);
export const FILM_NEW_RELEASES = NEW_RELEASES.filter(
  (movie) => getCatalogType(movie) === "film",
);
