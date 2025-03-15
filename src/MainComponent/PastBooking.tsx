import CardsGrid from "./CardsGrid";
import {  listings } from "./data";
const PastBooking = () => {
  return (
    <div>
      <p className="text-2xl font-bold font-[ambit] p-3"> Past Bookings</p>
      <div className="grid grid-cols-3 gap-4 2xl:gap-8">
        {listings.map((listing) => (
          <div key={listing.id}>
            <CardsGrid list={listing} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PastBooking;
