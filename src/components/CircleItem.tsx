import styled from "styled-components";
import { Data } from "../constants/data";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { changeState } from "../store/slices/activeCircleSlice";

type CircleItemType = {
  index: number;
  text: string;
};

const CircleItem: FC<CircleItemType> = ({ index, text }) => {
  const circleDegree = 360 / Data.length;
  const activeCircle = useSelector((state: RootState) => state.activeCircle);
  const dispatch = useDispatch();

  function letsGoCircle(i: number) {
    dispatch(changeState(i));
  }

  return (
    <CircleItemStyle
      className={`${index === activeCircle.value ? "active" : ""}`}
      onClick={() => letsGoCircle(index)}
      style={{
        transform: `rotate(${circleDegree * index}deg)`,
      }}
    >
      <div
        style={{
          transform: `rotate(${
            activeCircle.value * circleDegree - 24 - circleDegree * index
          }deg)`,
        }}
      >
        <p className="number">
          <span>{index + 1}</span>
        </p>
        <p className={activeCircle && "text"}>{text}</p>
      </div>
    </CircleItemStyle>
  );
};

const CircleItemStyle = styled.li`
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

  &.active,
  div:hover {
    .number {
      width: 100%;
      height: 100%;
      background-color: var(--Main-color);
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

  &.active {
    .text {
      transition: all 400ms 1s ease-in;
      visibility: visible;
      opacity: 1;
    }
  }

  @media (max-width: 1200px) {
    padding-bottom: 208px;
  }

  @media (max-width: 975px) {
    padding-bottom: 155px;
  }

  @media (max-width: 810px) {
    padding-bottom: 128px;
  }

  @media (max-width: 650px) {
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

    &.active,
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
`;

export default CircleItem;
