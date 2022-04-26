import { SeatBookingContext } from "../../SeatBookingContext";
import Seat from "./Seat";
import { useContext } from "react";
import { getUpdatedSeatStatus, getSelectedSeats } from "../../helpers/seatData";

const SeatList = ({ seatInfo }) => {
  const { seatData, setSeatData } = useContext(SeatBookingContext);
  const handleClick = (e) => {
    const seatID = e.target.getAttribute("data-seat-id");
    const updatedSeatsData = getUpdatedSeatStatus(seatData, seatID);
    const selectedSeatsData = getSelectedSeats(updatedSeatsData);
    if (selectedSeatsData.length > 6) {
      alert("Maximum allowed 6 seats");
      return;
    }
    setSeatData(updatedSeatsData);
  };

  return (
    <div onClick={handleClick}>
      {seatInfo.map((seat) => {
        return <Seat key={seat.id} seat={seat} />;
      })}
    </div>
  );
};

export default SeatList;
