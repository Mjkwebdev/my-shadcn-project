import { useSearchParams } from "react-router-dom";

import { useEffect, useState } from "react";
interface Listing {
    [x: string]: any;
    id: string;
    title: string;
    image: string;
    location: string;
    dateAvailable:  Date;
    maxGuest: number;
}

const listings: Listing[]= [{
    id:"1",
    title: "Cala Pulpo",
    image:"src/assets/16d66abc-9a68-4a46-9243-25df762573b6-img.webp",
    location:"Karachi",
    dateAvailable: new Date("2024-04-10"),
    maxGuest: 4,
},
{
    id:"2",
    title: "Cala Pulpo",
    image:"src/assets/16d66abc-9a68-4a46-9243-25df762573b6-img.webp",
    location:"Islamabad",
    dateAvailable: new Date("2024-04-10"),
    maxGuest: 4,
},
{
    id:"3",
    title: "Cala Pulpo",
    image:"src/assets/16d66abc-9a68-4a46-9243-25df762573b6-img.webp",
    location:"Lahore",
    dateAvailable: new Date("2024-04-10"),
    maxGuest: 4,
}
];

const SearchPage = () => {
    const [searchParams] = useSearchParams();
    const [results, setResults] = useState<Listing[]>([]);
  
    useEffect(() => {
      const dateParam = searchParams.get('date');
      const guestsParam = searchParams.get('guests');
  
      const selectedDate = dateParam ? new Date(dateParam) : null;
      const maxGuests = guestsParam ? parseInt(guestsParam) : 0;
  
      const filteredResults = listings.filter((listing) => {
        const isDateAvailable = !selectedDate || listing.dateAvailable >= selectedDate;
        const isGuestsAllowed = !maxGuests || listing.maxGuests >= maxGuests;
        return isDateAvailable && isGuestsAllowed;
      }) as Listing[];
      setResults(filteredResults);
    }, [searchParams]);
    return(
        <div>
      <h1>Search Results</h1>
      {results.map((listing) => (
        <div key={listing.id}>
          <img src={listing.image} alt={listing.title} /> {/* Display the image */}
          {listing.title}
          {listing.location}
          {listing.maxGuest}
        </div>
      ))}
    </div>
    )

}
export default SearchPage