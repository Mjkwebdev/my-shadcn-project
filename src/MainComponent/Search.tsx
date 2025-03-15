import SearchInputAbs from "./SearchInputAbs";
import LocationMap from "./LocationMap";
import PastBooking from "./PastBooking";
import { useSearchParams } from "react-router-dom";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const dateParam = searchParams.get("date");
  const guestsParam = searchParams.get("guests");
  return (
    <>
      <LocationMap />
      <SearchInputAbs dateParam={dateParam} guestsParam={guestsParam} />
      <p className="text-2xl font-bold font-[ambit] p-3"> Beaches</p>
      <PastBooking />
    </>
  );
};
export default SearchPage;
