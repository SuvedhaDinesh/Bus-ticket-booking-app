import styled from "styled-components";
import { useContext, useState } from "react";
import { SeatBookingContext } from "../../SeatBookingContext";
import {
  getSelectedSeats,
  getBookedSeatsData,
  getBookingDetails
} from "../../helpers/seatData";
import { Link } from "react-router-dom";

const StyledBookingInputContainer = styled.div`
  padding-top: 30px;
`;

const StyledList = styled.li`
  list-style: none;
  padding-top: 20px;
`;

const StyledElementsContainer = styled.div`
  margin: 20px;
`;
const BookingInputContainer = () => {
  const [date, setDate] = useState();
  const [mobile, setMobile] = useState();
  const {
    seatData,
    setSeatData,
    bookingDetails,
    setBookingDetails
  } = useContext(SeatBookingContext);
  const selectedSeats = getSelectedSeats(seatData);
  const selectedSeatNames = selectedSeats.map((seat) => {
    return seat.name;
  });
  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const handleMobileKeyUp = (e) => {
    setMobile(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedSeats <= 0) {
      alert("Please select atleast 1 seat");
      return;
    }
    const updatedSeatData = getBookedSeatsData(seatData);
    setSeatData(updatedSeatData);
    const bookingData = getBookingDetails({ selectedSeatNames, mobile, date });
    setBookingDetails([...bookingDetails, bookingData]);
    alert(
      `Booking Details: \n Booking ID: ${
        bookingData.id
      } \n Seat(s):${selectedSeatNames.join(
        ","
      )} \n Mobile:${mobile} \n Date:${date}`
    );
  };

  return (
    <>
      <StyledBookingInputContainer>
        <StyledElementsContainer>
          Selected Seats : {selectedSeatNames.join(",")}
        </StyledElementsContainer>

        <form onSubmit={handleSubmit}>
          <StyledElementsContainer>
            <span>Date:&nbsp;&nbsp;</span>
            <span>
              <input
                type="Date"
                min={new Date().toISOString().split("T")[0]}
                required
                onChange={handleDate}
              />
            </span>
          </StyledElementsContainer>
          <StyledElementsContainer>
            <span>Mobile No:&nbsp;&nbsp;</span>
            <span>
              <input
                type="tel"
                placeholder="9872345670"
                required
                onKeyUp={handleMobileKeyUp}
                pattern="[6-9]{1}[0-9]{9}"
              />
            </span>
          </StyledElementsContainer>
          <div>
            <button type="submit">Book Seats</button>
          </div>
        </form>

        <StyledList>
          <Link to="/booking-list">View Bookings List</Link>
        </StyledList>
      </StyledBookingInputContainer>
    </>
  );
};

export default BookingInputContainer;
