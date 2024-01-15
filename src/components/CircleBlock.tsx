import { FC } from "react";
import styled from "styled-components";
import { Data, DataType } from "../constants/data";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import CircleItem from "./CircleItem";

const CircleBlock: FC = () => {
  const circleDegree: number = 360 / Data.length;
  const activeCircle = useSelector((state: RootState) => state.activeCircle);

  return (
    <CircleStyle>
      <ul
        style={{
          transform: `rotate(${-activeCircle.value * circleDegree + 24}deg)`,
        }}
      >
        {Data.map((el: DataType, i: number) => (
          <CircleItem
            key={el.field}
            index={i}
            text={el.field}
            circleDegree={circleDegree}
          />
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

  ul {
    width: 0;
    position: absolute;
    bottom: 50%;
    left: 50%;
    color: var(--Black-blue);
    font-size: 20px;
    line-height: 30px;
    transition: all 800ms ease-in;
  }

  @media (max-width: 1200px) {
    top: 445px;
  }

  @media (max-width: 975px) {
    top: 346px;
  }

  @media (max-width: 810px) {
    top: 297px;
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

    ul {
      position: static;
      width: 80px;
      display: flex;
      justify-content: space-between;
      transform: rotate(0) !important;
    }
  }
`;

export default CircleBlock;
