import Footer from "../../components/home/Footer/Footer"
import HeroBanner from "../../components/home/HeroBanner/HeroBanner"
import MovieRow from "../../components/home/MovieRow/MovieRow"
import Navbar from "../../components/home/Navbar/Navbar"
import {
  CONTINUE_WATCHING,
  HERO_DATA,
  NEW_RELEASES,
  TOP_RATING,
  TRENDING_MOVIES,
} from "../../data/mockMovies"
import styles from "./HomePage.module.css"

const HomePage = () => (
  <div className={styles.homePage}>
    <Navbar />
    <main>
      <HeroBanner data={HERO_DATA} />
      <div className={styles.rows}>
        <MovieRow
          id="daftar-saya"
          title="Melanjutkan Tonton Film"
          movies={CONTINUE_WATCHING}
          variant="landscape"
        />
        <MovieRow
          id="series"
          title="Top Rating Film dan Series Hari ini"
          movies={TOP_RATING}
          variant="portrait"
        />
        <MovieRow id="film" title="Film Trending" movies={TRENDING_MOVIES} variant="portrait" />
        <MovieRow id="rilis-baru" title="Rilis Baru" movies={NEW_RELEASES} variant="portrait" />
      </div>
    </main>
    <Footer />
  </div>
)

export default HomePage