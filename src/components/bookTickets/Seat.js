import styled from "styled-components";

const StyledSeat = styled.span`
  border: 1px solid black;
  display: inline-block;
  background-color: ${({ status }) =>
    status === "available"
      ? "lightgreen"
      : status === "booked"
      ? "gray"
      : "red"};
  cursor: ${({ status }) => (status !== "booked" ? "pointer" : "auto")};
  text-align: center;
  font-size: 12px;
  font-weight: bold;
  height: 25px;
  width: 25px;
  margin: 3px;
`;

const Seat = ({ seat }) => {
  const { id, name, status } = seat;
  return (
    <StyledSeat data-seat-id={id} status={status}>
      {name}
    </StyledSeat>
  );
};

export default Seat;
