import { FC } from "react";
import SwiperBlock from "./components/SwiperBlock";
import styled, { createGlobalStyle } from "styled-components";
import "./assets/styles/main.css";
import CircleBlock from "./components/CircleBlock";
import DateChangeBlock from "./components/DateChangeBlock";
import YearsBlock from "./components/YearsBlock";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const App: FC = () => {
  useGSAP(() => {
    gsap.fromTo(
      "div",
      { x: 50, opacity: 0 },
      { x: 0, opacity: 1, duration: 1 }
    );
    gsap.fromTo("h1", { opacity: 0, x: 20 }, { opacity: 1, x: 0, delay: 1 });
  });

  return (
    <>
      <Global />
      <div className="wrapper">
        <MainStyle>
          <div className="container">
            <div className="container__inner">
              <h1>Исторические данные</h1>
              <YearsBlock />
              <CircleBlock />
              <DateChangeBlock />
              <SwiperBlock />
            </div>
          </div>
        </MainStyle>
      </div>
    </>
  );
};

const Global = createGlobalStyle`
html {
	font-size: 10px;
}
body {
	font-family: "PT Sans";
	font-weight: 700;
	background-color: #F4F5F9;
}
main {
	flex-grow: 1;
}
.container {
	max-width: 1660px;
	margin: 0 auto;
	padding: 0 30px;
	overflow-x: hidden;
}
.wrapper {
	min-height: 100vh;
	display: flex;
	flex-direction: column;
}

@media (max-width: 1200px) {
  html {
    font-size: 9px;
  }
}

@media (max-width: 975px) {
  html {
    font-size: 7px;
  }
}

@media (max-width: 810px) {
  html,
  body {
    font-size: 6px;
  }
	.container {
		padding: 0 20px;
	}
}

@media (max-width: 650px) {
	html,
  body {
    font-size: 4px;
  }
}

@media (max-width: 550px) {
  html,
  body {
    font-size: 2px;
  }
}
`;

const MainStyle = styled.main`
  height: 100vh;

  .container__inner {
    flex-direction: column;
    border-left: 1px solid;
    border-right: 1px solid;
    border-color: rgba(66, 86, 122, 0.1);
    padding: 17rem 8rem 10.4rem;
    max-height: 1200px;
    max-width: 1600px;
    position: relative;

    &::before {
      content: "";
      display: block;
      background-color: var(--Black-blue);
      width: 2px;
      height: 100%;
      position: absolute;
      top: 0;
      left: 50%;
      opacity: 0.1;
    }

    h1 {
      display: flex;
      color: var(--Black-blue);
      font-size: max(5.6rem, 20px);
      font-style: normal;
      line-height: 120%;
      width: 35.3rem;
      position: relative;

      &::before {
        content: "";
        background: linear-gradient(to bottom, #3877ee, #ef5da8);
        min-width: 6px;
        min-height: 100%;
        position: absolute;
        left: -8rem;
      }
    }
  }

  @media (max-width: 650px) {
    .container__inner {
      padding: 59px 0;
      border: none;
      height: 100%;

      &:before {
        display: none;
      }

      h1 {
        font-size: 20px;
        line-height: 120%;
        max-width: 123px;

        &:before {
          display: none;
        }
      }

      h2 {
        letter-spacing: -1.12px;
        padding: 56px 0;
        border-bottom: 1px solid #c7cdd9;
        margin-bottom: 20px;
        gap: 30px;

        &::after {
          display: none;
        }
      }
    }
  }
`;

export default App;
