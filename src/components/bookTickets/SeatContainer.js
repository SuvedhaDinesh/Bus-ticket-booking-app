import SeatList from "./SeatList";
import styled from "styled-components";
import { SeatBookingContext } from "../../SeatBookingContext";
import { useEffect, useContext } from "react";
import { getSeatsData, splitseatData } from "../../helpers/seatData";

const StyledSeatContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const StyledInnerSeatContainer = styled.div`
  width: 70px;
`;

const SEAT_COUNT = 60;

const SeatContainer = () => {
  const { seatData, setSeatData } = useContext(SeatBookingContext);

  useEffect(() => {
    setTimeout(() => {
      setSeatData(getSeatsData(SEAT_COUNT));
    }, 0);
  }, [setSeatData]);

  const { leftseatsData, rightseatsData } = splitseatData(seatData);

  return (
    <StyledSeatContainer>
      <StyledInnerSeatContainer>
        <SeatList seatInfo={leftseatsData} />
      </StyledInnerSeatContainer>
      <StyledInnerSeatContainer>
        <SeatList seatInfo={rightseatsData} />
      </StyledInnerSeatContainer>
    </StyledSeatContainer>
  );
};

export default SeatContainer;
