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
import happinessPreview from "../assets/poster-horizontal/poster-horizontal-happiness.png";
import dilanPreview from "../assets/poster-horizontal/poster-horizontal-dilan-1991.png";
import batmanPreview from "../assets/poster-horizontal/poster-horizontal-the-batman.png";
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
import happiness from "../assets/poster-vertikal/poster-vertikal-happiness.png";
import dilan from "../assets/poster-vertikal/poster-vertikal-dilan-1991.png";

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
];
