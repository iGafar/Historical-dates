import { FC } from "react";
import styled from "styled-components";
import { Data, DataType } from "../constants/data";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { changeState } from "../store/slices/activeCircleSlice";

const CircleBlock: FC = () => {
  const circleDegree = 360 / Data.length;
  const activeCircle = useSelector((state: RootState) => state.activeCircle);
  const dispatch = useDispatch();

  function letsGoCircle(i: number) {
    dispatch(changeState(i));
  }

  return (
    <CircleStyle>
      <ul
        className={"circle"}
        style={{
          transform: `rotate(${-activeCircle.value * circleDegree + 24}deg)`,
        }}
      >
        {Data.map((el: DataType, i: number) => (
          <li
            key={i}
            onClick={() => letsGoCircle(i)}
            className={
              i === activeCircle.value
                ? `circle-item circle-item-active`
                : "circle-item"
            }
            style={{
              transform: `rotate(${circleDegree * i}deg)`,
            }}
          >
            <div
              style={{
                transform: `rotate(${
                  activeCircle.value * circleDegree - 24 - circleDegree * i
                }deg)`,
              }}
            >
              <p className="number">
                <span>{i + 1}</span>
              </p>
              <p className={activeCircle && "text"}>{el.field}</p>
            </div>
          </li>
        ))}
      </ul>
    </CircleStyle>
  );
};

const CircleStyle = styled.div`
  position: absolute;
  width: 53rem;
  height: 53rem;
  top: 495px;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;

  &::before {
    content: "";
    display: block;
    border: 1px solid var(--Black-blue, #42567a);
    opacity: 0.2;
    border-radius: 50%;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
  }

  .circle {
    width: 0;
    position: absolute;
    bottom: 50%;
    left: 50%;
    color: var(--Black-blue);
    font-size: 20px;
    line-height: 30px;
    transition: all 800ms ease-in;

    &-item {
      position: absolute;
      left: 50%;
      bottom: 50%;
      border-radius: 50%;
      transform-origin: 0% 100%;
      padding-bottom: 235px;

      div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 56px;
        height: 56px;
        transition: all 500ms ease-in;

        &:hover {
          cursor: pointer;
        }
      }

      .number {
        font-weight: 400;
        width: 6px;
        height: 6px;
        background: var(--Black-blue);
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 300ms linear;

        span {
          display: none;
        }
      }

      &-active,
      div:hover {
        .number {
          width: 100%;
          height: 100%;
          background-color: #fff;
          border: 1px solid var(--Black-blue);

          span {
            display: block;
          }
        }
      }

      .text {
        position: absolute;
        left: 70px;
        width: max-content;
        visibility: hidden;
        opacity: 0;
      }

      &-active {
        .text {
          transition: all 400ms 1s ease-in;
          visibility: visible;
          opacity: 1;
        }
      }
    }
  }

  @media (max-width: 1200px) {
    top: 445px;

    .circle {
      &-item {
        padding-bottom: 208px;
      }
    }
  }

  @media (max-width: 975px) {
    top: 346px;

    .circle {
      &-item {
        padding-bottom: 155px;
      }
    }
  }

  @media (max-width: 810px) {
    top: 297px;

    .circle {
      &-item {
        padding-bottom: 128px;
      }
    }
  }

  @media (max-width: 650px) {
    top: unset;
    bottom: 0;
    height: auto;
    width: auto;
    margin-bottom: 32px;

    &::before {
      display: none;
    }

    .circle {
      position: static;
      width: 80px;
      display: flex;
      justify-content: space-between;
      transform: rotate(0) !important;

      &-item {
        transform-origin: 50% 50% 0;
        padding-bottom: 0;
        position: static;

        div {
          position: static;
          width: 6px;
          height: 6px;
          border: none;
          opacity: 0.4;
        }

        &-active,
        &:hover {
          div {
            opacity: 1;
            .number {
              background-color: var(--Black-blue);

              span {
                display: none;
              }
            }
          }

          .text {
            display: none;
          }
        }
      }
    }
  }
`;

export default CircleBlock;
