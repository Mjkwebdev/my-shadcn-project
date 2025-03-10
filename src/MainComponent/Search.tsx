import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CardsGrid from "./CardsGrid";
import { Listing, listings } from "./data";
import SearchInputAbs from "./SearchInputAbs";
import LocationMap from "./LocationMap";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const [results, setResults] = useState<Listing[]>([]);

  useEffect(() => {
    const dateParam = searchParams.get("date");
    const guestsParam = searchParams.get("guests");

    const selectedDate = dateParam ? new Date(dateParam) : null;
    const maxGuests = guestsParam ? parseInt(guestsParam) : 0;

    const filteredResults = listings.filter((listing) => {
      const isDateAvailable =
        !selectedDate || listing.dateAvailable >= selectedDate;
      const isGuestsAllowed = !maxGuests || listing.maxGuests >= maxGuests;
      return isDateAvailable && isGuestsAllowed;
    }) as Listing[];
    setResults(filteredResults);
  }, [searchParams]);
  return (
    <>
      <LocationMap/>
      <SearchInputAbs />
    <div className="container ml-3 h-446px w-1188px place-items-center">
      <p className="text-2xl font-bold p-3"> Past Bookings</p>
      <div className="grid grid-cols-3 gap-4 place-items-center">
        {results.map((listing) => (
          <div key={listing.id}>
            <CardsGrid list={listing} />
          </div>
        ))}
      </div>
    </div>
  
    </>
  );
};
export default SearchPage;
