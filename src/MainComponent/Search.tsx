import SearchInputAbs from "./SearchInputAbs";
import LocationMap from "./LocationMap";
import PastBooking from "./PastBooking";

const SearchPage = () => {
  return (
    <>
      <LocationMap />
      <SearchInputAbs />
      <PastBooking/>
      {/* <div className="place-items-center">
        <p className="text-2xl font-bold font-[ambit] p-3"> Past Bookings</p>
        <div className="grid grid-cols-3 gap-4 place-items-center">
        {results.map((listing) => (
          <div key={listing.id}>
            <CardsGrid list={listing} />
          </div>
        ))}
      </div>
      </div> */}
    </>
  );
};
export default SearchPage;
