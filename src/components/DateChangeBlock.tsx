import { FC } from "react";
import arrow from "../assets/images/icons/date-change-arrow.svg";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { decrement, increment } from "../store/slices/activeCircleSlice";
import { Data } from "../constants/data";

const DateChangeBlock: FC = () => {
  const activeCircle = useSelector((state: RootState) => state.activeCircle);
  const dispatch = useDispatch();

  return (
    <DateChangeBlockStyle>
      <p>
        0{activeCircle.value + 1}/0{Data.length}
      </p>

      <div>
        <button
          onClick={() => dispatch(decrement())}
          disabled={activeCircle.value === 0}
        >
          <img src={arrow} alt="arrow left" />
        </button>
        <button
          onClick={() => dispatch(increment())}
          disabled={activeCircle.value === Data.length - 1}
        >
          <img src={arrow} alt="arrow right" />
        </button>
      </div>
    </DateChangeBlockStyle>
  );
};

const DateChangeBlockStyle = styled.div`
  margin-bottom: 56px;

  p {
    color: var(--Black-blue);
    font-size: 14px;
    font-weight: 400;
    margin-bottom: max(2rem, 10px);
  }

  div {
    display: flex;
    gap: 2rem;

    button {
      width: max(5rem, 25px);
      height: max(5rem, 25px);

      img {
        width: 100%;
        height: 100%;
      }

      &:disabled {
        opacity: 0.5;
        cursor: default;
      }

      &:last-child {
        img {
          transform: rotate(180deg);
        }
      }
    }
  }

  @media (max-width: 1200px) {
    margin-bottom: 36px;
  }

  @media (max-width: 975px) {
    margin-bottom: 20px;
  }

  @media (max-width: 650px) {
    position: absolute;
    bottom: 0;
  }
`;

export default DateChangeBlock;
