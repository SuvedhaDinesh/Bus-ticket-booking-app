import { SeatBookingContext } from "../../SeatBookingContext";
import { useContext } from "react";
import optimizeSequence from "../../helpers/optimizeSequence";

const BookingList = () => {
  const { bookingDetails } = useContext(SeatBookingContext);
  const optimizedBookingDetails = optimizeSequence(bookingDetails);
  return (
    <table>
      <tr>
        <th>Booking ID</th>
        <th>Seats</th>
        <th>Mobile</th>
      </tr>
      {optimizedBookingDetails.map((booking) => {
        const { id, seats, mobile } = booking;
        return (
          <tr>
            <td>{id}</td>
            <td>{seats.join(",")}</td>
            <td>{mobile}</td>
          </tr>
        );
      })}
    </table>
  );
};

export default BookingList;
