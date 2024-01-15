import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styled from "styled-components";
import arrow from "../assets/images/icons/swiper-arrow.svg";
import { Data } from "../constants/data";
import type { DataItemType } from "../constants/data";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const SwiperBlock: FC = () => {
  const activeCircle = useSelector((state: RootState) => state.activeCircle);

  useGSAP(() => {
    gsap.fromTo(".swiper", { opacity: 0 }, { opacity: 1, duration: 2 });
  }, [activeCircle]);

  return (
    <SwiperStyle>
      <button className="button button-prev">
        <img src={arrow} alt="arrow left" />
      </button>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        modules={[Navigation]}
        navigation={{
          nextEl: ".button-next",
          prevEl: ".button-prev",
        }}
        breakpoints={breakpoints}
      >
        {Data[activeCircle.value].scope.map((el: DataItemType, i: number) => (
          <SwiperSlide key={i}>
            <h3>{el.year}</h3>
            <p>{el.content}</p>
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="button button-next">
        <img src={arrow} alt="arrow right" />
      </button>
    </SwiperStyle>
  );
};

const breakpoints = {
  100: {
    slidesPerView: 1,
    spaceBetween: 25,
  },
  500: {
    slidesPerView: 2,
    spaceBetween: 35,
  },
  1080: {
    slidesPerView: 3,
    spaceBeetwen: 80,
  },
};

const SwiperStyle = styled.div`
  position: relative;

  h3 {
    color: var(--Date-blue);
    font-family: "Bebas Neue";
    font-size: max(2.5rem, 16px);
    line-height: 120%;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 15px;
  }

  p {
    color: var(--Black-blue);
    font-size: max(2rem, 14px);
    line-height: max(3rem, 20px);
  }

  button {
    position: absolute;
    width: max(4rem, 30px);
    height: max(4rem, 30px);
    background: url(arrow) no-repeat;
    top: 50%;
    transform: translateY(-50%);
    transition: all 500ms linear;
    background-color: var(--Primary-color);
    border-radius: 50%;
    box-shadow: 0px 0px 15px rgba(56, 119, 238, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;

    &:disabled {
      opacity: 0;
      cursor: auto;
    }

    &:first-child {
      left: -6rem;

      img {
        transform: rotate(180deg);
      }
    }

    &:last-child {
      right: -6rem;
    }
  }

  @media (max-width: 650px) {
    button {
      display: none;
    }
  }

  @media (max-width: 500px) {
    .swiper {
      padding-right: 110px;
      margin-right: -20px;
    }

    .swiper-slide {
      opacity: 0.4 !important;
    }

    .swiper-slide-active {
      opacity: 1 !important;
    }
  }
`;

export default SwiperBlock;
