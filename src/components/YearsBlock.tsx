import { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Data } from "../constants/data";
import styled from "styled-components";
import CountUp from "react-countup";

const YearsBlock: FC = () => {
  const animationDuration: number = 2;
  const activeCircle = useSelector((state: RootState) => state.activeCircle);
  const currentScope = Data[activeCircle.value].scope;
  const firstElem = currentScope[0].year;
  const lastElem = currentScope[currentScope.length - 1].year;
  const [firstYear, setFirstYear] = useState<number>(firstElem);
  const [firstYearEnd, setFirstYearEnd] = useState<number>(firstElem);
  const [lastYear, setLastYear] = useState<number>(lastElem);
  const [lastYearEnd, setLastYearEnd] = useState<number>(lastElem);

  useEffect(() => {
    setFirstYearEnd(firstElem);
    setLastYearEnd(lastElem);
    setTimeout(() => {
      setFirstYear(firstElem);
      setLastYear(lastElem);
    }, animationDuration * 1000);
  }, [activeCircle, currentScope, firstElem, lastElem, setFirstYearEnd]);

  return (
    <YearsBlockStyle>
      <CountUp
        start={firstYear}
        end={firstYearEnd}
        useGrouping={false}
        duration={animationDuration}
      />
      <CountUp
        start={lastYear}
        end={lastYearEnd}
        useGrouping={false}
        duration={animationDuration}
      />
    </YearsBlockStyle>
  );
};

const YearsBlockStyle = styled.h2`
  text-align: center;
  font-size: max(20rem, 56px);
  line-height: 16rem;
  letter-spacing: -4px;
  max-width: 100%;
  display: flex;
  justify-content: center;
  gap: 60px;
  margin: 0 auto;
  padding: 9.6rem 0 13.7rem;
  position: relative;

  &::after {
    content: "";
    display: block;
    background-color: var(--Black-blue);
    height: 2px;
    position: absolute;
    top: 48%;
    left: -8rem;
    right: -8rem;
    opacity: 0.1;
  }

  span:first-child {
    color: var(--Iris-100);
  }

  span:last-child {
    color: var(--Fuschia-100);
  }

  @media (max-width: 650px) {
    letter-spacing: -1.12px;
    padding: 56px 0;
    border-bottom: 1px solid #c7cdd9;
    margin-bottom: 20px;
    gap: 30px;

    &::after {
      display: none;
    }
  }
`;

export default YearsBlock;
