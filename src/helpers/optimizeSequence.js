const getMaxSeatNumber = (booking) => {
  const { seats } = booking;
  const seatIDs = seats.map((seat) => seat.slice(1));
  const maxSeatID = Math.max(...seatIDs);
  return maxSeatID;
};

const optimizeSequence = (bookingDetails) => {
  return bookingDetails.sort(
    (booking1, booking2) =>
      getMaxSeatNumber(booking2) - getMaxSeatNumber(booking1)
  );
};

export default optimizeSequence;
