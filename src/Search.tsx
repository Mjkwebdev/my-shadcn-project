import SearchInput from "./MainComponent/SearchElement/Searchbox"
import SearchButton from "./MainComponent/SearchElement/SearchButton"
import SelectBox from "./MainComponent/SearchElement/SelectBox"

const SearchPage = () => (
<>
    <div>Maps</div>
    <div className="flex w-screen h-[3.75rem] bg-[yellow] justify-around">
        <SearchInput />
        <div className="flex items-center hover:outline-none">
            <SelectBox maxGuest={15} />
        </div>
        <div className=" flex items-center">
            <SearchButton />
        </div>
    </div>
</>
    )

export default SearchPage