import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import CardsGrid from "./CardsGrid";
import { Listing, listings } from "./data";
const PastBooking = () => {
  const [searchParams] = useSearchParams();
  const [results, setResults] = useState<Listing[]>([]);

  useEffect(() => {
    const dateParam = searchParams.get("date");
    const guestsParam = searchParams.get("guests");

    const selectedDate = dateParam ? new Date(dateParam) : null;
    const maxGuests = guestsParam ? parseInt(guestsParam) : 0;

    const filteredResults = listings.filter((listing) => {
      const isDateAvailable = !selectedDate || listing.dateAvailable;
      const isGuestsAllowed = !maxGuests || listing.maxGuests >= maxGuests;
      return isDateAvailable && isGuestsAllowed;
    }) as Listing[];
    setResults(filteredResults);
  }, [searchParams]);
  return (
    <div className="">
      <p className="text-2xl font-bold font-[ambit] p-3"> Past Bookings</p>
      <div className="grid grid-cols-3 gap-4 2xl:gap-8">
        {results.map((listing) => (
          <div key={listing.id}>
            <CardsGrid list={listing} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PastBooking;
