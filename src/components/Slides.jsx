import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { annoyingData } from "../data";
import berry from "../img/berri.png";
import "../style.css";

export default function Slides() {
  const swiperRef = useRef(null);

  function surprise() {
    const randomAnime = Math.floor(Math.random() * annoyingData.length);
    swiperRef.current.swiper.slideTo(randomAnime);
  }

  return (
    <div className="anime">
      <Swiper
        ref={swiperRef}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper">
        {annoyingData.map((item) => {
          const { id, img, name, affiliation, bounty, devilFruit, bio } = item;
          return (
            <SwiperSlide key={id}>
              <div className="slideContent">
                <div className="contentTop">
                  <img src={img} alt={name} />
                  <div className="title">
                    <h3 className="name">{name}</h3>
                    <span className="affil">{affiliation}</span>
                  </div>
                </div>

                <div className="contentBottom">
                  <p className="bio">{bio}</p>
                  <ul>
                    <li>
                      <span>Bounty:</span>
                      <img alt="Berry - One Piece Currency" src={berry}></img>
                      {bounty}
                    </li>
                    <li>
                      <span>Devil Fruit:</span>
                      {devilFruit}
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="button">
        <button className="btn" onClick={surprise}>
          Surprise Me
        </button>
      </div>
    </div>
  );
}

// function surprise() {
//   const randomAnime = isAnime[Math.floor(Math.random() * isAnime.length)];
//   console.log(isAnime);
//   console.log(randomAnime);

//   // const isDuplicate = isAnime.some((item) => item.id === randomAnime.id);
//   // setIsAnime(!isDuplicate ? [...isAnime, randomAnime] : [...isAnime])

//   setIsAnime([...isAnime, randomAnime]);
// }
