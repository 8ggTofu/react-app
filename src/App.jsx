import { useEffect, useState } from "react";
import { TVShowAPI } from "./api/tv-show";
import s from "./style.module.css";

export function App() {
  const [currentTVShow, setCurrentTVShow] = useState();

  async function fetchPopulars() {
    const popularTVShowList = await TVShowAPI.fetchPopulars();
    if ([popularTVShowList.length > 0]) {
      setCurrentTVShow(popularTVShowList[0]);
    }
  }

  useEffect(() => {
    fetchPopulars();
  }, []);

  console.log(currentTVShow)
  return (
    <div className={s.main_container}>
      <div className={s.header}>
        <div className="row">
          <div className="col-4">
            <div>LOGO</div>
            <div>Subtitle</div>
          </div>

          <div className="col-md-12 col-lg-4">
            <input style={{ width: "100%" }} type="text"></input>
          </div>
        </div>
      </div>

      <div className={s.tv_show_detail}>TV Show Detail</div>

      <div className={s.recommended_tv_shows}>Recommended TV Shows</div>
    </div>
  );
}
