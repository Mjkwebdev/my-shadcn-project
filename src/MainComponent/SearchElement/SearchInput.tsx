import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import Searchbox from "./Searchbox";
import SelectBox from "./SelectBox";
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
const SearchInput = () => {
  return (
    <div className="absolute top-[24.5rem] left-[3rem] flex rounded-full w-[41rem] h-[3.75rem] bg-white">
      <Searchbox/>
       <div className="bg-white flex items-center focus:outline-none">
       <SelectBox maxGuest={9}/>
    <Link to="/search" > 
   <Button variant={"link"} className="bg-[#F8F8F5] rounded-full h-12 w-12"> <MagnifyingGlassIcon className="h-5 w-full text-[#AD8330]" />  </Button> 
   </Link> 
        </div>
      </div>
  );
};

export default SearchInput;
