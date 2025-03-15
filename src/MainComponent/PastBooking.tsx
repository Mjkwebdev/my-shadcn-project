import CardsGrid from "./CardsGrid";
import {  listings } from "./data";
const PastBooking = () => {
  return (

     
      <div className="grid grid-cols-3 gap-4 2xl:gap-8">
        {listings.map((listing) => (
          <div key={listing.id}>
            <CardsGrid list={listing} />
          </div>
        ))}
      </div>
  );
};

export default PastBooking;
