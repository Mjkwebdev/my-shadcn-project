import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CardsGrid from "./CardsGrid";
import { Listing, listings } from "./data";

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
    <div className="container">
      <div className="grid">
        {results.map((listing) => (
          <div key={listing.id}>
            <CardsGrid list={listing} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default SearchPage;
